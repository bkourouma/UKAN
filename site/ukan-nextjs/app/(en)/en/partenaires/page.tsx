import { PartnersPage } from "@/components/pages/Other";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "partenaires", getDict("en").partners.meta);

export default function Page() {
  return <PartnersPage locale="en" />;
}
