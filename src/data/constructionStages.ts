export interface ConstructionStage {
  progress: number;
  label: string;
  title: string[];
  description: string;
  image: string;
}

export const constructionStages: ConstructionStage[] = [
  {
    progress: 0.0,
    label: "01 SITE PREP",
    title: ["SECURING", "THE SITE"],
    description: "Clearing the land and laying the groundwork for what's to come.",
    image: "/construction/stage-1.png",
  },
  {
    progress: 0.16,
    label: "02 EXCAVATION",
    title: ["CLEARING", "THE GROUND"],
    description: "Preparing the earth to support massive structural loads.",
    image: "/construction/stage-2.png",
  },
  {
    progress: 0.33,
    label: "03 FOUNDATION",
    title: ["A STRONG", "FOUNDATION"],
    description: "Pouring concrete and reinforcing the base to ensure stability.",
    image: "/construction/stage-3.png",
  },
  {
    progress: 0.5,
    label: "04 COLUMNS",
    title: ["RAISING", "THE SKELETON"],
    description: "Erecting the initial steel columns to define the vertical space.",
    image: "/construction/stage-4.png",
  },
  {
    progress: 0.66,
    label: "05 FRAME",
    title: ["SHAPING", "THE CORE"],
    description: "Connecting steel beams to finalize the structural framework.",
    image: "/construction/stage-5.png",
  },
  {
    progress: 0.83,
    label: "06 ENCLOSURE",
    title: ["ENCLOSING", "THE SPACE"],
    description: "Installing walls and cladding to protect the interior environment.",
    image: "/construction/stage-6.png",
  },
  {
    progress: 1.0,
    label: "07 HANDOVER",
    title: ["READY FOR", "OPERATION"],
    description: "The final industrial facility, built to perform.",
    image: "/construction/stage-7.png",
  },
];
