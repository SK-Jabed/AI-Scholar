"use client";

import React from "react";
import checkout from "@/components/checkout/checkout";

export default function EnrollButton({ pricing }) {
  const handleEnroll = () => {
    checkout({
      courseInfo: [{ price: pricing, quantity: 1 }],
    });
  };

  return (
    <button
      onClick={handleEnroll}
      className="w-full py-2 bg-blue-500 text-white rounded-lg transition"
    >
      Enroll Now
    </button>
  );
}
