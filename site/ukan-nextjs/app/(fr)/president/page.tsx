import { PresidentPage } from "@/components/pages/President";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("fr", "president", getDict("fr").president.meta);

export default function Page() {
  return <PresidentPage locale="fr" />;
}
