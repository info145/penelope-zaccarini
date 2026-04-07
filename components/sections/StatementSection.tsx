"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "../FadeIn";

const FEATURED = [
  { title: "PENELOPE 2.0", tag: "MONOLOGO TRAGICOMICO", image: "/teatro.jpg", href: "/lavori" },
  { title: "HO VISTO NINA VOLARE", tag: "COMPAGNIA VUDISÍ", image: "/bts4.jpg", href: "/lavori" },
  { title: "OLTRE I MURI", tag: "COMPAGNIA CHANDRAMA", image: "/oltre-i-muri.png", href: "/lavori" },
];

export function StatementSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-[1400px] px-6 py-[120px] md:px-10 md:py-[160px]">
        <div className="mb-20 grid items-end gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <FadeIn>
              <p className="section-label mb-6 text-[var(--accent)]">LAVORI</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-5xl font-bold leading-[1.05] tracking-[0.02em] text-white md:text-7xl lg:text-8xl">
                ASCOLTO.
                <br />
                CREO.
                <br />
                RACCONTO.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link
              href="/lavori"
              className="inline-flex w-fit items-center gap-3 border border-white/20 px-8 py-3 text-[11px] font-semibold tracking-[0.25em] text-white transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
            >
              ESPLORA I MIEI LAVORI
            </Link>
          </FadeIn>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {FEATURED.map((item, i) => (
            <FadeIn key={item.title} delay={0.1 * i}>
              <Link href={item.href} className="group relative block aspect-[3/4] overflow-hidden bg-[var(--bg-secondary)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[10px] font-medium tracking-[0.3em] text-[var(--accent)]">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-[0.04em] text-white md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
