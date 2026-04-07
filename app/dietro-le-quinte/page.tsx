import type { Metadata } from "next";
import { BTSGallery } from "./BTSGallery";

export const metadata: Metadata = { title: "Dietro le quinte" };

export default function BTSPage() {
  return (
    <main className="pt-32 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="section-label mb-4 text-[var(--accent)]">BTS</p>
        <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-[0.02em] text-white md:text-7xl lg:text-8xl">
          DIETRO LE QUINTE
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
          Momenti dal set, prove, backstage. Il lato umano e imperfetto del lavoro creativo.
        </p>
      </div>
      <BTSGallery />
    </main>
  );
}
