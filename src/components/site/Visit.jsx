import React from "react";
import { Navigation, Phone, MessageCircle } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { MAP_EMBED, DIRECTIONS_URL, PHONE, PHONE_LABEL, WHATSAPP } from "@/lib/site";

const hours = [
  ["Breakfast & tea", "6:00 – 11:30 AM"],
  ["Lunch", "12:00 – 4:30 PM"],
  ["Snacks & high tea", "4:00 – 7:30 PM"],
  ["Dinner & late night", "7:30 PM – 12:30 AM"],
];
const distances = [["Science City, Kolkata", "48 km"], ["Bantala IT SEZ", "38 km"], ["Canning Station", "26 km"], ["Godkhali Ferry Ghat", "46 km"]];

function List({ title, rows }) {
  return (
    <div>
      <p className="font-ui text-xs font-medium uppercase tracking-[0.25em] text-soil/50">{title}</p>
      <ul className="mt-4">
        {rows.map(([a, b]) => (
          <li key={a} className="flex justify-between gap-4 border-b-[0.5px] border-soil/20 py-3 text-base"><span className="text-soil/70">{a}</span><span className="font-ui font-medium text-soil">{b}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="relative z-10 bg-[#EEF2E6] py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:px-[8vw] lg:grid-cols-2">
        <Reveal>
          <p className="font-ui text-xs font-medium uppercase tracking-[0.3em] text-clay">Visit Us</p>
          <h2 className="mt-5 font-heading text-5xl font-light text-soil md:text-7xl">Halfway to <span className="italic">the mangroves.</span></h2>
          <p className="mt-6 text-lg text-soil/70">Malancha, Joygram, Basanti Highway (SH-3), West Bengal 743425 · Plus Code GP4R+8X</p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <List title="Open every day" rows={hours} />
            <List title="Drive from" rows={distances} />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-soil px-6 py-3.5 font-ui text-sm font-medium text-cream hover:bg-clay"><Navigation className="h-4 w-4" /> Get directions</a>
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 rounded-full border-[0.5px] border-soil/40 px-6 py-3.5 font-ui text-sm font-medium text-soil hover:bg-sage/20"><Phone className="h-4 w-4" /> {PHONE_LABEL}</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border-[0.5px] border-soil/40 px-6 py-3.5 font-ui text-sm font-medium text-soil hover:bg-sage/20"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="min-h-[420px] overflow-hidden rounded-[28px] border-[0.5px] border-soil/15">
          <iframe title="Kochipata on the map" src={MAP_EMBED} className="h-full min-h-[420px] w-full grayscale-[60%] sepia-[15%]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </Reveal>
      </div>
    </section>
  );
}