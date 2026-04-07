"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

const FIRST = "PENELOPE";
const LAST = "ZACCARINI";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    if (revealed) return;
    setRevealed(true);

    try {
      const audio = new Audio("/intro-music.mp3");
      audio.volume = 0.4;
      audio.loop = true;
      audio.play();
      audioRef.current = audio;
      if (typeof window !== "undefined") {
        (window as unknown as Record<string, HTMLAudioElement>).__pzAudio = audio;
      }
    } catch {
      /* browser may block autoplay */
    }

    const letters = containerRef.current?.querySelectorAll(".preloader-letter");
    if (!letters) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.pointerEvents = "none";
              containerRef.current.style.display = "none";
            }
            onComplete();
          },
        });
      },
    });

    tl.to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.06,
      ease: "power3.out",
    });

    tl.to({}, { duration: 0.5 });
  };

  return (
    <div
      ref={containerRef}
      className="preloader flex-col gap-4"
      role="button"
      tabIndex={0}
      onClick={handleEnter}
      onKeyDown={(e) => e.key === "Enter" && handleEnter()}
    >
      <span className="block font-display text-4xl font-bold tracking-[0.15em] md:text-6xl">
        {FIRST.split("").map((char, i) => (
          <span key={`f${i}`} className="preloader-letter">
            {char}
          </span>
        ))}
      </span>
      <span className="block font-display text-4xl font-bold tracking-[0.15em] md:text-6xl">
        {LAST.split("").map((char, i) => (
          <span key={`l${i}`} className="preloader-letter">
            {char}
          </span>
        ))}
      </span>
      {!revealed && (
        <p className="mt-6 animate-pulse text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--text-secondary)]">
          CLICCA PER ENTRARE
        </p>
      )}
    </div>
  );
}
