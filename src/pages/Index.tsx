import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import MentorshipSection from "@/components/MentorshipSection";
import SuccessStories from "@/components/SuccessStories";
import FreeResources from "@/components/FreeResources";
import BlogsSection from "@/components/BlogsSection";
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
      <MentorshipSection />
      <SuccessStories />
      <FreeResources />
      <BlogsSection />
      <NewsletterSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
