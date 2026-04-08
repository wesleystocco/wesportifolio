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
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-11 w-11 rounded-full border border-[#dca0b6]/38 bg-[#d05b84]/8 mix-blend-screen md:block"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 24px rgba(208,91,132,0.18)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[61] hidden h-2.5 w-2.5 rounded-full bg-[#f2c2d1] md:block"
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 18px rgba(242,194,209,0.45)",
        }}
      />
    </>
  );
}
