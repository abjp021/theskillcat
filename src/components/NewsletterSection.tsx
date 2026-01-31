import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-2 sm:mb-3">
            Get Career Insights Weekly
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-xl mx-auto px-4 sm:px-0">
            Join 10,000+ professionals getting actionable career advice, industry trends, and exclusive resources.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto px-4 sm:px-0">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background text-sm sm:text-base h-11 sm:h-auto"
            />
            <Button
              type="submit"
              className="bg-foreground text-background hover:opacity-90 h-11 sm:h-auto w-full sm:w-auto"
              disabled={submitted}
            >
              {submitted ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>

          <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
