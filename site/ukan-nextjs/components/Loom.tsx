"use client";

import { useId, useState, type FormEvent } from "react";
import type { Dict } from "@/content";
import { site } from "@/lib/site";
import { WhatsApp } from "./icons";

type Props = {
  t: Dict["loom"];
  conditionsHref: string;
};

type Field = "link" | "name" | "institution";

/**
 * Le métier : prépare un message d’adhésion et l’ouvre dans WhatsApp ou la
 * messagerie du visiteur. Rien n’est envoyé à un serveur.
 */
export function Loom({ t, conditionsHref }: Props) {
  const id = useId();
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  const filled = [link !== "", name.trim() !== "", institution.trim() !== "", year.trim() !== ""];
  const ready = filled[0] && filled[1] && filled[2];

  const message = () => {
    const phrase = t.links.find((l) => l.id === link)?.phrase ?? "";
    return [
      t.greeting,
      phrase ? `${phrase}.` : "",
      `${t.nameLine} ${name.trim()}`,
      `${t.institutionLine} ${institution.trim()}`,
      year.trim() ? `${t.yearLine} ${year.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const validate = () => {
    const next: Partial<Record<Field, string>> = {};
    if (!link) next.link = t.errors.link;
    if (!name.trim()) next.name = t.errors.name;
    if (!institution.trim()) next.institution = t.errors.institution;
    setErrors(next);
    const first = (["link", "name", "institution"] as Field[]).find((f) => next[f]);
    if (first) document.getElementById(`${id}-${first}`)?.focus();
    return !first;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(`${site.whatsapp}?text=${encodeURIComponent(message())}`, "_blank", "noopener");
  };

  const onEmail = () => {
    if (!validate()) return;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(message())}`;
  };

  const clear = (f: Field) => errors[f] && setErrors((e) => ({ ...e, [f]: undefined }));

  return (
    <form className="metier-panneau" id="metier" onSubmit={onSubmit} noValidate aria-labelledby={`${id}-titre`}>
      <h2 className="metier-panneau__titre" id={`${id}-titre`}>
        {t.title}
      </h2>

      <fieldset className="champ" aria-describedby={errors.link ? `${id}-link-err` : undefined}>
        <legend className="champ__libelle">{t.linkLegend}</legend>
        <div className="choix" id={`${id}-link`} tabIndex={-1}>
          {t.links.map((l) => (
            <label key={l.id} className="choix__option">
              <input
                type="radio"
                name={`${id}-lien`}
                value={l.id}
                checked={link === l.id}
                onChange={() => {
                  setLink(l.id);
                  clear("link");
                }}
              />
              <span>{l.label}</span>
            </label>
          ))}
        </div>
        {errors.link && (
          <p className="champ__erreur" id={`${id}-link-err`}>
            {errors.link}
          </p>
        )}
      </fieldset>

      <div className="champ">
        <label className="champ__libelle" htmlFor={`${id}-name`}>
          {t.name}
        </label>
        <input
          id={`${id}-name`}
          className="champ__saisie"
          autoComplete="name"
          value={name}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? `${id}-name-err` : undefined}
          onChange={(e) => {
            setName(e.target.value);
            clear("name");
          }}
        />
        {errors.name && (
          <p className="champ__erreur" id={`${id}-name-err`}>
            {errors.name}
          </p>
        )}
      </div>

      <div className="champ-ligne">
        <div className="champ">
          <label className="champ__libelle" htmlFor={`${id}-institution`}>
            {t.institution}
          </label>
          <input
            id={`${id}-institution`}
            className="champ__saisie"
            placeholder={t.institutionHint}
            value={institution}
            aria-invalid={errors.institution ? true : undefined}
            aria-describedby={errors.institution ? `${id}-institution-err` : undefined}
            onChange={(e) => {
              setInstitution(e.target.value);
              clear("institution");
            }}
          />
          {errors.institution && (
            <p className="champ__erreur" id={`${id}-institution-err`}>
              {errors.institution}
            </p>
          )}
        </div>
        <div className="champ champ--annee">
          <label className="champ__libelle" htmlFor={`${id}-year`}>
            {t.year} <span className="champ__facultatif">({t.optional})</span>
          </label>
          <input
            id={`${id}-year`}
            className="champ__saisie"
            inputMode="numeric"
            maxLength={4}
            placeholder={t.yearHint}
            value={year}
            onChange={(e) => setYear(e.target.value.replace(/[^0-9]/g, ""))}
          />
        </div>
      </div>

      {/* La bande du visiteur : un bloc tissé par réponse, vert quand la demande est prête. */}
      <div className={`echantillon${ready ? " echantillon--pret" : ""}`}>
        <div className="echantillon__bande" aria-hidden="true">
          {filled.map((on, i) => (
            <i key={t.swatchSteps[i]} className={on ? "tisse" : undefined} />
          ))}
        </div>
        <p className="echantillon__etat" aria-live="polite">
          {ready ? t.ready : t.waiting}
        </p>
      </div>

      <button type="submit" className="bouton bouton--grand bouton--orange metier-panneau__envoi">
        <WhatsApp />
        {t.submit}
      </button>

      <div className="metier-panneau__pied">
        <button type="button" className="lien-bouton" onClick={onEmail}>
          {t.email}
        </button>
        <a className="lien-bouton" href={conditionsHref}>
          {t.conditions}
        </a>
      </div>
      <p className="metier-panneau__note">{t.note}</p>
    </form>
  );
}
