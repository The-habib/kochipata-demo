import React from "react";
import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import { NAV, PHONE, PHONE_LABEL, WHATSAPP, MAP_URL, DIRECTIONS_URL } from "@/lib/site";

function InfoCol({ icon: Icon, label, children }) {
  return (
    <div className="group">
      <div className="flex items-center gap-2.5 text-soil/70">
        <Icon className="h-4 w-4 transition-colors duration-500 group-hover:text-soil" strokeWidth={1.5} />
        <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.25em]">{label}</p>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-clay text-soil">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-soil blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sage blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-10 pt-20 md:px-[8vw] md:pt-28">
        <div className="flex flex-col gap-10 border-b-[0.5px] border-soil/25 pb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-4xl font-medium tracking-tight md:text-5xl">Kochipata</span>
              <span className="font-bn text-xl text-soil/70 md:text-2xl">কচিপাতা</span>
            </div>
            <p className="mt-3 max-w-sm font-heading text-2xl font-light italic leading-snug md:text-3xl">A garden stopover on the road to the Sundarbans.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="flex items-center gap-2 rounded-full bg-soil px-5 py-3 font-ui text-sm font-medium text-cream transition-colors hover:bg-moss"><Phone className="h-4 w-4" /> {PHONE_LABEL}</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border-[0.5px] border-soil/40 px-5 py-3 font-ui text-sm font-medium transition-colors hover:bg-soil hover:text-cream"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCol icon={Phone} label="Reservations">
            <a href={`tel:${PHONE}`} className="block font-heading text-2xl transition-colors hover:text-cream">{PHONE_LABEL}</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-1 block font-ui text-sm text-soil/80 underline underline-offset-4 transition-colors hover:text-cream">Message on WhatsApp</a>
          </InfoCol>
          <InfoCol icon={MapPin} label="Find us">
            <a href={MAP_URL} target="_blank" rel="noreferrer" className="block text-base leading-snug transition-colors hover:text-cream">Malancha, Joygram,<br />Basanti Highway, WB 743425</a>
            <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 font-ui text-xs uppercase tracking-[0.2em] text-soil/60 transition-colors hover:text-soil"><Navigation className="h-3 w-3" /> Directions</a>
          </InfoCol>
          <InfoCol icon={Clock} label="Open daily">
            <p className="text-base leading-snug">Monday – Sunday<br />6:00 AM – 12:30 AM</p>
          </InfoCol>
          <InfoCol icon={Navigation} label="Explore">
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}><a href={n.href} className="group inline-flex items-center gap-2 text-base transition-colors hover:text-cream"><span className="h-px w-0 bg-soil transition-all duration-500 group-hover:w-4" />{n.label}</a></li>
              ))}
            </ul>
          </InfoCol>
        </div>

        <p className="select-none font-heading text-[20vw] font-light leading-[0.78] tracking-tight text-soil/95 md:text-[15.5vw]">Kochipata<span className="italic text-soil/80">.</span></p>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t-[0.5px] border-soil/30 pt-6 font-ui text-xs md:flex-row">
          <p className="text-soil/70">© {new Date().getFullYear()} Kochipata Restaurant & Hotel · <span className="font-bn">কচিপাতা রেস্টুরেন্ট & হোটেল</span></p>
          <p className="text-soil/60">Fresh, never frozen · Cooked to order</p>
        </div>
      </div>
    </footer>
  );
}