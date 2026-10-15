import Link from "next/link";
import { getDict } from "@/content";
import { href, type Locale } from "@/lib/site";
import { Arrow } from "../icons";
import { Loom } from "../Loom";
import { PlanYears, ProgrammeCloth, Targets } from "../sections";
import { Chaine, Filet, JoinBand, Trame, type Bloc } from "../ui";

/* Les blocs de trame du héros, décalés de bande en bande. */
const herosBlocs: Bloc[] = [
  [8, 1, 0, 18, "orange"],
  [12, 1, 6, 30, "vert"],
  [9, 2, 82, 18, "clair"],
  [11, 1, 64, 36, "orange"],
  [12, 1, 36, 28, "clair"],
  [10, 1, 0, 10, "voile"],
];

/* Garde « Royaume-Uni » insécable. */
function keepHyphens(text: string) {
  return text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 ? (
      <span key={i} className="nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const h = t.home;
  const voice = t.message.paragraphs[2];

  return (
    <>
      <section className="toile heros" aria-labelledby="heros-titre">
        <div className="wrap">
          <div className="metier heros__metier">
            <Trame blocs={herosBlocs} className="trame--heros" />
            <Chaine className="heros__chaine" />
            <div className="heros__texte">
              <h1 className="h1" id="heros-titre">
                {h.hero.title.map((line) => (
                  <span key={line}>{keepHyphens(line)} </span>
                ))}
              </h1>
              <p className="chapo">{h.hero.lede}</p>
              <p className="heros__suite">
                <Link className="lien-clair" href={href(locale, "le-reseau")}>
                  {h.hero.secondary}
                  <Arrow />
                </Link>
              </p>
            </div>
            <div className="heros__metier-panneau">
              <Loom t={t.loom} conditionsHref={href(locale, "adherer")} />
            </div>
          </div>
        </div>
      </section>

      <section className="section etoffe" aria-labelledby="programmes-titre">
        <div className="wrap">
          <div className="tete-section tete-section--large">
            <h2 className="h2" id="programmes-titre">
              {h.programmes.title}
            </h2>
            <p className="chapo">{h.programmes.lede}</p>
          </div>
          <ProgrammeCloth t={t} locale={locale} />
          <p className="etoffe__suite">
            <Link className="lien-action" href={href(locale, "programmes")}>
              {h.programmes.link}
              <Arrow />
            </Link>
          </p>
        </div>
      </section>

      <section className="section voix" aria-labelledby="voix-titre">
        <div className="wrap">
          <div className="metier metier--clair voix__metier">
            <div className="voix__portrait" aria-hidden="true">
              <span>AK</span>
            </div>
            <div className="voix__texte">
              <h2 className="sr-only" id="voix-titre">
                {t.message.header.title}
              </h2>
              <blockquote className="voix__extrait">
                <p>{voice}</p>
              </blockquote>
              <p className="voix__signature">
                <b>{t.president.name}</b>
                <span>{t.president.role}</span>
              </p>
              <p>
                <Link className="lien-action" href={href(locale, "mot-du-president")}>
                  {t.president.bio.link}
                  <Arrow />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="toile toile--plan" aria-labelledby="plan-titre">
        <div className="wrap">
          <div className="metier plan">
            <Chaine className="plan__chaine" />
            <div className="plan__texte">
              <h2 className="h2" id="plan-titre">
                {h.plan.title}
              </h2>
              <Targets t={t} />
              <p>
                <Link className="lien-clair" href={href(locale, "le-reseau", "plan")}>
                  {h.plan.link}
                  <Arrow />
                </Link>
              </p>
            </div>
            <div className="plan__annees">
              <PlanYears t={t} />
            </div>
          </div>
        </div>
      </section>

      <section className="citation-bande">
        <div className="wrap">
          <figure className="citation">
            <Filet clair />
            <blockquote>
              <p>{h.quote.text}</p>
            </blockquote>
            <figcaption>{h.quote.author}</figcaption>
          </figure>
        </div>
      </section>

      <JoinBand t={t} locale={locale} target="#metier" />
    </>
  );
}
