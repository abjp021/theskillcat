import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Linkedin, Twitter, CheckCircle2, Sparkles, ArrowRight, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";
import { CatEyeMinimal, CatWhiskers, CatPawFilled, CatSilhouette } from "@/components/CatGraphics";
interface Mentor {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
  twitter?: string;
  available: boolean;
  calendlyUrl?: string;
}

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
  duration?: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  includedServices?: IncludedService[];
  bestDeal?: boolean;
}

const mentors: Mentor[] = [
  {
    id: "ai-pm-expert",
    name: "Industry Expert",
    role: "AI Product Manager, EV & Operations",
    bio: "Real production PM experience with EV + Operations + AI expertise. Data-driven approach with focus on growth and retention use cases.",
    expertise: ["AI Products", "Operations", "Data-Driven Growth", "EV Systems"],
    linkedin: "#",
    twitter: "#",
    available: true,
    calendlyUrl: CALENDLY_URL,
  },
  {
    id: "tech-pm-expert",
    name: "Technical Lead",
    role: "Technical Product Manager, Infra + Ops",
    bio: "Real production issues experience. Infra + ops expertise. Data-heavy PM background with API + dashboard exposure.",
    expertise: ["System Design", "APIs", "Production Systems", "Infrastructure"],
    linkedin: "#",
    twitter: "#",
    available: true,
    calendlyUrl: CALENDLY_URL,
  },
];

const services: Service[] = [
  {
    id: "career-clarity-session",
    title: "Career Clarity Session",
    category: "Video meeting. 45 mins",
    type: "1:1 Call",
    description: "Get clarity on your career path and next steps",
    price: 750,
  },
  {
    id: "resume-review",
    title: "Resume Review + LinkedIn Optimization",
    category: "Video meeting. 45 mins",
    type: "1:1 Call",
    description: "Find your next job with a perfect resume and LinkedIn",
    price: 750,
  },
  {
    id: "resume-drafting",
    title: "Resume Drafting",
    category: "Video meeting. 30 mins",
    type: "1:1 Call",
    price: 1200,
    originalPrice: 1500,
  },
  {
    id: "linkedin-optimization",
    title: "LinkedIn Optimization",
    category: "Video meeting. 20 mins",
    type: "1:1 Call",
    description: "Your LinkedIn is your sales page! Optimize it :)",
    price: 400,
  },
  {
    id: "pm-roadmap",
    title: "Transitioning to PM - Roadmap and Resources",
    category: "Digital Product",
    type: "Digital Product",
    description: "Step by Step Roadmap and Resources",
    price: 50,
    originalPrice: 100,
    rating: 4.7,
  },
  {
    id: "linkedin-guide",
    title: "LinkedIn Optimization for job hunting!",
    category: "Digital Product",
    type: "Digital Product",
    description: "Your LinkedIn is the gateway for your new role!",
    price: 50,
    originalPrice: 199,
  },
  {
    id: "mentorship-package-30",
    title: "Mentorship Package - 30 Minutes",
    category: "Package",
    type: "Package",
    description: "Get guidance for your Career, Mock Interviews etc.",
    includedServices: [
      { name: "Career guidance Session: Time to upskill", quantity: 1, type: "Video Meeting" },
      { name: "Mock interview: 30 mins", quantity: 1, type: "Video Meeting" },
      { name: "1:1 Mentorship", quantity: 1, type: "Video Meeting" },
    ],
    price: 2100,
  },
  {
    id: "interview-prep-package",
    title: "Get Ready for the Interview!",
    category: "Package",
    type: "Package",
    includedServices: [
      { name: "Resume review", quantity: 1, type: "Video Meeting" },
      { name: "Career guidance Session: Time to upskill", quantity: 1, type: "Video Meeting" },
      { name: "Interview prep & tips", quantity: 1, type: "Video Meeting" },
    ],
    price: 1200,
    bestDeal: true,
  },
  {
    id: "mentorship-package-weekly",
    title: "Mentorship Package",
    category: "Package",
    type: "Package",
    description: "Meet me twice weekly and let me mentor you personally :)",
    includedServices: [
      { name: "1:1 Mentorship", quantity: 8, type: "Video Meeting" },
    ],
    price: 3600,
    originalPrice: 4800,
  },
];

const Mentorship = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredServices = selectedTab === "All" 
    ? services 
    : services.filter(service => service.type === selectedTab);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />

      {/* Cat-themed decorative elements */}
      <div className="absolute top-32 right-0 lg:right-12 opacity-10 pointer-events-none">
        <CatSilhouette size={200} className="text-foreground" />
      </div>
      <div className="absolute top-1/2 left-0 opacity-5 pointer-events-none hidden lg:block">
        <CatWhiskers size={180} className="text-foreground -rotate-12" />
      </div>
      <div className="absolute bottom-48 right-8 opacity-10 pointer-events-none hidden lg:block">
        <CatPawFilled size={60} className="text-foreground rotate-12" />
      </div>
      <div className="absolute bottom-96 right-24 opacity-5 pointer-events-none hidden lg:block">
        <CatPawFilled size={40} className="text-foreground -rotate-6" />
      </div>

      {/* Main Content - 40:60 Ratio Layout */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - 2 parts (40%) */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Headline with cat eye accent */}
                <div className="relative">
                  <div className="absolute -top-2 -left-4 opacity-20">
                    <CatEyeMinimal size={60} className="text-foreground" />
                  </div>
                  <h1 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-8 relative">
                    Unsure About Your Career?<br />
                    <span className="text-muted-foreground">We've Got You Covered</span>
                  </h1>
                </div>

                {/* Common CTA Button */}
                <div className="mb-8">
                  <a
                    href={mentors[0]?.calendlyUrl || CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full bg-foreground text-background hover:opacity-90 group/btn"
                      size="lg"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule a Call
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>

                {/* Improved Mentor Cards */}
                <div className="space-y-6">
                  {mentors.map((mentor) => (
                    <Card 
                      key={mentor.id} 
                      className="border-border hover:border-foreground/50 transition-all duration-300 hover:shadow-lg group"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          {/* Square Avatar */}
                          <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center font-display font-bold text-lg text-foreground group-hover:scale-105 transition-transform flex-shrink-0 border border-border">
                            {mentor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-base font-bold mb-1">{mentor.name}</CardTitle>
                                <p className="text-sm text-muted-foreground mb-3 leading-tight">
                                  {mentor.role}
                                </p>
                              </div>
                              {mentor.available && (
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700 dark:text-green-400 whitespace-nowrap flex-shrink-0">
                                  <CheckCircle2 className="w-4 h-4" />
                                  Available
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-foreground leading-relaxed mb-4">
                              {mentor.bio}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {mentor.expertise.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="inline-block bg-muted px-3 py-1.5 text-xs font-medium text-foreground/80 rounded-full border border-border/50"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            {/* Social Links */}
                            {(mentor.linkedin || mentor.twitter) && (
                              <div className="flex gap-3 mb-4">
                                {mentor.linkedin && (
                                  <a
                                    href={mentor.linkedin}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Linkedin className="w-4 h-4" />
                                  </a>
                                )}
                                {mentor.twitter && (
                                  <a
                                    href={mentor.twitter}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Twitter className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - 3 parts (60%) */}
            <div className="lg:col-span-3">
              {/* Filter Tabs - Enhanced */}
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <div className="mb-10">
                  <TabsList className="bg-muted/30 h-auto p-1.5 border border-border/50 rounded-lg">
                    <TabsTrigger 
                      value="All" 
                      className="px-5 py-2.5 text-sm font-medium data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm rounded-md transition-all"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger 
                      value="1:1 Call" 
                      className="px-5 py-2.5 text-sm font-medium data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm rounded-md transition-all"
                    >
                      1:1 Call
                    </TabsTrigger>
                    <TabsTrigger 
                      value="Digital Product" 
                      className="px-5 py-2.5 text-sm font-medium data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm rounded-md transition-all"
                    >
                      Digital Product
                    </TabsTrigger>
                    <TabsTrigger 
                      value="Package" 
                      className="px-5 py-2.5 text-sm font-medium data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm rounded-md transition-all"
                    >
                      Package
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* Service Cards - Enhanced Design */}
                <TabsContent value={selectedTab} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredServices.map((service) => (
                      <Link key={service.id} to={`/mentorship/service/${service.id}`}>
                        <Card 
                          className="border-border hover:border-foreground/50 transition-all duration-300 hover:shadow-lg group cursor-pointer h-full bg-background relative overflow-hidden"
                        >
                          {/* Subtle accent line on hover */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          
                          <CardContent className="p-6">
                            <div className="flex flex-col h-full">
                              {/* Top Section */}
                              <div className="flex-1 mb-4">
                                {service.type !== "Package" ? (
                                  <>
                                    <div className="flex items-center gap-2 mb-3">
                                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        {service.category}
                                      </span>
                                      {service.rating && (
                                        <div className="flex items-center gap-1 ml-auto">
                                          <Star className="w-3.5 h-3.5 fill-foreground text-foreground" />
                                          <span className="text-xs font-semibold">{service.rating}</span>
                                        </div>
                                      )}
                                    </div>
                                    
                                    <h3 className="font-display font-bold text-xl mb-3 group-hover:text-foreground/80 transition-colors leading-tight">
                                      {service.title}
                                    </h3>
                                    
                                    {service.description && (
                                      <p className="text-sm text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                                        {service.description}
                                      </p>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    {/* Package Header */}
                                    <div className="mb-3">
                                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Package . {service.includedServices?.reduce((sum, s) => sum + s.quantity, 0) || 0} products
                                      </span>
                                    </div>
                                    
                                    {/* Package Title */}
                                    <h3 className="font-display font-bold text-xl mb-2 group-hover:text-foreground/80 transition-colors leading-tight">
                                      {service.title}
                                    </h3>
                                    
                                    {/* Package Description */}
                                    {service.description && (
                                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        {service.description}
                                      </p>
                                    )}
                                    
                                    {/* Included Services List */}
                                    {service.includedServices && service.includedServices.length > 0 && (
                                      <div className="space-y-0 mb-6">
                                        {service.includedServices.map((included, index) => (
                                          <div key={index} className="py-3 border-b border-border/50 last:border-b-0">
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
                                    )}
                                  </>
                                )}
                              </div>

                              {/* Bottom Section - Price and CTA */}
                              <div className="flex items-end justify-between gap-4 pt-4">
                                <div className="flex items-baseline gap-3 flex-wrap">
                                  <div className="flex items-baseline gap-2">
                                    <span className="font-display font-bold text-2xl">
                                      ₹{service.price.toLocaleString()}
                                    </span>
                                    {service.originalPrice && (
                                      <span className="text-base text-muted-foreground line-through">
                                        ₹{service.originalPrice.toLocaleString()}
                                      </span>
                                    )}
                                    {service.price === 0 && (
                                      <span className="text-sm text-muted-foreground">
                                        Contact for pricing
                                      </span>
                                    )}
                                  </div>
                                  {service.bestDeal && (
                                    <span className="inline-block bg-purple-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                                      Best Deal
                                    </span>
                                  )}
                                </div>
                                
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="w-10 h-10 rounded-full bg-foreground text-background hover:opacity-90 group-hover:scale-110 transition-transform flex-shrink-0"
                                >
                                  <ArrowRight className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Mentorship;
