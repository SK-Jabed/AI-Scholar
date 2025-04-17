"use client";

import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export default async function checkout({ courseInfo }) {
  const stripe = await getStripe();

  const response = await fetch("http://localhost:3000/api/stripe/checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ courseInfo }),
  });

  const session = await response.json();

  await stripe.redirectToCheckout({
    sessionId: session.id,
  });
}
