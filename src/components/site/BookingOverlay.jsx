import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import BookingField from "@/components/site/BookingField";
import { WHATSAPP } from "@/lib/site";

const empty = { name: "", phone: "", date: "", time: "", group_size: "1-4 guests", seating: "No preference", notes: "" };

export default function BookingOverlay({ open, onClose }) {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await base44.entities.Reservation.create(form);
      setStatus("done");
    } catch (err) {
      setError("Something went wrong. Please call or WhatsApp us instead.");
      setStatus("idle");
    }
  };

  const close = () => { onClose(); setTimeout(() => { setStatus("idle"); setForm(empty); }, 400); };
  const waText = encodeURIComponent(`Hello Kochipata, I'd like to reserve a table for ${form.group_size} on ${form.date} at ${form.time}. Name: ${form.name}.`);

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] overflow-y-auto bg-soil/40 backdrop-blur-md" onClick={close}>
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} onClick={(e) => e.stopPropagation()} className="relative mx-auto my-6 w-[calc(100%-2rem)] max-w-2xl rounded-[32px] border-[0.5px] border-cream/60 bg-cream/95 p-8 shadow-2xl backdrop-blur-2xl md:my-16 md:p-12">
            <button onClick={close} className="absolute right-6 top-6 rounded-full p-2 hover:bg-sage/20" aria-label="Close"><X className="h-6 w-6" /></button>
            {status === "done" ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage text-soil"><Check className="h-8 w-8" /></div>
                <h3 className="mt-6 font-heading text-4xl font-light text-soil">Your table is requested.</h3>
                <p className="mx-auto mt-3 max-w-sm text-base text-soil/70">We'll call {form.phone} to confirm. For a faster reply, send the details on WhatsApp too.</p>
                <a href={`${WHATSAPP}?text=${waText}`} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-soil px-7 py-3.5 font-ui text-sm font-medium text-cream hover:bg-clay">Send on WhatsApp</a>
              </div>
            ) : (
              <form onSubmit={submit}>
                <p className="font-ui text-xs font-medium uppercase tracking-[0.3em] text-clay">Reservations</p>
                <h3 className="mt-3 font-heading text-4xl font-light text-soil md:text-5xl">Book a <span className="italic">table.</span></h3>
                <div className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                  <BookingField label="Name" required value={form.name} onChange={set("name")} />
                  <BookingField label="Phone" type="tel" required value={form.phone} onChange={set("phone")} />
                  <BookingField label="Date" type="date" required value={form.date} onChange={set("date")} />
                  <BookingField label="Arrival time" type="time" required value={form.time} onChange={set("time")} />
                  <BookingField label="Group size" as="select" options={["1-4 guests", "5-15 guests", "Bus tour 15+"]} value={form.group_size} onChange={set("group_size")} />
                  <BookingField label="Seating" as="select" options={["No preference", "Private cabin", "Garden pavilion", "Indoor hall"]} value={form.seating} onChange={set("seating")} />
                  <BookingField label="Notes (optional)" className="sm:col-span-2" value={form.notes} onChange={set("notes")} />
                </div>
                {error && <p className="mt-4 text-sm text-red-700">{error}</p>}
                <button disabled={status === "sending"} className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-soil py-4 font-ui text-sm font-medium text-cream transition-colors hover:bg-clay disabled:opacity-60">
                  {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />} Request reservation
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}