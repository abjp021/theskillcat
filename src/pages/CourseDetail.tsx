import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Users,
  Star,
  CheckCircle2,
  Calendar,
  BookOpen,
  Award,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  Linkedin,
  Twitter,
} from "lucide-react";

interface CourseData {
  title: string;
  promise: string;
  status: "Live" | "Upcoming";
  duration: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  nextBatch?: string;
  gains: string[];
  audience: string[];
  mentors: {
    name: string;
    role: string;
    bio?: string;
    linkedin?: string;
    twitter?: string;
    image?: string;
  }[];
  curriculum: {
    week: number;
    title: string;
    topics: string[];
  }[];
  skills: string[];
  testimonials: {
    name: string;
    role: string;
    image: string;
    quote: string;
    rating: number;
  }[];
  highlights: string[];
}

const courseData: Record<string, CourseData> = {
  "product-management": {
    title: "Product Management Fundamentals",
    promise: "Go from idea to shipped product in 8 weeks.",
    status: "Live",
    duration: "8 weeks",
    price: "₹14,999",
    originalPrice: "₹19,999",
    rating: 4.9,
    reviews: 247,
    nextBatch: "March 15, 2024",
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
      {
        name: "Sarah Chen",
        role: "Ex-Google PM",
        bio: "10+ years building products at Google, Meta, and Stripe. Led teams that shipped products used by millions.",
        linkedin: "#",
        twitter: "#",
      },
      {
        name: "Marcus Johnson",
        role: "Product Lead, Series B Startup",
        bio: "Product leader who scaled a startup from 0 to ₹400 Cr ARR. Expert in B2B SaaS and growth products.",
        linkedin: "#",
      },
    ],
    curriculum: [
      {
        week: 1,
        title: "Product Discovery & User Research",
        topics: [
          "Understanding user needs and pain points",
          "Conducting effective user interviews",
          "Creating user personas and journey maps",
          "Competitive analysis frameworks",
        ],
      },
      {
        week: 2,
        title: "Product Strategy & Roadmapping",
        topics: [
          "Defining product vision and strategy",
          "OKR framework for product teams",
          "Building product roadmaps",
          "Stakeholder alignment techniques",
        ],
      },
      {
        week: 3,
        title: "Writing PRDs & Specs",
        topics: [
          "PRD structure and best practices",
          "Writing clear acceptance criteria",
          "Technical specifications collaboration",
          "Documentation for distributed teams",
        ],
      },
      {
        week: 4,
        title: "Prioritization & Decision Making",
        topics: [
          "RICE, ICE, and other prioritization frameworks",
          "Data-driven decision making",
          "Balancing user needs vs business goals",
          "Saying no to feature requests",
        ],
      },
      {
        week: 5,
        title: "Working with Engineering",
        topics: [
          "Agile and Scrum methodologies",
          "Sprint planning and retrospectives",
          "Technical debt management",
          "Building trust with engineering teams",
        ],
      },
      {
        week: 6,
        title: "Metrics & Analytics",
        topics: [
          "Defining success metrics",
          "Setting up analytics dashboards",
          "A/B testing fundamentals",
          "Interpreting data and making decisions",
        ],
      },
      {
        week: 7,
        title: "Launch & Go-to-Market",
        topics: [
          "Launch planning and execution",
          "Beta testing and feedback loops",
          "Marketing and positioning",
          "Post-launch optimization",
        ],
      },
      {
        week: 8,
        title: "Capstone Project",
        topics: [
          "Build and ship your own product",
          "Present to real users and stakeholders",
          "Portfolio building",
          "Career transition guidance",
        ],
      },
    ],
    skills: ["Product Strategy", "PRDs", "Prioritization", "User Research", "Metrics", "Agile"],
    testimonials: [
      {
        name: "Alex Rodriguez",
        role: "Product Manager at Stripe",
        image: "AR",
        quote: "This course gave me everything I needed to transition from engineering to product. Landed my PM role 2 months after completion.",
        rating: 5,
      },
      {
        name: "Jessica Park",
        role: "Senior PM at Airbnb",
        image: "JP",
        quote: "The frameworks are real-world tested. I use them daily in my role. Best investment in my career.",
        rating: 5,
      },
    ],
    highlights: [
      "Live sessions with industry PMs",
      "1-on-1 mentorship included",
      "Real product case studies",
      "Portfolio project with feedback",
      "Job search support",
      "Lifetime access to materials",
    ],
  },
  "data-analytics": {
    title: "Data Analytics for Business",
    promise: "Turn raw data into business decisions in 10 weeks.",
    status: "Upcoming",
    duration: "10 weeks",
    price: "₹12,999",
    originalPrice: "₹17,999",
    rating: 4.8,
    reviews: 189,
    nextBatch: "March 20, 2024",
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
      {
        name: "Alex Rivera",
        role: "Data Science Manager, Fortune 500",
        bio: "15+ years in data analytics. Built analytics teams at multiple Fortune 500 companies.",
        linkedin: "#",
      },
      {
        name: "Priya Sharma",
        role: "Analytics Lead, E-commerce",
        bio: "Expert in e-commerce analytics and growth metrics. Helped scale multiple online businesses.",
        linkedin: "#",
        twitter: "#",
      },
    ],
    curriculum: [
      {
        week: 1,
        title: "SQL Fundamentals",
        topics: ["Database basics", "SELECT queries", "JOINs and aggregations", "Subqueries"],
      },
      {
        week: 2,
        title: "Advanced SQL",
        topics: ["Window functions", "CTEs", "Performance optimization", "Complex business logic"],
      },
      {
        week: 3,
        title: "Data Visualization",
        topics: ["Tableau basics", "Dashboard design", "Chart selection", "Storytelling with data"],
      },
      {
        week: 4,
        title: "Python for Analytics",
        topics: ["Pandas basics", "Data cleaning", "Exploratory analysis", "Automation"],
      },
      {
        week: 5,
        title: "Statistical Analysis",
        topics: ["Descriptive statistics", "Hypothesis testing", "Regression analysis", "A/B testing"],
      },
      {
        week: 6,
        title: "Business Metrics",
        topics: ["KPIs and OKRs", "Cohort analysis", "Funnel analysis", "Retention metrics"],
      },
      {
        week: 7,
        title: "Advanced Analytics",
        topics: ["Predictive modeling", "Time series analysis", "Customer segmentation", "Churn prediction"],
      },
      {
        week: 8,
        title: "Data Storytelling",
        topics: ["Executive presentations", "Building narratives", "Visual design", "Persuasion techniques"],
      },
      {
        week: 9,
        title: "Capstone Project",
        topics: ["Real business problem", "End-to-end analysis", "Dashboard creation", "Presentation"],
      },
      {
        week: 10,
        title: "Career & Portfolio",
        topics: ["Portfolio building", "Interview prep", "Resume optimization", "Networking"],
      },
    ],
    skills: ["SQL", "Python", "Data Visualization", "Statistics", "Business Intelligence", "Tableau"],
    testimonials: [
      {
        name: "Michael Chen",
        role: "Data Analyst at Amazon",
        image: "MC",
        quote: "Went from Excel to SQL and Python in 10 weeks. The practical projects were exactly what I needed.",
        rating: 5,
      },
    ],
    highlights: [
      "Hands-on SQL and Python practice",
      "Real business datasets",
      "Portfolio projects",
      "1-on-1 code reviews",
      "Job search support",
      "Lifetime access to materials",
    ],
  },
  "ux-design": {
    title: "UX Design Essentials",
    promise: "Design interfaces users love in 12 weeks.",
    status: "Upcoming",
    duration: "12 weeks",
    price: "₹15,999",
    originalPrice: "₹19,999",
    rating: 0,
    reviews: 0,
    nextBatch: "April 1, 2024",
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
      {
        name: "Jordan Lee",
        role: "Design Director, Tech Unicorn",
        bio: "Led design at multiple unicorn startups. Expert in product design and design systems.",
        linkedin: "#",
        twitter: "#",
      },
      {
        name: "Emma Williams",
        role: "Senior UX Designer, Agency",
        bio: "10+ years designing for Fortune 500 clients. Specializes in enterprise UX and accessibility.",
        linkedin: "#",
      },
    ],
    curriculum: [
      {
        week: 1,
        title: "Design Fundamentals",
        topics: ["Design principles", "Typography", "Color theory", "Layout basics"],
      },
      {
        week: 2,
        title: "User Research",
        topics: ["User interviews", "Surveys", "Personas", "Journey mapping"],
      },
      {
        week: 3,
        title: "Information Architecture",
        topics: ["Sitemaps", "User flows", "Card sorting", "Navigation design"],
      },
      {
        week: 4,
        title: "Wireframing",
        topics: ["Low-fidelity wireframes", "Paper prototyping", "Sketching techniques", "Feedback loops"],
      },
      {
        week: 5,
        title: "Figma Basics",
        topics: ["Interface overview", "Components", "Styles", "Collaboration"],
      },
      {
        week: 6,
        title: "High-Fidelity Design",
        topics: ["Visual design", "Design systems", "Component libraries", "Responsive design"],
      },
      {
        week: 7,
        title: "Prototyping",
        topics: ["Interactive prototypes", "Micro-interactions", "Animation", "User testing"],
      },
      {
        week: 8,
        title: "Usability Testing",
        topics: ["Test planning", "Moderation", "Analysis", "Iteration"],
      },
      {
        week: 9,
        title: "Advanced Figma",
        topics: ["Auto-layout", "Variants", "Plugins", "Design tokens"],
      },
      {
        week: 10,
        title: "Portfolio Case Study",
        topics: ["Project selection", "Storytelling", "Presentation", "Portfolio site"],
      },
      {
        week: 11,
        title: "Design Systems",
        topics: ["Component design", "Documentation", "Maintenance", "Scaling"],
      },
      {
        week: 12,
        title: "Career & Portfolio",
        topics: ["Portfolio review", "Interview prep", "Design challenges", "Networking"],
      },
    ],
    skills: ["User Research", "Figma", "Prototyping", "Design Systems", "Usability Testing", "Portfolio"],
    testimonials: [],
    highlights: [
      "Figma mastery from basics to advanced",
      "Portfolio-ready case studies",
      "1-on-1 design critiques",
      "Industry mentor sessions",
      "Job search support",
      "Lifetime access to materials",
    ],
  },
  "career-strategy": {
    title: "Career Strategy & Personal Branding",
    promise: "Build leverage and land roles that matter in 6 weeks.",
    status: "Upcoming",
    duration: "6 weeks",
    price: "₹10,999",
    originalPrice: "₹14,999",
    rating: 0,
    reviews: 0,
    nextBatch: "April 10, 2024",
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
      {
        name: "David Kim",
        role: "Career Coach, Ex-McKinsey",
        bio: "Helped 500+ professionals transition careers. Former McKinsey consultant turned career strategist.",
        linkedin: "#",
        twitter: "#",
      },
      {
        name: "Lisa Thompson",
        role: "Talent Director, Big Tech",
        bio: "15+ years in talent acquisition. Knows what hiring managers look for.",
        linkedin: "#",
      },
    ],
    curriculum: [
      {
        week: 1,
        title: "Career Assessment",
        topics: ["Skills inventory", "Values alignment", "Career goals", "Market research"],
      },
      {
        week: 2,
        title: "Personal Branding",
        topics: ["Brand positioning", "LinkedIn optimization", "Content strategy", "Thought leadership"],
      },
      {
        week: 3,
        title: "Resume & Portfolio",
        topics: ["ATS optimization", "Achievement stories", "Portfolio building", "Cover letters"],
      },
      {
        week: 4,
        title: "Strategic Networking",
        topics: ["Network mapping", "Outreach strategies", "Informational interviews", "Building relationships"],
      },
      {
        week: 5,
        title: "Interview Mastery",
        topics: ["Behavioral interviews", "Case studies", "Technical prep", "Negotiation"],
      },
      {
        week: 6,
        title: "Job Search Execution",
        topics: ["Application strategy", "Follow-up techniques", "Offer evaluation", "Onboarding"],
      },
    ],
    skills: ["Personal Branding", "Networking", "Resume Writing", "Interview Prep", "Negotiation", "LinkedIn"],
    testimonials: [],
    highlights: [
      "1-on-1 career coaching",
      "Resume and LinkedIn review",
      "Mock interviews",
      "Salary negotiation guidance",
      "Network introductions",
      "Lifetime access to materials",
    ],
  },
  "product-management-ai": {
    title: "Product Management with AI Specialisation",
    promise: "Think like an AI-first Product Manager. Build AI products that work in the real world.",
    status: "Live",
    duration: "2 months",
    price: "₹19,999",
    originalPrice: "₹24,999",
    rating: 4.9,
    reviews: 156,
    nextBatch: "March 1, 2024",
    gains: [
      "Think like an AI-first Product Manager",
      "Write AI PRDs that ML teams actually use",
      "Design ML-powered user journeys",
      "Work effectively with Data, ML, and Backend teams",
      "Build AI product case studies for your portfolio",
      "Speak confidently in PM + AI interviews",
      "Create portfolio-ready projects",
    ],
    audience: [
      "Product Managers wanting to specialize in AI products",
      "Aspiring PMs transitioning into AI-first roles",
      "Founders building AI-powered products",
      "Technical PMs looking to bridge the AI gap",
    ],
    mentors: [
      {
        name: "Industry Expert",
        role: "AI Product Manager, EV & Operations",
        bio: "Real production PM experience with EV + Operations + AI expertise. Data-driven approach with focus on growth and retention use cases.",
        linkedin: "#",
        twitter: "#",
      },
    ],
    curriculum: [
      {
        week: 1,
        title: "AI for Product Managers (Foundation)",
        topics: [
          "What is AI, ML, DL (PM perspective only)",
          "Rule-based systems vs ML systems",
          "Traditional product vs AI product",
          "Supervised vs Unsupervised vs Reinforcement Learning (real use cases)",
          "Where AI makes sense vs where it DOES NOT",
          "AI myths vs reality (what founders oversell)",
          "Practical: Analyze 5 real AI products (ChatGPT, Spotify Recommendations, Uber ETA, Amazon Search Ranking, LinkedIn Feed Ranking)",
          "Assignment: Convert 1 normal product feature → AI-powered version",
        ],
      },
      {
        week: 2,
        title: "Data Thinking for PMs (Most Important)",
        topics: [
          "What data AI products need: Structured vs Unstructured",
          "Data lifecycle: Collection → Cleaning → Labeling → Training → Serving",
          "Training data vs Live production data",
          "Data bias & data leakage",
          "Ground truth concept",
          "Feature engineering (PM level understanding)",
          "Cold start problem",
          "Practical: Design dataset requirements for Fraud detection, Recommendation system, Chatbot",
          "Assignment: Create Data Requirement Document (DRD) for one AI use case",
        ],
      },
      {
        week: 3,
        title: "AI Product Discovery & Use Case Selection",
        topics: [
          "Identifying AI opportunities in Operations, Growth, CX, Retention, Revenue",
          "ROI vs Feasibility matrix for AI features",
          "Build vs Buy vs API decision framework",
          "When NOT to use AI",
          "AI feasibility checklist: Data availability, Volume, Latency requirement, Accuracy tolerance",
          "GenAI Topics: How LLMs work (PM level), Prompt engineering for products, RAG (Retrieval Augmented Generation)",
          "Fine-tuning vs prompt tuning, Hallucination mitigation, Guardrails & safety layers, Token costs & pricing strategy",
          "Practical: Build chatbot PRD with Context injection, Memory handling, Fallback flows",
          "Assignment: Prioritize 5 AI ideas using Impact × Effort × Risk matrix",
        ],
      },
      {
        week: 4,
        title: "AI PRDs & Product Design",
        topics: [
          "How AI PRD differs from normal PRD",
          "Key AI PRD sections: Prediction target, Confidence thresholds, Fallback logic, Explainability requirements, Human-in-the-loop flows",
          "UX for AI: Showing confidence scores, Handling wrong predictions, User trust design",
          "Practical: Write AI PRD for Resume screening tool, Smart support chatbot, Fraud detection dashboard",
          "Assignment: Full AI PRD submission + review",
        ],
      },
      {
        week: 5,
        title: "Working with ML Teams (Delivery Phase)",
        topics: [
          "ML development lifecycle: Problem framing, Model training, Validation, Deployment",
          "How to talk to data scientists",
          "Common conflicts: Accuracy vs speed, MVP vs perfection",
          "Understanding metrics: Precision, Recall, F1 score, ROC",
          "Offline vs Online testing",
          "Practical: Simulate sprint planning with ML team",
          "Assignment: Convert business problem → ML problem statement",
        ],
      },
      {
        week: 6,
        title: "AI Metrics, Monitoring & Iteration",
        topics: [
          "Business metrics vs Model metrics",
          "AI-specific monitoring: Data drift, Concept drift, Model decay",
          "Retraining strategies",
          "Feedback loops",
          "Shadow mode testing",
          "Practical: Build KPI framework for Recommendation engine, Chatbot, Fraud model",
          "Assignment: Design AI dashboard metric framework",
        ],
      },
      {
        week: 7,
        title: "AI Ethics, Privacy & Regulation (Career Gold)",
        topics: [
          "Bias & fairness in AI",
          "Hallucinations in LLMs",
          "Data privacy (India DPDP Act basics)",
          "Consent management",
          "Explainable AI",
          "Responsible AI principles",
          "Practical: Case study - OpenAI lawsuits, Amazon biased hiring model, Facial recognition bans",
          "Assignment: Risk assessment document for AI product",
        ],
      },
      {
        week: 8,
        title: "Portfolio Project + Interview Prep",
        topics: [
          "Capstone Project Options: AI Resume Screener, EV Charger Failure Predictor, AI Customer Support Bot, Recommendation Engine, Fraud Detection System, AI Hiring Tool",
          "Deliverables: Problem statement, AI PRD, Data flow design, Metrics framework, Go-to-market plan, Demo prototype (Figma)",
          "Career Modules: How to write AI PM resume, LinkedIn personal branding for AI PM, How to transition from PM → AI PM, Salary negotiation positioning",
          "Bonus: AI Tools for PMs - ChatGPT for PRDs, Claude for research, Notion AI, Figma AI, Auto analytics tools",
        ],
      },
    ],
    skills: [
      "AI Product Management",
      "AI PRDs",
      "ML Product Design",
      "Data Thinking",
      "GenAI Products",
      "AI Ethics",
      "ML Metrics",
      "AI Use Case Selection",
    ],
    testimonials: [],
    highlights: [
      "Real production PM experience with EV + Operations + AI angle",
      "Data-driven approach with Growth + Retention use cases",
      "AI Product Management – Real Industry Playbook (Not Academic AI)",
      "Portfolio-ready capstone projects",
      "AI Tools for PMs: ChatGPT for PRDs, Claude for research, Notion AI, Figma AI",
      "Career transition support: Resume writing, LinkedIn branding, Interview prep",
      "Lifetime access to materials",
    ],
  },
  "technical-product-manager": {
    title: "Technical Product Manager",
    promise: "Production-Ready Technical Product Manager Bootcamp. No Coding. Real Systems Thinking.",
    status: "Live",
    duration: "2 months",
    price: "₹19,999",
    originalPrice: "₹24,999",
    rating: 4.8,
    reviews: 142,
    nextBatch: "March 1, 2024",
    gains: [
      "Read backend flows confidently",
      "Write technical PRDs that engineers actually use",
      "Design APIs & data flows",
      "Work deeply with engineers",
      "Debug production issues",
      "Handle scalability & reliability discussions",
      "Crack Technical PM interviews",
      "Build portfolio system case studies",
    ],
    audience: [
      "Product Managers wanting to become Technical PMs",
      "Aspiring TPMs transitioning from other roles",
      "PMs working with technical products",
      "Founders building technical products",
    ],
    mentors: [
      {
        name: "Industry Expert",
        role: "Technical Product Manager, Infra + Ops",
        bio: "Real production issues experience. Infra + ops expertise. Data-heavy PM background with API + dashboard exposure.",
        linkedin: "#",
        twitter: "#",
      },
    ],
    curriculum: [
      {
        week: 1,
        title: "Tech Mindset for Product Managers",
        topics: [
          "What is a Technical PM really?",
          "TPM vs PM vs Engineering Manager",
          "How tech products differ from consumer apps",
          "Understanding: Frontend vs Backend, Web vs Mobile, Monolith vs Microservices",
          "SDLC overview: Requirements → Dev → QA → Deploy → Monitor",
          "Practical: Map architecture of Food delivery app, Payment gateway, EV charging system (our strength)",
          "Assignment: Draw high-level architecture of any app",
        ],
      },
      {
        week: 2,
        title: "APIs, Backend & Integrations (Core TPM Skill)",
        topics: [
          "What is REST API",
          "HTTP methods (GET, POST, PUT, DELETE)",
          "Status codes (200, 400, 401, 500)",
          "Headers, auth tokens, rate limits",
          "Webhooks",
          "Third-party integrations",
          "Tools: Postman hands-on, API testing",
          "Practical: Test sample APIs, Create mock API collection, Understand request/response mapping",
          "Assignment: Design API contract for one feature",
        ],
      },
      {
        week: 3,
        title: "Databases, Data Flows & Event Tracking",
        topics: [
          "SQL vs NoSQL (PM perspective)",
          "Tables, collections, schemas",
          "Indexing basics",
          "Data pipelines: App → Backend → DB → Analytics",
          "Event tracking design",
          "Logging vs analytics events",
          "Roadmap building",
          "Opportunity solution trees",
          "Impact vs Effort",
          "RICE, MoSCoW",
          "Stakeholder alignment",
          "Tradeoff decisions",
          "Practical: Design schema for Orders system, Wallet system, Session tracking system",
          "Assignment: Create data flow diagram",
        ],
      },
      {
        week: 4,
        title: "System Design for PMs",
        topics: [
          "System design basics: Load, Traffic, Latency",
          "Caching",
          "Queues (Kafka, RabbitMQ conceptually)",
          "CDN",
          "Horizontal vs vertical scaling",
          "Single point of failure",
          "Practical: Design architecture for Chat application, Booking platform, Ride-hailing app",
          "Assignment: High-level system design document",
        ],
      },
      {
        week: 5,
        title: "Product Delivery, Sprints & Engineering Workflows",
        topics: [
          "Agile deep dive (real world)",
          "Writing technical user stories",
          "Acceptance criteria",
          "Story points",
          "Sprint planning",
          "Release management",
          "Feature flags",
          "Tools: Jira workflows, Backlog grooming",
          "Practical: Break PRD → Engineering tasks",
          "Assignment: Create sprint plan for one feature",
        ],
      },
      {
        week: 6,
        title: "Production, Debugging & Incident Handling (Gold Module)",
        topics: [
          "Production environments: Dev, Staging, Prod",
          "Logs reading",
          "Error codes understanding",
          "Monitoring tools (Datadog, Grafana concepts)",
          "Incident response: Root cause analysis, Postmortems, Downtime handling",
          "North star metric, Funnel metrics, Retention metrics",
          "Experiment design, A/B testing",
          "Practical: Analyze sample incident logs, Create RCA document",
          "Assignment: Incident playbook creation",
        ],
      },
      {
        week: 7,
        title: "Security, Performance & Reliability",
        topics: [
          "API security basics: OAuth, JWT",
          "Data privacy basics",
          "Performance optimization: Response time, Payload size",
          "Uptime metrics: SLA, SLO",
          "SLAs with vendors",
          "Rate limiting",
          "Practical: Design security checklist for app",
          "Assignment: Reliability framework design",
        ],
      },
      {
        week: 8,
        title: "Tech PM Interview + Portfolio Project",
        topics: [
          "Capstone Projects (Choose one): Payment system design, Notification system, Wallet system, Order management system, Ride matching system, Charging station management system (our strength)",
          "Deliverables: System architecture, API design, PRD, Data flow, Scaling plan, Monitoring KPIs, Product strategy, Roadmap, Metrics plan, Go-to-market",
          "Bonus: Tools Mastery - Postman advanced, Swagger, Jira advanced workflows, Figma handoff to devs",
          "Career Modules: Tech PM resume writing, Interview prep - System design rounds, API questions, Scenario questions, How to move from PM → TPM, Case study storytelling",
        ],
      },
    ],
    skills: [
      "Technical PRDs",
      "API Design",
      "System Design",
      "Backend Flows",
      "Production Debugging",
      "Incident Handling",
      "Jira & Agile",
      "Data Flows",
    ],
    testimonials: [],
    highlights: [
      "Production-Ready Technical Product Manager Bootcamp",
      "No Coding. Real Systems Thinking.",
      "Real production issues experience",
      "Infra + ops expertise",
      "Data-heavy PM background with API + dashboard exposure",
      "EV charging system expertise (our strength)",
      "Portfolio-ready system case studies",
      "Tech PM interview prep: System design, API questions, Scenario questions",
      "Career transition support: Resume writing, Interview prep, Role transitions",
      "Lifetime access to materials",
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
        <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 text-center px-4">
          <h1 className="font-display font-bold text-2xl sm:text-3xl mb-3 sm:mb-4">Course Not Found</h1>
          <Link to="/" className="link-underline">
            Back to Home
          </Link>
        </div>
        <Footer />
        <ScrollToTopButton />
      </main>
    );
  }

  // Get related courses (exclude current course)
  const relatedCourses = Object.entries(courseData)
    .filter(([id]) => id !== courseId)
    .slice(0, 2)
    .map(([id, data]) => ({ id, ...data }));

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-24 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Back Button */}
              <div className="mb-4 sm:mb-6">
                <Link
                  to="/#courses"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Back to Courses</span>
                  <span className="sm:hidden">Back</span>
                </Link>
              </div>

              {/* Status Badge */}
              <Badge
                variant="outline"
                className={`mb-6 ${
                  course.status === "Live"
                    ? "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400"
                    : ""
                }`}
              >
                {course.status}
              </Badge>

              {/* Title */}
              <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 sm:mb-6">
                {course.title}
              </h1>

              {/* Promise */}
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
                {course.promise}
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
                {course.rating > 0 && (
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-foreground text-foreground" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-muted-foreground">
                      ({course.reviews} reviews)
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">{course.duration}</span>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {course.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Curriculum Section - Moved here */}
              <div className="mt-6 sm:mt-8 lg:mt-10">
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight mb-1 sm:mb-1.5 lg:mb-2">
                    Curriculum
                  </h2>
                  <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                    {course.curriculum.length} weeks of structured learning
                  </p>
                </div>
                <Tabs defaultValue={`week-${course.curriculum[0]?.week || 1}`} className="w-full">
                  {/* Mobile-optimized tabs with scroll indicator */}
                  <div className="relative mb-4 sm:mb-6 lg:mb-8">
                    <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
                      <TabsList className="inline-flex h-auto p-1 w-max lg:w-auto min-w-max lg:min-w-0 gap-1">
                        {course.curriculum.map((week, index) => (
                          <TabsTrigger
                            key={index}
                            value={`week-${week.week}`}
                            className="whitespace-nowrap px-3 py-2 sm:px-4 text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:shadow-sm flex-shrink-0"
                          >
                            Week {week.week}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>
                    {/* Scroll indicator gradient for mobile */}
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none lg:hidden" />
                  </div>
                  <div className="min-h-[300px] sm:min-h-[350px]">
                    {course.curriculum.map((week, index) => (
                      <TabsContent key={index} value={`week-${week.week}`} className="mt-0">
                        <div className="space-y-3 sm:space-y-4">
                          <div className="pb-2 sm:pb-3 border-b border-border/50">
                            <h3 className="font-display font-semibold text-base sm:text-lg lg:text-xl leading-tight">
                              <span className="text-muted-foreground">Week {week.week}:</span>{" "}
                              <span className="text-foreground">{week.title}</span>
                            </h3>
                          </div>
                          <ul className="space-y-2.5 sm:space-y-3">
                            {week.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start gap-2.5 sm:gap-3 group">
                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-foreground mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-1">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                    ))}
                  </div>
                </Tabs>
              </div>
            </div>

            {/* Sticky Enrollment Sidebar */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <Card className="border-foreground/20">
                <CardHeader>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-display font-bold text-3xl">
                      {course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-muted-foreground line-through text-lg">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>
                  {course.nextBatch && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Next batch: {course.nextBatch}</span>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    className="w-full bg-foreground text-background hover:opacity-90"
                    size="lg"
                  >
                    {course.status === "Live" ? "Enroll Now" : "Get Notified"}
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Schedule a Call
                  </Button>

                  <Separator />

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">What's included:</h4>
                    <ul className="space-y-2">
                      {course.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* What You'll Gain */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight mb-1.5 sm:mb-2">
                What you'll gain
              </h2>
              <p className="text-muted-foreground">
                Skills and outcomes you'll achieve
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {course.gains.map((gain, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 border border-border rounded-lg"
                  >
                    <div className="w-8 h-8 border border-foreground flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-base lg:text-lg">{gain}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight mb-1.5 sm:mb-2">
                Who it's for
              </h2>
              <p className="text-muted-foreground">
                Ideal candidates for this course
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.audience.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 border border-border rounded-lg"
                  >
                    <div className="w-2 h-2 bg-foreground rounded-full mt-2 flex-shrink-0" />
                    <span className="text-base lg:text-lg text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-16 lg:py-24 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="font-display font-bold text-2xl lg:text-3xl tracking-tight mb-2">
              Your mentors
            </h2>
            <p className="text-muted-foreground">
              Learn from industry experts with real-world experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.mentors.map((mentor, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center font-display font-bold text-xl text-foreground">
                      {mentor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{mentor.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-2">
                        {mentor.role}
                      </p>
                      {(mentor.linkedin || mentor.twitter) && (
                        <div className="flex gap-2">
                          {mentor.linkedin && (
                            <a
                              href={mentor.linkedin}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                          {mentor.twitter && (
                            <a
                              href={mentor.twitter}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Twitter className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                {mentor.bio && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mentor.bio}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {course.testimonials.length > 0 && (
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight mb-1.5 sm:mb-2">
                Student Reviews
              </h2>
              <p className="text-muted-foreground">
                What our students say about this course
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-display font-bold text-sm text-foreground">
                        {testimonial.image}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base mb-1">
                          {testimonial.name}
                        </CardTitle>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-foreground text-foreground" />
                        <span className="text-sm font-medium">
                          {testimonial.rating}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl tracking-tight mb-1.5 sm:mb-2">
                Related Courses
              </h2>
              <p className="text-muted-foreground">
                Explore other programs that might interest you
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedCourses.map((relatedCourse) => (
                <Card
                  key={relatedCourse.id}
                  className="border-border hover:border-foreground/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">{relatedCourse.status}</Badge>
                      {relatedCourse.rating > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-foreground text-foreground" />
                          <span className="text-sm font-medium">
                            {relatedCourse.rating}
                          </span>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {relatedCourse.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">
                      {relatedCourse.promise}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {relatedCourse.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/course/${relatedCourse.id}`}>
                      <Button variant="outline" className="w-full">
                        View Course
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <ScrollToTopButton />
    </main>
  );
};

export default CourseDetail;
