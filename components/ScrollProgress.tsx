"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] origin-left pointer-events-none"
      style={{
        scaleX: scrollYProgress,
        background:
          "linear-gradient(90deg, #4f8ef7 0%, #a855f7 45%, #22d3ee 80%, #f472b6 100%)",
        boxShadow: "0 0 8px rgba(79,142,247,0.8), 0 0 20px rgba(168,85,247,0.4)",
      }}
    />
  );
}
