import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LaunchOfferStrip from "./LaunchOfferStrip";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll to section on mount if hash exists
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const targetId = location.hash.substring(1);
      // Use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        setTimeout(() => {
          scrollToSection(targetId);
        }, 100);
      });
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (targetId: string) => {
    // Try multiple times in case element isn't ready
    const attemptScroll = (attempts = 0) => {
      const element = document.getElementById(targetId);
      if (element) {
        const nav = document.querySelector('nav');
        const navHeight = nav ? nav.offsetHeight : 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      } else if (attempts < 5) {
        // Retry if element not found (might still be rendering)
        setTimeout(() => attemptScroll(attempts + 1), 100);
      }
    };
    attemptScroll();
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // If we're on a different page, navigate first
    if (location.pathname !== "/") {
      // Use window.location for hash navigation to ensure browser handles it
      window.location.href = `/#${targetId}`;
      return;
    }

    // On same page, scroll immediately
    scrollToSection(targetId);
  };

  const navLinks = [
    { href: "#courses", label: "Courses", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, "courses") },
    { href: "/mentorship", label: "Mentorship", isLink: true },
    { href: "/webinars", label: "Webinars", isLink: true },
    { href: "/blogs", label: "Blogs", isLink: true },
    { href: "#stories", label: "Success Stories", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, "stories") },
    { href: "#resources", label: "Resources", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, "resources") },
    { href: "#faq", label: "FAQ", onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, "faq") },
  ];

  return (
    <>
      <LaunchOfferStrip />
      <nav className="sticky top-[2.5rem] left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                const heroElement = document.getElementById("hero");
                if (heroElement) {
                  const nav = document.querySelector('nav');
                  const strip = document.querySelector('[class*="LaunchOfferStrip"]');
                  const stripHeight = strip ? strip.getBoundingClientRect().height : 0;
                  const navHeight = nav ? nav.offsetHeight : 80;
                  const totalOffset = stripHeight + navHeight;
                  const elementPosition = heroElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

                  window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: "smooth",
                  });
                }
              }
            }}
            className="font-display font-bold text-base sm:text-lg lg:text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            The Skill Cat
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) =>
              link.isLink ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="link-underline text-sm font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={link.onClick}
                  className="link-underline text-sm font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            <a
              href="#courses"
              onClick={(e) => handleSmoothScroll(e, "courses")}
              className="hidden sm:inline-block bg-foreground text-background px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-foreground/90 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20 cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Start Learning</span>
            </a>
            
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button className="p-2 -mr-2">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Open menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[300px]">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) =>
                    link.isLink ? (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-medium hover:text-foreground/80 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={link.onClick}
                        className="text-base font-medium hover:text-foreground/80 transition-colors"
                      >
                        {link.label}
                      </a>
                    )
                  )}
                  <a
                    href="#courses"
                    onClick={(e) => handleSmoothScroll(e, "courses")}
                    className="bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-foreground/90 cursor-pointer text-center"
                  >
                    Start Learning
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navigation;
