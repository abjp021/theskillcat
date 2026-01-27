// Abstract cat-themed decorative graphics
// Minimalist, sharp, and symbolic - never cartoonish

interface CatGraphicProps {
  className?: string;
  size?: number;
}

// Whiskers - abstract diagonal lines suggesting cat whiskers
export const CatWhiskers = ({ className = "", size = 120 }: CatGraphicProps) => {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left whiskers */}
      <line x1="0" y1="20" x2="40" y2="30" stroke="currentColor" strokeWidth="1.5" className="animate-draw" style={{ strokeDasharray: 50, strokeDashoffset: 50 }} />
      <line x1="0" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="1.5" className="animate-draw animation-delay-200" style={{ strokeDasharray: 50, strokeDashoffset: 50 }} />
      <line x1="0" y1="40" x2="40" y2="30" stroke="currentColor" strokeWidth="1.5" className="animate-draw animation-delay-400" style={{ strokeDasharray: 50, strokeDashoffset: 50 }} />
      
      {/* Right whiskers */}
      <line x1="120" y1="20" x2="80" y2="30" stroke="currentColor" strokeWidth="1.5" className="animate-draw" style={{ strokeDasharray: 50, strokeDashoffset: 50 }} />
      <line x1="120" y1="30" x2="75" y2="30" stroke="currentColor" strokeWidth="1.5" className="animate-draw animation-delay-200" style={{ strokeDasharray: 50, strokeDashoffset: 50 }} />
      <line x1="120" y1="40" x2="80" y2="30" stroke="currentColor" strokeWidth="1.5" className="animate-draw animation-delay-400" style={{ strokeDasharray: 50, strokeDashoffset: 50 }} />
    </svg>
  );
};

// Cat ears - sharp triangular forms
export const CatEars = ({ className = "", size = 80 }: CatGraphicProps) => {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 80 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left ear */}
      <path
        d="M5 48L20 5L35 48"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw"
        style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
      />
      {/* Right ear */}
      <path
        d="M45 48L60 5L75 48"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw animation-delay-200"
        style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
      />
    </svg>
  );
};

// Cat silhouette - minimal side profile
export const CatSilhouette = ({ className = "", size = 150 }: CatGraphicProps) => {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 150 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cat outline - sitting position */}
      <path
        d="M20 85C20 85 25 70 30 60C35 50 40 45 45 40C45 40 35 25 40 15C45 5 50 10 52 15C54 20 50 30 50 35C50 35 60 30 75 30C90 30 100 35 100 35C100 30 96 20 98 15C100 10 105 5 110 15C115 25 105 40 105 40C110 45 115 50 120 60C125 70 130 85 130 85"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw"
        style={{ strokeDasharray: 400, strokeDashoffset: 400 }}
      />
      {/* Tail */}
      <path
        d="M130 80C135 75 145 65 148 55C150 45 145 40 140 45"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        className="animate-draw animation-delay-400"
        style={{ strokeDasharray: 80, strokeDashoffset: 80 }}
      />
    </svg>
  );
};

// Paw print - abstract minimal version
export const CatPaw = ({ className = "", size = 60 }: CatGraphicProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main pad */}
      <ellipse
        cx="30"
        cy="38"
        rx="12"
        ry="10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="animate-draw"
        style={{ strokeDasharray: 70, strokeDashoffset: 70 }}
      />
      {/* Toe pads */}
      <circle cx="18" cy="22" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-draw animation-delay-200" style={{ strokeDasharray: 40, strokeDashoffset: 40 }} />
      <circle cx="30" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-draw animation-delay-200" style={{ strokeDasharray: 40, strokeDashoffset: 40 }} />
      <circle cx="42" cy="22" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="animate-draw animation-delay-200" style={{ strokeDasharray: 40, strokeDashoffset: 40 }} />
    </svg>
  );
};

// Filled paw for decorative pattern
export const CatPawFilled = ({ className = "", size = 40 }: CatGraphicProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main pad */}
      <ellipse cx="20" cy="26" rx="8" ry="7" fill="currentColor" />
      {/* Toe pads */}
      <circle cx="11" cy="15" r="4" fill="currentColor" />
      <circle cx="20" cy="12" r="4" fill="currentColor" />
      <circle cx="29" cy="15" r="4" fill="currentColor" />
    </svg>
  );
};

// Cat eye - standalone abstract version
export const CatEyeMinimal = ({ className = "", size = 80 }: CatGraphicProps) => {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Eye outline */}
      <path
        d="M5 20C5 20 20 5 40 5C60 5 75 20 75 20C75 20 60 35 40 35C20 35 5 20 5 20Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="animate-draw"
        style={{ strokeDasharray: 150, strokeDashoffset: 150 }}
      />
      {/* Vertical slit pupil */}
      <ellipse
        cx="40"
        cy="20"
        rx="3"
        ry="10"
        fill="currentColor"
        className="animate-pulse-subtle"
      />
    </svg>
  );
};

// Decorative corner accent with cat-inspired angles
export const CatCornerAccent = ({ className = "", size = 100 }: CatGraphicProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sharp angular lines like cat ears/claws */}
      <path
        d="M0 100L30 70L20 40L50 60L40 20L70 50L100 0"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw"
        style={{ strokeDasharray: 300, strokeDashoffset: 300 }}
      />
    </svg>
  );
};

export default {
  CatWhiskers,
  CatEars,
  CatSilhouette,
  CatPaw,
  CatPawFilled,
  CatEyeMinimal,
  CatCornerAccent,
};
