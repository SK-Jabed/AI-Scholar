"use client";

import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createPaymentIntentService, confirmPaymentService } from "@/services";
import Image from "next/image";
import { useSession } from "next-auth/react";
import getStripe from "@/lib/stripe";
import Container from "@/components/shared/Container";

const CheckoutForm = ({ clientSecret, courseDetails }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/course-progress/${courseDetails.id}`,
        },
        redirect: "if_required",
      });

      if (error) {
        setMessage(error.message);
        return;
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        // Call backend to confirm payment and update database
        const response = await confirmPaymentService({
          paymentIntentId: paymentIntent.id,
          userId: session.user.id,
        });

        if (response.success) {
          router.push(`/course-progress/${courseDetails.id}?payment=success`);
        } else {
          setMessage(
            "Payment succeeded but failed to update records. Please contact support."
          );
        }
      } else {
        setMessage("Payment processing failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setMessage("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />
      <Button
        type="submit"
        disabled={isLoading || !stripe || !elements}
        className="w-full mt-4"
      >
        {isLoading ? "Processing..." : "Pay Now"}
      </Button>
      {message && <div className="text-red-500">{message}</div>}
    </form>
  );
};

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [courseDetails, setCourseDetails] = useState(null);
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");
  const { data: session } = useSession();

  useEffect(() => {
    if (courseId && session?.user?.id) {
      const fetchPaymentIntent = async () => {
        try {
          const response = await createPaymentIntentService({
            courseId,
            userId: session.user.id,
          });

          if (response.success) {
            setClientSecret(response.clientSecret);
            setCourseDetails(response.courseDetails);
          }
        } catch (error) {
          console.error("Error creating payment intent:", error);
        }
      };

      fetchPaymentIntent();
    }
  }, [courseId, session?.user?.id]);

  return (
    <Container>

    
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">Complete Your Purchase</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Course Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            {courseDetails ? (
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Image
                    src={courseDetails.image}
                    alt={courseDetails.title}
                    width={484}
                    height={256}
                    className="w-full h-56 object-cover rounded"
                  />
                </div>
                  <div>
                    <h3 className="font-medium">{courseDetails.title}</h3>
                    <p className="text-sm text-gray-500">
                      by {courseDetails.instructor}
                    </p>
                  </div>
                <div className="flex justify-between border-t pt-4">
                  <span>Total</span>
                  <span className="font-bold">${courseDetails.price}</span>
                </div>
              </div>
            ) : (
              <div>Loading course details...</div>
            )}
          </CardContent>
        </Card>

        {/* Payment Form */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            {clientSecret ? (
              <Elements stripe={getStripe()} options={{ clientSecret }}>
                <CheckoutForm
                  clientSecret={clientSecret}
                  courseDetails={courseDetails}
                />
              </Elements>
            ) : (
              <div>Loading payment form...</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
    </Container>
  );
}
