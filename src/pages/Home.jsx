import HeroSection from "../organisms/HeroSection";
import AboutPreview from "../components/ui/AboutPreview";
import FeaturedPreview from "../components/ui/FeaturedProjects"
import SkillsPreview from "../components/ui/SkillsPreview";
import ExperiencePreview from "../components/ui/ExperiencePreview";
import ContactCTA from "../components/ui/ContactCTA";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedPreview />
      <SkillsPreview />
      <ExperiencePreview />
      <ContactCTA />
    </>
  );
}

export default Home;
