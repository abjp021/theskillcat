import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const location = useLocation();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // If we're on a different page, navigate first
    if (location.pathname !== "/") {
      window.location.href = `/#${targetId}`;
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80; // Height of fixed navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="font-display font-bold text-lg lg:text-xl tracking-tight">
            The Skill Cat
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#courses"
              onClick={(e) => handleSmoothScroll(e, "courses")}
              className="link-underline text-sm font-medium cursor-pointer"
            >
              Courses
            </a>
            <Link
              to="/mentorship"
              className="link-underline text-sm font-medium"
            >
              Mentorship
            </Link>
            <Link
              to="/blogs"
              className="link-underline text-sm font-medium"
            >
              Blogs
            </Link>
            <a
              href="#stories"
              onClick={(e) => handleSmoothScroll(e, "stories")}
              className="link-underline text-sm font-medium cursor-pointer"
            >
              Success Stories
            </a>
            <a
              href="#resources"
              onClick={(e) => handleSmoothScroll(e, "resources")}
              className="link-underline text-sm font-medium cursor-pointer"
            >
              Resources
            </a>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className="link-underline text-sm font-medium cursor-pointer"
            >
              FAQ
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#courses"
              onClick={(e) => handleSmoothScroll(e, "courses")}
              className="bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-foreground/90 hover:scale-105 cursor-pointer"
            >
              Start Learning
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
