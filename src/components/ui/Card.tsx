"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  accentColor?: "purple" | "green" | "orange" | "blue" | "none";
  accentPosition?: "left" | "top";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      accentColor = "none",
      accentPosition = "left",
      hover = false,
      children,
      ...props
    },
    ref
  ) => {
    const accentColors = {
      purple: "border-brand-purple",
      green: "border-brand-green",
      orange: "border-brand-orange",
      blue: "border-brand-blue",
      none: "border-transparent",
    };

    const accentPositions = {
      left: "border-l-4",
      top: "border-t-4",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-lg shadow-md p-6",
          accentColor !== "none" && accentPositions[accentPosition],
          accentColors[accentColor],
          hover && "hover:shadow-lg transition-shadow duration-200",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
