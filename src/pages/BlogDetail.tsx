import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const blogs = [
  {
    id: "breaking-into-product-management",
    title: "Breaking Into Product Management from a Non-Tech Background",
    readTime: "7 min read",
    tag: "Career",
    date: "Jan 2026",
    intro:
      "You don’t need a computer science degree or a fancy title to break into product management. What you do need is proof that you can understand users, work with tech and business, and ship outcomes- not just features.",
    sections: [
      {
        heading: "1. Start by Owning a Problem, Not a Title",
        body: [
          "Most people wait for a PM title before they start acting like a PM. That’s backwards.",
          "Pick a real problem in your current role (or in a side project), talk to the people who feel that pain, and design a small solution. Document how you discovered the problem, what you tried, and what changed.",
        ],
      },
      {
        heading: "2. Build a Small, Real Portfolio- Not Pretty Case Studies",
        body: [
          "Instead of 10 Dribbble-style case studies, aim for 2–3 solid, real stories:",
          "- A process you improved",
          "- A dashboard or workflow you helped design",
          "- A small feature you shipped with measurable impact",
          "Show your thinking, trade-offs, and results. That’s what hiring managers look for.",
        ],
      },
      {
        heading: "3. Translate Your Current Experience into PM Language",
        body: [
          "You might already be doing PM-adjacent work without calling it that. Operations, support, sales, and analytics roles all touch real problems and users.",
          "Rewrite your resume bullets to highlight:",
          "- Problems you identified",
          "- Decisions you influenced",
          "- Metrics you moved",
        ],
      },
    ],
    closing:
      "You don’t have to pause your career to ‘switch’ into product. Start acting like a PM where you are today, collect proof, and use that to make your next move.",
  },
  {
    id: "designing-your-career-roadmap",
    title: "Designing Your Career Roadmap for the Next 3 Years",
    readTime: "6 min read",
    tag: "Planning",
    date: "Jan 2026",
    intro:
      "Careers rarely follow a straight line, but that doesn’t mean you should drift. A simple 3-year roadmap helps you decide what to learn, which projects to chase, and what to politely ignore.",
    sections: [
      {
        heading: "1. Start with an Honest Audit of Where You Are",
        body: [
          "Before you plan the next three years, write down where you actually are- skills, projects, energy levels, and constraints.",
          "List the kind of work that gives you energy, the work that drains you, and the kind of problems you want to be trusted with.",
        ],
      },
      {
        heading: "2. Define One Direction, Not a Perfect Destination",
        body: [
          "Instead of picking a single dream role, define a direction: for example, 'product roles close to engineering' or 'data-heavy roles that own outcomes'.",
          "This gives you room to adjust while still knowing what to say no to.",
        ],
      },
      {
        heading: "3. Break 3 Years into Skills, Projects, and Bets",
        body: [
          "For each year, pick a small number of skills to deepen, projects to pursue, and 'bets' you want to place (like a lateral move or a new domain).",
          "Your roadmap should fit on a single page. If it doesn’t, you won’t use it.",
        ],
      },
    ],
    closing:
      "A good roadmap doesn’t guarantee a specific job, but it makes sure your effort compounds. Review it every few months, adjust, and keep moving in the same general direction.",
  },
];

const BlogDetail = () => {
  const { blogId } = useParams();

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-28 lg:pt-32 pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-sm text-muted-foreground mb-4">This blog was not found.</p>
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline underline-offset-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to blogs
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-28 lg:pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blogs
            </Link>

            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="text-[11px]">
                {blog.tag}
              </Badge>
              <span className="text-[11px] text-muted-foreground">{blog.date}</span>
              <span className="text-[11px] text-muted-foreground">• {blog.readTime}</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
              {blog.title}
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground mb-8">{blog.intro}</p>

            <div className="space-y-8 text-sm sm:text-base leading-relaxed text-muted-foreground">
              {blog.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-3">
                    {section.heading}
                  </h2>
                  <div className="space-y-3">
                    {section.body.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section>
                <h2 className="font-display font-semibold text-lg sm:text-xl text-foreground mb-3">
                  Final Thoughts
                </h2>
                <p>{blog.closing}</p>
              </section>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogDetail;

