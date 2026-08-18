"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_CLASS =
  "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000";

export function VideoBackground() {
  const first = useRef<HTMLVideoElement>(null);
  const second = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced.current) {
      first.current?.pause();
      return;
    }
    const warmup = setTimeout(() => second.current?.load(), 5000);
    return () => clearTimeout(warmup);
  }, []);

  useEffect(() => {
    if (reduced.current) return;
    const videos = [first.current, second.current];
    const current = videos[active];
    const other = videos[1 - active];
    other?.pause();
    if (!current) return;
    current.currentTime = 0;
    current.play().catch(() => {});
  }, [active]);

  return (
    <>
      <video
        ref={first}
        src="/penelope-2-0/penelope2.mp4"
        className={`${VIDEO_CLASS} ${active === 0 ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setActive(1)}
        aria-hidden="true"
      />
      <video
        ref={second}
        src="/penelope-2-0/ave-maria.mp4"
        className={`${VIDEO_CLASS} ${active === 1 ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
        preload="none"
        onEnded={() => setActive(0)}
        aria-hidden="true"
      />
    </>
  );
}
