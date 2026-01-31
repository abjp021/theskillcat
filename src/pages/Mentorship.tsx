import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Linkedin, Twitter, CheckCircle2, Sparkles, ArrowRight, Star, Calendar, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";
import { CatWhiskers, CatPawFilled, CatSilhouette } from "@/components/CatGraphics";
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
  ratings: number;
  bookings: number;
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
    ratings: 4.8,
    bookings: 2500,
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
    ratings: 4.5,
    bookings: 1000,
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
    rating: 4.8,
  },
  {
    id: "resume-review",
    title: "Resume Review + LinkedIn Optimization",
    category: "Video meeting. 45 mins",
    type: "1:1 Call",
    description: "Find your next job with a perfect resume and LinkedIn",
    price: 750,
    rating: 4.9,
  },
  {
    id: "resume-drafting",
    title: "Resume Drafting",
    category: "Video meeting. 30 mins",
    type: "1:1 Call",
    price: 1200,
    originalPrice: 1500,
    rating: 4.7,
  },
  {
    id: "linkedin-optimization",
    title: "LinkedIn Optimization",
    category: "Video meeting. 20 mins",
    type: "1:1 Call",
    description: "Your LinkedIn is your sales page! Optimize it :)",
    price: 400,
    rating: 4.6,
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
    rating: 4.5,
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
    rating: 4.8,
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
    rating: 4.9,
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
    rating: 4.9,
  },
];

const Mentorship = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [currentMentorIndex, setCurrentMentorIndex] = useState(0);

  const filteredServices = selectedTab === "All" 
    ? services 
    : services.filter(service => service.type === selectedTab);

  // Auto-rotate mentors every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMentorIndex((prevIndex) => (prevIndex + 1) % mentors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />

      {/* Cat-themed decorative elements - Cat Paws */}
      <div className="absolute top-24 left-12 opacity-12 pointer-events-none hidden lg:block z-0">
        <CatPawFilled size={70} className="text-muted-foreground -rotate-12" />
      </div>
      <div className="absolute top-1/2 left-0 opacity-5 pointer-events-none hidden lg:block z-0">
        <CatWhiskers size={180} className="text-muted-foreground -rotate-12" />
      </div>
      <div className="absolute top-2/3 right-16 opacity-7 pointer-events-none hidden lg:block z-0">
        <CatPawFilled size={45} className="text-muted-foreground rotate-45" />
      </div>
      <div className="absolute bottom-48 right-8 opacity-10 pointer-events-none hidden lg:block z-0">
        <CatPawFilled size={60} className="text-muted-foreground rotate-12" />
      </div>
      <div className="absolute bottom-96 right-24 opacity-5 pointer-events-none hidden lg:block z-0">
        <CatPawFilled size={40} className="text-muted-foreground -rotate-6" />
      </div>
      <div className="absolute bottom-32 left-12 opacity-6 pointer-events-none hidden lg:block z-0">
        <CatPawFilled size={55} className="text-muted-foreground rotate-30" />
      </div>

      {/* Main Content - Mobile First Layout */}
      <section className="pt-12 pb-0 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-16 relative z-10 min-h-screen">
        {/* Mobile: Mentor Profile Section - Carousel */}
        <div className="lg:hidden bg-gradient-to-b from-background to-muted/20 pb-6 pt-4 px-0 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-foreground/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          {mentors.length > 0 && (
            <div className="w-full relative z-10">
              {/* Heading with improved styling */}
              <div className="mb-5 text-center px-4">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2 leading-tight">
                  Unsure about your next career move?
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
                  Our mentors have got you covered.
                </p>
              </div>
              
              {/* Carousel Container with creative layout */}
              <div className="relative overflow-hidden mb-6 w-full">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentMentorIndex * 100}%)`
                  }}
                >
                  {mentors.map((mentor, index) => (
                    <div 
                      key={mentor.id} 
                      className="flex-shrink-0 w-full px-4"
                    >
                      <Card className="w-full rounded-2xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-card via-card to-muted/30 relative">
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-foreground/10 to-transparent rounded-bl-full opacity-50" />
                        
                        <CardHeader className="p-6 pb-5 relative">
                          {/* Top section with avatar and availability */}
                          <div className="flex items-start justify-between mb-5">
                            <div className="flex-1">
                              {/* Mentor Name */}
                              <CardTitle className="font-display font-bold text-2xl text-foreground mb-1.5 leading-tight">
                                {mentor.name}
                              </CardTitle>
                              {/* Role with icon */}
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                                <p className="text-sm text-muted-foreground">
                                  {mentor.role}
                                </p>
                              </div>
                            </div>
                            
                            {/* Avatar positioned top-right */}
                            <div className="relative flex-shrink-0 ml-4">
                              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-foreground/10 via-muted to-muted/60 flex items-center justify-center font-display font-bold text-2xl text-foreground border-2 border-border/50 shadow-lg">
                                {mentor.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                              {/* Verified Badge */}
                              {mentor.available && (
                                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 dark:bg-green-600 rounded-full flex items-center justify-center border-2 border-background shadow-lg">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Stats Badges - Creative horizontal layout with icons */}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl p-4 border border-border/30 shadow-sm relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-12 h-12 bg-foreground/5 rounded-bl-full" />
                              <div className="relative">
                                <div className="flex items-center gap-2 mb-1">
                                  <Users className="w-4 h-4 text-foreground/60" />
                                  <div className="text-lg font-bold text-foreground leading-tight">{mentor.bookings}+</div>
                                </div>
                                <div className="text-[11px] text-muted-foreground">Total Bookings</div>
                              </div>
                            </div>
                            <div className="bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-xl p-4 border border-border/30 shadow-sm relative overflow-hidden">
                              <div className="absolute top-0 right-0 w-12 h-12 bg-foreground/5 rounded-bl-full" />
                              <div className="relative">
                                <div className="flex items-center gap-2 mb-1">
                                  <TrendingUp className="w-4 h-4 text-foreground/60" />
                                  <div className="text-lg font-bold text-foreground leading-tight">4.5/5</div>
                                </div>
                                <div className="text-[11px] text-muted-foreground">{mentor.ratings}/5 Ratings</div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        
                        {/* Schedule Call Button - Enhanced design */}
                        <CardFooter className="px-6 pb-6 pt-0">
                          <a
                            href={mentor.calendlyUrl || CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button
                              className="w-full bg-gradient-to-r from-foreground to-foreground/90 text-background hover:from-foreground/90 hover:to-foreground/80 font-semibold h-14 shadow-lg rounded-xl transition-all duration-300 group"
                              size="lg"
                            >
                              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                              <span>Schedule a Call</span>
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </a>
                        </CardFooter>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Carousel Indicators */}
              <div className="flex justify-center items-center gap-3 px-4">
                {mentors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMentorIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentMentorIndex
                        ? "w-10 h-2.5 bg-foreground shadow-md"
                        : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to mentor ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 mt-4 lg:mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-12 items-start">
            {/* Right Column - 3 parts (60%) - Order 1 on mobile, 2 on desktop */}
            <div className="lg:col-span-3 relative order-1 lg:order-2 w-full">
              {/* Cat whiskers positioned relative to this section - properly aligned behind content */}
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 opacity-10 pointer-events-none z-0 hidden lg:block">
                <CatWhiskers size={200} className="text-foreground" />
              </div>
              
              {/* Mobile: Background, Desktop: Gradient background */}
              <div className="relative p-3 sm:p-4 lg:p-6 overflow-hidden bg-background lg:bg-gradient-to-br lg:from-foreground/8 lg:via-foreground/5 lg:to-foreground/10 border-0 lg:border-2 lg:border-foreground/10 shadow-lg z-10">
                {/* Decorative background elements - Hidden on mobile for performance */}
                <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 bg-foreground/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="hidden sm:block absolute bottom-0 left-0 w-48 h-48 bg-foreground/12 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                <div className="hidden sm:block absolute top-1/2 left-1/2 w-32 h-32 bg-foreground/8 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
                
                {/* Subtle pattern overlay - Hidden on mobile */}
                <div className="hidden lg:block absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] [background-size:24px_24px]" />
                
                {/* Accent lines - Hidden on mobile */}
                <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
                
                {/* Content wrapper with relative positioning */}
                <div className="relative z-10 pt-2 lg:pt-0">
                  {/* Filter Tabs - Mobile First */}
                  <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                    <div className="mb-3 sm:mb-4 lg:mb-6">
                      <TabsList className="bg-background/90 lg:bg-background/80 backdrop-blur-sm h-auto p-1 border border-foreground/10 lg:border-foreground/20 shadow-sm overflow-x-auto rounded-lg lg:rounded-md">
                      <TabsTrigger 
                        value="All" 
                        className="px-4 py-2 sm:px-4 sm:py-2.5 lg:px-5 text-xs sm:text-sm font-medium data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm transition-all min-w-[60px] sm:min-w-auto rounded-md"
                      >
                        All
                      </TabsTrigger>
                      <TabsTrigger 
                        value="1:1 Call" 
                        className="px-4 py-2 sm:px-4 sm:py-2.5 lg:px-5 text-xs sm:text-sm font-medium data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm transition-all min-w-[70px] sm:min-w-auto rounded-md"
                      >
                        1:1 Call
                      </TabsTrigger>
                      <TabsTrigger 
                        value="Digital Product" 
                        className="px-4 py-2 sm:px-4 sm:py-2.5 lg:px-5 text-xs sm:text-sm font-medium data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm transition-all min-w-[100px] sm:min-w-auto rounded-md"
                      >
                        Digital Product
                      </TabsTrigger>
                      <TabsTrigger 
                        value="Package" 
                        className="px-4 py-2 sm:px-4 sm:py-2.5 lg:px-5 text-xs sm:text-sm font-medium data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm transition-all min-w-[80px] sm:min-w-auto rounded-md"
                      >
                        Package
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  {/* Service Cards - Mobile First */}
                  <TabsContent value={selectedTab} className="mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {filteredServices.map((service) => (
                        <Link key={service.id} to={`/mentorship/service/${service.id}`}>
                          <Card 
                            className="rounded-none border-border hover:border-foreground/50 transition-all duration-300 hover:shadow-lg group cursor-pointer h-full bg-background relative overflow-hidden"
                          >
                            {/* Subtle accent line on hover */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            
                            <CardContent className="p-3 sm:p-4 flex flex-col h-full">
                              {/* Top Section */}
                              <div className="flex-1">
                                {service.type !== "Package" ? (
                                  <>
                                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                                      <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        {service.category}
                                      </span>
                                      {service.rating && (
                                        <div className="flex items-center gap-0.5 sm:gap-1 ml-auto">
                                          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-foreground text-foreground" />
                                          <span className="text-[10px] sm:text-xs font-semibold">{service.rating}</span>
                                        </div>
                                      )}
                                    </div>
                                    
                                    <h3 className="font-display font-bold text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-foreground/80 transition-colors leading-tight">
                                      {service.title}
                                    </h3>
                                    
                                    {service.description && (
                                      <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 line-clamp-2 leading-snug">
                                        {service.description}
                                      </p>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    {/* Package Header */}
                                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                                      <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Package . {service.includedServices?.reduce((sum, s) => sum + s.quantity, 0) || 0} products
                                      </span>
                                      {service.rating && (
                                        <div className="flex items-center gap-0.5 sm:gap-1">
                                          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-foreground text-foreground" />
                                          <span className="text-[10px] sm:text-xs font-semibold">{service.rating}</span>
                                        </div>
                                      )}
                                    </div>
                                    
                                    {/* Package Title */}
                                    <h3 className="font-display font-bold text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-foreground/80 transition-colors leading-tight">
                                      {service.title}
                                    </h3>
                                    
                                    {/* Package Description */}
                                    {service.description && (
                                      <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 leading-snug">
                                        {service.description}
                                      </p>
                                    )}
                                    
                                    {/* Included Services List */}
                                    {service.includedServices && service.includedServices.length > 0 && (
                                      <div className="space-y-0 mb-2 sm:mb-3">
                                        {service.includedServices.map((included, index) => (
                                          <div key={index} className="py-1.5 sm:py-2 border-b border-border/50 last:border-b-0">
                                            <div className="flex items-start justify-between gap-3 sm:gap-4">
                                              <div className="flex-1 min-w-0">
                                                <div className="text-xs sm:text-sm font-medium text-foreground mb-0.5">
                                                  {included.name}
                                                </div>
                                                <div className="text-[10px] sm:text-xs text-muted-foreground">
                                                  {included.type}
                                                </div>
                                              </div>
                                              <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">
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
                              <div className="flex items-end justify-between gap-3 sm:gap-4 pt-2 sm:pt-3 mt-auto border-t border-border/50">
                                <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                                  <div className="flex items-baseline gap-1.5 sm:gap-2">
                                    <span className="font-display font-bold text-lg sm:text-xl">
                                      ₹{service.price.toLocaleString()}
                                    </span>
                                    {service.originalPrice && (
                                      <span className="text-xs sm:text-sm text-muted-foreground line-through">
                                        ₹{service.originalPrice.toLocaleString()}
                                      </span>
                                    )}
                                    {service.price === 0 && (
                                      <span className="text-xs sm:text-sm text-muted-foreground">
                                        Contact for pricing
                                      </span>
                                    )}
                                  </div>
                                  {service.bestDeal && (
                                    <span className="inline-block bg-purple-500 text-white px-1.5 py-0.5 sm:px-2 text-[10px] sm:text-xs font-semibold rounded-full">
                                      Best Deal
                                    </span>
                                  )}
                                </div>
                                
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground text-background hover:opacity-90 group-hover:scale-110 transition-transform flex-shrink-0"
                                >
                                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </Button>
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

            {/* Left Column - 2 parts (40%) - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="sticky top-[7.5rem] space-y-4 sm:space-y-5" style={{ maxHeight: 'calc(100vh - 7.5rem)', overflowY: 'auto' }}>
                {/* Headline */}
                <div>
                  <h1 className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight mb-3 sm:mb-4 lg:mb-5">
                    Unsure About Your Career?<br />
                    <span className="text-muted-foreground">We've Got You Covered</span>
                  </h1>
                </div>

                {/* Common CTA Button */}
                <div className="mb-3 sm:mb-4 lg:mb-5">
                  <a
                    href={mentors[0]?.calendlyUrl || CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full bg-foreground text-background hover:opacity-90 group/btn h-12 sm:h-auto"
                      size="lg"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule a Call
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>

                {/* Improved Mentor Cards - Desktop Only */}
                <div className="space-y-3 sm:space-y-4">
                  {mentors.map((mentor) => (
                    <Card 
                      key={mentor.id} 
                      className="rounded-none border-border hover:border-foreground/50 transition-all duration-300 hover:shadow-lg group"
                    >
                      <CardHeader className="p-3 sm:p-4 md:p-6 pb-3 sm:pb-4">
                        <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4">
                          {/* Square Avatar - Mobile First */}
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg bg-muted flex items-center justify-center font-display font-bold text-sm sm:text-base md:text-lg text-foreground group-hover:scale-105 transition-transform flex-shrink-0 border border-border">
                            {mentor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                              <div className="flex-1 min-w-0">
                                <CardTitle className="text-sm sm:text-base font-bold mb-0.5 sm:mb-1">{mentor.name}</CardTitle>
                                <p className="text-xs sm:text-sm text-muted-foreground mb-1.5 sm:mb-2 md:mb-3 leading-tight">
                                  {mentor.role}
                                </p>
                              </div>
                              {mentor.available && (
                                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium text-green-700 dark:text-green-400 whitespace-nowrap flex-shrink-0">
                                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                                  <span className="hidden sm:inline">Available</span>
                                </span>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm text-foreground leading-relaxed mb-2 sm:mb-3 md:mb-4 line-clamp-3 sm:line-clamp-none">
                              {mentor.bio}
                            </p>
                            <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3 md:mb-4">
                              {mentor.expertise.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="inline-block bg-muted px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 text-[10px] sm:text-xs font-medium text-foreground/80 rounded-full border border-border/50"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                            {/* Social Links */}
                            {(mentor.linkedin || mentor.twitter) && (
                              <div className="flex gap-2 sm:gap-3">
                                {mentor.linkedin && (
                                  <a
                                    href={mentor.linkedin}
                                    className="text-muted-foreground hover:text-foreground transition-colors p-1 -m-1"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Linkedin className="w-4 h-4" />
                                  </a>
                                )}
                                {mentor.twitter && (
                                  <a
                                    href={mentor.twitter}
                                    className="text-muted-foreground hover:text-foreground transition-colors p-1 -m-1"
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
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default Mentorship;
