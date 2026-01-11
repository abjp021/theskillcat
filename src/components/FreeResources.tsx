import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Career Path Guide: Product Management",
    type: "Guide",
    description: "Complete roadmap from beginner to PM, including skills, timeline, and job search strategies.",
    readTime: "15 min read",
  },
  {
    id: 2,
    title: "Salary Negotiation Playbook",
    type: "Playbook",
    description: "Proven frameworks to negotiate your best offer. Real scripts and tactics.",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Resume Template Library",
    type: "Templates",
    description: "ATS-friendly templates for tech roles. Download and customize for your field.",
    readTime: "Download",
  },
  {
    id: 4,
    title: "Career Transition Calculator",
    type: "Tool",
    description: "Calculate your transition timeline, costs, and ROI for switching careers.",
    readTime: "Interactive",
  },
];

const FreeResources = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="resources" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-4">
            Free Resources
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Start building your career today. No signup required.
          </p>
        </div>

        {/* Resources Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {resources.map((resource, index) => (
            <a
              key={resource.id}
              href="#"
              className={`group bg-muted/30 border border-border p-6 lg:p-8 transition-all duration-300 hover:border-foreground hover:shadow-lg ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block bg-background px-3 py-1 rounded-full text-xs font-medium">
                  {resource.type}
                </span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-display font-semibold text-lg lg:text-xl mb-3 group-hover:text-foreground transition-colors">
                {resource.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {resource.description}
              </p>
              <p className="text-xs text-muted-foreground">{resource.readTime}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
