import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const LaunchOfferStrip = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Determine strip colors based on theme
  // Light theme = dark strip, Dark theme = white strip
  // Determine strip colors based on theme
  // Light theme = dark strip (bg-foreground = black), Dark theme = white strip (bg-foreground = white)
  // Both use bg-foreground and text-background which automatically invert based on theme
  const stripBg = "bg-foreground";
  const stripText = "text-background";

  const offerText = "🎉 Launch Offer: Get 50% off on all courses! Limited time only. Use code: LAUNCH50 🎉";

  return (
    <div className={`${stripBg} ${stripText} py-2 text-xs sm:text-sm font-medium overflow-hidden relative z-[60] sticky top-0`}>
      <div className="flex animate-marquee whitespace-nowrap w-[200%]">
        {/* Repeat content for seamless loop */}
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex items-center">
            {Array.from({ length: 3 }).map((_, j) => (
              <span key={j} className="mx-8">
                {offerText}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchOfferStrip;
