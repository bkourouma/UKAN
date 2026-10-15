import { NewsPage } from "@/components/pages/Other";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "actualites", getDict("en").news.meta);

export default function Page() {
  return <NewsPage locale="en" />;
}
