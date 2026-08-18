import type { Metadata } from "next";
import { ChiSonoContent } from "./ChiSonoContent";

export const metadata: Metadata = { title: "Chi sono" };

export default function ChiSonoPage() {
  return <ChiSonoContent />;
}
