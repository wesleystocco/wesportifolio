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
    const mediaQuery = window.matchMedia("(pointer: fine) and (min-width: 768px)");

    const resetPointer = () => {
      setState((current) =>
        current.isActive ? { ...current, isActive: false } : current,
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      setState({
        isActive: true,
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handlePointerLeave = () => {
      resetPointer();
    };

    const bindPointerTracking = () => {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerleave", handlePointerLeave);
    };

    const unbindPointerTracking = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };

    const syncTracking = () => {
      unbindPointerTracking();

      if (!mediaQuery.matches) {
        resetPointer();
        return;
      }

      bindPointerTracking();
    };

    syncTracking();
    mediaQuery.addEventListener("change", syncTracking);

    return () => {
      unbindPointerTracking();
      mediaQuery.removeEventListener("change", syncTracking);
    };
  }, []);

  return state;
}
