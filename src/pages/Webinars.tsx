import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Video } from "lucide-react";

interface Webinar {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  speaker: string;
  speakerRole: string;
  category: string;
  enrolled: number;
  maxCapacity: number;
  isLive?: boolean;
  registrationLink?: string;
}

const webinars: Webinar[] = [
  {
    id: "product-management-fundamentals",
    title: "Product Management Fundamentals: From Idea to Launch",
    description: "Learn the core principles of product management, including user research, roadmap planning, and go-to-market strategies. Perfect for beginners looking to break into PM.",
    date: "Feb 15, 2026",
    time: "6:00 PM IST",
    duration: "90 minutes",
    speaker: "Industry Expert",
    speakerRole: "AI Product Manager, EV & Operations",
    category: "Product Management",
    enrolled: 245,
    maxCapacity: 500,
    isLive: true,
  },
  {
    id: "career-transition-guide",
    title: "Career Transition Guide: Switching to Tech Roles",
    description: "A comprehensive session on how to successfully transition into tech roles, including resume building, interview preparation, and networking strategies.",
    date: "Feb 22, 2026",
    time: "7:00 PM IST",
    duration: "60 minutes",
    speaker: "Technical Lead",
    speakerRole: "Technical Product Manager, Infra + Ops",
    category: "Career Development",
    enrolled: 189,
    maxCapacity: 500,
    isLive: true,
  },
  {
    id: "ai-product-strategy",
    title: "AI Product Strategy: Building Products with AI",
    description: "Explore how to integrate AI into your product strategy, understand AI capabilities, and build products that leverage machine learning effectively.",
    date: "Mar 1, 2026",
    time: "6:30 PM IST",
    duration: "75 minutes",
    speaker: "Industry Expert",
    speakerRole: "AI Product Manager, EV & Operations",
    category: "AI & Technology",
    enrolled: 312,
    maxCapacity: 500,
    isLive: false,
  },
  {
    id: "system-design-basics",
    title: "System Design Basics for Product Managers",
    description: "Learn the fundamentals of system design from a PM perspective. Understand scalability, reliability, and how to communicate effectively with engineering teams.",
    date: "Mar 8, 2026",
    time: "7:30 PM IST",
    duration: "90 minutes",
    speaker: "Technical Lead",
    speakerRole: "Technical Product Manager, Infra + Ops",
    category: "Technical Skills",
    enrolled: 156,
    maxCapacity: 500,
    isLive: false,
  },
];

const Webinars = () => {
  const upcomingWebinars = webinars.filter(w => !w.isLive);
  const liveWebinars = webinars.filter(w => w.isLive);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6 lg:pb-8 border-b border-border relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-foreground/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-foreground" />
              <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Webinars
              </p>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 sm:mb-5">
              Upcoming Webinars
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Join our free webinars to learn from industry experts. All sessions are completely free to enroll and designed to help you advance your career.
            </p>
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {webinars.map((webinar, index) => (
              <Card key={webinar.id} className="h-full border-border/50 hover:border-foreground/60 hover:shadow-xl transition-all duration-300 group overflow-hidden relative bg-card">
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-foreground/20 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="pb-3 p-5 relative">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="outline" className="text-[11px] border-foreground/20 group-hover:border-foreground/40 transition-colors">
                      {webinar.category}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-muted-foreground">{webinar.date}</span>
                      {webinar.isLive && (
                        <Badge className="bg-red-500 text-white animate-pulse text-[10px]">
                          Live
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl group-hover:text-foreground transition-colors leading-tight mb-2">
                    {webinar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {webinar.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{webinar.time} • {webinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Video className="w-3 h-3" />
                      <span className="line-clamp-1">{webinar.speaker}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>{webinar.enrolled} enrolled</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    <span>Free to enroll</span>
                    <span>•</span>
                    {webinar.isLive ? (
                      <span className="underline underline-offset-2">Register now</span>
                    ) : (
                      <span className="underline underline-offset-2">Join waitlist</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default Webinars;
