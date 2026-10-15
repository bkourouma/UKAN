import Link from "next/link";
import { getDict } from "@/content";
import { href, site, type Locale } from "@/lib/site";
import { Arrow } from "../icons";
import { PlanYears } from "../sections";
import { JoinBand, PageHeader, SectionHead, Todo } from "../ui";

export function NetworkPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const n = t.network;

  return (
    <>
      <PageHeader title={n.header.title} lede={n.header.lede} />

      <section className="section">
        <div className="wrap deux-colonnes">
          <div className="texte chapo">
            {n.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="pile">
            <div className="encadre">
              <h2 className="h4">{n.vision.title}</h2>
              <p>{n.vision.text}</p>
            </div>
            <div className="encadre encadre--orange">
              <h2 className="h4">{n.ambition.title}</h2>
              <p>{n.ambition.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gris" id="mission">
        <div className="wrap deux-colonnes">
          <div>
            <SectionHead title={n.mission.title} />
            <ul className="puces">
              {n.mission.items.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead title={n.values.title} />
            <ul className="pastilles pastilles--grandes">
              {n.values.items.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
            <p className="petit" style={{ marginTop: 28 }}>
              {n.values.principles}
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="gouvernance">
        <div className="wrap">
          <SectionHead title={n.governance.title} lede={n.governance.lede} />
          <div className="deux-colonnes">
            <div className="encadre encadre--blanc pile-serree">
              <h3 className="h4">{n.governance.board.title}</h3>
              <p>
                {n.governance.board.text} <Todo>{t.common.todo}</Todo>
              </p>
              <p>
                <Link className="lien-action" href={href(locale, "president")}>
                  {n.governance.board.link}
                  <Arrow />
                </Link>
              </p>
            </div>
            <div>
              <h3 className="h4">{n.governance.commissions.title}</h3>
              <ul className="puces puces--vertes" style={{ marginTop: 16 }}>
                {n.governance.commissions.items.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="toile toile-section" id="plan">
        <div className="wrap">
          <SectionHead title={n.plan.title} lede={n.plan.lede} />
          <PlanYears t={t} />
          <ol className="axes-detail">
            {t.plan.axes.map((a, i) => (
              <li key={a.short}>
                <small>
                  {t.plan.axisLabel} {i + 1}
                </small>
                <h3 className="h4">{a.long}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ol>
          <div className="actions" style={{ alignItems: "center", marginTop: 56 }}>
            {site.planPdfUrl ? (
              <a className="bouton bouton--orange" href={site.planPdfUrl}>
                {n.plan.download}
              </a>
            ) : (
              <>
                <Link className="bouton bouton--orange" href={href(locale, "contact")}>
                  {n.plan.request}
                </Link>
                <span className="note">
                  {n.plan.pdfNote} <Todo>{t.common.todo}</Todo>
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section section--serre">
        <div className="wrap">
          <div className="encadre encadre--vert">
            <h2 className="h4">{n.accountability.title}</h2>
            <p>
              {n.accountability.text} {n.accountability.indicators.join(", ")}.
            </p>
          </div>
        </div>
      </section>

      <JoinBand t={t} locale={locale} />
    </>
  );
}
