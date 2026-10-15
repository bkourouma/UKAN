import { MessagePage } from "@/components/pages/President";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "mot-du-president", getDict("en").message.meta);

export default function Page() {
  return <MessagePage locale="en" />;
}
