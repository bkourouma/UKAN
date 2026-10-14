import { NetworkPage } from "@/components/pages/Network";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "le-reseau", getDict("en").network.meta);

export default function Page() {
  return <NetworkPage locale="en" />;
}
