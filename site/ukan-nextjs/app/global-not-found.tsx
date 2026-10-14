import type { Metadata } from "next";
import { NotFoundContent } from "@/components/pages/Other";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Page introuvable — UKAN Côte d’Ivoire",
};

export default function GlobalNotFound() {
  return (
    <SiteShell locale="fr">
      <NotFoundContent locale="fr" />
    </SiteShell>
  );
}
