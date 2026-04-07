"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

export function VideoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.2 });
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    );
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    if (playing) {
      v.pause();
      v.muted = true;
      v.currentTime = 0;
      setPlaying(false);
    } else {
      v.muted = false;
      v.currentTime = 0;
      v.play();
      setPlaying(true);
    }
  };

  return (
    <section ref={sectionRef} className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        src="/showreel.mp4"
        muted
        autoPlay
        loop
        playsInline
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          playing ? "opacity-100" : "opacity-80"
        }`}
      />

      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition-opacity duration-700 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />

      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center px-6 text-center transition-opacity duration-700 ${
          playing ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <h1
          ref={titleRef}
          className="font-display text-[clamp(3rem,12vw,12rem)] font-bold leading-[0.9] tracking-[0.06em] text-white"
          style={{ opacity: 0 }}
        >
          PENELOPE
          <br />
          ZACCARINI
        </h1>
        <p
          ref={subtitleRef}
          className="mt-6 text-[clamp(0.65rem,1.2vw,0.85rem)] font-medium tracking-[0.35em] text-white/70"
          style={{ opacity: 0 }}
        >
          ATTRICE &middot; AUTRICE &middot; PERFORMER
        </p>
        <div ref={ctaRef} className="mt-10 flex items-center gap-6" style={{ opacity: 0 }}>
          <Link
            href="/lavori"
            className="border border-white/20 px-8 py-3 text-[11px] font-semibold tracking-[0.25em] text-white transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
          >
            I MIEI LAVORI
          </Link>
          <Link
            href="/chi-sono"
            className="text-[11px] font-medium tracking-[0.25em] text-white/50 transition-colors duration-300 hover:text-white"
          >
            CHI SONO
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={handlePlay}
        className="group absolute bottom-8 right-6 z-20 flex items-center gap-4 md:bottom-12 md:right-10"
        data-cursor-hover
      >
        <span className="text-[11px] font-medium tracking-[0.2em] text-white/60 transition group-hover:text-white">
          {playing ? "CLOSE" : "PLAY VIDEO"}
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]/10 md:h-16 md:w-16">
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
              <rect x="1" y="1" width="12" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="18" viewBox="0 0 14 16" fill="white" className="ml-1">
              <path d="M0 0L14 8L0 16V0Z" />
            </svg>
          )}
        </span>
      </button>

      <div className="absolute bottom-8 left-6 z-20 hidden items-center gap-2 md:bottom-12 md:left-10 md:flex">
        <span className="inline-block h-[1px] w-8 bg-[var(--accent)]" />
        <span className="text-[11px] font-medium tracking-[0.2em] text-white/40">
          PENELOPE 2.0 — ESTRATTO
        </span>
      </div>
    </section>
  );
}
