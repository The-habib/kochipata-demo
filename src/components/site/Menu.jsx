import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import MenuItem from "@/components/site/MenuItem";
import { MENU } from "@/lib/menu";

export default function Menu() {
  const [cat, setCat] = useState(0);
  const [active, setActive] = useState(0);
  const items = MENU[cat].items;
  const current = items[active] || items[0];

  return (
    <section id="menu" className="relative z-10 bg-[#EEF2E6] py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-[8vw]">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-ui text-xs font-medium uppercase tracking-[0.3em] text-clay">The Living Menu</p>
            <h2 className="mt-5 font-heading text-5xl font-light text-soil md:text-7xl">Cooked fresh, <span className="italic">to order.</span></h2>
          </div>
          <p className="max-w-xs font-ui text-sm text-soil/60">Meals ₹200–400 per person · Cash & UPI accepted · Please allow 15–25 min.</p>
        </Reveal>

        <div className="mt-14 flex gap-2 overflow-x-auto pb-2">
          {MENU.map((m, i) => (
            <button key={m.category} onClick={() => { setCat(i); setActive(0); }} className={`shrink-0 rounded-full border-[0.5px] px-5 py-2.5 font-ui text-sm font-medium transition-all ${i === cat ? "border-soil bg-soil text-cream" : "border-soil/30 text-soil/70 hover:border-soil"}`}>
              {m.category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <ul key={cat} className="lg:order-1">
            {items.map((it, i) => (
              <MenuItem key={it.name} item={it} active={i === active} onHover={() => setActive(i)} />
            ))}
          </ul>
          <div className="order-first lg:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] lg:sticky lg:top-28 lg:aspect-[4/5]">
              <AnimatePresence mode="popLayout">
                <motion.div key={current.img + current.name} initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
                  <Image src={current.img} alt={current.name} className="h-full w-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-soil/70 to-transparent" />
                  <p className="absolute bottom-6 left-6 right-6 font-heading text-3xl italic text-cream">{current.name}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}