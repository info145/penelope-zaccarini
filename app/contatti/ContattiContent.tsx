"use client";

import { FadeIn } from "@/components/FadeIn";

export function ContattiContent() {
  return (
    <main className="pt-32 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <FadeIn>
          <p className="section-label mb-4 text-[var(--accent)]">CONTATTI</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-[0.02em] text-white md:text-7xl lg:text-8xl">
            HAI UN PROGETTO IN MENTE? RACCONTAMELO.
          </h1>
        </FadeIn>
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-28">
        <div>
          <FadeIn>
            <p className="section-label mb-8 text-[var(--accent)]">INFO</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                  EMAIL
                </p>
                <a
                  href="mailto:zaccarini.penelope@gmail.com"
                  className="link-underline mt-2 inline-block font-display text-2xl tracking-[0.05em] text-white md:text-3xl"
                >
                  zaccarini.penelope@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                  TELEFONO
                </p>
                <a
                  href="tel:+393400753318"
                  className="link-underline mt-2 inline-block font-display text-2xl tracking-[0.05em] text-white md:text-3xl"
                >
                  +39 340 075 3318
                </a>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                  BASE
                </p>
                <p className="mt-2 font-display text-2xl tracking-[0.05em] text-white md:text-3xl">
                  TORINO, ITALIA
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div>
          <FadeIn>
            <p className="section-label mb-8 text-[var(--accent)]">SCRIVIMI</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                  NOME
                </label>
                <input id="name" type="text" className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none transition focus:border-[var(--accent)]" placeholder="Il tuo nome" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                  EMAIL
                </label>
                <input id="email" type="email" className="w-full border-b border-white/20 bg-transparent py-3 text-white outline-none transition focus:border-[var(--accent)]" placeholder="La tua email" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                  MESSAGGIO
                </label>
                <textarea id="message" rows={5} className="w-full resize-none border-b border-white/20 bg-transparent py-3 text-white outline-none transition focus:border-[var(--accent)]" placeholder="Raccontami il tuo progetto..." />
              </div>
              <button type="submit" className="mt-4 border border-white/20 px-10 py-4 text-[11px] font-semibold tracking-[0.25em] text-white transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black">
                INVIA
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
