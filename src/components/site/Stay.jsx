import React from "react";
import { Car, Trees, Users, Baby, Moon, Home } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import { IMG, PHONE, WHATSAPP } from "@/lib/site";

const features = [
  { icon: Home, title: "Private cabins", text: "Curtained bamboo booths for couples and quiet family meals." },
  { icon: Trees, title: "Waterside pavilions", text: "Thatched gazebos on the lawn, looking out over open water." },
  { icon: Users, title: "Tour group halls", text: "Seat 40–100 guests at once — ideal for Sundarbans coaches." },
  { icon: Car, title: "Free parking", text: "20+ cars, 50+ bikes and a dedicated bus bay, gated." },
  { icon: Baby, title: "Kid-friendly lawns", text: "Space for little ones to stretch after a long drive." },
  { icon: Moon, title: "Late-night dining", text: "Hot food served until 12:30 AM, every single day." },
];

export default function Stay({ onBook }) {
  return (
    <section id="stay" className="relative z-10 bg-soil py-28 text-cream md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-[8vw]">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <p className="font-ui text-xs font-medium uppercase tracking-[0.3em] text-sage">Stay & Unwind</p>
            <h2 className="mt-5 font-heading text-5xl font-light leading-[1.02] md:text-7xl">Room to breathe, <span className="italic text-clay">off the highway.</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-cream/70">Unlike congested roadside stalls, Kochipata is an open estate of lawns, cabins and water views — quiet enough for easy conversation, big enough for the whole tour bus.</p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="overflow-hidden rounded-[28px]"><Image src={IMG.gazebo} alt="Thatched gazebo at golden hour" className="aspect-[4/3] h-full w-full md:aspect-auto md:min-h-[520px]" /></Reveal>
          <Reveal delay={0.1} className="overflow-hidden rounded-[28px]"><Image src={IMG.courtyard} alt="Courtyard under string lights" className="aspect-[4/3] h-full w-full md:aspect-auto md:min-h-[520px]" /></Reveal>
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} className="group border-t-[0.5px] border-cream/20 pt-6 transition-colors duration-500 hover:border-sage/60">
              <f.icon className="h-6 w-6 text-sage transition-colors duration-500 group-hover:text-clay" strokeWidth={1.25} />
              <h3 className="mt-5 font-heading text-3xl">{f.title}</h3>
              <p className="mt-2 text-base text-cream/60">{f.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 flex flex-col items-start justify-between gap-8 rounded-[28px] border-[0.5px] border-cream/20 p-8 md:flex-row md:items-center md:p-12">
          <p className="max-w-xl font-heading text-3xl font-light md:text-4xl">Planning a group lunch or a weekend drive to the Sundarbans?</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={onBook} className="rounded-full bg-clay px-6 py-3.5 font-ui text-sm font-medium text-cream transition-colors hover:bg-sage hover:text-soil">Reserve ahead</button>
            <a href={`tel:${PHONE}`} className="rounded-full border-[0.5px] border-cream/40 px-6 py-3.5 font-ui text-sm font-medium">Call us</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-full border-[0.5px] border-cream/40 px-6 py-3.5 font-ui text-sm font-medium">WhatsApp</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}