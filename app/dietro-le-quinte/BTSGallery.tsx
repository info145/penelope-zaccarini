"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const PHOTOS = [
  { src: "/bts1.jpg", alt: "Ombre sul palcoscenico", aspect: "aspect-[3/4]" },
  { src: "/closeup.jpg", alt: "Primo piano", aspect: "aspect-square" },
  { src: "/bts2.jpg", alt: "Backstage", aspect: "aspect-[4/3]" },
  { src: "/p20.jpg", alt: "Penelope 2.0 — flusso di coscienza", aspect: "aspect-[3/4]" },
  { src: "/teatro.jpg", alt: "Penelope 2.0 in scena", aspect: "aspect-square" },
  { src: "/bts3.jpg", alt: "In scena", aspect: "aspect-[4/3]" },
  { src: "/bts4.jpg", alt: "Scena teatrale", aspect: "aspect-[3/4]" },
  { src: "/slide3.jpg", alt: "Atmosfera", aspect: "aspect-square" },
  { src: "/about.jpg", alt: "Ritratto", aspect: "aspect-[3/4]" },
];

export function BTSGallery() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {PHOTOS.map((p, i) => (
          <FadeIn key={p.src} delay={0.06 * i}>
            <div className={`group relative mb-4 overflow-hidden bg-[var(--bg-secondary)] ${p.aspect}`}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
