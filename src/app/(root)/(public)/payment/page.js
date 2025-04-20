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
import { motion } from "framer-motion";
import { Loader2, CheckCircle, BadgeCheck } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import GradientText from "@/components/shared/GradientText";

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
    toast.loading("Processing your payment...", {
      id: "payment-processing",
    });

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/course-progress/${courseDetails.id}`,
          receipt_email: session.user.email,
          payment_method_data: {
            billing_details: {
              name: session?.user?.name || "",
              email: session?.user?.email || "",
            },
          },
        },
        redirect: "if_required",
      });

      if (error) {
        toast.error(error.message, { id: "payment-processing" });
        setMessage(error.message);
        return;
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        const response = await confirmPaymentService({
          paymentIntentId: paymentIntent.id,
          userId: session?.user?.id,
        });

        if (response.success) {
          toast.success(
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Payment successful! Redirecting to your course...</span>
            </div>,
            {
              id: "payment-processing",
              duration: 3000,
            }
          );
          setTimeout(() => {
            router.push(`/course-progress/${courseDetails.id}?payment=success`);
          }, 3000);
        } else {
          toast.error(
            "Payment succeeded but failed to update records. Please contact support.",
            { id: "payment-processing" }
          );
          setMessage(
            "Payment succeeded but failed to update records. Please contact support."
          );
        }
      } else {
        toast.error("Payment processing failed. Please try again.", {
          id: "payment-processing",
        });
        setMessage("Payment processing failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("An unexpected error occurred", { id: "payment-processing" });
      setMessage("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <PaymentElement
          options={{
            layout: "tabs",
            fields: {
              billingDetails: {
                name: "never",
                email: "never",
              },
            },
          }}
          className="[&_.Input]:border [&_.Input]:border-gray-200 [&_.Input]:rounded-lg [&_.Input]:p-3 [&_.Input]:focus:border-blue-500 [&_.Input]:focus:ring-2 [&_.Input]:focus:ring-blue-200 [&_.Input]:transition-all [&_.Input]:duration-200"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading || !stripe || !elements}
        className="w-full mt-6 py-6 text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            Processing Payment
          </span>
        ) : (
          `Pay $${courseDetails?.price || "0"}`
        )}
      </Button>
      {message && (
        <div className="text-red-500 bg-red-50 p-3 rounded-lg">{message}</div>
      )}
    </form>
  );
};

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState("");
  const [courseDetails, setCourseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");
  const { data: session } = useSession();

  useEffect(() => {
    if (courseId && session?.user?.id) {
      const fetchPaymentIntent = async () => {
        try {
          setLoading(true);
          const response = await createPaymentIntentService({
            courseId,
            userId: session.user.id,
          });

          if (response.success) {
            setClientSecret(response.clientSecret);
            setCourseDetails(response.courseDetails);
          } else {
            toast.error("Failed to initialize payment");
          }
        } catch (error) {
          console.error("Error creating payment intent:", error);
          toast.error("Failed to initialize payment");
        } finally {
          setLoading(false);
        }
      };

      fetchPaymentIntent();
    }
  }, [courseId, session?.user?.id]);

  return (
    <Container>
      <Toaster position="top-center" />
      <div className="py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <GradientText>Complete Your Enrollment</GradientText>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure checkout for your learning journey
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Course Summary Card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Card className="border-0 shadow-xl rounded-xl overflow-hidden h-full">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 p-6">
                  <CardTitle className="text-2xl font-bold">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {courseDetails ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                          <Image
                            src={courseDetails.image}
                            alt={courseDetails.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {courseDetails.title}
                          </h3>
                          <p className="text-gray-600">
                            by {courseDetails.instructor}
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <BadgeCheck className="h-5 w-5 text-blue-500" />
                            <span className="text-sm text-gray-500">
                              Lifetime access
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 pt-4 border-t">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Course Price</span>
                          <span className="font-medium">
                            ${courseDetails.price}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Discount</span>
                          <span className="text-green-500">$0.00</span>
                        </div>
                        <div className="flex justify-between pt-4 border-t font-bold text-lg">
                          <span>Total</span>
                          <span>${courseDetails.price}</span>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-6">
                        <h4 className="font-bold text-blue-800 mb-2">
                          What is included:
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Full course access</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Certificate of completion</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Downloadable resources</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div>Failed to load course details</div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Payment Form Card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Card className="border-0 shadow-xl rounded-xl overflow-hidden h-full">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 p-6">
                  <CardTitle className="text-2xl font-bold">
                    Payment Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {clientSecret ? (
                    <Elements stripe={getStripe()} options={{ clientSecret }}>
                      <CheckoutForm
                        clientSecret={clientSecret}
                        courseDetails={courseDetails}
                      />
                    </Elements>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64">
                      <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-4" />
                      <p>Loading payment form...</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </div>
    </Container>
  );
}
