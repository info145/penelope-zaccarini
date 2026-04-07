"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "../FadeIn";

const BTS_PHOTOS = [
  { src: "/bts1.jpg", alt: "Ombre sul palcoscenico" },
  { src: "/bts2.jpg", alt: "Backstage teatrale" },
  { src: "/bts3.jpg", alt: "Penelope 2.0 in scena" },
  { src: "/bts4.jpg", alt: "Scena teatrale" },
];

export function BTSPreview() {
  return (
    <section className="border-t border-white/[0.06] bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-[1400px] px-6 py-[120px] md:px-10 md:py-[160px]">
        <FadeIn>
          <p className="section-label mb-6 text-[var(--accent)]">DIETRO LE QUINTE</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-[0.02em] text-white md:text-6xl lg:text-7xl">
            FORSE NON DOVREI
            <br />
            <span className="text-white/40">MOSTRARE QUESTO...</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BTS_PHOTOS.map((photo, i) => (
            <FadeIn key={photo.src} delay={0.1 * i}>
              <div className="group relative aspect-[3/4] overflow-hidden bg-[var(--bg-secondary)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 text-[10px] font-medium tracking-[0.2em] text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {photo.alt.toUpperCase()}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <Link
            href="/dietro-le-quinte"
            className="mt-10 inline-flex w-fit items-center gap-3 border border-white/20 px-8 py-3 text-[11px] font-semibold tracking-[0.25em] text-white transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
          >
            DIETRO LE QUINTE
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
