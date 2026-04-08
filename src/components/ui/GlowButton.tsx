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
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f76ea7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0809]",
        variant === "primary" &&
          "bg-[#bf246d] text-white shadow-[0_0_0_rgba(191,36,109,0)] hover:-translate-y-0.5 hover:bg-[#d6367f] hover:shadow-[0_0_28px_rgba(191,36,109,0.38)]",
        variant === "ghost" &&
          "border border-white/12 bg-white/6 text-white hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]",
        className,
      )}
    >
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4" /> : null}
    </a>
  );
}
