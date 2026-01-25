import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Target, MessageSquare, Sparkles } from "lucide-react";

const featuredMentors = [
  {
    name: "Industry Expert",
    role: "AI Product Manager, EV & Operations",
    expertise: ["AI Products", "Operations", "Data-Driven Growth"],
    available: true,
  },
  {
    name: "Technical Lead",
    role: "Technical Product Manager, Infra + Ops",
    expertise: ["System Design", "APIs", "Production Systems"],
    available: true,
  },
];

const MentorshipSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="mentorship" className="py-12 lg:py-16 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Parallel Layout: Content Left, Visual Right */}
        <div
          ref={headerRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column - Main Content */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-foreground" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                One-on-One Support
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-3">
              Unsure About Your Career? We've Got You Covered
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg mb-3">
              Feeling lost or uncertain about your next steps? Don't worry- everyone feels that way at some point.
            </p>
            <p className="text-muted-foreground text-sm lg:text-base mb-4">
              Get personalized guidance from industry experts. Discuss your career goals, get honest feedback, and create a clear path forward- all in a safe, judgment-free space.
            </p>
            <Link to="/mentorship">
              <Button
                size="lg"
                className="bg-foreground text-background hover:opacity-90 group"
              >
                Book a Session
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Right Column - Benefits & Mentors in Parallel */}
          <div className="space-y-6">
            {/* Benefits - Vertical Stack */}
            <div className="space-y-3">
              <div className="group p-4 border border-border rounded-lg bg-background hover:border-foreground/50 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base mb-1">Personalized Guidance</h3>
                    <p className="text-muted-foreground text-sm">
                      No one-size-fits-all advice. Get tailored guidance that fits your unique situation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-4 border border-border rounded-lg bg-background hover:border-foreground/50 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base mb-1">Career Clarity</h3>
                    <p className="text-muted-foreground text-sm">
                      Stop second-guessing yourself. Get clarity on your career direction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-4 border border-border rounded-lg bg-background hover:border-foreground/50 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base mb-1">A Safe Space</h3>
                    <p className="text-muted-foreground text-sm">
                      Ask any question, share your doubts- no judgment, just support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Mentors - Vertical Stack */}
            <div>
              <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                Featured Mentors
              </h3>
              <div className="space-y-3">
                {featuredMentors.map((mentor, index) => (
                  <Card
                    key={index}
                    className="border-border hover:border-foreground/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center font-display font-bold text-lg text-foreground group-hover:scale-105 transition-transform flex-shrink-0">
                          {mentor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-base mb-1">{mentor.name}</CardTitle>
                          <p className="text-xs text-muted-foreground mb-2">
                            {mentor.role}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {mentor.expertise.slice(0, 2).map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="inline-block bg-muted px-2 py-0.5 text-xs font-medium text-foreground/70 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
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
  );
};

export default MentorshipSection;
