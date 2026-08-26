"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { constructionStages } from "@/data/constructionStages";
import Image from "next/image";

interface ConstructionVisualProps {
  scrollYProgress: MotionValue<number>;
}

export function ConstructionVisual({ scrollYProgress }: ConstructionVisualProps) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center pointer-events-none">
      {constructionStages.map((stage, i) => {
        const prevProgress = i > 0 ? constructionStages[i - 1].progress : 0;
        const currentProgress = stage.progress;
        const nextProgress = i < constructionStages.length - 1 ? constructionStages[i + 1].progress : 1;

        const p = 0.04; // Padding for the clear state
        const clearStart = Math.max(0, currentProgress - p);
        const clearEnd = Math.min(1, currentProgress + p);

        const range = i === 0 
          ? [0, clearEnd, nextProgress, 1] 
          : i === constructionStages.length - 1 
            ? [0, prevProgress, clearStart, 1] 
            : [0, prevProgress, clearStart, clearEnd, nextProgress, 1];

        const opacity = useTransform(
          scrollYProgress,
          range,
          i === 0 ? [1, 1, 0, 0] : i === constructionStages.length - 1 ? [0, 0, 1, 1] : [0, 0, 1, 1, 0, 0]
        );

        const scale = useTransform(
          scrollYProgress,
          range,
          i === 0 ? [1, 1, 0.95, 0.95] : i === constructionStages.length - 1 ? [1.05, 1.05, 1, 1] : [1.05, 1.05, 1, 1, 0.95, 0.95]
        );

        const filter = useTransform(
          scrollYProgress,
          range,
          i === 0 
            ? ["blur(0px)", "blur(0px)", "blur(10px)", "blur(10px)"] 
            : i === constructionStages.length - 1 
              ? ["blur(10px)", "blur(10px)", "blur(0px)", "blur(0px)"] 
              : ["blur(10px)", "blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)", "blur(10px)"]
        );

        return (
          <motion.div
            key={i}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{ opacity, scale, filter, zIndex: 10 - i }}
          >
            <div className="relative w-full h-full">
              <Image
                src={stage.image}
                alt={stage.label}
                fill
                priority={i < 2}
                className="object-cover drop-shadow-2xl"
                sizes="100vw"
              />
            </div>
          </motion.div>
        );
      })}

      {/* Atmospheric vignette over the images */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,5,5,0.8)_100%)] z-20" />
    </div>
  );
}
