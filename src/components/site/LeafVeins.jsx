import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const veins = Array.from({ length: 10 }, (_, i) => 60 + i * 72);

function Vein({ className }) {
  return (
    <svg viewBox="0 0 400 800" fill="none" className={className} aria-hidden="true">
      <path d="M200 0 C 185 220, 225 520, 200 800" stroke="#7E9B6A" strokeWidth="0.8" />
      {veins.map((y) => (
        <g key={y} stroke="#7E9B6A" strokeWidth="0.5">
          <path d={`M200 ${y} Q 130 ${y - 18} 40 ${y - 72}`} />
          <path d={`M202 ${y + 30} Q 270 ${y + 10} 360 ${y - 42}`} />
        </g>
      ))}
    </svg>
  );
}

export default function LeafVeins() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40">
      <motion.div style={{ y: y1 }} className="absolute -left-40 top-10 w-[520px] rotate-12">
        <Vein className="w-full" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute -right-32 top-[60vh] w-[420px] -rotate-[20deg]">
        <Vein className="w-full" />
      </motion.div>
    </div>
  );
}