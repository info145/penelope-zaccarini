import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { ClientShell } from "@/components/ClientShell";
import { Footer } from "@/components/Footer";
import "./globals.css";

const heading = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Penelope Zaccarini — Attrice · Autrice · Performer",
    template: "%s · Penelope Zaccarini",
  },
  description:
    "Penelope Zaccarini — attrice, performer, regista, scrittrice, clownessa. Teatro fisico, poesia, surrealismo e patafisica.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Penelope Zaccarini",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-[var(--bg-primary)] text-white antialiased">
        <ClientShell>
          {children}
          <Footer />
        </ClientShell>
      </body>
    </html>
  );
}
