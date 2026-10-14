import { JoinPage } from "@/components/pages/Other";
import { getDict } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("en", "adherer", getDict("en").join.meta);

export default function Page() {
  return <JoinPage locale="en" />;
}
