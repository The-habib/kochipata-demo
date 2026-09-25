import React from "react";

export default function BookingField({ label, as, options = [], className = "", ...props }) {
  const base = "mt-1 w-full border-0 border-b-[0.5px] border-soil/40 bg-transparent px-0 py-2.5 text-lg text-soil outline-none transition-colors focus:border-sage focus:ring-0";
  return (
    <label className={`block ${className}`}>
      <span className="font-ui text-[11px] font-medium uppercase tracking-[0.2em] text-soil/60">{label}</span>
      {as === "select" ? (
        <select className={base} {...props}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input className={base} {...props} />
      )}
    </label>
  );
}