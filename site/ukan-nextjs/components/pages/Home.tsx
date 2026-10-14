import Link from "next/link";
import { getDict } from "@/content";
import { href, type Locale } from "@/lib/site";
import { Arrow, Coche } from "../icons";
import { Meridian } from "../Meridian";
import { PlanAxes, PlanYears, ProgrammeIndex } from "../sections";
import { Filet, JoinBand, SectionHead } from "../ui";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const h = t.home;

  return (
    <>
      <section className="heros" aria-labelledby="heros-titre">
        <div className="wrap heros__grille">
          <div>
            <p className="heros__lieu">{h.hero.place}</p>
            <h1 className="h1" id="heros-titre">
              {h.hero.title.map((line) => (
                <span key={line}>
                  {line.split(/(\S+-\S+)/).map((part, i) =>
                    i % 2 ? (
                      <span key={i} className="nowrap">
                        {part}
                      </span>
                    ) : (
                      part
                    ),
                  )}{" "}
                </span>
              ))}
            </h1>
            <p className="chapo">{h.hero.lede}</p>
            <div className="actions">
              <Link className="bouton bouton--grand bouton--orange" href={href(locale, "adherer")}>
                {t.common.becomeMember}
              </Link>
              <Link className="bouton bouton--grand bouton--contour-blanc" href={href(locale, "le-reseau")}>
                {h.hero.secondary}
              </Link>
            </div>
          </div>
          <Meridian t={h.hero.meridian} />
        </div>
      </section>

      <section className="objectifs" aria-labelledby="objectifs-titre">
        <div className="wrap">
          <h2 className="objectifs__titre" id="objectifs-titre">
            {h.figures.title}
          </h2>
          <dl>
            {h.figures.items.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap colonne-etroite">
          <div className="pile">
            <h2 className="h2">{h.eligibility.title}</h2>
            <p className="chapo">{h.eligibility.lede}</p>
            <p>
              <Link className="lien-action" href={href(locale, "adherer")}>
                {h.eligibility.link}
                <Arrow />
              </Link>
            </p>
          </div>
          <ul className="criteres">
            {h.eligibility.items.map((c) => (
              <li key={c.title}>
                <Coche />
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--gris">
        <div className="wrap">
          <SectionHead title={h.programmes.title} lede={h.programmes.lede} />
          <ProgrammeIndex t={t} locale={locale} />
          <p style={{ marginTop: 32 }}>
            <Link className="lien-action" href={href(locale, "programmes")}>
              {h.programmes.link}
              <Arrow />
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="deux-colonnes">
            <div className="pile">
              <h2 className="h2">{h.plan.title}</h2>
              <div className="texte">
                {h.plan.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div>
                <Link className="bouton bouton--bleu" href={href(locale, "le-reseau", "plan")}>
                  {h.plan.link}
                </Link>
              </div>
            </div>
            <PlanAxes t={t} />
          </div>
          <div style={{ marginTop: "clamp(48px, 6vw, 72px)" }}>
            <PlanYears t={t} />
          </div>
        </div>
      </section>

      <section className="section texture">
        <div className="wrap">
          <blockquote className="citation">
            <Filet clair />
            <p>{h.quote.text}</p>
            <footer>{h.quote.author}</footer>
          </blockquote>
        </div>
      </section>

      <JoinBand t={t} locale={locale} />
    </>
  );
}
