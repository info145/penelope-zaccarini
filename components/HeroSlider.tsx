"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const SLIDES = [
  {
    num: "01",
    title: "PENELOPE ZACCARINI",
    subtitle: "ATTRICE · AUTRICE · PERFORMER",
    href: "/chi-sono",
    image: "/hero.jpg",
  },
  {
    num: "02",
    title: "PENELOPE 2.0",
    subtitle: "Monologo · Autrice e interprete · 2023",
    href: "/lavori",
    image: "/slide2.jpg",
  },
  {
    num: "03",
    title: "IN SCENA",
    subtitle: "Teatro · Performance · Poesia",
    href: "/lavori",
    image: "/slide3.jpg",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const goTo = (idx: number) => {
    if (idx === current) return;

    const tl = gsap.timeline();

    tl.to([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    });

    tl.to(
      imageRef.current,
      { opacity: 0, duration: 0.3, ease: "power2.in" },
      "<"
    );

    tl.call(() => setCurrent(idx));

    tl.fromTo(
      [titleRef.current, subtitleRef.current],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }
    );

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" },
      "<"
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const slide = SLIDES[current];

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="section-label mb-4 text-[var(--accent)]">
          {slide.num} / {String(SLIDES.length).padStart(2, "0")}
        </p>
        <h1
          ref={titleRef}
          className="font-display text-6xl font-bold tracking-[0.05em] text-white sm:text-7xl md:text-8xl lg:text-[10rem] lg:leading-none"
        >
          {slide.title}
        </h1>
        <p ref={subtitleRef} className="mt-4 text-sm tracking-[0.2em] text-[var(--text-secondary)] md:text-base">
          {slide.subtitle}
        </p>
        <Link
          href={slide.href}
          className="mt-8 border border-white/20 px-8 py-3 text-[11px] font-semibold tracking-[0.25em] text-white transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
        >
          SCOPRI
        </Link>
      </div>

      <div className="absolute bottom-8 left-6 z-10 flex items-center gap-4 md:bottom-12 md:left-10">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            className={`font-display text-lg transition-all duration-300 ${
              i === current
                ? "text-[var(--accent)]"
                : "text-white/30 hover:text-white/60"
            }`}
          >
            {s.num}
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 right-6 z-10 md:bottom-12 md:right-10">
        <button
          type="button"
          className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-white/60 transition hover:text-white"
          data-cursor-hover
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
              <path d="M0 0L14 8L0 16V0Z" />
            </svg>
          </span>
          PLAY
        </button>
      </div>
    </section>
  );
}
