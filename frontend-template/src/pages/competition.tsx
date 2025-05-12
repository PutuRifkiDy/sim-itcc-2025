import AboutSection from "../Components/Competition/About";
import HeroSection from "../Components/Competition/Hero";
import ContactPerson from "../Components/Competition/ContactPerson";
import PrizeCategory from "../Components/Competition/PrizeCategory";
import Timeline from "../Components/Competition/Timeline";
import Faq from "../Components/Competition/Faq";

export function Competition() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PrizeCategory />
      <Timeline />
      <Faq />
      <ContactPerson />
    </>
  );
}
