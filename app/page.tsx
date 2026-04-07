import { VideoHero } from "@/components/VideoHero";
import { StatementSection } from "@/components/sections/StatementSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { BTSPreview } from "@/components/sections/BTSPreview";
import { ShowreelSection } from "@/components/sections/ShowreelSection";
import { ClientsSection } from "@/components/sections/ClientsSection";

export default function HomePage() {
  return (
    <main>
      <VideoHero />
      <StatementSection />
      <AboutPreview />
      <BTSPreview />
      <ShowreelSection />
      <ClientsSection />
    </main>
  );
}
