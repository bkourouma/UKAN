import { PresidentPage } from "@/components/pages/President";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "president", getDict("en").president.meta);

export default function Page() {
  return <PresidentPage locale="en" />;
}
