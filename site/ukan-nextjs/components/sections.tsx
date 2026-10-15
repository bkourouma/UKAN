import Link from "next/link";
import type { Dict } from "@/content";
import { href, type Locale } from "@/lib/site";
import { Arrow } from "./icons";

/**
 * Les sept programmes, cousus bande contre bande.
 * Sur grand écran, chaque programme est une bande verticale ; les bandes paires
 * descendent d’un cran, comme les blocs décalés d’un pagne Kita.
 */
export function ProgrammeCloth({ t, locale, detailed = false }: { t: Dict; locale: Locale; detailed?: boolean }) {
  return (
    <ul className={`bandes${detailed ? " bandes--detail" : ""}`}>
      {t.programmes.map((p) => {
        const inner = (
          <>
            <h3 className="bande__nom">{p.name}</h3>
            <p className="bande__but">{p.purpose}</p>
            <ul className="bande__blocs">
              {p.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            {!detailed && <Arrow className="bande__fleche" />}
          </>
        );
        return (
          <li key={p.id} id={detailed ? p.id : undefined} className="bande">
            {detailed ? (
              <div className="bande__corps">{inner}</div>
            ) : (
              <Link className="bande__corps" href={href(locale, "programmes", p.id)}>
                {inner}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** Les cinq années du plan, chacune sur deux bandes du métier. */
export function PlanYears({ t }: { t: Dict }) {
  return (
    <ol className="annees">
      {t.plan.years.map((y) => (
        <li key={y.year}>
          <b>{y.year}</b>
          <span>{y.phase}</span>
        </li>
      ))}
    </ol>
  );
}

/** Les six axes, numérotés comme dans le Plan stratégique. */
export function PlanAxes({ t }: { t: Dict }) {
  return (
    <ol className="axes">
      {t.plan.axes.map((a, i) => (
        <li key={a.short}>
          <small>
            {t.plan.axisLabel} {i + 1}
          </small>
          <span>{a.long}</span>
        </li>
      ))}
    </ol>
  );
}

/** Objectifs 2030 dits en une phrase : ce sont des cibles, pas des résultats. */
export function Targets({ t }: { t: Dict }) {
  const items = t.home.figures.items;
  return (
    <p className="cibles">
      {t.home.figures.title} :{" "}
      {items.map((f, i) => (
        <span key={f.label}>
          <strong>{f.value}</strong> {f.label}
          {i < items.length - 1 ? ", " : "."}
        </span>
      ))}
    </p>
  );
}
