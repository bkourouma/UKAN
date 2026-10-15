import Link from "next/link";
import { getDict } from "@/content";
import { href, type Locale } from "@/lib/site";
import { Arrow } from "../icons";
import { JoinBand, PageHeader, SectionHead, Todo } from "../ui";

function Portrait({ caption, todo }: { caption: string; todo: string }) {
  return (
    <div>
      {/* Remplacer par la photographie officielle (format 4:5) dès qu’elle est disponible. */}
      <div className="portrait" role="img" aria-label={caption}>
        <span aria-hidden="true">AK</span>
      </div>
      <p className="legende portrait-bio__legende">
        {caption} <Todo>{todo}</Todo>
      </p>
    </div>
  );
}

export function PresidentPage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const p = t.president;
  const half = Math.ceil(p.expertise.items.length / 2);

  return (
    <>
      <PageHeader motif={2} title={p.name} lede={p.header.lede} />

      <section className="section">
        <div className="wrap portrait-bio">
          <Portrait caption={p.photo} todo={t.common.todo} />
          <div className="pile">
            <h2 className="h2">{p.bio.title}</h2>
            <div className="texte">
              {p.bio.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <div className="encadre">
              <h3 className="h4">{p.bio.education.title}</h3>
              <p>{p.bio.education.text}</p>
            </div>
            <p>
              <Link className="lien-action" href={href(locale, "mot-du-president")}>
                {p.bio.link}
                <Arrow />
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="toile toile-section">
        <div className="wrap">
          <SectionHead title={p.expertise.title} />
          <div className="deux-colonnes">
            <ul className="puces">
              {p.expertise.items.slice(0, half).map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <ul className="puces">
              {p.expertise.items.slice(half).map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <JoinBand t={t} locale={locale} />
    </>
  );
}

export function MessagePage({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const m = t.message;
  const p = t.president;

  return (
    <>
      <PageHeader motif={3} title={m.header.title} lede={m.header.lede} />

      <section className="section">
        <div className="wrap portrait-bio">
          <Portrait caption={p.photo} todo={t.common.todo} />
          <article className="lettre">
            <p className="lettre__salut">{m.salutation}</p>
            {m.paragraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <p>{m.closing}</p>
            <div className="signature">
              <span className="signature__pastille" aria-hidden="true">
                AK
              </span>
              <div>
                <b>{p.name}</b>
                <span>{p.role}</span>
              </div>
            </div>
            <p style={{ marginTop: 32, fontFamily: "var(--sans)", fontSize: 16 }}>
              <Link className="lien-action" href={href(locale, "president")}>
                {m.link}
                <Arrow />
              </Link>
            </p>
          </article>
        </div>
      </section>

      <JoinBand t={t} locale={locale} />
    </>
  );
}
