import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/site";

export default function HeroVisual() {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute -top-10 right-0 font-bn text-[clamp(5rem,12vw,11rem)] leading-none text-sage/25 lg:-right-6">কচিপাতা</span>
      <motion.div
        initial={{ opacity: 0, scale: 1.06, clipPath: "inset(12% 12% 12% 12% round 400px)" }}
        animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 400px 400px 28px 28px)" }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[4/5] overflow-hidden rounded-t-[400px] rounded-b-[28px] lg:aspect-[4/5.2]"
      >
        <Image src={IMG.hero} alt="Thatched garden pavilions beside calm water at Kochipata" className="h-full w-full" focalPointX={0.3} focalPointY={0.5} />
        <div className="absolute inset-0 bg-gradient-to-t from-soil/50 via-transparent to-transparent" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="absolute left-4 top-[18%] flex items-center gap-2 rounded-full border-[0.5px] border-cream/40 bg-cream/80 px-4 py-2 backdrop-blur-md md:-left-6">
        <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage" /><span className="relative h-2 w-2 rounded-full bg-sage" /></span>
        <span className="font-ui text-xs font-medium text-soil">Open daily · 6 AM – 12:30 AM</span>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} className="absolute -bottom-6 right-4 w-44 overflow-hidden rounded-2xl border-4 border-cream shadow-xl md:-right-6 md:w-52">
        <Image src={IMG.night} alt="Kochipata lit up at night" className="aspect-[4/3] w-full" />
        <p className="bg-cream px-3 py-2 font-heading text-base italic text-soil">On the road to the Sundarbans</p>
      </motion.div>

      <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 font-ui text-xs text-soil/50 xl:flex">
        <span className="h-10 w-px bg-soil/30" />
        <span className="font-semibold text-soil">01</span><span>02</span><span>03</span>
      </div>
    </div>
  );
}