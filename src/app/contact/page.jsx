import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div>
      <div className="p-2 sm:p-8 lg:p-20  about">
        <h1 className="text-2xl md:text-6xl font-semibold md:underline mb-1 ">
          Contact us
        </h1>
        <p className="md:text-3xl ">Where Innovation meets </p>
      </div>
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default Contact;