import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

function DietMark({ diet }) {
  const veg = diet === "veg";
  return (
    <span title={veg ? "Vegetarian" : "Non-vegetarian"} className={`inline-flex h-4 w-4 shrink-0 items-center justify-center border-[1.5px] ${veg ? "border-[#2F7A3E]" : "border-[#8A3B1E]"}`}>
      {veg ? <span className="h-2 w-2 rounded-full bg-[#2F7A3E]" /> : <span className="h-0 w-0 border-x-[4px] border-b-[7px] border-x-transparent border-b-[#8A3B1E]" />}
      <span className="sr-only">{veg ? "Vegetarian" : "Non-vegetarian"}</span>
    </span>
  );
}

export default function MenuItem({ item, active, onHover }) {
  return (
    <li onMouseEnter={onHover} onFocus={onHover} tabIndex={0} className="group relative cursor-default border-b-[0.5px] border-soil/20 outline-none">
      <motion.span
        className="absolute inset-0 -mx-4 origin-left rounded-[40px_8px_40px_8px] bg-sage/25"
        initial={false}
        animate={{ scaleX: active ? 1 : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className={`relative flex items-start gap-6 py-6 transition-transform duration-500 ${active ? "translate-x-2 scale-[1.01]" : ""}`}>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <DietMark diet={item.diet} />
            <h3 className="font-heading text-2xl font-medium text-soil md:text-3xl">{item.name}</h3>
            {item.best && (
              <span className="flex items-center gap-1 rounded-full bg-clay px-2.5 py-0.5 font-ui text-[10px] font-semibold uppercase tracking-wider text-cream">
                <Star className="h-3 w-3 fill-current" /> Favourite
              </span>
            )}
          </div>
          <p className="mt-1.5 pl-7 text-base text-soil/65">{item.desc}</p>
        </div>
        <p className="font-ui text-lg font-semibold text-soil">₹{item.price}</p>
      </div>
    </li>
  );
}