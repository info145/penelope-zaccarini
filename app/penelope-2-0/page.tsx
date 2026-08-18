import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "./Reveal";
import { VideoPlayer } from "./VideoPlayer";

export const metadata: Metadata = {
  title: "Penelope 2.0",
  description:
    "Monologo tragicomico, poetico e contemporaneo scritto e interpretato da Penelope Zaccarini. 45 minuti, una sedia, un flusso di coscienza.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Penelope 2.0 · Penelope Zaccarini",
    description:
      "Monologo tragicomico, poetico e contemporaneo. 45 minuti, una sedia, un flusso di coscienza.",
    images: ["/penelope-2-0/volto.jpg"],
  },
};

export default function Penelope20Page() {
  return (
    <main className="cursor-native bg-[var(--bg-primary)] text-white">
      <SmoothScroll />

      {/* Hero */}
      <section className="relative flex min-h-[100dvh] items-end lg:items-center">
        <div className="absolute inset-0 lg:left-[42%]">
          <Image
            src="/penelope-2-0/volto.jpg"
            alt="Primo piano in bianco e nero di Penelope Zaccarini, mani tra i capelli e sguardo intenso"
            fill
            priority
            className="object-cover object-[50%_15%]"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/45 to-[#0a0a0a]/10 lg:bg-gradient-to-r lg:from-[#0a0a0a] lg:via-[#0a0a0a]/15 lg:to-transparent" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0a]/70 to-transparent" />
        </div>

        <p className="absolute left-6 top-6 z-10 text-sm font-medium tracking-wide text-white/80 lg:left-16 lg:top-8">
          Penelope Zaccarini
        </p>

        <div className="relative z-10 w-full px-6 pb-16 lg:w-1/2 lg:px-16 lg:pb-0">
          <h1 className="font-display text-[clamp(4.5rem,15vw,12rem)] leading-[0.85] tracking-normal">
            Penelope <span className="text-[var(--accent)]">2.0</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            Monologo tragicomico, poetico e contemporaneo, scritto e
            interpretato da Penelope Zaccarini.
          </p>
          <a
            href="#spettacolo"
            className="mt-10 inline-block bg-[var(--accent)] px-8 py-4 font-medium text-[#0a0a0a] transition-colors duration-300 hover:bg-[var(--accent-hover)] active:translate-y-[1px]"
          >
            Guarda lo spettacolo
          </a>
        </div>
      </section>

      {/* Sinossi */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center md:py-40">
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] tracking-wide md:text-7xl">
            Una sedia. Una voce.
            <br />
            Vent&rsquo;anni di attesa.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 text-lg leading-relaxed text-white/85 md:text-xl">
            La scena è abitata soltanto da Penelope. Seduta, immobile, apre un
            flusso di coscienza fatto di giochi di parole, cambi di espressione
            e di personalità, deformazioni e riscritture del testo omerico.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
            Il flusso culmina in una meditazione che riporta l&rsquo;autrice e
            gli spettatori all&rsquo;unico vero monito che guida ogni attesa:
            l&rsquo;amore per se stessi.
          </p>
        </Reveal>
      </section>

      {/* Citazione dell'autrice */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <Reveal>
            <blockquote className="font-display text-3xl leading-tight tracking-wide md:text-5xl">
              &laquo;Penelope attende per vent&rsquo;anni in un modo
              impeccabile, non rompe le scatole a nessuno. Ma chi si chiede
              come sta lei? La sua voce, chi la porta in giro?&raquo;
            </blockquote>
            <p className="mt-8 text-sm text-[var(--text-secondary)]">
              Penelope Zaccarini, intervista di Elena Mangiarotti per la
              Gazzetta di Parma
            </p>
          </Reveal>
        </div>
      </section>

      {/* Video */}
      <section id="spettacolo" className="mx-auto max-w-5xl px-6 py-28 md:py-40">
        <Reveal>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Lo spettacolo, per intero
          </h2>
          <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
            Versione teatrale integrale, ripresa dal vivo.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <VideoPlayer />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-sm leading-relaxed text-[var(--text-secondary)]">
            Esiste anche una versione salotto, pensata per case, cortili e
            spazi non convenzionali:{" "}
            <a
              href="https://youtu.be/hhKGrqMPte0"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-white"
            >
              guardala su YouTube
            </a>
            .
          </p>
        </Reveal>
      </section>

      {/* Note di regia */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-28 md:pb-40 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative aspect-[4/3] overflow-hidden lg:order-2">
          <Image
            src="/penelope-2-0/meditazione.jpg"
            alt="Penelope seduta davanti a un muro di pietra, occhi chiusi, mani sollevate accanto al viso"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>
        <div className="lg:order-1">
          <Reveal>
            <h2 className="font-display text-5xl tracking-wide md:text-6xl">
              L&rsquo;attrice non si muove mai
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 leading-relaxed text-white/85">
              Per tutta la durata dello spettacolo restano attivi soltanto il
              viso e il collo. La stasi totale del corpo rafforza il tema
              dell&rsquo;attesa e concentra l&rsquo;attenzione
              sull&rsquo;espressione interna del personaggio.
            </p>
            <p className="mt-5 leading-relaxed text-white/85">
              Una luce laterale bagna la figura e dà tridimensionalità a
              espressioni tanto grottesche quanto realistiche. Tra musica e
              silenzio, il volto in continua trasformazione crea momenti
              ipnotici e trascendentali.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Numeri */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <h2 className="font-display text-5xl tracking-wide md:text-6xl">
              Fatto per entrare ovunque
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            <Reveal delay={0.05}>
              <p className="font-display text-6xl text-[var(--accent)] md:text-7xl">
                45&rsquo;
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                di spettacolo
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display text-6xl text-[var(--accent)] md:text-7xl">
                2&times;4 m
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                di spazio scenico minimo
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-display text-6xl text-[var(--accent)] md:text-7xl">
                10&rsquo;
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                di montaggio
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-display text-6xl text-[var(--accent)] md:text-7xl">
                1
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                sedia in scena
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <p className="mt-14 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
              Regia di Penelope Zaccarini, con il supporto registico di Ottavia
              Zaccarini. Responsabile tecnica: Alessia Colanero. Luci e audio
              essenziali, dettagli nella scheda tecnica inclusa nel dossier.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Site specific */}
      <section className="relative flex min-h-[70dvh] items-end overflow-hidden">
        <Image
          src="/penelope-2-0/giardino.jpg"
          alt="Penelope seduta in un giardino di notte, alberi illuminati di blu alle spalle"
          fill
          className="object-cover object-[50%_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="relative z-10 w-full px-6 pb-16 lg:px-16">
          <Reveal>
            <p className="max-w-2xl font-display text-4xl leading-tight tracking-wide md:text-5xl">
              Palchi, salotti, giardini: lo spettacolo è site specific e prende
              la forma dello spazio che lo ospita.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stampa */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
        <Reveal>
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Dicono dello spettacolo
          </p>
          <blockquote className="mt-8 text-2xl leading-snug text-white/90 md:text-3xl">
            &laquo;Un brillante monologo che ha dato una chiave di lettura
            attuale di questa epica figura femminile.&raquo;
          </blockquote>
          <p className="mt-6 text-sm text-[var(--text-secondary)]">
            Elisa Bonassera, lettera pubblicata sulla Gazzetta di Parma
          </p>
        </Reveal>
      </section>

      {/* Bio */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <Reveal>
            <h2 className="font-display text-5xl tracking-wide md:text-6xl">
              Chi è Penelope Zaccarini
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 leading-relaxed text-white/85">
              Attrice, drammaturga e performer, si è formata
              all&rsquo;Atelier Teatro Fisico di Philip Radice a Torino, nella
              pedagogia lecoquiana, nel mimo e nell&rsquo;improvvisazione. Ha
              lavorato con maestri come Eugenio Allegri e Mariano Dammacco e
              con le compagnie Chandrama, Vudisì e Living Theater. Con
              Penelope 2.0 debutta come autrice e interprete, portando lo
              spettacolo in una prima tournée europea.
            </p>
            <p className="mt-6 text-sm text-[var(--text-secondary)]">
              Percorso completo, foto e altri lavori su{" "}
              <Link href="/" className="link-underline text-white">
                penelopezaccarini.it
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contatti */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
          <Reveal>
            <h2 className="font-display text-6xl leading-[0.95] tracking-wide md:text-8xl">
              Portate Penelope
              <br />
              in scena
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:zaccarini.penelope@gmail.com?subject=Penelope%202.0"
                className="inline-block bg-[var(--accent)] px-8 py-4 font-medium text-[#0a0a0a] transition-colors duration-300 hover:bg-[var(--accent-hover)] active:translate-y-[1px]"
              >
                Scrivete a Penelope
              </a>
              <a
                href="/dossier-penelope-2-0.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/30 px-8 py-4 font-medium text-white transition-colors duration-300 hover:border-white active:translate-y-[1px]"
              >
                Scarica il dossier (PDF)
              </a>
            </div>
            <p className="mt-10 text-sm text-[var(--text-secondary)]">
              <a href="tel:+393400753318" className="link-underline">
                +39 340 075 3318
              </a>
              {"  "}&middot;{"  "}
              <a
                href="mailto:zaccarini.penelope@gmail.com"
                className="link-underline"
              >
                zaccarini.penelope@gmail.com
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
