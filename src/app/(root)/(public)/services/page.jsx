import LearningTool from "@/components/services/LearningTool";
import Productivity from "@/components/services/Productivity";
import Security from "@/components/services/Security";
import ServiceBanner from "@/components/services/ServiceBanner";
import Container from "@/components/shared/Container";

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