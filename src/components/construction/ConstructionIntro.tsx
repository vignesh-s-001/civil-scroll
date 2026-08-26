"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ConstructionIntro() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background noise/grain */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="text-center z-10"
      >
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tight text-white leading-[0.85] text-glow mb-6">
          <span className="block text-white/50">BUILDING</span>
          <span className="block">FROM THE</span>
          <span className="block">GROUND UP</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-white/40">Scroll to begin</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
