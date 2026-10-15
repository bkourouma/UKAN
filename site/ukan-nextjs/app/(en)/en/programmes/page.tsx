import { ProgrammesPage } from "@/components/pages/Programmes";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "programmes", getDict("en").programmesPage.meta);

export default function Page() {
  return <ProgrammesPage locale="en" />;
}
