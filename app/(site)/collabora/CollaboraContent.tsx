"use client";

import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

const SERVICES = [
  { title: "RECITAZIONE", desc: "Teatro, cinema indipendente, cortometraggi. Interpreto ruoli con intensità e profondità." },
  { title: "PERFORMANCE", desc: "Esperienze immersive dove corpo, voce e poesia si fondono nello spazio." },
  { title: "LETTURE SCENICHE", desc: "Letture che diventano spettacolo. Testi classici e contemporanei prendono vita." },
  { title: "SCRITTURA", desc: "Monologhi, testi teatrali, poesia. Scrivo ciò che il palcoscenico chiede." },
  { title: "WORKSHOP", desc: "Laboratori di pedagogia teatrale con radice lecoqiana: corpo, voce e scrittura scenica." },
];

export function CollaboraContent() {
  return (
    <main className="pt-32 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeIn>
          <p className="section-label mb-4 text-[var(--accent)]">COLLABORA</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-[0.02em] text-white md:text-7xl lg:text-8xl">
            PRODUZIONE ELEGANTE.
            <br />
            ESECUZIONE IMPECCABILE.
          </h1>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="divide-y divide-white/[0.06]">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={0.08 * i}>
              <div className="group grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-10">
                <h2 className="font-display text-3xl tracking-[0.05em] text-white transition group-hover:text-[var(--accent)] md:text-4xl">
                  {s.title}
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 border-t border-white/[0.06] pt-16 text-center">
            <h3 className="font-display text-3xl font-bold tracking-[0.02em] text-white md:text-4xl">
              HAI UN PROGETTO IN MENTE?
            </h3>
            <Link
              href="/contatti"
              className="mt-8 inline-flex items-center gap-3 border border-white/20 px-10 py-4 text-[11px] font-semibold tracking-[0.25em] text-white transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
            >
              PARLIAMONE
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
