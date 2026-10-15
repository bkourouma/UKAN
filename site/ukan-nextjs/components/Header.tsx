"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/content";
import { href, mailto, site, slugFromPath, slugs, type Locale } from "@/lib/site";
import { CloseIcon, MenuIcon } from "./icons";
import { Filet } from "./ui";

type Props = {
  locale: Locale;
  common: Dict["common"];
  nav: Dict["nav"];
};

/** La rubrique du menu à souligner pour une page donnée. */
function sectionOf(slug: string) {
  return slug === "mot-du-president" ? "president" : slug;
}

export function Header({ locale, common, nav }: Props) {
  const pathname = usePathname() ?? "/";
  const path = slugFromPath(pathname);
  // Page inconnue (404) : la bascule de langue mène à l’accueil.
  const current = (slugs as readonly string[]).includes(path) ? path : "";
  const active = sectionOf(current);
  const other: Locale = locale === "fr" ? "en" : "fr";

  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  // Fermer le menu à chaque changement de page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
    if (wasOpen.current) {
      wasOpen.current = false;
      burgerRef.current?.focus();
    }
  }, [open]);

  const links = nav.map((item) => ({
    ...item,
    url: href(locale, item.slug),
    current: active === item.slug,
  }));

  return (
    <>
      <a className="evitement" href="#contenu">
        {common.skip}
      </a>

      <div className="service">
        <div className="wrap">
          <span className="service__lieu">{site.city}</span>
          <div className="service__droite">
            <a href={mailto()}>{site.email}</a>
            <div className="langues" role="group" aria-label={common.langLabel}>
              <span aria-current="true">{locale.toUpperCase()}</span>
              <Link href={href(other, current)} hrefLang={other} lang={other} aria-label={common.otherLang.label}>
                {common.otherLang.code}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header className="entete">
        <div className="wrap entete__barre">
          <Link className="logo" href={href(locale, "")}>
            <Image
              src="/images/ukan-logo-court.webp"
              alt={common.logoAlt}
              width={480}
              height={179}
              priority
            />
          </Link>

          <nav className="nav-principale" aria-label={common.mainNav}>
            <ul>
              {links.map((l) => (
                <li key={l.slug}>
                  <Link href={l.url} aria-current={l.current ? "page" : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Bouton bleu : l’orange est réservé à l’action principale de chaque écran. */}
            <Link className="bouton bouton--bleu" href={href(locale, "adherer")}>
              {common.join}
            </Link>
            <button
              ref={burgerRef}
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
              <span className="sr-only">{common.menu}</span>
            </button>
          </nav>
        </div>
        {/* Sous une barre blanche, le segment blanc du filet passe en bleu. */}
        <Filet clair />
      </header>

      <div
        id="menu-mobile"
        className="menu-mobile"
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label={common.menu}
      >
        <div className="wrap menu-mobile__haut">
          <Image src="/images/ukan-logo-blanc-court.webp" alt="UKAN" width={400} height={149} />
          <button ref={closeRef} type="button" className="burger" onClick={() => setOpen(false)}>
            <CloseIcon />
            <span className="sr-only">{common.closeMenu}</span>
          </button>
        </div>
        <Filet />
        <nav className="wrap" aria-label={common.mainNav}>
          <ul>
            {links.map((l) => (
              <li key={l.slug}>
                <Link href={l.url} aria-current={l.current ? "page" : undefined} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="wrap menu-mobile__bas">
          <Link className="bouton bouton--grand bouton--orange" href={href(locale, "adherer")} onClick={() => setOpen(false)}>
            {common.join}
          </Link>
          <div className="menu-mobile__contact">
            <a href={site.whatsapp}>WhatsApp {site.phone.display}</a>
            <a href={mailto()}>{site.email}</a>
            <Link href={href(other, current)} hrefLang={other} lang={other}>
              {common.otherLang.label}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
