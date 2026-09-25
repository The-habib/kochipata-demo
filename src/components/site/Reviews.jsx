import React from "react";
import { Star } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { MAP_URL } from "@/lib/site";

const reviews = [
  { name: "Monira Khanam", meta: "Local Guide", text: "The popcorn was amazing — honestly the best I've ever had so far. The food was fresh and didn't feel frozen. The place has a lot of space, and there's good privacy as well.", big: true },
  { name: "Bikash Chandra Sarkar", meta: "Local Guide", text: "The tender steak was perfectly cooked, and our waiter was incredibly attentive without being intrusive." },
  { name: "Mohin", meta: "Google review", text: "Very very good place — 100% authentic taste. Indian, South Indian, tandoori and Chinese foods." },
  { name: "Aklas Mondal", meta: "Google review", text: "Location is too good. Food is very tasty." },
];

function Stars() {
  return <div className="flex gap-1 text-clay">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>;
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative z-10 mx-auto max-w-[1400px] px-6 py-28 md:px-[8vw] md:py-40">
      <Reveal>
        <p className="font-ui text-xs font-medium uppercase tracking-[0.3em] text-clay">Guest Voices</p>
        <h2 className="mt-5 font-heading text-5xl font-light text-soil md:text-7xl">Kind words <span className="italic">from the road.</span></h2>
      </Reveal>
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.08} className={r.big ? "lg:row-span-2" : ""}>
            <figure className={`flex h-full flex-col justify-between rounded-[28px] border-[0.5px] border-soil/15 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-sage/50 hover:shadow-[0_24px_60px_-30px_rgba(22,30,24,0.4)] md:p-10 ${r.big ? "bg-sage/20 hover:bg-sage/25" : "bg-cream/60 backdrop-blur-sm hover:bg-cream/90"}`}>
              <div>
                <Stars />
                <blockquote className={`mt-6 font-heading font-light leading-snug text-soil ${r.big ? "text-3xl md:text-4xl" : "text-2xl"}`}>“{r.text}”</blockquote>
              </div>
              <figcaption className="mt-8 font-ui text-sm"><span className="font-semibold text-soil">{r.name}</span> <span className="text-soil/50">· {r.meta}</span></figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-12">
        <a href={MAP_URL} target="_blank" rel="noreferrer" className="font-ui text-sm font-medium text-soil underline decoration-sage decoration-2 underline-offset-8 hover:text-clay">Read all reviews & leave yours on Google →</a>
      </Reveal>
    </section>
  );
}