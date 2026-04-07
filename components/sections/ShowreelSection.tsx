"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FadeIn } from "../FadeIn";

export function ShowreelSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    if (playing) {
      v.pause();
      v.muted = true;
      setPlaying(false);
    } else {
      v.muted = false;
      v.play();
      setPlaying(true);
    }
  };

  return (
    <section className="border-t border-white/[0.06] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-[1400px] px-6 py-[120px] md:px-10 md:py-[160px]">
        <FadeIn>
          <p className="section-label mb-6 text-[var(--accent)]">SHOWREEL</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-4xl font-bold tracking-[0.02em] text-white md:text-6xl lg:text-7xl">
            ESSERE O NON T-ESSERE?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">
            Estratto da «Penelope 2.0» — monologo tragicomico, poetico, contemporaneo.
            50 minuti di flusso di coscienza, giochi di parole e deformazione del mito.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            className="group relative mt-12 aspect-video w-full cursor-pointer overflow-hidden bg-black"
            onClick={togglePlay}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && togglePlay()}
          >
            <video
              ref={videoRef}
              src="/showreel.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                playing ? "opacity-100" : "opacity-0"
              }`}
            />

            <Image
              src="/p20.jpg"
              alt="Showreel — Penelope 2.0"
              fill
              className={`object-cover transition-all duration-700 ${
                playing
                  ? "scale-110 opacity-0"
                  : "opacity-60 group-hover:scale-105 group-hover:opacity-40"
              }`}
              sizes="100vw"
            />

            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                playing ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]/10 md:h-28 md:w-28">
                <svg
                  width="22"
                  height="26"
                  viewBox="0 0 14 16"
                  fill="white"
                  className="ml-1"
                >
                  <path d="M0 0L14 8L0 16V0Z" />
                </svg>
              </div>
            </div>

            {playing && (
              <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 md:bottom-6 md:right-6 md:h-12 md:w-12">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="white">
                  <rect x="1" y="0" width="3.5" height="12" rx="0.5" />
                  <rect x="7.5" y="0" width="3.5" height="12" rx="0.5" />
                </svg>
              </div>
            )}

            <p
              className={`absolute bottom-6 left-6 text-[11px] font-medium tracking-[0.2em] text-white/50 transition-opacity duration-500 md:bottom-8 md:left-8 ${
                playing ? "opacity-0" : "opacity-100"
              }`}
            >
              PLAY VIDEO
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
