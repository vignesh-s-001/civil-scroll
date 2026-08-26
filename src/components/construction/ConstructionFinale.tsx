"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ConstructionFinale() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="text-center z-10 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-white leading-[0.85] text-glow mb-8"
        >
          <span className="block text-white/50">BUILT TO</span>
          <span className="block">PERFORM.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl font-light text-white/70 mb-12"
        >
          FROM VISION TO REALITY.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-mono text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-white/90"
        >
          <span className="relative z-10">Explore Our Capabilities</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>
    </section>
  );
}
