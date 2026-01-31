import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
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

      <section className="pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6 lg:pb-8 border-b border-border relative overflow-hidden">
        {/* Decorative background elements with yellow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/8 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-yellow-400" />
              <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Blog
              </p>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 sm:mb-5">
              Articles to Help You Navigate Your Career
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Deep dives, playbooks, and honest lessons from building products, mentoring professionals, and
              navigating messy real-world careers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {blogs.map((blog, index) => (
              <Link key={blog.id} to={`/blogs/${blog.id}`}>
                <Card className="h-full border-border/50 hover:border-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 group overflow-hidden relative bg-card">
                  {/* Decorative accent with yellow */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/60 via-yellow-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <CardHeader className="pb-3 p-5">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <Badge variant="outline" className="text-[11px] border-foreground/20 group-hover:border-yellow-400/50 transition-colors">
                        {blog.tag}
                      </Badge>
                      <span className="text-[11px] text-muted-foreground">{blog.date}</span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-foreground transition-colors leading-tight mb-2">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      <span>{blog.readTime}</span>
                      <span>•</span>
                      <span className="underline underline-offset-2 group-hover:text-yellow-400 transition-colors">Read article</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default Blogs;

