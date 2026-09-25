import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, PHONE, PHONE_LABEL } from "@/lib/site";

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-3 md:px-8">
      <nav className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full px-5 transition-all duration-700 md:px-7 ${scrolled ? "border-[0.5px] border-soil/15 bg-cream/70 py-2.5 shadow-[0_8px_30px_-12px_rgba(26,36,30,0.25)] backdrop-blur-xl" : "py-4"}`}>
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-heading text-2xl font-medium tracking-tight text-soil">Kochipata</span>
          <span className="font-bn text-sm text-sage">কচিপাতা</span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="group relative font-ui text-sm font-medium text-soil/70 hover:text-soil"><span>{n.label}</span><span className="absolute -bottom-1 left-0 h-px w-0 bg-clay transition-all duration-500 group-hover:w-full" /></a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a href={`tel:${PHONE}`} className="hidden items-center gap-2 font-ui text-sm font-medium text-soil/80 md:flex">
            <Phone className="h-4 w-4" /> {PHONE_LABEL}
          </a>
          <button onClick={onBook} className="hidden rounded-full bg-soil px-5 py-2.5 font-ui text-sm font-medium text-cream transition-colors hover:bg-clay sm:block">Book a Table</button>
          <button onClick={() => setOpen(true)} className="rounded-full p-2 text-soil lg:hidden" aria-label="Open menu"><Menu className="h-6 w-6" /></button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex flex-col bg-cream/95 p-8 backdrop-blur-xl lg:hidden">
            <button onClick={() => setOpen(false)} className="self-end p-2" aria-label="Close menu"><X className="h-7 w-7" /></button>
            <ul className="mt-10 space-y-6">
              {NAV.map((n, i) => (
                <motion.li key={n.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                  <a href={n.href} onClick={() => setOpen(false)} className="font-heading text-5xl font-light text-soil">{n.label}</a>
                </motion.li>
              ))}
            </ul>
            <button onClick={() => { setOpen(false); onBook(); }} className="mt-auto rounded-full bg-clay py-4 font-ui font-medium text-cream">Book a Table</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}