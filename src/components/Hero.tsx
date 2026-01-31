import CatEyeLogo from "./CatEyeLogo";
import { BookOpen, Users, Video, Sparkles } from "lucide-react";

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

const Hero = () => {
  return (
    <section id="hero" className="pt-4 pb-8 sm:pt-6 sm:pb-12 md:pt-8 md:pb-16 lg:pt-12 lg:pb-20 flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle diagonal lines background */}
      <div className="absolute inset-0 diagonal-stripes opacity-30" />
      
      {/* Abstract angular shapes with yellow accents - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-20 right-10 lg:right-32 w-px h-32 bg-yellow-400/40 rotate-45" />
      <div className="hidden sm:block absolute bottom-32 left-10 lg:left-32 w-px h-48 bg-yellow-400/30 -rotate-12" />
      <div className="hidden sm:block absolute top-1/3 left-1/4 w-24 h-px bg-yellow-400/20" />
      {/* Yellow accent dots */}
      <div className="hidden sm:block absolute top-1/4 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
      {/* <div className="hidden sm:block absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-500 rounded-full" /> */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Cat Eye Logo */}
          <div className="mb-4 sm:mb-6 lg:mb-8 flex justify-center">
            <CatEyeLogo size={60} className="sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] text-foreground" />
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tight mb-3 sm:mb-4 animate-fade-up">
            Your Career Catalyst.
          </h1>

          {/* Subheadline */}
          <p className="font-display font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 animate-fade-up animation-delay-200" style={{ opacity: 0 }}>
            Learn skills. Build leverage. Move forward.
          </p>

          {/* Supporting text */}
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-0 animate-fade-up animation-delay-400" style={{ opacity: 0 }}>
            Live courses and mentorship for real-world careers.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up animation-delay-600 mb-6 sm:mb-8 lg:mb-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0" style={{ opacity: 0 }}>
            <a
              href="#courses"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("courses");
                if (element) {
                  const navHeight = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 sm:px-8 sm:py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 cursor-pointer text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 group-hover:text-yellow-300 transition-all relative z-10" />
              <span className="relative z-10">Explore Courses</span>
            </a>
            <a
              href="/mentorship"
              className="group inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-6 py-3 sm:px-8 sm:py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 hover:border-yellow-400/50 cursor-pointer bg-transparent hover:bg-foreground hover:text-background text-center"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 group-hover:text-yellow-300 transition-all" />
              <span>Book a Mentorship Session</span>
            </a>
            <a
              href="/webinars"
              className="group relative inline-flex items-center justify-center gap-2 border-2 border-yellow-400/60 text-foreground px-6 py-3 sm:px-8 sm:py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/30 hover:border-yellow-400 cursor-pointer bg-yellow-400/5 hover:bg-yellow-400/10 hover:text-foreground text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
              <Video className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 group-hover:text-yellow-500 transition-all relative z-10" />
              <span className="relative z-10">
                <span className="hidden sm:inline">Enroll in Our </span>
                <span className="font-semibold text-yellow-600 dark:text-yellow-400">Free</span>
                <span className="hidden sm:inline"> Webinars</span>
                <span className="sm:hidden"> Webinars</span>
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 animate-fade-up animation-delay-800 px-4 sm:px-0" style={{ opacity: 0 }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
                style={{
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="font-display font-bold text-xl sm:text-2xl lg:text-3xl mb-1 text-foreground group-hover:scale-105 group-hover:text-yellow-500 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default Hero;
