import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: "breaking-into-product-management",
    title: "Breaking Into Product Management from a Non-Tech Background",
    excerpt:
      "You don’t need to start from zero. With the right projects, positioning, and narrative, you can move into PM even without a traditional tech background.",
    readTime: "7 min read",
    tag: "Career",
    date: "Jan 2026",
  },
  {
    id: "designing-your-career-roadmap",
    title: "Designing Your Career Roadmap for the Next 3 Years",
    excerpt:
      "If everything feels urgent, nothing really moves. Learn how to map skills, projects, and bets over the next few years so your work compounds.",
    readTime: "6 min read",
    tag: "Planning",
    date: "Jan 2026",
  },
];

const Blogs = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 lg:pt-32 pb-16 lg:pb-20 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Blog
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
              Articles to Help You Navigate Your Career
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              Deep dives, playbooks, and honest lessons from building products, mentoring professionals, and
              navigating messy real-world careers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link key={blog.id} to={`/blogs/${blog.id}`}>
                <Card className="h-full border-border hover:border-foreground/60 hover:shadow-lg transition-all duration-200 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <Badge variant="outline" className="text-[11px]">
                        {blog.tag}
                      </Badge>
                      <span className="text-[11px] text-muted-foreground">{blog.date}</span>
                    </div>
                    <CardTitle className="text-base sm:text-lg group-hover:text-foreground">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {blog.readTime} • Click to read
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blogs;

