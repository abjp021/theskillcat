import { useState } from "react";
import CourseCard from "./CourseCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

type CourseStatus = "Live" | "Upcoming";
type FilterStatus = "All" | CourseStatus;

interface Course {
  id: string;
  title: string;
  outcome: string;
  status: CourseStatus;
  duration: string;
  price: string;
  rating: number;
  students: number;
  skills: string[];
  featured?: boolean;
  category: string;
}

const courses: Course[] = [
  {
    id: "product-management-ai",
    title: "Product Management with AI Specialisation",
    outcome: "Think like an AI-first Product Manager. Build AI products that work in the real world. Real industry playbook, not academic AI.",
    status: "Live",
    duration: "2 months",
    price: "₹19,999",
    rating: 4.9,
    students: 892,
    skills: ["AI Product Management", "AI PRDs", "ML Product Design", "Data Thinking", "GenAI Products"],
    featured: true,
    category: "Product",
  },
  {
    id: "technical-product-manager",
    title: "Technical Product Manager",
    outcome: "Production-Ready Technical Product Manager Bootcamp. No Coding. Real Systems Thinking. Read backend flows, design APIs, debug production issues.",
    status: "Live",
    duration: "2 months",
    price: "₹19,999",
    rating: 4.8,
    students: 756,
    skills: ["Technical PRDs", "API Design", "System Design", "Backend Flows", "Production Debugging"],
    featured: true,
    category: "Product",
  },
  {
    id: "product-management",
    title: "Product Management Fundamentals",
    outcome: "Go from idea to shipped product with frameworks used by top PMs at Google, Meta, and Stripe.",
    status: "Live",
    duration: "8 weeks",
    price: "₹14,999",
    rating: 4.9,
    students: 1240,
    skills: ["Product Strategy", "PRDs", "Prioritization", "User Research"],
    featured: false,
    category: "Product",
  },
  {
    id: "data-analytics",
    title: "Data Analytics for Business",
    outcome: "Turn raw data into decisions. Master SQL, Python, and data storytelling for real business impact.",
    status: "Upcoming",
    duration: "10 weeks",
    price: "₹12,999",
    rating: 4.8,
    students: 980,
    skills: ["SQL", "Python", "Data Visualization", "Business Intelligence"],
    category: "Data",
  },
  {
    id: "ux-design",
    title: "UX Design Essentials",
    outcome: "Design interfaces that users love. From research to prototype, build a portfolio that gets you hired.",
    status: "Upcoming",
    duration: "12 weeks",
    price: "₹15,999",
    rating: 0,
    students: 0,
    skills: ["User Research", "Figma", "Prototyping", "Design Systems"],
    category: "Design",
  },
  {
    id: "career-strategy",
    title: "Career Strategy & Personal Branding",
    outcome: "Build leverage. Stand out. Land roles that matter. Master the art of career positioning.",
    status: "Upcoming",
    duration: "6 weeks",
    price: "₹10,999",
    rating: 0,
    students: 0,
    skills: ["Personal Branding", "Networking", "Negotiation", "LinkedIn"],
    category: "Career",
  },
];

const CoursesSection = () => {
  const [filter, setFilter] = useState<FilterStatus>("All");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter((course) => course.status === filter);

  const featuredCourses = filteredCourses.filter((course) => course.featured);
  const regularCourses = filteredCourses.filter((course) => !course.featured);

  return (
    <section id="courses" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-2xl mb-6 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-2">
            Courses
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Skill-focused programs. Real mentors. Tangible outcomes.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap gap-3 mb-8 transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Button
            variant={filter === "All" ? "default" : "outline"}
            onClick={() => setFilter("All")}
            className="border-foreground"
          >
            All Courses
          </Button>
          <Button
            variant={filter === "Live" ? "default" : "outline"}
            onClick={() => setFilter("Live")}
            className="border-foreground"
          >
            Live Now
          </Button>
          <Button
            variant={filter === "Upcoming" ? "default" : "outline"}
            onClick={() => setFilter("Upcoming")}
            className="border-foreground"
          >
            Upcoming
          </Button>
        </div>

        {/* Featured Courses */}
        {featuredCourses.length > 0 && (
          <div className="mb-8">
            <h3 className="font-display font-semibold text-lg mb-4 text-muted-foreground uppercase tracking-wider">
              Featured
            </h3>
            <div
              ref={gridRef}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {featuredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className={`transition-all duration-700 h-full ${
                    gridVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Courses Grid */}
        {regularCourses.length > 0 && (
          <div>
            {featuredCourses.length > 0 && (
              <h3 className="font-display font-semibold text-lg mb-4 text-muted-foreground uppercase tracking-wider">
                All Courses
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {regularCourses.map((course, index) => (
                <div
                  key={course.id}
                  className={`transition-all duration-700 h-full ${
                    gridVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: gridVisible
                      ? `${(featuredCourses.length + index) * 100}ms`
                      : "0ms",
                  }}
                >
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No courses found for this filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
