import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Dict } from "@/content";
import { href, type Locale } from "@/lib/site";

/** Étiquette visible tant qu’une information officielle manque (charte § 10). */
export function Todo({ children }: { children: ReactNode }) {
  return <span className="a-completer">{children}</span>;
}

/** Le filet tricolore, seul ornement de la charte : ici la lisière de l’étoffe. */
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

/** Le filet posé à la verticale, comme un fil de chaîne entre deux bandes. */
export function Chaine({ className = "" }: { className?: string }) {
  return (
    <div className={`chaine ${className}`.trim()} aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
    </div>
  );
}

/**
 * Blocs de trame posés sur les bandes du métier.
 * Chaque bloc : [bande de départ (1–12), nombre de bandes, haut en %, hauteur en %, couleur].
 */
export type Bloc = [number, number, number, number, "orange" | "vert" | "clair" | "blanc" | "voile"];

export function Trame({ blocs, className = "" }: { blocs: Bloc[]; className?: string }) {
  return (
    <div className={`trame ${className}`.trim()} aria-hidden="true">
      {blocs.map(([col, span, top, height, color], i) => (
        <i
          key={i}
          className={`trame__bloc trame__bloc--${color}`}
          style={
            {
              "--col": col - 1,
              "--span": span,
              "--top": `${top}%`,
              "--h": `${height}%`,
              "--i": i,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

const enteteBlocs: Bloc[] = [
  [12, 1, 0, 38, "orange"],
  [11, 1, 38, 34, "clair"],
  [12, 1, 72, 28, "vert"],
  [10, 1, 72, 28, "voile"],
];

export function PageHeader({ title, lede }: { title: string; lede?: string }) {
  return (
    <header className="toile tete-page">
      <div className="wrap">
        <div className="metier">
          <Trame blocs={enteteBlocs} className="trame--entete" />
          <div className="tete-page__texte">
            <h1 className="h1">{title}</h1>
            {lede && <p className="chapo">{lede}</p>}
          </div>
        </div>
      </div>
    </header>
  );
}

/** Bandeau d’adhésion sur aplat orange : texte et bouton en bleu (charte § 1, règle 1). */
export function JoinBand({ t, locale, target }: { t: Dict; locale: Locale; target?: string }) {
  return (
    <section className="appel" aria-labelledby="appel-titre">
      <div className="wrap">
        <div>
          <h2 id="appel-titre" className="h2">
            {t.joinBand.title}
          </h2>
          <p>{t.joinBand.text}</p>
        </div>
        <Link className="bouton bouton--grand bouton--bleu" href={target ?? href(locale, "adherer", "metier")}>
          {t.joinBand.cta}
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
