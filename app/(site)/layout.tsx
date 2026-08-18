import { ClientShell } from "@/components/ClientShell";
import { Footer } from "@/components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientShell>
      {children}
      <Footer />
    </ClientShell>
  );
}
