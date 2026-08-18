import type { Metadata } from "next";
import { VideoBackground } from "./VideoBackground";

export const metadata: Metadata = {
  title: "Penelope 2.0",
  description:
    "Monologo tragicomico, poetico e contemporaneo scritto e interpretato da Penelope Zaccarini.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Penelope 2.0 · Penelope Zaccarini",
    description:
      "Monologo tragicomico, poetico e contemporaneo scritto e interpretato da Penelope Zaccarini.",
    images: ["/penelope-2-0/volto.jpg"],
  },
};

export default function Penelope20Page() {
  return (
    <main className="cursor-native relative flex min-h-[100dvh] items-end overflow-hidden bg-[#0a0a0a] text-white">
      <VideoBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/25 to-transparent" />

      <p className="absolute left-6 top-6 z-10 text-sm font-medium tracking-wide text-white/80 md:left-12 md:top-8">
        Penelope Zaccarini
      </p>

      <div className="relative z-10 w-full px-6 pb-14 md:px-12 md:pb-16">
        <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-normal">
          Penelope <span className="text-[var(--accent)]">2.0</span>
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
          Monologo tragicomico, poetico e contemporaneo, scritto e
          interpretato da Penelope Zaccarini.
        </p>
        <a
          href="https://youtu.be/djd0oY8-2N0"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-[var(--accent)] px-8 py-4 font-medium text-[#0a0a0a] transition-colors duration-300 hover:bg-[var(--accent-hover)] active:translate-y-[1px]"
        >
          Guarda lo spettacolo completo
        </a>
      </div>
    </main>
  );
}
