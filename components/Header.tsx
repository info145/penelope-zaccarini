"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const NAV_ITEMS = [
  { num: "01", label: "LAVORI", href: "/lavori" },
  { num: "02", label: "CHI SONO", href: "/chi-sono" },
  { num: "03", label: "COLLABORA", href: "/collabora" },
  { num: "04", label: "DIETRO LE QUINTE", href: "/dietro-le-quinte" },
  { num: "05", label: "CONTATTI", href: "/contatti" },
];

const SOCIALS = [
  { label: "INSTAGRAM", href: "https://instagram.com/" },
  { label: "VIMEO", href: "https://vimeo.com/" },
  { label: "LINKEDIN", href: "https://linkedin.com/" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const toggleAudio = () => {
    const audio = (window as unknown as Record<string, HTMLAudioElement>).__pzAudio;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  useEffect(() => {
    if (!menuRef.current || !linksRef.current) return;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(menuRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.6,
        ease: "power3.inOut",
      });
      const items = linksRef.current.querySelectorAll(".menu-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, delay: 0.3, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(menuRef.current, {
        clipPath: "inset(0% 0% 0% 100%)",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 py-5 md:px-10 md:py-6 mix-blend-difference">
        <Link href="/" className="font-display text-sm font-bold tracking-[0.2em] text-white md:text-base">
          PENELOPE ZACCARINI
        </Link>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={toggleAudio}
            className="text-[11px] font-medium tracking-[0.2em] text-white transition hover:text-[var(--accent)]"
            aria-label={muted ? "Attiva audio" : "Muta audio"}
          >
            {muted ? "♪ OFF" : "♪ ON"}
          </button>
          <Link
            href="/contatti"
            className="link-underline hidden text-[11px] font-medium tracking-[0.2em] text-white md:inline-block"
          >
            CONTATTAMI
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="group flex flex-col items-end gap-[5px]"
            aria-label="Menu"
          >
            <span
              className={`block h-[1px] bg-white transition-all duration-500 ${menuOpen ? "w-6 translate-y-[3px] rotate-45" : "w-6"}`}
            />
            <span
              className={`block h-[1px] bg-white transition-all duration-500 ${menuOpen ? "w-6 -translate-y-[3px] -rotate-45" : "w-4 group-hover:w-6"}`}
            />
          </button>
        </div>
      </header>

      <div
        ref={menuRef}
        className="fixed inset-0 z-[400] bg-[var(--bg-primary)] flex flex-col justify-between px-8 py-24 md:px-16 md:py-20"
        style={{ clipPath: "inset(0% 0% 0% 100%)" }}
      >
        <div ref={linksRef} className="flex flex-col gap-2 md:gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="menu-item group flex items-baseline gap-4 py-2"
            >
              <span className="font-display text-sm text-[var(--accent)] md:text-base">
                {item.num}
              </span>
              <span className="font-display text-4xl font-bold tracking-[0.05em] text-white transition-colors duration-300 group-hover:text-[var(--accent)] md:text-6xl lg:text-7xl">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-end justify-between">
          <div className="flex gap-4">
            {SOCIALS.map((s, i) => (
              <span key={s.label} className="flex items-center gap-4">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[11px] font-medium tracking-[0.15em] text-[var(--text-secondary)] transition hover:text-white"
                >
                  {s.label}
                </a>
                {i < SOCIALS.length - 1 && (
                  <span className="text-[11px] text-[var(--text-secondary)]">,</span>
                )}
              </span>
            ))}
          </div>
          <p className="hidden text-[11px] tracking-[0.15em] text-[var(--text-secondary)] md:block">
            PENELOPE ZACCARINI © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
}
