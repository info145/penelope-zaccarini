"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

type Project = {
  title: string;
  role: string;
  year: string;
  location: string;
  image: string;
};

export function LavoriGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={0.08 * i}>
            <article className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--bg-secondary)]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="border border-white/30 px-5 py-2 text-[11px] font-semibold tracking-[0.2em] text-white backdrop-blur-sm">
                    SCOPRI
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h2 className="font-display text-2xl tracking-[0.05em] text-white md:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {p.role} · {p.location} · {p.year}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
