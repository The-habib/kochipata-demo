import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/site";

const cards = [
  { img: IMG.popcorn, label: "Fresh\nPopcorn" },
  { img: IMG.chai, label: "Highway\nChai" },
  { img: IMG.thali, label: "Bengali\nThali" },
];

export default function HeroCards() {
  return (
    <div className="mt-12 grid max-w-lg grid-cols-3 gap-3">
      {cards.map((c, i) => (
        <motion.a
          href="#menu"
          key={c.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 + i * 0.1 }}
          className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
        >
          <Image src={c.img} alt={c.label.replace("\n", " ")} className="h-full w-full transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-soil/80 via-soil/10 to-transparent" />
          <p className="absolute bottom-3 left-3 whitespace-pre-line font-ui text-[11px] font-semibold uppercase leading-tight tracking-wider text-cream">{c.label}</p>
        </motion.a>
      ))}
    </div>
  );
}