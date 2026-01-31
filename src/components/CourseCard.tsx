import { Link } from "react-router-dom";
import { Clock, Users, Star, TrendingUp } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  outcome: string;
  status: "Live" | "Upcoming";
  duration?: string;
  price?: string;
  rating?: number;
  skills?: string[];
  featured?: boolean;
}

const CourseCard = ({
  id,
  title,
  outcome,
  status,
  duration,
  price,
  rating,
  skills,
  featured,
}: CourseCardProps) => {
  return (
    <Link
      to={`/course/${id}`}
      className={`group block border border-border p-4 sm:p-5 md:p-6 lg:p-8 bg-background transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10 hover:border-yellow-400/30 h-full flex flex-col relative ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Header with Status and Featured Badge */}
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span
            className={`inline-block border px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium tracking-wider uppercase ${
              status === "Live"
                ? "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400"
                : "border-foreground/30 bg-muted text-foreground/70"
            }`}
          >
            {status}
          </span>
          {featured && (
            <span className="inline-block border border-yellow-400/50 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium tracking-wider uppercase bg-yellow-400/10 text-yellow-700 dark:text-yellow-400">
              Featured
            </span>
          )}
        </div>
        {rating && (
          <div className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 group-hover:fill-yellow-500 group-hover:text-yellow-500 transition-colors" />
            <span className="font-medium">{rating}</span>
          </div>
        )}
      </div>

      {/* Course Title */}
      <h3 className="font-display font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 tracking-tight group-hover:text-foreground/80 transition-colors line-clamp-2">
        {title}
      </h3>

      {/* Outcome */}
      <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3 flex-shrink-0">
        {outcome}
      </p>

      {/* Skills Tags */}
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 flex-shrink-0">
          {skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-muted px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium text-foreground/70 rounded"
            >
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="inline-block text-[10px] sm:text-xs text-muted-foreground">
              +{skills.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Course Meta Info */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border flex-shrink-0">
        {duration && (
          <div className="flex items-center gap-1 sm:gap-1.5">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{duration}</span>
          </div>
        )}
        {price && (
          <div className="flex items-center gap-1 sm:gap-1.5 font-semibold text-foreground">
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{price}</span>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs sm:text-sm font-medium group-hover:text-foreground transition-colors">
          View Details
        </span>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 text-muted-foreground group-hover:text-foreground"
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
