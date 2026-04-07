"use client";

import { FadeIn } from "../FadeIn";

const CLIENTS = [
  "L'Eredità delle Donne",
  "Compagnia Vudisí",
  "Compagnia Chandrama",
  "Living Theater",
  "RAI",
  "Bando A Fuoco",
  "ATF Philip Radice",
];

export function ClientsSection() {
  return (
    <section className="border-t border-white/[0.06] bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-[1400px] px-6 py-[120px] md:px-10 md:py-[160px]">
        <FadeIn>
          <p className="section-label mb-6 text-[var(--accent)]">
            COLLABORAZIONI
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-[0.02em] text-white md:text-6xl lg:text-7xl">
            CHI HA SCELTO DI
            <br />
            <span className="text-white/40">LAVORARE CON ME.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--text-secondary)]">
            Hai una visione? Ho curiosità e disponibilità emotiva.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-x-10 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CLIENTS.map((name, i) => (
            <FadeIn key={name} delay={0.05 * i}>
              <div className="group border-b border-white/[0.06] pb-4">
                <p className="font-display text-xl tracking-[0.05em] text-white/40 transition-colors duration-300 group-hover:text-white md:text-2xl">
                  {name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
