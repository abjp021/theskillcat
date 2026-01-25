import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";

interface IncludedService {
  name: string;
  quantity: number;
  type: string;
}

interface Service {
  id: string;
  title: string;
  category: string;
  type: "1:1 Call" | "Digital Product" | "Package" | "Priority DM" | "Courses";
  description?: string;
  fullDescription?: string;
  duration?: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  calendlyUrl?: string;
  includedServices?: IncludedService[];
  bestDeal?: boolean;
}

// Service data - in a real app, this would come from an API
const serviceData: Record<string, Service> = {
  "career-clarity-session": {
    id: "career-clarity-session",
    title: "Career Clarity Session",
    category: "Video meeting. 45 mins",
    type: "1:1 Call",
    description: "Get clarity on your career path and next steps",
    fullDescription: "Get clarity on your career path and next steps. This session will help you understand where you are, where you want to go, and how to get there.",
    duration: "45 mins",
    price: 750,
    calendlyUrl: CALENDLY_URL,
  },
  "resume-review": {
    id: "resume-review",
    title: "Resume Review + LinkedIn Optimization",
    category: "Video meeting. 45 mins",
    type: "1:1 Call",
    description: "Find your next job with a perfect resume and LinkedIn",
    fullDescription: "Resume and LinkedIn are 2 of the most essential things that you need to get a job in this market and it's a starting point for your job journey. In this call - I will review your resume, give you tips on how to make it better and how to optimize your LinkedIn for maximum reach to the Recruiters.",
    duration: "45 mins",
    price: 750,
    calendlyUrl: CALENDLY_URL,
  },
  "resume-drafting": {
    id: "resume-drafting",
    title: "Resume Drafting",
    category: "Video meeting. 30 mins",
    type: "1:1 Call",
    fullDescription: "Get a professionally drafted resume tailored to your experience and career goals. We'll work together to create a resume that stands out to recruiters.",
    duration: "30 mins",
    price: 1200,
    originalPrice: 1500,
    calendlyUrl: CALENDLY_URL,
  },
  "linkedin-optimization": {
    id: "linkedin-optimization",
    title: "LinkedIn Optimization",
    category: "Video meeting. 20 mins",
    type: "1:1 Call",
    description: "Your LinkedIn is your sales page! Optimize it :)",
    fullDescription: "Your LinkedIn is your sales page! Optimize it to attract the right opportunities. Learn how to craft a compelling profile that gets noticed by recruiters and hiring managers.",
    duration: "20 mins",
    price: 400,
    calendlyUrl: CALENDLY_URL,
  },
  "pm-roadmap": {
    id: "pm-roadmap",
    title: "Transitioning to PM - Roadmap and Resources",
    category: "Digital Product",
    type: "Digital Product",
    description: "Step by Step Roadmap and Resources",
    fullDescription: "A comprehensive step-by-step roadmap and curated resources to help you transition into Product Management. Includes frameworks, templates, and actionable guides.",
    price: 50,
    originalPrice: 100,
    rating: 4.7,
  },
  "linkedin-guide": {
    id: "linkedin-guide",
    title: "LinkedIn Optimization for job hunting!",
    category: "Digital Product",
    type: "Digital Product",
    description: "Your LinkedIn is the gateway for your new role!",
    fullDescription: "Your LinkedIn is the gateway for your new role! This comprehensive guide will teach you everything you need to optimize your LinkedIn profile for maximum visibility and job opportunities.",
    price: 50,
    originalPrice: 199,
  },
  "mentorship-package-30": {
    id: "mentorship-package-30",
    title: "Mentorship Package - 30 Minutes",
    category: "Package",
    type: "Package",
    description: "Get guidance for your Career, Mock Interviews etc.",
    fullDescription: "Get guidance for your Career, Mock Interviews etc. This package includes career guidance, mock interviews, and personalized mentorship sessions.",
    includedServices: [
      { name: "Career guidance Session: Time to upskill", quantity: 1, type: "Video Meeting" },
      { name: "Mock interview: 30 mins", quantity: 1, type: "Video Meeting" },
      { name: "1:1 Mentorship", quantity: 1, type: "Video Meeting" },
    ],
    price: 2100,
    calendlyUrl: CALENDLY_URL,
  },
  "interview-prep-package": {
    id: "interview-prep-package",
    title: "Get Ready for the Interview!",
    category: "Package",
    type: "Package",
    fullDescription: "Comprehensive interview preparation package including resume review, career guidance, and interview prep tips to help you ace your next interview.",
    includedServices: [
      { name: "Resume review", quantity: 1, type: "Video Meeting" },
      { name: "Career guidance Session: Time to upskill", quantity: 1, type: "Video Meeting" },
      { name: "Interview prep & tips", quantity: 1, type: "Video Meeting" },
    ],
    price: 1200,
    bestDeal: true,
    calendlyUrl: CALENDLY_URL,
  },
  "mentorship-package-weekly": {
    id: "mentorship-package-weekly",
    title: "Mentorship Package",
    category: "Package",
    type: "Package",
    description: "Meet me twice weekly and let me mentor you personally :)",
    fullDescription: "Meet me twice weekly and let me mentor you personally. This comprehensive package includes 8 one-on-one mentorship sessions to guide you through your career journey.",
    includedServices: [
      { name: "1:1 Mentorship", quantity: 8, type: "Video Meeting" },
    ],
    price: 3600,
    originalPrice: 4800,
    calendlyUrl: CALENDLY_URL,
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-display font-bold text-3xl mb-4">Service Not Found</h1>
          <Link to="/mentorship" className="link-underline">
            Back to Mentorship
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Service Detail Page - Split Layout */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Service Details (40%) */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                {/* Back Button */}
                <Link
                  to="/mentorship"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Mentorship
                </Link>

                {/* Service Title */}
                <h1 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-6">
                  {service.title}
                </h1>

                {/* Price and Duration */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-bold text-3xl">
                      ₹{service.price.toLocaleString()}
                    </span>
                    {service.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ₹{service.originalPrice.toLocaleString()}
                      </span>
                    )}
                    {service.price === 0 && (
                      <span className="text-lg text-muted-foreground">
                        Contact for pricing
                      </span>
                    )}
                  </div>
                  {service.duration && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-5 h-5" />
                      <span>{service.duration}</span>
                    </div>
                  )}
                </div>

                {/* Rating */}
                {service.rating && (
                  <div className="flex items-center gap-2 mb-8">
                    <Star className="w-5 h-5 fill-foreground text-foreground" />
                    <span className="font-medium">{service.rating}</span>
                  </div>
                )}

                {/* Package Included Services */}
                {service.type === "Package" && service.includedServices && service.includedServices.length > 0 && (
                  <div className="mb-8">
                    <h2 className="font-display font-bold text-xl mb-4">What's Included</h2>
                    <div className="space-y-0 border border-border rounded-lg overflow-hidden">
                      {service.includedServices.map((included, index) => (
                        <div key={index} className="py-3 px-4 border-b border-border last:border-b-0 bg-card">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-foreground mb-1">
                                {included.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {included.type}
                              </div>
                            </div>
                            <span className="text-sm font-medium text-foreground whitespace-nowrap">
                              x{included.quantity}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {service.fullDescription || service.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Calendly/Scheduling (60%) */}
            <div className="lg:col-span-3">
              <Card className="border-border">
                <CardContent className="p-8">
                  {service.type === "1:1 Call" || service.type === "Package" ? (
                    <>
                      <h2 className="font-display font-bold text-2xl mb-6">When should we meet?</h2>
                      
                      {/* Calendly Embed */}
                      {service.calendlyUrl ? (
                        <div className="w-full" style={{ minHeight: "700px" }}>
                          <iframe
                            src={service.calendlyUrl}
                            width="100%"
                            height="700"
                            frameBorder="0"
                            title="Calendly Scheduling"
                            className="rounded-lg"
                          />
                        </div>
                      ) : (
                        <div className="text-center py-16">
                          <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground mb-4">
                            Calendly integration will be available here.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Please contact us to schedule your session.
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-16">
                      <h2 className="font-display font-bold text-2xl mb-4">Digital Product</h2>
                      <p className="text-muted-foreground mb-8">
                        This is a digital product. You'll receive access immediately after purchase.
                      </p>
                      <Button
                        size="lg"
                        className="bg-foreground text-background hover:opacity-90"
                      >
                        Purchase for ₹{service.price.toLocaleString()}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
