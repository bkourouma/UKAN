# Site internet UKAN Côte d’Ivoire (Next.js)

Refonte du site `site/site-ukan/` avec Next.js 16 (App Router), en français et en anglais.
Le design suit à la lettre la charte graphique (`charte/charte-ukan-reglages.md`) :
bleu UKAN / orange Ivoire / vert Ivoire, Source Serif 4 + IBM Plex Sans, filet tricolore,
un seul bouton orange par écran, ombres teintées de bleu.

## Lancer le site

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique dans out/
```

`npm run build` produit un site **entièrement statique** dans `out/` : il se dépose tel quel chez
n’importe quel hébergeur (Cloudflare Pages, Netlify, OVH, serveur Apache/Nginx…).
Aucun serveur Node n’est nécessaire.

## Mise en ligne

Le site est déployé automatiquement sur https://ukan.allianceconsultants.net à chaque fusion
dans `main` (conteneur Docker sur le serveur « alliance », comme les autres sites vitrines).
Procédure, mise en place et retour arrière : [`deploy/README.md`](deploy/README.md).

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| E-mail, téléphone, WhatsApp, adresse du siège, récépissé, liens LinkedIn / Facebook, lien du formulaire d’adhésion, PDF du Plan | `lib/site.ts` |
| Un texte en français | `content/fr.ts` |
| Un texte en anglais | `content/en.ts` |
| Les couleurs, tailles, espacements | `app/globals.css` (jetons en tête de fichier) |
| Les logos, l’image de partage | `public/images/` |

Toute information laissée à `null` dans `lib/site.ts` s’affiche sur le site avec une étiquette
« À compléter ». Dès qu’elle est renseignée, l’étiquette disparaît partout.

Pour que les liens de partage (réseaux sociaux) et les balises de langue soient complets,
indiquez l’adresse définitive du site au moment du build :

```bash
NEXT_PUBLIC_SITE_URL=https://www.exemple.ci npm run build
```

## Organisation

```
app/(fr)/…          pages françaises (/, /le-reseau/, /adherer/…)
app/(en)/en/…       pages anglaises (/en/, /en/le-reseau/…)
components/pages/   contenu de chaque page, partagé entre les deux langues
components/         en-tête, pied de page, méridien Londres–Abidjan, éléments communs
content/            textes FR et EN (même structure, vérifiée par TypeScript)
lib/                coordonnées, chemins, polices, métadonnées
```
