import LearningTool from "@/components/service/LearningTool";
import Productivity from "@/components/service/Productivity";
import Security from "@/components/service/Security";
import ServiceBanner from "@/components/service/ServiceBanner";
import Container from "@/components/shared/Container";
import React from "react";

const Services = () => {
  return (
    <div>
      <ServiceBanner />
      <Container>
        <LearningTool />
        <Productivity />
        <Security />
      </Container>
    </div>
  );
};

export default Services;
