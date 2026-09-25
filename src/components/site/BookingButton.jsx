import React from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function BookingButton({ onClick, hidden }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? 30 : 0 }}
      transition={{ delay: hidden ? 0 : 1.6, duration: 0.6 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-clay px-6 py-4 font-ui text-sm font-medium text-cream shadow-[0_12px_40px_-10px_rgba(188,138,95,0.8)] transition-colors hover:bg-soil md:bottom-8 md:right-8"
      style={{ pointerEvents: hidden ? "none" : "auto" }}
    >
      <Leaf className="h-4 w-4" /> Book a Table
    </motion.button>
  );
}