"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { ConstructionVisual } from "./ConstructionVisual";
import { ConstructionText } from "./ConstructionText";
import { ConstructionProgress } from "./ConstructionProgress";

export function ConstructionExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="construction-experience" ref={containerRef} className="relative h-[600vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ConstructionVisual scrollYProgress={scrollYProgress} />
        <ConstructionText scrollYProgress={scrollYProgress} />
        <ConstructionProgress scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
