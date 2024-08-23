import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse,
  pauseOnHover,
  children,
}) => {
  return (
    <div className={cn("flex overflow-hidden", className)}>
      <div
        className={cn(
          "flex shrink-0 gap-4 py-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;
