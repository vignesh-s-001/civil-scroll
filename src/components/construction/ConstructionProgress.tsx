"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { constructionStages } from "@/data/constructionStages";

interface ConstructionProgressProps {
  scrollYProgress: MotionValue<number>;
}

export function ConstructionProgress({ scrollYProgress }: ConstructionProgressProps) {
  // Height of the fill line based on scroll progress
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleScrollTo = (progress: number) => {
    const container = document.getElementById('construction-experience');
    if (container) {
      const rect = container.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      // The container's scrollable height is its total height minus the viewport height
      const scrollableHeight = rect.height - window.innerHeight;
      const targetY = containerTop + progress * scrollableHeight;
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
      <div className="relative flex items-center h-[400px]">
        {/* Track */}
        <div className="absolute left-0 top-0 w-[2px] h-full bg-white/10" />
        
        {/* Fill */}
        <motion.div
          className="absolute left-0 top-0 w-[2px] bg-white origin-top"
          style={{ height: fillHeight }}
        />

        <div className="flex flex-col justify-between h-full pl-6">
          {constructionStages.map((stage, i) => {
            const isFirst = i === 0;
            const isLast = i === constructionStages.length - 1;

            const range = isFirst 
              ? [0, Math.min(1, stage.progress + 0.1), 1] 
              : isLast 
                ? [0, Math.max(0, stage.progress - 0.1), stage.progress] 
                : [0, Math.max(0, stage.progress - 0.1), stage.progress, Math.min(1, stage.progress + 0.1), 1];
                
            const opacityValues = isFirst 
              ? [1, 0.3, 0.3] 
              : isLast 
                ? [0.3, 0.3, 1] 
                : [0.3, 0.3, 1, 0.3, 0.3];
                
            const opacity = useTransform(scrollYProgress, range, opacityValues);

            return (
              <motion.button
                key={i}
                onClick={() => handleScrollTo(stage.progress)}
                className="text-xs tracking-widest font-mono uppercase transition-all duration-300 text-left hover:text-white cursor-pointer"
                style={{ opacity }}
              >
                {stage.label.split(" ")[0]} <span className="ml-2">{stage.label.split(" ").slice(1).join(" ")}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
