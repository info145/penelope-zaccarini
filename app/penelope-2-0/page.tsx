import type { Metadata } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "./Reveal";
import { VideoBackground } from "./VideoBackground";

export const metadata: Metadata = {
  title: "Penelope 2.0",
  description:
    "Penelope 2.0, l'attesa dal punto di vista di chi resta. Monologo tragicomico, poetico e contemporaneo di Penelope Zaccarini.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Penelope 2.0 · Penelope Zaccarini",
    description:
      "L'attesa dal punto di vista di chi resta. Monologo tragicomico, poetico e contemporaneo di Penelope Zaccarini.",
    images: ["/penelope-2-0/volto.jpg"],
  },
};

export default function Penelope20Page() {
  return (
    <main className="cursor-native bg-[var(--bg-primary)] text-white">
      <SmoothScroll />

      {/* Hero video */}
      <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
        <VideoBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0a]/70 to-transparent" />

        <p className="absolute left-6 top-6 z-10 text-sm font-medium tracking-wide text-white/80 md:left-12 md:top-8">
          Penelope Zaccarini
        </p>

        <div className="relative z-10 w-full px-6 pb-14 md:px-12 md:pb-16">
          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-normal">
            Penelope <span className="text-[var(--accent)]">2.0</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
            L&rsquo;attesa dal punto di vista di chi resta. Monologo
            tragicomico, poetico e contemporaneo di Penelope Zaccarini.
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
      </section>

      {/* Sinossi */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.95] tracking-wide md:text-7xl">
            Essere o non t&#8209;essere?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 text-lg leading-relaxed text-white/85 md:text-xl">
            Lo spazio è riempito solo dalla figura di Penelope che, posta su
            una sedia, inizia un suo personale flusso di coscienza abitato da
            giochi di parole, cambi di espressione e personalità, riferimenti
            di genere, deformazione e rivisitazione del testo omerico.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
            Il flusso culmina con una meditazione che riconduce l&rsquo;autrice
            e gli spettatori all&rsquo;unico vero monito che guida la nostra
            attesa: l&rsquo;amore per se stessi.
          </p>
        </Reveal>
      </section>

      {/* Voce dal pubblico */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-28">
          <Reveal>
            <blockquote className="font-display text-3xl leading-tight tracking-wide md:text-5xl">
              &laquo;Grazie per aver interpretato divinamente la Penelope che
              è in ognun* di noi.&raquo;
            </blockquote>
            <p className="mt-8 text-sm text-[var(--text-secondary)]">
              Dal pubblico, a fine replica
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tema e ricerca */}
      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-28 md:py-36 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <h2 className="font-display text-5xl tracking-wide md:text-6xl">
              Di cosa tratta?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 leading-relaxed text-white/85">
              Il monologo rivisita in modo innovativo e accattivante il tema
              dell&rsquo;attesa, ispirandosi alla figura mitologica di
              Penelope ma trasferendola ai giorni nostri. Su questa falsa
              traccia l&rsquo;autrice ne scova e distorce i punti chiave, per
              aprire uno scorcio del tutto nuovo sul concetto di attesa ed
              esplorare i sentimenti a volte contraddittori che abitano
              l&rsquo;animo umano.
            </p>
          </Reveal>
        </div>
        <div>
          <Reveal>
            <h2 className="font-display text-5xl tracking-wide md:text-6xl">
              La ricerca
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 leading-relaxed text-white/85">
              Il testo nasce dalle riflessioni dell&rsquo;autrice e prende lo
              stile di un flusso di coscienza, un ecosistema di ritmi
              variabili a cui contribuisce con voce, corpo e spirito. Le
              ricerche variano dal teatro fisico all&rsquo;Ulisse di Joyce,
              dal teatro dell&rsquo;assurdo alla scuola di Bergonzoni, dal
              no&#8209;sense alla poesia, dal surrealismo magrittiano alla
              patafisica, e si concretizzano nella matericità della parola.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Informazioni tecniche */}
      <section className="bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Reveal>
            <h2 className="font-display text-5xl tracking-wide md:text-6xl">
              Informazioni tecniche
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            <Reveal delay={0.05}>
              <p className="font-display text-6xl text-[var(--accent)] md:text-7xl">
                50&rsquo;
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
            <p className="mt-14 max-w-2xl leading-relaxed text-white/85">
              Adatto a festival, teatri, spazi scenici e non. Negli spazi non
              convenzionali bastano una sedia, una cassa audio e una o più
              luci.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
              Regia e scrittura: Penelope Zaccarini. Co&#8209;regia: Ottavia
              Zaccarini. Tecnico: Davide Giangaspare. Scheda tecnica completa
              nel dossier.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tour */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
        <Reveal>
          <h2 className="font-display text-5xl tracking-wide md:text-6xl">
            Tour 2024&#8209;2026
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 leading-relaxed text-white/85">
            Più di venticinque date tra festival, teatri, rassegne e case
            private: dal Festival Eredità delle Donne di Firenze
            all&rsquo;Ex Asilo Filangieri di Napoli, da Torino a Palermo,
            fino a Cadaqués in Spagna. Il calendario completo è nel dossier.
          </p>
        </Reveal>
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
            <p className="mx-auto mt-8 max-w-xl leading-relaxed text-white/85">
              Penelope Zaccarini è attrice, performer, regista, scrittrice e
              clownessa.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:management@penelopezaccarini.it?subject=Penelope%202.0"
                className="inline-block bg-[var(--accent)] px-8 py-4 font-medium text-[#0a0a0a] transition-colors duration-300 hover:bg-[var(--accent-hover)] active:translate-y-[1px]"
              >
                Scrivete al management
              </a>
              <a
                href="/penelope-2-0/dossier.pdf"
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
                href="mailto:management@penelopezaccarini.it"
                className="link-underline"
              >
                management@penelopezaccarini.it
              </a>
            </p>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              <a
                href="https://www.instagram.com/penelopezaccarini"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                Instagram
              </a>
              {"  "}&middot;{"  "}Facebook: Essere Zaccarini
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
