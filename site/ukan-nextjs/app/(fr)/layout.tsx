import type { ReactNode } from "react";
import { SiteShell } from "@/components/SiteShell";

export { viewport } from "@/lib/metadata";

export default function FrenchLayout({ children }: { children: ReactNode }) {
  return <SiteShell locale="fr">{children}</SiteShell>;
}
