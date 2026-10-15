import type { Metadata, Viewport } from "next";
import { getDict } from "@/content";
import { href, site, type Locale, type Slug } from "./site";

export const viewport: Viewport = {
  themeColor: "#001E58",
};

/** Métadonnées d’une page, avec ses équivalents dans l’autre langue. */
export function pageMetadata(
  locale: Locale,
  slug: Slug,
  page?: { title: string; description: string },
): Metadata {
  const t = getDict(locale);
  const title = page ? `${page.title} — ${t.meta.titleSuffix}` : t.meta.siteTitle;
  const description = page?.description ?? t.meta.description;

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "UKAN Côte d’Ivoire",
      locale: locale === "fr" ? "fr_CI" : "en_GB",
    },
    twitter: { card: "summary_large_image", title, description },
  };

  // Les liens absolus (partage, langues) n’ont de sens qu’une fois l’adresse du site connue.
  if (site.url) {
    metadata.metadataBase = new URL(site.url);
    metadata.alternates = {
      canonical: href(locale, slug),
      languages: { fr: href("fr", slug), en: href("en", slug), "x-default": href("fr", slug) },
    };
    metadata.openGraph = {
      ...metadata.openGraph,
      url: href(locale, slug),
      images: [{ url: "/images/og-ukan.png", width: 1200, height: 630, alt: "UKAN Côte d’Ivoire" }],
    };
    metadata.twitter = { ...metadata.twitter, images: ["/images/og-ukan.png"] };
  }

  return metadata;
}
