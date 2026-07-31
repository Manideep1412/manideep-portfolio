"use client";

import { useRef } from "react";
import { motion, useSpring } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** Extra classes on the outer motion wrapper (e.g. "w-full sm:w-auto") */
  className?: string;
  /** How strongly the button attracts — 0.0 to 1.0, default 0.38 */
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.38,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useSpring(0, { stiffness: 280, damping: 20, mass: 0.5 });
  const y = useSpring(0, { stiffness: 280, damping: 20, mass: 0.5 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    x.set((e.clientX - (left + width / 2)) * strength);
    y.set((e.clientY - (top + height / 2)) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  );
}
