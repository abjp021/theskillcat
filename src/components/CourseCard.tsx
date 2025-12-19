import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  outcome: string;
  status: "Live" | "Upcoming";
}

const CourseCard = ({ id, title, outcome, status }: CourseCardProps) => {
  return (
    <Link
      to={`/course/${id}`}
      className="group block border border-border p-8 lg:p-10 card-invert bg-background"
    >
      {/* Status Badge */}
      <div className="mb-6">
        <span className="inline-block border border-foreground card-invert-border px-3 py-1 text-xs font-medium tracking-wider uppercase">
          {status}
        </span>
      </div>

      {/* Course Title */}
      <h3 className="font-display font-bold text-xl lg:text-2xl mb-4 tracking-tight card-invert-child">
        {title}
      </h3>

      {/* Outcome */}
      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed card-invert-child group-hover:text-background/70">
        {outcome}
      </p>

      {/* Arrow indicator */}
      <div className="mt-8 flex items-center gap-2 text-sm font-medium">
        <span className="card-invert-child">View Details</span>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </Link>
  );
};

export default CourseCard;
