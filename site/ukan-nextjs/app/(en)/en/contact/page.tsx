import { ContactPage } from "@/components/pages/Other";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "contact", getDict("en").contact.meta);

export default function Page() {
  return <ContactPage locale="en" />;
}
