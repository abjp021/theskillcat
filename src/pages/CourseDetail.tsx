import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const courseData: Record<string, {
  title: string;
  promise: string;
  status: "Live" | "Upcoming";
  gains: string[];
  audience: string[];
  mentors: { name: string; role: string }[];
}> = {
  "product-management": {
    title: "Product Management Fundamentals",
    promise: "Go from idea to shipped product in 8 weeks.",
    status: "Live",
    gains: [
      "Master product discovery and validation frameworks",
      "Write PRDs that engineering teams actually use",
      "Prioritize ruthlessly with data-driven methods",
      "Ship your first product with real users",
    ],
    audience: [
      "Aspiring PMs transitioning from other roles",
      "Founders building their first product",
      "Engineers wanting to move into product",
    ],
    mentors: [
      { name: "Sarah Chen", role: "Ex-Google PM" },
      { name: "Marcus Johnson", role: "Product Lead, Series B Startup" },
    ],
  },
  "data-analytics": {
    title: "Data Analytics for Business",
    promise: "Turn raw data into business decisions in 6 weeks.",
    status: "Live",
    gains: [
      "Write SQL queries that answer real business questions",
      "Build dashboards that drive action",
      "Tell stories with data that executives understand",
      "Python fundamentals for data manipulation",
    ],
    audience: [
      "Marketing and ops professionals",
      "Business analysts wanting deeper skills",
      "Anyone making decisions with spreadsheets",
    ],
    mentors: [
      { name: "Alex Rivera", role: "Data Science Manager, Fortune 500" },
      { name: "Priya Sharma", role: "Analytics Lead, E-commerce" },
    ],
  },
  "ux-design": {
    title: "UX Design Essentials",
    promise: "Design interfaces users love in 10 weeks.",
    status: "Upcoming",
    gains: [
      "Conduct user research that reveals real needs",
      "Create wireframes and interactive prototypes",
      "Master Figma from basics to advanced",
      "Build a portfolio-ready case study",
    ],
    audience: [
      "Career switchers interested in design",
      "Developers wanting design skills",
      "Marketers moving into product roles",
    ],
    mentors: [
      { name: "Jordan Lee", role: "Design Director, Tech Unicorn" },
      { name: "Emma Williams", role: "Senior UX Designer, Agency" },
    ],
  },
  "career-strategy": {
    title: "Career Strategy & Personal Branding",
    promise: "Build leverage and land roles that matter in 4 weeks.",
    status: "Upcoming",
    gains: [
      "Define your unique professional positioning",
      "Build a personal brand that attracts opportunities",
      "Network strategically, not awkwardly",
      "Negotiate compensation with confidence",
    ],
    audience: [
      "Early-career professionals feeling stuck",
      "Anyone preparing for their next career move",
      "Professionals wanting to increase visibility",
    ],
    mentors: [
      { name: "David Kim", role: "Career Coach, Ex-McKinsey" },
      { name: "Lisa Thompson", role: "Talent Director, Big Tech" },
    ],
  },
};

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? courseData[courseId] : null;

  if (!course) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-display font-bold text-3xl mb-4">Course Not Found</h1>
          <Link to="/" className="link-underline">
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            {/* Status */}
            <span className="inline-block border border-foreground px-3 py-1 text-xs font-medium tracking-wider uppercase mb-8">
              {course.status}
            </span>

            {/* Title */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
              {course.title}
            </h1>

            {/* Promise */}
            <p className="text-lg lg:text-xl text-muted-foreground mb-10">
              {course.promise}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-foreground text-background px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105">
                {course.status === "Live" ? "Join Batch" : "Get Notified"}
              </button>
              <button className="border border-foreground px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:bg-foreground hover:text-background">
                View Curriculum
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-display font-bold text-2xl tracking-tight">
                What you'll gain
              </h2>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-6">
                {course.gains.map((gain, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-6 h-6 border border-foreground flex items-center justify-center text-xs font-medium flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-base lg:text-lg">{gain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-display font-bold text-2xl tracking-tight">
                Who it's for
              </h2>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-4">
                {course.audience.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-foreground flex-shrink-0" />
                    <span className="text-base lg:text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section id="mentors" className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-display font-bold text-2xl tracking-tight">
                Your mentors
              </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {course.mentors.map((mentor, index) => (
                  <div key={index} className="border border-border p-6">
                    {/* Placeholder for headshot */}
                    <div className="w-16 h-16 bg-muted mb-4" />
                    <h3 className="font-display font-semibold text-lg mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{mentor.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CourseDetail;
