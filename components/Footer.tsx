import Link from "next/link";

const LINKS = [
  { label: "LAVORI", href: "/lavori" },
  { label: "CHI SONO", href: "/chi-sono" },
  { label: "COLLABORA", href: "/collabora" },
  { label: "DIETRO LE QUINTE", href: "/dietro-le-quinte" },
  { label: "CONTATTI", href: "/contatti" },
];

const SOCIALS = [
  { label: "INSTAGRAM", href: "https://instagram.com/" },
  { label: "VIMEO", href: "https://vimeo.com/" },
  { label: "LINKEDIN", href: "https://linkedin.com/" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold tracking-[0.1em]">
              PENELOPE ZACCARINI
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
              Attrice · Autrice · Performer
            </p>
          </div>

          <div>
            <p className="section-label mb-4">PAGINE</p>
            <nav className="flex flex-col gap-2">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="link-underline w-fit text-sm text-[var(--text-secondary)] transition hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="section-label mb-4">SOCIAL</p>
            <div className="flex flex-col gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline w-fit text-sm text-[var(--text-secondary)] transition hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-[var(--text-secondary)]">
              <a href="mailto:zaccarini.penelope@gmail.com" className="link-underline transition hover:text-white">
                zaccarini.penelope@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-[11px] tracking-[0.2em] text-[var(--text-secondary)]">
            © {year} PENELOPE ZACCARINI. TUTTI I DIRITTI RISERVATI.
          </p>
          <p className="text-[11px] tracking-[0.2em] text-[var(--text-secondary)]">
            TORINO, ITALIA
          </p>
        </div>
      </div>
    </footer>
  );
}
