import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import MentorshipBookingForm from "@/components/MentorshipBookingForm";
import { Linkedin, Twitter, CheckCircle2, MessageSquare, Target, Users, Sparkles, ArrowRight, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Mentor {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
  twitter?: string;
  available: boolean;
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
  },
];

const benefits = [
  {
    icon: MessageSquare,
    title: "A Safe Space to Share",
    description: "Feeling uncertain? Share your doubts, fears, and questions in a judgment-free environment. Our mentors understand- they've been there too.",
  },
  {
    icon: Target,
    title: "Get Clear Direction",
    description: "Stop feeling lost. Get a clear roadmap for your career with actionable steps tailored to your unique situation and goals.",
  },
  {
    icon: Users,
    title: "Learn from Real Experience",
    description: "Our mentors have navigated career transitions, made tough decisions, and built successful careers. Learn from their real-world experience.",
  },
];

const Mentorship = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Parallel Layout */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-28 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-foreground/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-foreground" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  One-on-One Mentorship
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
                Unsure About Your Career?<br />
                <span className="text-muted-foreground">We've Got You Covered</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-4">
                Feeling lost, confused, or stuck? You're not alone. Every successful person has been where you are right now.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground mb-8">
                Book a one-on-one session with our mentors and get the clarity, confidence, and direction you need. No judgment, just honest guidance.
              </p>
            </div>
            
            {/* Right Column - Stats / Pricing & Focus Areas */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 border border-border rounded-lg bg-background/50 hover:border-foreground/50 transition-colors">
                  <div className="text-3xl font-display font-bold mb-2">30 min</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Session Length</div>
                </div>
                <div className="text-center p-6 border border-border rounded-lg bg-background/50 hover:border-foreground/50 transition-colors">
                  <div className="text-3xl font-display font-bold mb-1">
                    <span className="line-through text-base opacity-60 mr-1">₹799</span>
                    <span>₹500</span>
                  </div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider">
                    One flat price per 30-minute session
                  </div>
                </div>
              </div>

              <Card className="border-border bg-background/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold">
                    Choose Your Focus Area
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex flex-col items-start gap-1 rounded-lg border border-dashed border-border/70 px-3 py-2 bg-muted/40">
                      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        01
                      </span>
                      <span className="text-sm font-medium">Resume Review</span>
                      <span className="text-[11px] text-muted-foreground">
                        Get detailed feedback on your resume and how to position your experience.
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-1 rounded-lg border border-dashed border-border/70 px-3 py-2 bg-muted/40">
                      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        02
                      </span>
                      <span className="text-sm font-medium">One-on-One Career Mentorship</span>
                      <span className="text-[11px] text-muted-foreground">
                        Talk about direction, transitions, and what next steps make sense for you.
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-1 rounded-lg border border-dashed border-border/70 px-3 py-2 bg-muted/40">
                      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        03
                      </span>
                      <span className="text-sm font-medium">Mock Interview</span>
                      <span className="text-[11px] text-muted-foreground">
                        Practice interviews with honest feedback on your answers and communication.
                      </span>
                    </div>
                    <div className="flex flex-col items-start gap-1 rounded-lg border border-dashed border-border/70 px-3 py-2 bg-muted/40">
                      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        04
                      </span>
                      <span className="text-sm font-medium">Skill Set Analysis</span>
                      <span className="text-[11px] text-muted-foreground">
                        Understand your current skills and what to build next for your target role.
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Pick one focus area for your 30-minute session and mention it when you fill out the booking form.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Parallel Layout: Benefits Left, Mentors Right */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="font-display font-bold text-2xl lg:text-3xl tracking-tight mb-8">
                Why Book a Mentorship Session?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="group">
                      <div className="flex items-start gap-4 p-6 border border-border rounded-lg hover:border-foreground/50 transition-all duration-300 hover:shadow-lg">
                        <div className="w-14 h-14 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-lg mb-2">{benefit.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Mentors */}
            <div>
              <h2 className="font-display font-bold text-2xl lg:text-3xl tracking-tight mb-8">
                Meet Your Mentors
              </h2>
              <div className="space-y-6">
                {mentors.map((mentor) => (
                  <Card 
                    key={mentor.id} 
                    className="border-border hover:border-foreground/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center font-display font-bold text-xl text-foreground group-hover:scale-105 transition-transform flex-shrink-0">
                          {mentor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2 gap-2">
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-lg mb-1">{mentor.name}</CardTitle>
                              <p className="text-xs text-muted-foreground mb-2">
                                {mentor.role}
                              </p>
                            </div>
                            {mentor.available && (
                              <span className="inline-flex items-center gap-1 text-xs text-green-700 dark:text-green-400 whitespace-nowrap flex-shrink-0">
                                <CheckCircle2 className="w-3 h-3" />
                                Available
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {mentor.bio}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {mentor.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="inline-block bg-muted px-2.5 py-1 text-xs font-medium text-foreground/70 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          {(mentor.linkedin || mentor.twitter) && (
                            <div className="flex gap-2 mt-3">
                              {mentor.linkedin && (
                                <a
                                  href={mentor.linkedin}
                                  className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  <Linkedin className="w-4 h-4" />
                                </a>
                              )}
                              {mentor.twitter && (
                                <a
                                  href={mentor.twitter}
                                  className="text-muted-foreground hover:text-foreground transition-colors"
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
      </section>

      {/* Parallel Layout: Content Left, Form Right */}
      <section className="py-16 lg:py-24 border-b border-border bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column - Content */}
            <div className="lg:sticky lg:top-24">
              <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-4">
                Ready to Get Clarity?<br />
                <span className="text-muted-foreground">Book Your Session</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Take the first step. Fill out the form and we'll reach out to schedule your one-on-one session. No pressure- just a conversation that could change your career.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                All mentorship options are paid 30-minute sessions. Listed price is ₹799, currently available at a discounted price of <span className="font-semibold">₹500</span> per session—no matter which focus area you choose.
              </p>
              
              {/* Quick highlights */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Circle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" fill="currentColor" />
                  <div>
                    <p className="text-sm font-medium">Four focused session types</p>
                    <p className="text-xs text-muted-foreground">
                      Resume Review, One-on-One Career Mentorship, Mock Interview, Skill Set Analysis.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Circle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" fill="currentColor" />
                  <div>
                    <p className="text-sm font-medium">Transparent pricing</p>
                    <p className="text-xs text-muted-foreground">₹799 listed, currently ₹500 per 30-minute session</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Circle className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" fill="currentColor" />
                  <div>
                    <p className="text-sm font-medium">Tell us what you want to focus on</p>
                    <p className="text-xs text-muted-foreground">
                      In the form, mention which focus area you want for your 30-minute session.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Mentorship Request</CardTitle>
                </CardHeader>
                <CardContent>
                  <MentorshipBookingForm
                    mentors={mentors.map((m) => ({
                      id: m.id,
                      name: m.name,
                      role: m.role,
                    }))}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-20 text-center">
              How It Works
            </h2>
            
            <div className="relative">
              {/* Horizontal Timeline Line - Desktop */}
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-border" />
              
              {/* Steps Container */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-4 relative">
                {[
                  {
                    step: "1",
                    title: "Share Your Story",
                    description: "Fill out a simple form- tell us about yourself, your current situation, and what's on your mind. Don't worry about having all the answers; that's what we're here for.",
                  },
                  {
                    step: "2",
                    title: "We'll Connect With You",
                    description: "Within 24-48 hours, we'll reach out to schedule a time that works for you. No pressure, no sales pitch- just a genuine conversation.",
                  },
                  {
                    step: "3",
                    title: "Get the Clarity You Need",
                    description: "Have an honest conversation with your mentor. Ask questions, share your concerns, and walk away with a clearer direction and actionable next steps.",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    {/* Step Number Circle - Positioned on Timeline */}
                    <div className="flex flex-col items-center">
                      {/* Circle with number */}
                      <div className="relative z-10 w-20 h-20 rounded-full bg-foreground text-background flex items-center justify-center font-display font-bold text-2xl mb-8 border-4 border-background shadow-md">
                        {item.step}
                      </div>
                      
                      {/* Content Below Circle */}
                      <div className="text-center">
                        <h3 className="font-display font-bold text-xl lg:text-2xl mb-4">{item.title}</h3>
                        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-xs mx-auto">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Vertical Timeline Line - Mobile */}
              <div className="lg:hidden absolute left-10 top-0 bottom-0 w-px bg-border" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Mentorship;
