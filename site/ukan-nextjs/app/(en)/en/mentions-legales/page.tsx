import { LegalPage } from "@/components/pages/Other";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "mentions-legales", getDict("en").legal.meta);

export default function Page() {
  return <LegalPage locale="en" />;
}
