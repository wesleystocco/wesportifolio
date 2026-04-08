"use client";

import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

import { useMousePosition } from "@/hooks/useMousePosition";

export function CustomCursor() {
  const { isActive, x, y } = useMousePosition();

  const outerX = useSpring(x, { damping: 22, stiffness: 280, mass: 0.35 });
  const outerY = useSpring(y, { damping: 22, stiffness: 280, mass: 0.35 });
  const innerX = useSpring(x, { damping: 40, stiffness: 700, mass: 0.2 });
  const innerY = useSpring(y, { damping: 40, stiffness: 700, mass: 0.2 });

  useEffect(() => {
    if (!isActive) {
      return;
    }

    document.body.classList.add("has-custom-cursor");

    return () => {
      document.body.classList.remove("has-custom-cursor");
    };
  }, [isActive]);

  if (!isActive) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-12 w-12 rounded-full border border-[#f76ea7]/45 bg-[#bf246d]/10 mix-blend-screen md:block"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 30px rgba(191,36,109,0.25)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[61] hidden h-3 w-3 rounded-full bg-[#ff9dc4] md:block"
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 22px rgba(247,110,167,0.7)",
        }}
      />
    </>
  );
}
