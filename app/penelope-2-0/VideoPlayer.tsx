"use client";

import { useState } from "react";
import Image from "next/image";

export function VideoPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-secondary)]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src="https://www.youtube-nocookie.com/embed/djd0oY8-2N0?autoplay=1&rel=0"
          title="Penelope 2.0, spettacolo integrale, versione teatrale"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label="Riproduci lo spettacolo integrale"
        >
          <Image
            src="/penelope-2-0/grottesca.jpg"
            alt="Penelope in scena in luce blu, espressione grottesca verso il pubblico"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 960px, 100vw"
          />
          <span className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/15" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="#0a0a0a"
              aria-hidden="true"
            >
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
