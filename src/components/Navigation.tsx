import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
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
            <a href="#courses" className="link-underline text-sm font-medium">
              Courses
            </a>
            <a href="#about" className="link-underline text-sm font-medium">
              About
            </a>
            <a href="#mentors" className="link-underline text-sm font-medium">
              Mentors
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/#courses"
              className="bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-foreground/90 hover:scale-105"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
