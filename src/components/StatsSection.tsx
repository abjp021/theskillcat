import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  {
    value: "2,500+",
    label: "Students Enrolled",
  },
  {
    value: "89%",
    label: "Career Transition",
  },
  {
    value: "₹36L",
    label: "Avg Salary Increase",
  },
  {
    value: "4.9/5",
    label: "Student Rating",
  },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="stats" className="py-8 lg:py-12 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`flex flex-wrap items-center justify-center gap-8 lg:gap-12 xl:gap-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                animation: isVisible ? `float 3s ease-in-out infinite` : "none",
                animationDelay: isVisible ? `${index * 0.2}s` : "0s",
              }}
            >
              <div className="font-display font-bold text-2xl lg:text-3xl mb-1 text-foreground group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
