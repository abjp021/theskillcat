import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDLY_URL } from "@/lib/constants";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  initials: string;
}

// Dummy reviews for each service
const serviceReviews: Record<string, Review[]> = {
  "career-clarity-session": [
    {
      id: "1",
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      comment: "This session was incredibly helpful! The mentor helped me identify my strengths and create a clear career roadmap. I now have a much better understanding of where I want to go.",
      initials: "PS",
    },
    {
      id: "2",
      name: "Rahul Kumar",
      rating: 5,
      date: "1 month ago",
      comment: "Excellent guidance! The mentor was patient and asked the right questions to help me understand my career goals. Highly recommend this session.",
      initials: "RK",
    },
    {
      id: "3",
      name: "Anjali Mehta",
      rating: 4,
      date: "3 weeks ago",
      comment: "Very insightful session. Got clarity on my next steps and what skills I need to develop. The mentor was professional and supportive.",
      initials: "AM",
    },
  ],
  "resume-review": [
    {
      id: "1",
      name: "Vikram Singh",
      rating: 5,
      date: "1 week ago",
      comment: "My resume went from average to outstanding! The mentor provided detailed feedback and helped me optimize my LinkedIn profile. Got 3 interview calls within a week!",
      initials: "VS",
    },
    {
      id: "2",
      name: "Sneha Patel",
      rating: 5,
      date: "2 weeks ago",
      comment: "Best investment I've made! The resume review was thorough and the LinkedIn optimization tips were game-changing. My profile views increased by 300%.",
      initials: "SP",
    },
    {
      id: "3",
      name: "Arjun Reddy",
      rating: 5,
      date: "3 weeks ago",
      comment: "Professional and detailed feedback. The mentor identified key improvements I never thought of. My resume now stands out to recruiters.",
      initials: "AR",
    },
  ],
  "resume-drafting": [
    {
      id: "1",
      name: "Meera Nair",
      rating: 5,
      date: "1 week ago",
      comment: "Got a professionally crafted resume that perfectly highlights my experience. The mentor understood my career goals and tailored the resume accordingly. Worth every rupee!",
      initials: "MN",
    },
    {
      id: "2",
      name: "Karan Malhotra",
      rating: 4,
      date: "2 weeks ago",
      comment: "Great service! The resume looks professional and ATS-friendly. The mentor was responsive and incorporated all my feedback. Highly satisfied.",
      initials: "KM",
    },
    {
      id: "3",
      name: "Divya Rao",
      rating: 5,
      date: "1 month ago",
      comment: "Excellent work! The resume is well-structured and impactful. I've already received positive feedback from recruiters. Thank you!",
      initials: "DR",
    },
  ],
  "linkedin-optimization": [
    {
      id: "1",
      name: "Amit Joshi",
      rating: 5,
      date: "5 days ago",
      comment: "Quick and effective! The mentor showed me exactly how to optimize my LinkedIn profile. My connection requests and profile views have increased significantly.",
      initials: "AJ",
    },
    {
      id: "2",
      name: "Neha Gupta",
      rating: 4,
      date: "2 weeks ago",
      comment: "Great tips and strategies! The session was concise but packed with valuable insights. My LinkedIn is now much more professional and engaging.",
      initials: "NG",
    },
    {
      id: "3",
      name: "Rohan Desai",
      rating: 5,
      date: "3 weeks ago",
      comment: "Perfect for busy professionals! Got actionable advice in just 20 minutes. My LinkedIn profile now attracts the right opportunities.",
      initials: "RD",
    },
  ],
  "pm-roadmap": [
    {
      id: "1",
      name: "Aditya Verma",
      rating: 5,
      date: "1 week ago",
      comment: "Comprehensive roadmap with all the resources I need! This guide helped me understand the PM role better and plan my transition. Great value for money.",
      initials: "AV",
    },
    {
      id: "2",
      name: "Shreya Iyer",
      rating: 4,
      date: "2 weeks ago",
      comment: "Well-structured and practical. The frameworks and templates are really useful. This is exactly what I needed to start my PM journey.",
      initials: "SI",
    },
    {
      id: "3",
      name: "Manish Agarwal",
      rating: 5,
      date: "1 month ago",
      comment: "Excellent resource! The step-by-step approach makes transitioning to PM less overwhelming. Highly recommend to anyone considering this career path.",
      initials: "MA",
    },
  ],
  "linkedin-guide": [
    {
      id: "1",
      name: "Kavita Shah",
      rating: 4,
      date: "1 week ago",
      comment: "Comprehensive guide with practical tips! Learned how to write a compelling headline and optimize my profile for job searches. Very helpful!",
      initials: "KS",
    },
    {
      id: "2",
      name: "Rajesh Nair",
      rating: 5,
      date: "2 weeks ago",
      comment: "Great guide! The examples and templates are really useful. My LinkedIn profile is now much more professional and I'm getting more visibility.",
      initials: "RN",
    },
    {
      id: "3",
      name: "Pooja Mehta",
      rating: 4,
      date: "3 weeks ago",
      comment: "Worth the investment! Clear instructions and actionable advice. My profile views have increased and I'm connecting with the right people.",
      initials: "PM",
    },
  ],
  "mentorship-package-30": [
    {
      id: "1",
      name: "Siddharth Kapoor",
      rating: 5,
      date: "2 weeks ago",
      comment: "Amazing package! The career guidance session helped me identify my path, and the mock interview was incredibly valuable. The mentor provided honest feedback that helped me improve significantly.",
      initials: "SK",
    },
    {
      id: "2",
      name: "Isha Chawla",
      rating: 5,
      date: "1 month ago",
      comment: "Comprehensive mentorship package! Got career clarity, interview practice, and ongoing support. The mentor is knowledgeable and genuinely cares about your success.",
      initials: "IC",
    },
    {
      id: "3",
      name: "Varun Thakur",
      rating: 4,
      date: "3 weeks ago",
      comment: "Great value! The sessions are well-structured and the mentor provides practical advice. The mock interview was particularly helpful in building my confidence.",
      initials: "VT",
    },
  ],
  "interview-prep-package": [
    {
      id: "1",
      name: "Nisha Agarwal",
      rating: 5,
      date: "1 week ago",
      comment: "Best deal! This package prepared me thoroughly for my interviews. The resume review, career guidance, and interview prep were all excellent. I aced my interview!",
      initials: "NA",
    },
    {
      id: "2",
      name: "Abhishek Menon",
      rating: 5,
      date: "2 weeks ago",
      comment: "Perfect package for interview preparation! The mentor covered everything from resume optimization to answering tough questions. Highly recommend!",
      initials: "AM",
    },
    {
      id: "3",
      name: "Tanvi Deshmukh",
      rating: 5,
      date: "3 weeks ago",
      comment: "Excellent value! Got comprehensive interview preparation at a great price. The mentor's tips and mock practice sessions were invaluable. Got the job!",
      initials: "TD",
    },
  ],
  "mentorship-package-weekly": [
    {
      id: "1",
      name: "Rohit Malhotra",
      rating: 5,
      date: "2 weeks ago",
      comment: "Outstanding mentorship program! The weekly sessions keep me accountable and on track. The mentor provides personalized guidance and has helped me make significant progress in my career.",
      initials: "RM",
    },
    {
      id: "2",
      name: "Ananya Reddy",
      rating: 5,
      date: "1 month ago",
      comment: "Best investment in my career! The consistent mentorship has been transformative. The mentor understands my goals and provides tailored advice every week.",
      initials: "AR",
    },
    {
      id: "3",
      name: "Harsh Shah",
      rating: 5,
      date: "3 weeks ago",
      comment: "Highly recommend! The weekly sessions provide ongoing support and guidance. The mentor is experienced, patient, and genuinely invested in your success. Worth every rupee!",
      initials: "HS",
    },
  ],
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;
  const reviews = serviceId ? serviceReviews[serviceId] || [] : [];
  
  // Calculate overall rating from reviews
  const overallRating = reviews.length > 0
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : service?.rating || 0;

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
      <section className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Left Column - Service Details (40%) */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                {/* Back Button and Rating Row */}
                <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
                  <Link
                    to="/mentorship"
                    className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors link-underline group"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:text-yellow-400 transition-colors" />
                    <span className="hidden sm:inline">Back to Mentorship</span>
                    <span className="sm:hidden">Back</span>
                  </Link>
                  
                  {/* Overall Rating */}
                  {(overallRating > 0 || reviews.length > 0) && (
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              i < Math.round(overallRating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-muted text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex items-baseline gap-1 sm:gap-1.5">
                        <span className="font-display font-bold text-sm sm:text-base">
                          {overallRating.toFixed(1)}
                        </span>
                        {reviews.length > 0 && (
                          <span className="text-[10px] sm:text-xs text-muted-foreground">
                            ({reviews.length})
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Title */}
                <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-4 sm:mb-6">
                  {service.title}
                </h1>

                {/* Price and Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6 sm:mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-bold text-2xl sm:text-3xl">
                      ₹{service.price.toLocaleString()}
                    </span>
                    {service.originalPrice && (
                      <span className="text-base sm:text-lg text-muted-foreground line-through">
                        ₹{service.originalPrice.toLocaleString()}
                      </span>
                    )}
                    {service.price === 0 && (
                      <span className="text-base sm:text-lg text-muted-foreground">
                        Contact for pricing
                      </span>
                    )}
                  </div>
                  {service.duration && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">{service.duration}</span>
                    </div>
                  )}
                </div>

                {/* Package Included Services */}
                {service.type === "Package" && service.includedServices && service.includedServices.length > 0 && (
                  <div className="mb-6 sm:mb-8">
                    <h2 className="font-display font-bold text-lg sm:text-xl mb-3 sm:mb-4">What's Included</h2>
                    <div className="space-y-0 border border-border hover:border-yellow-400/30 transition-colors rounded-lg overflow-hidden">
                      {service.includedServices.map((included, index) => (
                        <div key={index} className="py-2.5 sm:py-3 px-3 sm:px-4 border-b border-border last:border-b-0 bg-card hover:bg-yellow-400/5 transition-colors">
                          <div className="flex items-start justify-between gap-3 sm:gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="text-xs sm:text-sm font-medium text-foreground mb-0.5 sm:mb-1">
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
                  </div>
                )}

                {/* Description */}
                <div className="prose prose-sm max-w-none mb-6 sm:mb-8">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {service.fullDescription || service.description}
                  </p>
                </div>

                {/* Student Reviews Section */}
                {reviews.length > 0 && (
                  <div className="mt-6 sm:mt-8">
                    <h2 className="font-display font-bold text-lg sm:text-xl mb-4 sm:mb-6">Student Reviews</h2>
                    <div className="space-y-3 sm:space-y-4">
                      {reviews.map((review) => (
                        <Card key={review.id} className="rounded-none border-border hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10 transition-all">
                          <CardContent className="p-3 sm:p-4">
                            <div className="flex items-start gap-3 sm:gap-4">
                              <Avatar className="h-8 w-8 sm:h-10 sm:w-10 rounded-none bg-muted overflow-hidden">
                                <AvatarFallback className="bg-muted text-foreground font-medium rounded-none text-xs sm:text-sm">
                                  {review.initials}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-1.5 sm:mb-2">
                                  <div>
                                    <h3 className="font-medium text-xs sm:text-sm mb-0.5 sm:mb-1">{review.name}</h3>
                                    <div className="flex items-center gap-0.5 sm:gap-1">
                                      {[...Array(5)].map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                                            i < review.rating
                                              ? "fill-yellow-400 text-yellow-400"
                                              : "fill-muted text-muted-foreground"
                                          }`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                  <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                                    {review.date}
                                  </span>
                                </div>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                  {review.comment}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Calendly/Scheduling (60%) */}
            <div className="lg:col-span-3">
              <Card className="border-border hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10 transition-all">
                <CardContent className="p-4 sm:p-6 md:p-8">
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
                        className="bg-foreground text-background hover:opacity-90 hover:shadow-lg hover:shadow-yellow-400/20 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">Purchase for ₹{service.price.toLocaleString()}</span>
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
      <ScrollToTopButton />
    </main>
  );
};

export default ServiceDetail;
