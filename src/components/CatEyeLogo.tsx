const CatEyeLogo = ({ className = "", size = 120 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer eye shape */}
      <path
        d="M60 20C35 20 15 60 15 60C15 60 35 100 60 100C85 100 105 60 105 60C105 60 85 20 60 20Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw"
        style={{ strokeDasharray: 300, strokeDashoffset: 300 }}
      />
      
      {/* Inner circle (iris) */}
      <circle
        cx="60"
        cy="60"
        r="25"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw animation-delay-200"
        style={{ strokeDasharray: 160, strokeDashoffset: 160 }}
      />
      
      {/* Vertical slit (pupil) */}
      <ellipse
        cx="60"
        cy="60"
        rx="4"
        ry="20"
        fill="currentColor"
        className="animate-pulse-subtle"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Sharp corners - top */}
      <path
        d="M60 35L55 25L60 20L65 25L60 35"
        fill="currentColor"
        className="animate-fade-in animation-delay-400"
        style={{ opacity: 0 }}
      />
    </svg>
  );
};

export default CatEyeLogo;
