import React from "react";
import AboutBanner from "@/components/about/AboutBanner";
import AboutDescription from "@/components/about/AboutDescription";
import AboutTeam from "@/components/about/AboutTeam";
import StatsSection from "@/components/about/StatsSection";
import PurposeSection from "@/components/about/PurposeSection";
import Container from "@/components/shared/Container";
import CTASection from "@/components/about/CTASection";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <Container>
        <AboutDescription />
        <PurposeSection />
        <StatsSection />
        <AboutTeam />
        <CTASection />
      </Container>
    </div>
  );
};

export default About;