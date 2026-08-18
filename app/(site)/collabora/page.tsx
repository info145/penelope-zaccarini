import type { Metadata } from "next";
import { CollaboraContent } from "./CollaboraContent";

export const metadata: Metadata = { title: "Collabora" };

export default function CollaboraPage() {
  return <CollaboraContent />;
}
