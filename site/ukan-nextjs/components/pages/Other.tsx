import Link from "next/link";
import type { ReactNode } from "react";
import { getDict } from "@/content";
import { href, mailto, site, type Locale } from "@/lib/site";
import { Briefcase, Coche, Facebook, LinkedIn, Mail, Newsletter, Person, Phone, WhatsApp } from "../icons";
import { Loom } from "../Loom";
import { JoinBand, PageHeader, SectionHead, Todo } from "../ui";

/* ------------------------------------------------------------------ */
/* Actualités                                                          */
/* ------------------------------------------------------------------ */

export function NewsPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const n = t.news;
  const icons = [Briefcase, Newsletter, Person];

  return (
    <>
      <PageHeader title={n.header.title} lede={n.header.lede} />

      <section className="section section--serre">
        <div className="wrap">
          <div className="encadre encadre--orange pile-serree">
            <h2 className="h4">{n.empty.title}</h2>
            <p>{n.empty.text}</p>
            <p>
              <a className="lien-texte" href={mailto(n.empty.subject)}>
                {n.empty.cta}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--gris">
        <div className="wrap">
          <SectionHead title={n.upcomingTitle} />
          <ul className="a-venir">
            {n.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <li key={item.title}>
                  <span className="canal__icone">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="h4">{item.title}</h3>
                    <p>
                      {item.text} {item.todo && <Todo>{item.todo}</Todo>}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <JoinBand t={t} locale={locale} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Partenaires                                                         */
/* ------------------------------------------------------------------ */

export function PartnersPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const p = t.partners;

  return (
    <>
      <PageHeader title={p.header.title} lede={p.header.lede} />

      <section className="section">
        <div className="wrap">
          <SectionHead title={p.why.title} />
          <ul className="atouts">
            {p.why.items.map((a) => (
              <li key={a.title}>
                <h3 className="h3">{a.title}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--gris">
        <div className="wrap">
          <SectionHead title={p.forms.title} />
          <ul className="formules">
            {p.forms.items.map((f) => (
              <li key={f.title}>
                <h3 className="h4">{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
          <div className="encadre encadre--blanc" style={{ marginTop: 40 }}>
            <h3 className="h4">{p.list.title}</h3>
            <p>
              {p.list.text} <Todo>{t.common.todo}</Todo>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap parlons">
          <h2 className="h2">{p.talk.title}</h2>
          <p className="chapo">{p.talk.text}</p>
          <div className="actions">
            <a className="bouton bouton--grand bouton--orange" href={site.whatsapp}>
              <WhatsApp />
              {p.talk.whatsapp}
            </a>
            <a className="bouton bouton--grand bouton--contour" href={mailto(p.talk.subject)}>
              {p.talk.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Adhérer                                                             */
/* ------------------------------------------------------------------ */

export function JoinPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const j = t.join;

  return (
    <>
      <PageHeader title={j.header.title} lede={j.header.lede} />

      <section className="section" id="conditions">
        <div className="wrap deux-colonnes">
          <div>
            <SectionHead title={j.eligibility.title}>
              <p>{j.eligibility.intro}</p>
            </SectionHead>
            <ul className="coches">
              {j.eligibility.items.map((e) => (
                <li key={e}>
                  <Coche />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead title={j.benefits.title} />
            <ul className="puces">
              {j.benefits.items.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--gris">
        <div className="wrap">
          <SectionHead title={j.steps.title} />
          <ol className="etapes">
            {j.steps.items.map((s, i) => (
              <li key={s}>
                <b aria-hidden="true">{i + 1}</b>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="toile adhesion-metier" id="demande" aria-labelledby="demande-titre">
        <div className="wrap">
          <div className="metier">
            <div className="adhesion-metier__texte">
              <h2 className="h2" id="demande-titre">
                {j.apply.title}
              </h2>
              <p className="chapo">{j.apply.text}</p>
              <p className="petit">
                {site.membershipFormUrl ? (
                  <a className="lien-clair" href={site.membershipFormUrl}>
                    {j.apply.formLink}
                  </a>
                ) : (
                  <>
                    {j.apply.formNote} <Todo>{j.apply.formTodo}</Todo>
                  </>
                )}
              </p>
            </div>
            <div className="adhesion-metier__panneau">
              <Loom t={t.loom} conditionsHref="#conditions" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap deux-colonnes">
          <div className="encadre encadre--orange">
            <h2 className="h4">{j.fee.title}</h2>
            <p>
              {j.fee.text} <Todo>{j.fee.todo}</Todo>
            </p>
          </div>
          <div className="encadre">
            <h2 className="h4">{j.commitments.title}</h2>
            <ul className="puces puces--sans-filet" style={{ marginTop: 12 }}>
              {j.commitments.items.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--gris section--serre">
        <div className="wrap deux-colonnes">
          <div className="encadre encadre--vert">
            <h2 className="h4">{j.associate.title}</h2>
            <p>{j.associate.text}</p>
          </div>
          <div className="encadre encadre--vert">
            <h2 className="h4">{j.approval.title}</h2>
            <p>{j.approval.text}</p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export function ContactPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const c = t.contact;

  const channels: { icon: ReactNode; label: string; value: string; url: string; note: string; main?: boolean }[] = [
    { icon: <WhatsApp />, ...c.channels.whatsapp, value: site.phone.display, url: site.whatsapp, main: true },
    { icon: <Phone />, ...c.channels.phone, value: site.phone.display, url: site.phone.href },
    { icon: <Mail />, ...c.channels.email, value: site.email, url: mailto() },
  ];

  return (
    <>
      <PageHeader title={c.header.title} lede={c.header.lede} />

      <section className="section">
        <div className="wrap">
          <ul className="canaux">
            {channels.map((ch) => (
              <li key={ch.label} className={`canal${ch.main ? " canal--principal" : ""}`}>
                <span className="canal__icone">{ch.icon}</span>
                <span className="canal__libelle">{ch.label}</span>
                <a className="canal__valeur" href={ch.url}>
                  {ch.value}
                </a>
                <span className="canal__note">{ch.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--gris">
        <div className="wrap deux-colonnes">
          <div>
            <SectionHead title={c.office.title} />
            <address className="adresse">
              {site.fullName}
              <br />
              {site.address ?? <Todo>{c.office.addressTodo}</Todo>}
              <br />
              {site.city}
            </address>
          </div>
          <div>
            <SectionHead title={c.social.title} />
            <ul className="pile-serree reseaux-liste">
              <li>
                <LinkedIn /> LinkedIn{" "}
                {site.linkedin ? (
                  <a className="lien-texte" href={site.linkedin}>
                    {site.linkedin.replace(/^https?:\/\//, "")}
                  </a>
                ) : (
                  <Todo>{c.social.linkTodo}</Todo>
                )}
              </li>
              <li>
                <Facebook /> Facebook{" "}
                {site.facebook ? (
                  <a className="lien-texte" href={site.facebook}>
                    {site.facebook.replace(/^https?:\/\//, "")}
                  </a>
                ) : (
                  <Todo>{c.social.linkTodo}</Todo>
                )}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <JoinBand t={t} locale={locale} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Pages légales                                                       */
/* ------------------------------------------------------------------ */

export function LegalPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const l = t.legal;

  return (
    <>
      <PageHeader title={l.header.title} lede={l.header.lede} />
      <section className="section">
        <div className="wrap prose">
          <section>
            <h2 className="h3">{l.publisher.title}</h2>
            <p>
              {site.fullName}
              <br />
              {l.publisher.entity}
              <br />
              {l.publisher.registration} {site.registration ?? <Todo>{t.common.todo}</Todo>}
              <br />
              {l.publisher.office} {site.address ?? <Todo>{t.common.todo}</Todo>}, {site.city}
            </p>
            <p>
              {l.publisher.email}{" "}
              <a className="lien-texte" href={mailto()}>
                {site.email}
              </a>
              <br />
              {l.publisher.phone}{" "}
              <a className="lien-texte" href={site.phone.href}>
                {site.phone.display}
              </a>
            </p>
          </section>
          <section>
            <h2 className="h3">{l.director.title}</h2>
            <p>{site.publicationDirector ?? <Todo>{l.director.todo}</Todo>}</p>
          </section>
          <section>
            <h2 className="h3">{l.hosting.title}</h2>
            <p>{l.hosting.text}</p>
            <p>
              {l.hosting.note} <Todo>{l.hosting.todo}</Todo>
            </p>
          </section>
          <section>
            <h2 className="h3">{l.ip.title}</h2>
            <p>{l.ip.text}</p>
          </section>
        </div>
      </section>
    </>
  );
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const p = t.privacy;

  return (
    <>
      <PageHeader title={p.header.title} lede={p.header.lede} />
      <section className="section">
        <div className="wrap prose">
          {p.sections.map((s) => (
            <section key={s.title}>
              <h2 className="h3">{s.title}</h2>
              <p>{s.text}</p>
            </section>
          ))}
          <section>
            <h2 className="h3">{p.rights.title}</h2>
            <p>
              {p.rights.text}{" "}
              <a className="lien-texte" href={mailto()}>
                {site.email}
              </a>
              .
            </p>
            <p>
              {p.rights.retention} <Todo>{t.common.todo}</Todo>
            </p>
          </section>
          <section>
            <h2 className="h3">{p.outbound.title}</h2>
            <p>{p.outbound.text}</p>
          </section>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* 404                                                                 */
/* ------------------------------------------------------------------ */

export function NotFoundContent({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <section className="section introuvable">
      <div className="wrap pile">
        <h1 className="h1">{t.notFound.title}</h1>
        <p className="chapo">{t.notFound.text}</p>
        <div className="actions">
          <Link className="bouton bouton--grand bouton--bleu" href={href(locale, "")}>
            {t.notFound.home}
          </Link>
        </div>
      </div>
    </section>
  );
}
