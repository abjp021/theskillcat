import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MentorshipSection = () => {
  return (
    <section id="mentorship" className="pt-10 pb-20 lg:pt-16 lg:pb-28 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground mb-3">
            One-on-One Mentorship
          </p>

          <div className="inline-block w-full sm:w-auto">
            <div className="relative rounded-3xl bg-gradient-to-r from-foreground/10 via-foreground/5 to-transparent p-[1.5px]">
              <div className="h-full w-full rounded-[1.4rem] bg-muted/40 border border-border/70 shadow-sm px-6 py-7 sm:px-10 sm:py-8 text-left sm:text-center">
                <p className="text-base sm:text-lg font-display font-semibold mb-3">
                  Feeling stuck or confused about your next career move?
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  💬 No pressure, no judgment- just honest guidance from people who care about your success.
                </p>
                <p className="text-[11px] text-muted-foreground mb-4">
                  Share where you are, what you&apos;re aiming for, and we&apos;ll help you plan your next concrete step.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-background/70 text-[11px] text-muted-foreground border border-border/70">
                    Career clarity
                  </span>
                  <span className="px-3 py-1 rounded-full bg-background/70 text-[11px] text-muted-foreground border border-border/70">
                    Resume • Interviews • Skills
                  </span>
                  <span className="px-3 py-1 rounded-full bg-background/70 text-[11px] text-muted-foreground border border-border/70">
                    Students & working pros
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link to="/mentorship" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full bg-foreground text-background hover:opacity-90 group"
                    >
                      Book a Mentorship Session
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <p className="text-[11px] text-muted-foreground text-center sm:text-left">
                    1:1, 30-minute calls • Simple booking • Judgment-free space
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
