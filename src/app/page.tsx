import { ConstructionExperience } from "@/components/construction/ConstructionExperience";
import { ConstructionFinale } from "@/components/construction/ConstructionFinale";
import { ConstructionIntro } from "@/components/construction/ConstructionIntro";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <ConstructionIntro />
      <ConstructionExperience />
      <ConstructionFinale />
    </main>
  );
}
