import { getDict } from "@/content";
import { mailto, type Locale } from "@/lib/site";
import { Coche } from "../icons";
import { PageHeader, Todo } from "../ui";

export function ProgrammesPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const pp = t.programmesPage;

  return (
    <>
      <PageHeader kicker={t.nav[3].label} title={pp.header.title} lede={pp.header.lede} />

      <section className="section">
        <div className="wrap">
          <ul className="fiches">
            {t.programmes.map((p) => (
              <li key={p.id} id={p.id}>
                <div>
                  <h2 className="programme__nom">{p.name}</h2>
                  <p className="programme__but">{p.purpose}</p>
                </div>
                <div>
                  <h3 className="sr-only">{pp.deliverablesLabel}</h3>
                  <ul className="livrables">
                    {p.deliverables.map((d) => (
                      <li key={d}>
                        <Coche />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Appel à candidatures : aplat orange (charte § 9, fond 3). */}
      <section className="appel" aria-labelledby="mentor-titre">
        <div className="wrap">
          <div>
            <p className="surtitre">{pp.mentor.kicker}</p>
            <h2 className="h2" id="mentor-titre">
              {pp.mentor.title}
            </h2>
            <p>{pp.mentor.text}</p>
          </div>
          <a className="bouton bouton--grand bouton--bleu" href={mailto(pp.mentor.subject)}>
            {pp.mentor.cta}
          </a>
        </div>
      </section>

      <section className="section section--serre">
        <div className="wrap">
          <div className="encadre">
            <h2 className="h4">{pp.calendar.title}</h2>
            <p>
              {pp.calendar.text} <Todo>{t.common.todo}</Todo>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
