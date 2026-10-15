import { NetworkPage } from "@/components/pages/Network";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("fr", "le-reseau", getDict("fr").network.meta);

export default function Page() {
  return <NetworkPage locale="fr" />;
}
