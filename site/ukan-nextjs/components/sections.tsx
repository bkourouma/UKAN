import Link from "next/link";
import type { Dict } from "@/content";
import { href, type Locale } from "@/lib/site";
import { Arrow } from "./icons";

/** Index compact des sept programmes : chaque ligne mène à sa fiche. */
export function ProgrammeIndex({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <ul className="programmes">
      {t.programmes.map((p) => (
        <li key={p.id}>
          <Link className="programme" href={href(locale, "programmes", p.id)}>
            <h3 className="programme__nom">{p.name}</h3>
            <p className="programme__but">{p.purpose}</p>
            <ul className="pastilles">
              {p.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <Arrow className="programme__fleche" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Les cinq années du plan : une vraie séquence, donc une ligne du temps. */
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
