import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

// Component to load and render HTML blog content
const BlogContent = ({ blogId }: { blogId: string }) => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogContent = async () => {
      try {
        setLoading(true);
        // Try to load HTML file from public/blog-posts directory
        const response = await fetch(`/blog-posts/${blogId}.html`);
        
        if (!response.ok) {
          // Fallback to default content if HTML file doesn't exist
          const blog = blogs.find((b) => b.id === blogId);
          if (blog) {
            // Render default content as HTML
            let defaultHtml = `<p class="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">${blog.intro}</p>`;
            defaultHtml += '<div class="space-y-8 text-base sm:text-lg leading-relaxed text-muted-foreground">';
            
            blog.sections.forEach((section) => {
              defaultHtml += `<section class="mb-8">`;
              defaultHtml += `<h2 class="font-display font-semibold text-xl sm:text-2xl text-foreground mb-4 mt-8">${section.heading}</h2>`;
              defaultHtml += '<div class="space-y-4">';
              section.body.forEach((para) => {
                defaultHtml += `<p class="leading-relaxed">${para}</p>`;
              });
              defaultHtml += '</div></section>';
            });
            
            defaultHtml += `<section class="mb-8">`;
            defaultHtml += `<h2 class="font-display font-semibold text-xl sm:text-2xl text-foreground mb-4 mt-8">Final Thoughts</h2>`;
            defaultHtml += `<p class="leading-relaxed">${blog.closing}</p>`;
            defaultHtml += '</section></div>';
            
            setHtmlContent(defaultHtml);
          } else {
            setError("Blog content not found");
          }
        } else {
          const html = await response.text();
          setHtmlContent(html);
        }
      } catch (err) {
        setError("Failed to load blog content");
        console.error("Error loading blog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      loadBlogContent();
    }
  }, [blogId]);

  if (loading) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  return (
    <div 
      className="blog-content prose prose-sm sm:prose-base lg:prose-lg max-w-none
        prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
        prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
        prose-a:text-foreground prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-foreground/80
        prose-strong:text-foreground prose-strong:font-semibold
        prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-ul:my-4 prose-ol:my-4
        prose-li:leading-relaxed prose-li:my-2 prose-li:ml-4
        prose-h2:mt-10 prose-h2:mb-5 prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:font-display prose-h2:font-bold
        prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:font-display prose-h3:font-semibold
        prose-blockquote:border-l-4 prose-blockquote:border-foreground/20 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-6 prose-blockquote:text-muted-foreground
        prose-code:text-foreground prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
        prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4 prose-pre:my-6
        prose-img:rounded-lg prose-img:my-6 prose-img:border prose-img:border-border
        prose-hr:border-border prose-hr:my-8"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

const BlogDetail = () => {
  const { blogId } = useParams();

  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <section className="pt-6 sm:pt-8 lg:pt-10 pb-20">
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
        <ScrollToTopButton />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground mb-5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blogs
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="text-xs border-foreground/20">
                {blog.tag}
              </Badge>
              <span className="text-xs text-muted-foreground">{blog.date}</span>
              <span className="text-xs text-muted-foreground">• {blog.readTime}</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-5 leading-tight">
              {blog.title}
            </h1>

            {/* Blog Content Container - loads HTML */}
            <BlogContent blogId={blogId || ""} />
          </div>
        </div>
      </article>

      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default BlogDetail;

