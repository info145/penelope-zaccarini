import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "./Reveal";
import { VideoBackground } from "./VideoBackground";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  weight: ["600", "700"],
});

// Palette del dossier: magenta acceso sul nero, magenta scuro sul bianco.
const ACCENT = "#f232c8";
const ACCENT_DARK = "#c9179e";

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
    <main
      className={`${mont.className} cursor-native bg-[#0a0a0a] font-medium text-white`}
    >
      <SmoothScroll />

      {/* Copertina: video di sfondo, titolo serif corsivo, tagline su barre bianche */}
      <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
        <VideoBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0a]/70 to-transparent" />

        <p className="absolute left-6 top-6 z-10 text-xs font-semibold uppercase tracking-[0.28em] text-white/85 md:left-12 md:top-8">
          Penelope Zaccarini
        </p>

        <div className="relative z-10 w-full px-6 pb-14 md:px-12 md:pb-16">
          <h1
            className={`${playfair.className} pb-1 text-[clamp(3.5rem,11vw,9rem)] leading-[1.02] text-white`}
          >
            Penelope 2<span style={{ color: ACCENT }}>.</span>0
          </h1>
          <div className="mt-5 flex flex-col items-start gap-1.5">
            <span className="inline-block bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-black md:text-sm">
              L&rsquo;attesa
            </span>
            <span className="inline-block bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-black md:text-sm">
              dal punto di vista di chi resta
            </span>
          </div>
          <a
            href="https://youtu.be/djd0oY8-2N0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-opacity duration-300 hover:opacity-85 active:translate-y-[1px]"
            style={{ backgroundColor: ACCENT }}
          >
            Guarda lo spettacolo completo
          </a>
        </div>
      </section>

      {/* Lo spettacolo */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Reveal>
          <span
            className={`${playfair.className} inline-block bg-white px-4 py-2 text-xl md:text-2xl`}
            style={{ color: ACCENT_DARK }}
          >
            Essere o non t&#8209;essere?
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 text-lg leading-relaxed text-white/90 md:text-xl">
            Lo spazio è riempito solo dalla figura di Penelope che, posta su
            una sedia, inizia un suo personale flusso di coscienza abitato da{" "}
            <em className={playfair.className} style={{ color: ACCENT }}>
              giochi di parole
            </em>
            , cambi di espressione e personalità, riferimenti di genere,
            deformazione e rivisitazione del testo omerico, per poi culminare
            con una{" "}
            <em className={playfair.className} style={{ color: ACCENT }}>
              meditazione
            </em>{" "}
            che riconduce l&rsquo;autrice e gli spettatori all&rsquo;unico
            vero monito che guida la nostra attesa:{" "}
            <em className={playfair.className} style={{ color: ACCENT }}>
              l&rsquo;amore per se stessi
            </em>
            .
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <blockquote
            className={`${playfair.className} mt-14 border-l-2 pl-6 text-2xl leading-snug text-white md:text-3xl`}
            style={{ borderColor: ACCENT }}
          >
            &laquo;Grazie per aver interpretato divinamente la{" "}
            <span style={{ color: ACCENT }}>Penelope</span>
            {" che è in ognun* di noi.»"}
          </blockquote>
          <p className="mt-4 pl-6 text-sm text-white/60">
            Dal pubblico, a fine replica
          </p>
        </Reveal>
      </section>

      {/* Pagine bianche del dossier: tema, ricerca, informazioni tecniche */}
      <section className="bg-white text-neutral-900">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <h2 className="text-4xl font-extrabold uppercase leading-tight md:text-5xl">
                Di <span style={{ color: ACCENT_DARK }}>cosa</span> tratta?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 leading-relaxed">
                Il monologo rivisita in modo innovativo e accattivante il tema
                dell&rsquo;
                <strong style={{ color: ACCENT_DARK }}>attesa</strong>,
                ispirandosi alla figura mitologica di{" "}
                <strong style={{ color: ACCENT_DARK }}>Penelope</strong>
                {" ma trasferendola ai giorni nostri. Su questa falsa traccia l'autrice ne scova e "}
                <strong style={{ color: ACCENT_DARK }}>distorce</strong>
                {" i punti chiave, per aprire uno scorcio del tutto nuovo sul"}
                concetto di attesa ed esplorare i sentimenti a volte
                contraddittori che abitano l&rsquo;animo umano.
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <h2
                className="text-2xl font-extrabold uppercase tracking-[0.3em] md:text-3xl"
                style={{ color: ACCENT_DARK }}
              >
                Ricerca
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 leading-relaxed">
                Il testo nasce dalle riflessioni dell&rsquo;autrice e prende
                lo stile di un flusso di coscienza, un ecosistema di ritmi
                variabili a cui contribuisce con voce, corpo e spirito. Le
                ricerche variano dal teatro fisico all&rsquo;
                <em>Ulysse</em>
                {" di Joyce, dal teatro dell'assurdo alla scuola di Bergonzoni, dal no‑sense alla poesia, dal surrealismo magrittiano alla patafisica, e si concretizzano nella matericità della parola, il suo personale "}
                <em>stream of consciousness</em>.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
          <Reveal>
            <h2 className="text-4xl font-extrabold uppercase leading-tight md:text-5xl">
              Informazioni tecniche
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Reveal delay={0.05}>
              <div className="flex h-full flex-col justify-center rounded-3xl bg-[#0a0a0a] p-8 text-center">
                <p className="text-6xl font-extrabold text-white">
                  50<span style={{ color: ACCENT }}>&rsquo;</span>
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  di spettacolo
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-center rounded-3xl bg-[#0a0a0a] p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                  Adatto a
                </p>
                <p className="mt-3 text-xl font-semibold leading-snug text-white">
                  Festival, teatri,
                  <br />
                  spazi scenici e non
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex h-full flex-col justify-center rounded-3xl bg-[#0a0a0a] p-8 text-center">
                <p
                  className="text-sm font-semibold leading-relaxed"
                  style={{ color: ACCENT }}
                >
                  Teatro fisico · Teatro dell&rsquo;assurdo
                  <br />
                  Poesia · No sense
                  <br />
                  Surrealismo · Pantomima musicale
                  <br />
                  Patafisica · Prosa
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="mt-12 text-xl font-semibold leading-snug md:text-2xl">
              Necessità tecniche per spazi non convenzionali:{" "}
              <span style={{ color: ACCENT_DARK }}>1</span> sedia,{" "}
              <span style={{ color: ACCENT_DARK }}>1</span> cassa audio,{" "}
              <span style={{ color: ACCENT_DARK }}>1</span> o più luci.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-500">
              Regia e scrittura: Penelope Zaccarini. Co&#8209;regia: Ottavia
              Zaccarini. Tecnico: Davide Giangaspare. Scheda tecnica completa
              e calendario nel dossier scaricabile qui sotto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tour */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <h2 className="text-3xl font-extrabold uppercase leading-snug tracking-[0.25em] md:text-4xl">
            Tour <span style={{ color: ACCENT }}>&amp;</span> Festival
            <br />
            2024<span style={{ color: ACCENT }}>\</span>2026
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 leading-relaxed text-white/85">
            Più di venticinque date tra festival, teatri, rassegne e case
            private: dal Festival Eredità delle Donne di Firenze
            all&rsquo;Ex Asilo Filangieri di Napoli, da Torino a Palermo,
            fino a Cadaqués in Spagna.
          </p>
        </Reveal>
      </section>

      {/* Contatti */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="text-5xl font-extrabold uppercase md:text-7xl">
              Contatti
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/85">
              Penelope Zaccarini: attrice, performer, regista, scrittrice e
              clownessa.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:management@penelopezaccarini.it?subject=Penelope%202.0"
                className="inline-block px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-opacity duration-300 hover:opacity-85 active:translate-y-[1px]"
                style={{ backgroundColor: ACCENT }}
              >
                Scrivete al management
              </a>
              <a
                href="/penelope-2-0/dossier.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-white active:translate-y-[1px]"
              >
                Scarica il dossier (PDF)
              </a>
            </div>
            <p className="mt-10 text-sm uppercase tracking-[0.18em] text-white/70">
              <a href="tel:+393400753318" className="link-underline">
                +39 340 075 3318
              </a>
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/70">
              <a
                href="mailto:management@penelopezaccarini.it"
                className="link-underline"
              >
                management@penelopezaccarini.it
              </a>
            </p>
            <p className="mt-6 text-sm text-white/70">
              <a
                href="https://www.instagram.com/penelopezaccarini"
                target="_blank"
                rel="noopener noreferrer"
                className={`${playfair.className} link-underline`}
                style={{ color: ACCENT }}
              >
                Instagram
              </a>
              <span className="mx-3">&middot;</span>
              Facebook: Essere Zaccarini
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
