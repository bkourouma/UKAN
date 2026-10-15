import { ContactPage } from "@/components/pages/Other";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("fr", "contact", getDict("fr").contact.meta);

export default function Page() {
  return <ContactPage locale="fr" />;
}
