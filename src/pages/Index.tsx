import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import SuccessStories from "@/components/SuccessStories";
import FreeResources from "@/components/FreeResources";
import NewsletterSection from "@/components/NewsletterSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StatsSection />
      <CoursesSection />
      <SuccessStories />
      <FreeResources />
      <NewsletterSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
