import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const sampleBlogs = [
  {
    id: "breaking-into-product-management",
    title: "Breaking Into Product Management from a Non-Tech Background",
    excerpt:
      "You don’t need a CS degree to build and ship great products. Here’s a practical roadmap to move into PM without starting from zero.",
    readTime: "7 min read",
    tag: "Career",
    date: "Jan 2026",
  },
  {
    id: "designing-your-career-roadmap",
    title: "Designing Your Career Roadmap for the Next 3 Years",
    excerpt:
      "Most professionals drift from role to role. Here’s how to create a simple, honest roadmap so you know what to say yes and no to.",
    readTime: "6 min read",
    tag: "Planning",
    date: "Jan 2026",
  },
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-12 lg:py-20 border-t border-border bg-muted/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Insights & Stories
            </p>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
              Blogs for Early & Mid-Career Professionals
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl">
              Short, practical pieces on careers, skills, and interviews- written from real industry experience.
            </p>
          </div>
          <Link
            to="/blogs"
            className="hidden sm:inline-flex text-xs font-medium text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            View all blogs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleBlogs.map((blog) => (
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

        <div className="mt-6 sm:hidden text-center">
          <Link
            to="/blogs"
            className="text-xs font-medium text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            View all blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;

