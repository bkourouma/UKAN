import Image from "next/image";
import Link from "next/link";
import type { Dict } from "@/content";
import { href, mailto, site, type Locale } from "@/lib/site";
import { Facebook, LinkedIn } from "./icons";
import { Filet, Todo } from "./ui";

export function Footer({ t, locale }: { t: Dict; locale: Locale }) {
  const f = t.footer;
  const year = 2026;

  return (
    <footer className="pied">
      <div className="wrap">
        <div className="pied__colonnes">
          <div>
            <Image
              className="pied__logo"
              src="/images/ukan-logo-blanc.webp"
              alt={t.common.logoAlt}
              width={640}
              height={255}
            />
            <p className="pied__accroche">{f.tagline}</p>
            {(site.linkedin || site.facebook) && (
              <div className="pied__reseaux">
                {site.linkedin && (
                  <a href={site.linkedin} aria-label="LinkedIn">
                    <LinkedIn />
                  </a>
                )}
                {site.facebook && (
                  <a href={site.facebook} aria-label="Facebook">
                    <Facebook />
                  </a>
                )}
              </div>
            )}
          </div>

          <nav aria-labelledby="pied-reseau">
            <h2 id="pied-reseau">{f.networkTitle}</h2>
            <ul>
              {f.network.map((l) => (
                <li key={l.label}>
                  <Link href={href(locale, l.slug, l.hash)}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="pied-programmes">
            <h2 id="pied-programmes">{f.programmesTitle}</h2>
            <ul>
              {t.programmes.map((p) => (
                <li key={p.id}>
                  <Link href={href(locale, "programmes", p.id)}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2>{f.contactTitle}</h2>
            <ul>
              <li>
                <a href={site.whatsapp}>
                  {f.whatsapp} {site.phone.display}
                </a>
              </li>
              <li>
                <a href={site.phone.href}>{site.phone.display}</a>
              </li>
              <li>
                <a href={mailto()}>{site.email}</a>
              </li>
              <li>{site.city}</li>
            </ul>
          </div>
        </div>

        <div className="pied__bas">
          <p>
            {site.fullName}. {f.legalEntity} {f.registration}{" "}
            {site.registration ?? <Todo>{t.common.todo}</Todo>}. {f.office}{" "}
            {site.address ?? <Todo>{t.common.todo}</Todo>}, {site.city}.
          </p>
          <div className="pied__liens">
            <span>© {year} UKAN</span>
            <Link href={href(locale, "mentions-legales")}>{f.legal}</Link>
            <Link href={href(locale, "confidentialite")}>{f.privacy}</Link>
          </div>
        </div>
      </div>
      <Filet />
    </footer>
  );
}
