import AboutSection from "../Components/Semnas/About";
import HeroSection from "../Components/Semnas/Hero";
import ContactPerson from "../Components/Semnas/ContactPerson";
import OurSpeaker from "../Components/Semnas/OurSpeaker";
import Timeline from "../Components/Semnas/Timeline";
import Faq from "../Components/Semnas/Faq";

export function Semnas() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OurSpeaker />
      <Timeline />
      <Faq />
      <ContactPerson />
    </>
  );
}
