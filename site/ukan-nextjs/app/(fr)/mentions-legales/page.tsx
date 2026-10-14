import { LegalPage } from "@/components/pages/Other";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("fr", "mentions-legales", getDict("fr").legal.meta);

export default function Page() {
  return <LegalPage locale="fr" />;
}
