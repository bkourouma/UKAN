import { MessagePage } from "@/components/pages/President";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("fr", "mot-du-president", getDict("fr").message.meta);

export default function Page() {
  return <MessagePage locale="fr" />;
}
