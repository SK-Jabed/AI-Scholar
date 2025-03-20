import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactBanner from "./ContactBanner";
import Container from "@/components/shared/Container";

const Contact = () => {
  return (
    <div>
      <ContactBanner />
      <Container>
        <ContactForm />
        <ContactInfo />
      </Container>
    </div>
  );
};

export default Contact;
