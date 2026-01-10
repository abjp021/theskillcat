import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer ref={ref} className="border-t border-border py-16 lg:py-20 bg-background">
      <div
        className={`container mx-auto px-6 lg:px-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            <Link to="/" className="font-display font-bold text-xl tracking-tight">
              The Skill Cat
            </Link>
            <p className="text-muted-foreground text-sm mt-4 max-w-xs leading-relaxed">
              Your career catalyst. Building skills that matter for careers that last.
            </p>
          </div>

          {/* Programs */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-6">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/course/product-management" className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Product Management
                </Link>
              </li>
              <li>
                <Link to="/course/data-analytics" className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/course/ux-design" className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors">
                  UX Design
                </Link>
              </li>
              <li>
                <Link to="/course/career-strategy" className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Career Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@theskillcat.com" className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors">
                  hello@theskillcat.com
                </a>
              </li>
              <li>
                <a href="#" className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
        >
          <p className="text-muted-foreground text-xs">
            © 2024 The Skill Cat. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
