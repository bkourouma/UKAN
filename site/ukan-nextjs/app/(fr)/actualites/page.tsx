import { NewsPage } from "@/components/pages/Other";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("fr", "actualites", getDict("fr").news.meta);

export default function Page() {
  return <NewsPage locale="fr" />;
}
