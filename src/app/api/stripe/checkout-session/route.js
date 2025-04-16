// app/api/stripe/checkout-session/route.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { courseInfo } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: courseInfo.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: "Course Enrollment",
          },
          unit_amount: parseInt(item.price) * 100,
        },
        quantity: item.quantity,
      })),
      success_url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/cancel`,
    });

    return Response.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Checkout Error:", error.message);
    return new Response(
      JSON.stringify({ error: "Failed to create Stripe session" }),
      { status: 500 }
    );
  }
}
