import { PrivacyPage } from "@/components/pages/Other";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "confidentialite", getDict("en").privacy.meta);

export default function Page() {
  return <PrivacyPage locale="en" />;
}
