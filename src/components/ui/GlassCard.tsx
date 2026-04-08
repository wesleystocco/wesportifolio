import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GlassCardProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      {...props}
      className={cn(
        "glass-card relative overflow-hidden rounded-[28px] border border-white/12",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_40%)] before:opacity-80",
        className,
      )}
    >
      <div className="relative">{children}</div>
    </div>
  );
}
