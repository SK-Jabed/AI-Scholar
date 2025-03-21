"use client";
import React from "react";
import Image from "next/image";

const ContactBanner = () => {
  return (
    <div className="relative w-full h-[220px] md:h-[300px] flex items-center justify-center text-center bg-black/80 mb-24">
      <Image
        src="/banners/contact/contact-banner.jpg"
        alt="Contact Banner"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <div className="relative z-10 text-white px-6">
        <h1 className="text-3xl md:text-6xl font-bold">Contact Us</h1>
        <p className="text-sm md:text-2xl mt-2 text-gray-300">Where Innovation Meets Education</p>
      </div>
    </div>
  );
};

export default ContactBanner;