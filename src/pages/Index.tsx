import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import MentorshipSection from "@/components/MentorshipSection";
import SuccessStories from "@/components/SuccessStories";
import FreeResources from "@/components/FreeResources";
import BlogsSection from "@/components/BlogsSection";
import NewsletterSection from "@/components/NewsletterSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CoursesSection />
      <MentorshipSection />
      <SuccessStories />
      <FreeResources />
      <BlogsSection />
      <NewsletterSection />
      <FAQSection />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default Index;
