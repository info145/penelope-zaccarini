"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const AWARDS = [
  { title: "L'Eredità delle Donne", year: "2023", note: "Debutto «Penelope 2.0»" },
  { title: "Tour Penelope 2.0", year: "2024–2026", note: "Festival e teatri in tutta Italia" },
  { title: "Bando «A fuoco»", year: "2022", note: "«Piccole Donne» — vincitrice" },
];

export function ChiSonoContent() {
  return (
    <main className="pt-32 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeIn>
          <p className="section-label mb-4 text-[var(--accent)]">CHI SONO</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-[0.02em] text-white md:text-7xl lg:text-8xl">
            OGNI PROGETTO È UN&apos;ESPLORAZIONE.
          </h1>
        </FadeIn>
      </div>

      <div className="mx-auto mt-16 max-w-[600px] px-6 md:mt-24 md:px-10">
        <FadeIn>
          <Image
            src="/P1.jpg"
            alt="Penelope Zaccarini ritratto"
            width={1281}
            height={1920}
            className="h-auto w-full"
            sizes="(max-width:768px) 100vw, 600px"
            priority
          />
        </FadeIn>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-[100px] md:grid-cols-[1fr_1.2fr] md:gap-20 md:px-10 md:py-[140px]">
        <FadeIn>
          <h2 className="font-display text-4xl font-bold tracking-[0.02em] text-white md:text-5xl">
            IL MIO
            <br />
            PERCORSO
          </h2>
        </FadeIn>
        <div>
          <FadeIn delay={0.1}>
            <p className="text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
              Attrice, performer, regista, scrittrice, clownessa.
              Mi sono formata alla Performing Arts University «ATF Philip Radice» di
              Torino, con una radice forte nella pedagogia lecoqiana. Il mio lavoro
              vive nell&apos;intreccio tra corpo, parola e poesia.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 leading-relaxed text-[var(--text-secondary)]">
              Scrivo, interpreto e creo spettacoli in cui il linguaggio diventa azione scenica.
              Con «Penelope 2.0» rivisito in modo innovativo il tema dell&apos;attesa,
              ispirandomi alla figura mitologica di Penelope e trasferendola ai giorni nostri —
              un flusso di coscienza abitato da giochi di parole, cambi di personalità,
              riferimenti di genere e deformazione del testo omerico, che culmina con una
              meditazione sull&apos;amore per se stessi.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-6 leading-relaxed text-[var(--text-secondary)]">
              Lavoro in teatro e nel cinema indipendente e faccio anche pedagogia
              teatrale. Parlo italiano, inglese, spagnolo e francese. Tra le mie
              competenze: teatro fisico, teatro dell&apos;assurdo, mimo e pantomima,
              surrealismo, patafisica, tango avanzato, canto e voce, scrittura poetica.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="border-t border-white/[0.06] bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1400px] px-6 py-[100px] md:px-10 md:py-[140px]">
          <FadeIn>
            <p className="section-label mb-6 text-[var(--accent)]">RICONOSCIMENTI</p>
          </FadeIn>
          <div className="divide-y divide-white/[0.06]">
            {AWARDS.map((a, i) => (
              <FadeIn key={a.title} delay={0.1 * i}>
                <div className="flex flex-col justify-between gap-2 py-8 md:flex-row md:items-baseline">
                  <h3 className="font-display text-2xl tracking-[0.05em] text-white md:text-3xl">
                    {a.title}
                  </h3>
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm text-[var(--text-secondary)]">{a.note}</span>
                    <span className="text-sm text-[var(--accent)]">{a.year}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
