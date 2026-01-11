import CatEyeLogo from "./CatEyeLogo";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle diagonal lines background */}
      <div className="absolute inset-0 diagonal-stripes opacity-30" />
      
      {/* Abstract angular shapes */}
      <div className="absolute top-20 right-10 lg:right-32 w-px h-32 bg-foreground/20 rotate-45" />
      <div className="absolute bottom-32 left-10 lg:left-32 w-px h-48 bg-foreground/20 -rotate-12" />
      <div className="absolute top-1/3 left-1/4 w-24 h-px bg-foreground/10" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Cat Eye Logo */}
          <div className="mb-12 flex justify-center">
            <CatEyeLogo size={100} className="text-foreground" />
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight mb-6 animate-fade-up">
            Your Career Catalyst.
          </h1>

          {/* Subheadline */}
          <p className="font-display font-medium text-xl sm:text-2xl lg:text-3xl mb-4 animate-fade-up animation-delay-200" style={{ opacity: 0 }}>
            Learn skills. Build leverage. Move forward.
          </p>

          {/* Supporting text */}
          <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto mb-12 animate-fade-up animation-delay-400" style={{ opacity: 0 }}>
            Live courses and mentorship for real-world careers.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up animation-delay-600" style={{ opacity: 0 }}>
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
              className="inline-block bg-foreground text-background px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default Hero;
