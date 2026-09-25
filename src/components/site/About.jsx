import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import { IMG } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-[1400px] px-6 py-28 md:px-[8vw] md:py-40">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <p className="font-ui text-xs font-medium uppercase tracking-[0.3em] text-clay">Our Story</p>
          <h2 className="mt-6 font-heading text-5xl font-light leading-[1.02] text-soil md:text-7xl">
            <span className="font-bn text-4xl md:text-6xl">কচিপাতা</span><br />
            <span className="italic">means</span> tender green leaf.
          </h2>
          <div className="mt-12 overflow-hidden rounded-[28px]">
            <Image src={IMG.garden} alt="Manicured lawns and thatched huts at Kochipata" className="aspect-[16/10] w-full" />
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:pt-40">
          <p className="font-heading text-3xl font-light leading-snug text-soil md:text-4xl">
            We built Kochipata for what highway travellers need most — calm surroundings, unhurried meals, and honest culinary warmth.
          </p>
          <div className="my-10 h-[0.5px] w-full bg-soil/20" />
          <p className="text-lg text-soil/70">
            Set along the Basanti Highway at Joygram, Malancha, our estate opens onto landscaped lawns, brick-edged garden paths and thatched pavilions looking out over the water. There are intimate cabins for couples and families, and wide halls for tour groups of up to a hundred.
          </p>
          <p className="mt-6 text-lg text-soil/70">
            From our celebrated chicken popcorn and spiced highway chai to sizzling tandoor and Bengali thalis, every plate is cooked fresh to order — never frozen. Good food takes 15–25 minutes; we think the view is worth it.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8">
            {[["48 km", "from Science City, Kolkata"], ["46 km", "to Godkhali ferry ghat"]].map(([n, l]) => (
              <div key={l} className="border-t-[0.5px] border-soil/25 pt-5">
                <p className="font-heading text-5xl font-light text-clay">{n}</p>
                <p className="mt-1 font-ui text-sm text-soil/60">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}