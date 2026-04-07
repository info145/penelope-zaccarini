"use client";

import Link from "next/link";
import { FadeIn } from "../FadeIn";
import { ParallaxImage } from "../ParallaxImage";

export function AboutPreview() {
  return (
    <section className="border-t border-white/[0.06] bg-[var(--bg-secondary)]">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-[120px] md:grid-cols-[1fr_1fr] md:gap-16 md:px-10 md:py-[160px] lg:gap-24">
        <FadeIn>
          <ParallaxImage
            src="/P1.jpg"
            alt="Penelope Zaccarini"
            className="aspect-[3/4] w-full"
          />
        </FadeIn>

        <div className="flex flex-col justify-center">
          <FadeIn delay={0.1}>
            <p className="section-label mb-6 text-[var(--accent)]">CHI SONO</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-[0.02em] text-white md:text-5xl lg:text-7xl">
              NON SONO SOLO UN&apos;ATTRICE.
              <br />
              <span className="text-white/40">MA LA GENTE CONTINUA A GUARDARMI.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              Attrice, performer, regista, scrittrice, clownessa.
              Il mio lavoro vive nell&apos;intersezione tra teatro, poesia e performance.
              Cerco storie che chiedono di essere raccontate con il corpo e con la voce
              — ogni progetto è un&apos;esplorazione del testo, dello spazio, di ciò che resta tra le parole.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link
              href="/chi-sono"
              className="mt-10 inline-flex w-fit items-center gap-3 border border-white/20 px-8 py-3 text-[11px] font-semibold tracking-[0.25em] text-white transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
            >
              SCOPRI DI PIÙ
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
