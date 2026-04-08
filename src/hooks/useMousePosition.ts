"use client";

import { useEffect, useState } from "react";

type MousePositionState = {
  isActive: boolean;
  x: number;
  y: number;
};

export function useMousePosition(): MousePositionState {
  const [state, setState] = useState<MousePositionState>({
    isActive: false,
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      setState({
        isActive: true,
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handlePointerLeave = () => {
      setState((current) => ({ ...current, isActive: false }));
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return state;
}
