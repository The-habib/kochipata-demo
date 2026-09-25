import React from "react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import { IMG } from "@/lib/site";

const shots = [
  { src: IMG.hero, alt: "Pavilions by the water", w: "w-[520px]" },
  { src: IMG.popcorn, alt: "Chicken popcorn", w: "w-[300px]" },
  { src: IMG.garden, alt: "Garden paths and huts", w: "w-[480px]" },
  { src: IMG.chai, alt: "Masala chai in a kulhad", w: "w-[300px]" },
  { src: IMG.gazebo, alt: "Gazebo at golden hour", w: "w-[340px]" },
  { src: IMG.night, alt: "Kochipata at night", w: "w-[420px]" },
  { src: IMG.biryani, alt: "Chicken biryani", w: "w-[300px]" },
  { src: IMG.courtyard, alt: "String-lit courtyard", w: "w-[340px]" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative z-10 overflow-hidden py-28 md:py-40">
      <Reveal className="mx-auto mb-16 flex max-w-[1400px] flex-wrap items-end justify-between gap-6 px-6 md:px-[8vw]">
        <div>
          <p className="font-ui text-xs font-medium uppercase tracking-[0.3em] text-clay">The Inner Sanctum</p>
          <h2 className="mt-5 font-heading text-5xl font-light text-soil md:text-7xl">Walk <span className="italic">through.</span></h2>
        </div>
        <p className="max-w-xs text-base text-soil/60">Lawns, water, thatch and lantern-light — a glimpse of the estate from morning to midnight.</p>
      </Reveal>
      <div className="pause-hover">
        <div className="marquee-track flex w-max animate-marquee gap-5">
          {[...shots, ...shots].map((s, i) => (
            <div key={i} className={`${s.w} h-[280px] shrink-0 overflow-hidden rounded-[24px] md:h-[400px]`}>
              <Image src={s.src} alt={s.alt} className="h-full w-full transition-transform duration-1000 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}