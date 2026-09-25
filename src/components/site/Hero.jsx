import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed } from "lucide-react";
import HeroVisual from "@/components/site/HeroVisual";
import HeroCards from "@/components/site/HeroCards";

const ease = [0.22, 1, 0.36, 1];
const stats = [
  ["18.5", "Hours open daily"],
  ["100%", "Fresh, never frozen"],
  ["Free", "Parking · cars to coaches"],
];

export default function Hero({ onBook }) {
  return (
    <section id="top" className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-6 pb-16 pt-32 md:px-[6vw] lg:min-h-screen lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-28">
      <div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex items-center gap-4 font-ui text-xs font-medium uppercase tracking-[0.3em] text-soil/60">
          Basanti Highway · SH-3 <span className="h-px w-14 bg-soil/30" />
        </motion.p>
        <h1 className="mt-6 font-heading text-[clamp(3.6rem,8.2vw,8.4rem)] font-light uppercase leading-[0.86] tracking-tight text-soil">
          {["The Art", "of the"].map((l, i) => (
            <motion.span key={l} className="block" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.1 + i * 0.12, ease }}>{l}</motion.span>
          ))}
          <motion.span className="block italic normal-case text-clay" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.36, ease }}>Tender Leaf.</motion.span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="mt-8 max-w-md text-lg text-soil/70">
          A garden stopover on the road to the Sundarbans — fresh, made-to-order food, thatched pavilions over the water, and room to breathe.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.75 }} className="mt-9 flex flex-wrap gap-3">
          <button onClick={onBook} className="group flex items-center gap-3 rounded-full bg-soil px-7 py-4 font-ui text-sm font-medium text-cream transition-colors hover:bg-clay">
            Book a Table <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a href="#menu" className="flex items-center gap-3 rounded-full border-[0.5px] border-soil/40 px-7 py-4 font-ui text-sm font-medium text-soil transition-colors hover:bg-sage/20">
            <UtensilsCrossed className="h-4 w-4" /> Explore Menu
          </a>
        </motion.div>
        <div className="mt-12 flex flex-wrap gap-x-7 gap-y-6">
          {stats.map(([n, l], i) => (
            <div key={l} className={i ? "border-l-[0.5px] border-soil/25 pl-7 max-sm:border-0 max-sm:pl-0" : ""}>
              <p className="font-heading text-4xl font-medium text-soil">{n}</p>
              <p className="font-ui text-[11px] uppercase tracking-[0.2em] text-soil/55">{l}</p>
            </div>
          ))}
        </div>
        <HeroCards />
      </div>
      <HeroVisual />
    </section>
  );
}