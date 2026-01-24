import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Certifications from "@/components/Certifications";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";

/**
 * Main portfolio page component
 * Serves as the root layout combining all sections:
 * - Header (navigation and logo)
 * - Hero (introduction with NYC skyline background and CTA)
 * - Certifications (professional credentials display)
 * - ExperienceSection (toggle between experience and education timelines)
 * - FeaturedProjects (showcase of work)
 * - Footer (contact info and social links)
 */
export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter'] transition-colors duration-300">
      <Header />
      <Hero />
      <Certifications />
      <ExperienceSection />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}
