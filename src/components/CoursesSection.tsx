import CourseCard from "./CourseCard";

const courses = [
  {
    id: "product-management",
    title: "Product Management Fundamentals",
    outcome: "Go from idea to shipped product with frameworks used by top PMs.",
    status: "Live" as const,
  },
  {
    id: "data-analytics",
    title: "Data Analytics for Business",
    outcome: "Turn raw data into decisions. SQL, Python, and storytelling.",
    status: "Live" as const,
  },
  {
    id: "ux-design",
    title: "UX Design Essentials",
    outcome: "Design interfaces that users love. Research to prototype.",
    status: "Upcoming" as const,
  },
  {
    id: "career-strategy",
    title: "Career Strategy & Personal Branding",
    outcome: "Build leverage. Stand out. Land roles that matter.",
    status: "Upcoming" as const,
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-4">
            Courses
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Skill-focused programs. Real mentors. Tangible outcomes.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
