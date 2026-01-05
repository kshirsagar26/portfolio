import HeroTerminal from "@/components/HeroTerminal";
import SkillMatrix from "@/components/SkillMatrix";
import ProjectGrid from "@/components/ProjectGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import CertificationsAwards from "@/components/CertificationsAwards";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroTerminal />
      <ExperienceTimeline />
      <ProjectGrid />
      <SkillMatrix />
      <CertificationsAwards />
      <ContactSection />
    </div>
  );
};

export default Home;
