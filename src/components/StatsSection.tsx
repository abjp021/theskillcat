import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    value: "2,500+",
    label: "Students Enrolled",
    description: "Active learners building careers",
  },
  {
    value: "89%",
    label: "Career Transition Rate",
    description: "Land roles in new fields",
  },
  {
    value: "₹36L",
    label: "Average Salary Increase",
    description: "Post-program compensation boost",
  },
  {
    value: "4.9/5",
    label: "Student Rating",
    description: "Based on 500+ reviews",
  },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-10 lg:py-14 bg-background border-y border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="font-display font-bold text-3xl lg:text-4xl mb-2">
                {stat.value}
              </div>
              <div className="font-display font-semibold text-sm lg:text-base mb-1">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-xs">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
