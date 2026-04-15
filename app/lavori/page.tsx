import type { Metadata } from "next";
import { LavoriGrid } from "./LavoriGrid";

export const metadata: Metadata = { title: "Lavori" };

const PROJECTS = [
  { title: "PENELOPE 2.0", role: "Monologo tragicomico — Regia e scrittura", year: "2023–2026", location: "Tour Italia", image: "/teatro.jpg" },
  { title: "HO VISTO NINA VOLARE", role: "Con la compagnia Vudisí", year: "2022", location: "Italia", image: "/ho vistoninavolare.jpeg" },
  { title: "OLTRE I MURI", role: "Con la compagnia Chandrama", year: "2022", location: "Italia", image: "/oltre-i-muri.png" },
  { title: "PICCOLE DONNE", role: "Vincitrice bando «A fuoco»", year: "2022", location: "Italia", image: "/bts2.jpg" },
  { title: "MYSTERIES", role: "Collaborazione — Living Theater", year: "In corso", location: "Italia", image: "/hero.jpg" },
  { title: "DANTE: L'ESILIO DI UN POETA", role: "Cinema", year: "2021", location: "Italia", image: "/slide3.jpg" },
];

export default function LavoriPage() {
  return (
    <main className="pt-32 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="section-label mb-4 text-[var(--accent)]">LAVORI</p>
        <h1 className="font-display text-5xl font-bold tracking-[0.02em] text-white md:text-7xl lg:text-8xl">
          I MIEI PROGETTI
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
          Una selezione dei lavori a cui ho preso parte — teatro, performance,
          cinema e letture sceniche.
        </p>
      </div>
      <LavoriGrid projects={PROJECTS} />
    </main>
  );
}
