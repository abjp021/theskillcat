import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    question: "How long are the courses?",
    answer: "Our courses range from 8-12 weeks, with 2-3 live sessions per week plus self-paced assignments. Each course is designed to fit around a full-time job schedule.",
  },
  {
    id: 2,
    question: "Do I need prior experience?",
    answer: "No prior experience required. Our courses are designed for career changers and beginners. We start with fundamentals and build up to industry-level skills.",
  },
  {
    id: 3,
    question: "What kind of mentorship do you provide?",
    answer: "You'll get 1-on-1 mentorship sessions with industry professionals, group office hours, and access to a community of peers. Mentors provide career guidance, portfolio reviews, and interview prep.",
  },
  {
    id: 4,
    question: "What's the job placement rate?",
    answer: "89% of our students land roles in their target field within 6 months of completing the program. We provide job search support, interview prep, and networking opportunities.",
  },
  {
    id: 5,
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes. We offer a 30-day money-back guarantee. If you're not satisfied with the course quality, we'll refund your payment in full.",
  },
  {
    id: 6,
    question: "Are the courses live or recorded?",
    answer: "Our courses are primarily live with experienced instructors. All sessions are recorded so you can review them later, but the live interaction and Q&A are key to the experience.",
  },
];

const FAQSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: accordionRef, isVisible: accordionVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Everything you need to know about our programs.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          ref={accordionRef}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            accordionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="border-border">
                <AccordionTrigger className="text-left font-display font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
