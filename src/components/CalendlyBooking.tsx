import React, { useEffect, useRef, useState } from "react";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, unknown>;
        utm?: Record<string, string>;
      }) => void;
    };
  }
}

interface CalendlyBookingProps {
  url?: string;
}

const CalendlyBooking = ({ url = "https://calendly.com/d/ct82-fym-fxz" }: CalendlyBookingProps) => {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const retryCountRef = useRef(0);
  const maxRetries = 50; // Max 5 seconds of retries (50 * 100ms)

  useEffect(() => {
    if (!calendlyRef.current) return;

    const checkCalendly = () => {
      if (window.Calendly) {
        try {
          window.Calendly.initInlineWidget({
            url: url,
            parentElement: calendlyRef.current!,
            prefill: {},
            utm: {},
          });
          setIsLoading(false);
        } catch (error) {
          console.error("Error initializing Calendly:", error);
          setIsLoading(false);
        }
      } else {
        retryCountRef.current += 1;
        if (retryCountRef.current < maxRetries) {
          // Retry after a short delay if Calendly script hasn't loaded yet
          setTimeout(checkCalendly, 100);
        } else {
          // Give up after max retries
          console.warn("Calendly script failed to load after multiple attempts");
          setIsLoading(false);
        }
      }
    };

    // Start checking after a brief delay to allow script to load
    const timer = setTimeout(checkCalendly, 200);
    
    return () => clearTimeout(timer);
  }, [url]);

  return (
    <div className="relative">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg z-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-foreground/10 animate-pulse">
              <Calendar className="w-6 h-6 text-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">Loading booking calendar...</p>
          </div>
        </div>
      )}

      {/* Info Banner */}
      <div className="mb-6 p-4 rounded-lg bg-muted/50 border border-border/70 space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-foreground" />
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-sm font-medium">Quick & Easy Booking</p>
            <p className="text-xs text-muted-foreground">
              Select your preferred date and time. All sessions are 30 minutes and cost ₹500 per session.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
            <span>Instant confirmation</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
            <span>Calendar sync</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
            <span>Email reminders</span>
          </div>
        </div>
      </div>

      {/* Calendly Inline Widget */}
      <div 
        ref={calendlyRef}
        className="calendly-inline-widget min-h-[700px] rounded-lg overflow-hidden border border-border/70 bg-background"
        style={{ 
          minWidth: '320px',
          height: '700px'
        }}
      />
    </div>
  );
};

export default CalendlyBooking;
