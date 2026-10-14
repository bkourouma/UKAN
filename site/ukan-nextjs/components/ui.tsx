import Link from "next/link";
import type { ReactNode } from "react";
import type { Dict } from "@/content";
import { href, type Locale } from "@/lib/site";

/** Étiquette visible tant qu’une information officielle manque (charte § 10). */
export function Todo({ children }: { children: ReactNode }) {
  return <span className="a-completer">{children}</span>;
}

/** Le filet tricolore, seul ornement de la charte. */
export function Filet({ clair = false, className = "" }: { clair?: boolean; className?: string }) {
  return (
    <div className={`filet${clair ? " filet--clair" : ""} ${className}`.trim()} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

export function PageHeader({ title, lede, kicker }: { title: string; lede?: string; kicker?: string }) {
  return (
    <header className="tete-page">
      <div className="wrap">
        {kicker && <p className="surtitre">{kicker}</p>}
        <h1 className="h1">{title}</h1>
        {lede && <p className="chapo">{lede}</p>}
      </div>
    </header>
  );
}

/** Bandeau d’adhésion sur aplat orange : texte et bouton en bleu (charte § 1, règle 1). */
export function JoinBand({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <section className="appel" aria-labelledby="appel-titre">
      <div className="wrap">
        <div>
          <h2 id="appel-titre" className="h2">
            {t.joinBand.title}
          </h2>
          <p>{t.joinBand.text}</p>
        </div>
        <Link className="bouton bouton--grand bouton--bleu" href={href(locale, "adherer")}>
          {t.common.becomeMember}
        </Link>
      </div>
    </section>
  );
}

export function SectionHead({
  id,
  title,
  lede,
  children,
}: {
  id?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <div className="tete-section">
      <h2 className="h2" id={id}>
        {title}
      </h2>
      {lede && <p className="chapo">{lede}</p>}
      {children}
    </div>
  );
}
