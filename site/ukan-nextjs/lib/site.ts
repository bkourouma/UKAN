/**
 * Coordonnées et informations officielles de UKAN.
 *
 * Toute valeur laissée à `null` s’affiche sur le site sous la forme d’une
 * étiquette « À COMPLÉTER » (voir la charte, § 10). Il suffit de la renseigner
 * ici pour qu’elle apparaisse partout.
 */
export const site = {
  name: "UKAN",
  fullName: "United Kingdom Alumni Network (UKAN)",
  city: "Abidjan, Côte d’Ivoire",

  email: "inzas@aol.com",
  phone: { display: "+225 02 02 05 05", href: "tel:+22502020505" },
  whatsapp: "https://wa.me/22502020505",

  /** Adresse publique du site, ex. "https://www.ukan.ci" (sert aux balises de partage). */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? null,

  address: null as string | null,
  registration: null as string | null,
  publicationDirector: null as string | null,
  membershipFormUrl: null as string | null,
  planPdfUrl: null as string | null,
  linkedin: null as string | null,
  facebook: null as string | null,
} as const;

export type Locale = "fr" | "en";

export const slugs = [
  "",
  "le-reseau",
  "president",
  "mot-du-president",
  "programmes",
  "actualites",
  "partenaires",
  "adherer",
  "contact",
  "mentions-legales",
  "confidentialite",
] as const;

export type Slug = (typeof slugs)[number];

/** Chemin d’une page dans une langue, avec ancre facultative. */
export function href(locale: Locale, slug: Slug | (string & {}), hash?: string) {
  const base = locale === "fr" ? "/" : "/en/";
  const path = slug ? `${base}${slug}/` : base;
  return hash ? `${path}#${hash}` : path;
}

/** Retire le préfixe de langue d’un chemin : "/en/contact/" → "contact". */
export function slugFromPath(pathname: string): string {
  return pathname.replace(/^\/en(?=\/|$)/, "").replace(/^\/+|\/+$/g, "");
}

export function mailto(subject?: string) {
  return subject ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}` : `mailto:${site.email}`;
}
