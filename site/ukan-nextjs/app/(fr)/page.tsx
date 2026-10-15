import { HomePage } from "@/components/pages/Home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("fr", "");

export default function Page() {
  return <HomePage locale="fr" />;
}
