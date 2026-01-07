"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-brand-purple text-white hover:bg-brand-purple-dark focus:ring-brand-purple",
      secondary:
        "bg-brand-green text-white hover:bg-brand-green-light focus:ring-brand-green",
      accent:
        "bg-brand-orange text-white hover:bg-brand-orange-light focus:ring-brand-orange",
      outline:
        "border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white focus:ring-brand-purple",
      ghost:
        "text-text-medium hover:text-brand-purple hover:bg-brand-purple/10 focus:ring-brand-purple",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-7 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
