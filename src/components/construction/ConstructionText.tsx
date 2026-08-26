"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { constructionStages } from "@/data/constructionStages";
import { cn } from "@/lib/utils";

interface ConstructionTextProps {
  scrollYProgress: MotionValue<number>;
}

export function ConstructionText({ scrollYProgress }: ConstructionTextProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-30">
      {constructionStages.map((stage, i) => {
        const isFinal = i === constructionStages.length - 1;
        const isLeft = i % 2 === 0;

        // Determine when this text block is active
        const visibleBand = 0.03; 
        const fadeBand = 0.03; 

        // For i=0, start at 0, peak at 0, hold until 0.03, fade out by 0.06
        // For middle, fade in from peak-0.06 to peak-0.03, hold until peak+0.03, fade out by peak+0.06
        const start = Math.max(0, stage.progress - visibleBand - fadeBand);
        const peakStart = Math.max(0, stage.progress - visibleBand);
        const peakEnd = Math.min(1, stage.progress + visibleBand);
        const end = Math.min(1, stage.progress + visibleBand + fadeBand);

        const opacityRange = i === 0 
          ? [0, peakEnd, end, 1] 
          : isFinal 
            ? [0, start, peakStart, 1] 
            : [0, start, peakStart, peakEnd, end, 1];
            
        const opacityValues = i === 0 
          ? [1, 1, 0, 0] 
          : isFinal 
            ? [0, 0, 1, 1] 
            : [0, 0, 1, 1, 0, 0];

        const yRange = i === 0 
          ? [0, peakEnd, end, 1] 
          : isFinal 
            ? [0, start, peakStart, 1] 
            : [0, start, peakStart, peakEnd, end, 1];
            
        const yValues = i === 0 
          ? [0, 0, -50, -50] 
          : isFinal 
            ? [50, 50, 0, 0] 
            : [50, 50, 0, 0, -50, -50];

        const opacity = useTransform(scrollYProgress, opacityRange, opacityValues);
        const y = useTransform(scrollYProgress, yRange, yValues);

        return (
          <motion.div
            key={i}
            className={cn(
              "absolute top-1/2 -translate-y-1/2 w-full px-6 lg:pr-24 flex flex-col",
              isFinal ? "items-center text-center justify-center lg:px-24" : (isLeft ? "items-start lg:pl-64" : "items-end text-right lg:pl-24")
            )}
            style={{ opacity, y }}
          >
            <div className="max-w-2xl">
              <p className="text-sm md:text-base font-mono tracking-widest text-white/50 mb-4">
                {stage.label}
              </p>
              
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.85] tracking-tight text-white mb-6 text-glow">
                {stage.title.map((line, idx) => (
                  <span key={idx} className="block overflow-hidden">
                    <motion.span 
                      className="block"
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h2>
              
              <p className="text-lg md:text-xl text-white/70 max-w-md font-light leading-relaxed">
                {stage.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
