"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const fullText = "> Iniciando Wesley_Stocco.exe...";

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem("splash-shown") !== "true",
  );
  const [typedText, setTypedText] = useState("");

  const hasTypedEverything = useMemo(
    () => typedText.length >= fullText.length,
    [typedText.length],
  );

  useEffect(() => {
    if (!showSplash) {
      return;
    }

    let currentIndex = 0;
    const typingInterval = window.setInterval(() => {
      currentIndex += 1;
      setTypedText(fullText.slice(0, currentIndex));

      if (currentIndex >= fullText.length) {
        window.clearInterval(typingInterval);
      }
    }, 45);

    const hideTimeout = window.setTimeout(() => {
      sessionStorage.setItem("splash-shown", "true");
      setShowSplash(false);
    }, 2200);

    return () => {
      window.clearInterval(typingInterval);
      window.clearTimeout(hideTimeout);
    };
  }, [showSplash]);

  return (
    <AnimatePresence>
      {showSplash ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0809] px-6"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="glass-card w-full max-w-2xl rounded-[32px] border border-white/10 px-6 py-8 sm:px-10 sm:py-10">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
              <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
              <span className="h-3 w-3 rounded-full bg-[#06d6a0]" />
            </div>
            <p className="text-sm text-white/45">boot sequence</p>
            <div className="mt-5 font-mono text-base text-white/88 sm:text-lg">
              {typedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="ml-1 inline-block"
              >
                _
              </motion.span>
            </div>
            <div className="mt-8 h-px w-full bg-white/10" />
            <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/38">
              <span>portfolio boot</span>
              <span>{hasTypedEverything ? "ready" : "loading"}</span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
