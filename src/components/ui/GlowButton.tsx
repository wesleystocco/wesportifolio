import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

type GlowButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "ghost";
  icon?: ElementType;
};

export function GlowButton({
  children,
  className,
  icon: Icon,
  variant = "primary",
  ...props
}: GlowButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d05b84] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0809]",
        variant === "primary" &&
          "bg-[#c7527d] text-white shadow-[0_0_0_rgba(208,91,132,0)] hover:-translate-y-0.5 hover:bg-[#d05b84] hover:shadow-[0_0_28px_rgba(208,91,132,0.24)]",
        variant === "ghost" &&
          "border border-white/12 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/22 hover:bg-white/9 hover:shadow-[0_0_24px_rgba(255,255,255,0.06)]",
        className,
      )}
    >
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4" /> : null}
    </a>
  );
}
