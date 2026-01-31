import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager at Meta",
    image: "SC",
    quote: "The Product Management course gave me frameworks I use daily. Landed my dream role 3 months after completing the program.",
    outcome: "Career transition: Marketing → Product Management",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Data Analyst at Stripe",
    image: "MJ",
    quote: "From zero SQL knowledge to analyzing real business problems. The mentorship was the game-changer.",
    outcome: "Salary increase: 45%",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "UX Designer at Airbnb",
    image: "PP",
    quote: "The portfolio I built during the course got me 5 interview offers. The community support was incredible.",
    outcome: "Career transition: Finance → UX Design",
  },
];

const SuccessStories = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="stories" className="py-8 sm:py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-6 sm:mb-8 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-1.5 sm:mb-2">
            Success Stories
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Real outcomes from real people. See how our students transformed their careers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-background border border-border p-4 sm:p-5 lg:p-6 transition-all duration-700 hover:shadow-lg ${
                gridVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Avatar */}
              <div className="mb-3 sm:mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-foreground text-background flex items-center justify-center font-display font-bold text-base sm:text-lg">
                  {testimonial.image}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-3 sm:mb-4">
                <p className="text-foreground text-xs sm:text-sm lg:text-base leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-border pt-3 sm:pt-4">
                <p className="font-display font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-[10px] sm:text-xs mb-1.5 sm:mb-2">
                  {testimonial.role}
                </p>
                <div className="inline-block bg-muted px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                  <p className="text-[10px] sm:text-xs font-medium text-foreground">
                    {testimonial.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
