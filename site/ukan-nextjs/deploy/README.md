# Déploiement de ukan.allianceconsultants.net (serveur `alliance`)

Même modèle que les sites vitrines CliniquePro (`cliniquepro_web_v2`) et ImmoTopia
(`immotopia_website_v2`) : runner GitHub Actions auto-hébergé sur le serveur, conteneur
Docker sur un port local, nginx de l'hôte devant avec le certificat Let's Encrypt.

| Élément | Valeur |
|---|---|
| Conteneur / image | `ukan-site` / `ukan-site:latest` |
| Port local | `127.0.0.1:3040` (nginx du conteneur sur 8080) |
| Dossier serveur | `/home/deployer/apps/ukan-site` (utilisateur `deployer`) |
| Runner | `ukan-site-runner`, label `ukan-site`, dans `~/actions-runner-ukan-site` |
| Vhost nginx hôte | `/etc/nginx/sites-available/ukan.allianceconsultants.net` (modèle : `deploy/nginx-ukan.allianceconsultants.net.conf`) |

Le site est un export statique de Next.js : l'image construit `out/` puis le sert avec
nginx (sans Node), configuration `deploy/nginx-conteneur.conf`.

## Déploiement automatique (procédure normale)

Chaque fusion dans `main` qui touche `site/ukan-nextjs/` (ou les workflows) déploie le site :

1. `.github/workflows/deploy.yml` lance d'abord les vérifications de `ci.yml` (types, build) sur GitHub.
   Les mêmes vérifications tournent sur chaque pull request qui touche le site ;
2. si elles passent, le job « Déployer sur alliance » tourne sur le runner `ukan-site` : il garde l'image
   actuelle sous l'étiquette `ukan-site:avant-ci-<date>-<commit>`, synchronise `site/ukan-nextjs` dans
   `/home/deployer/apps/ukan-site` (`rsync`, sans toucher à un éventuel `.env`), lance
   `docker compose up -d --build`, puis vérifie `http://127.0.0.1:3040/`, `/en/` et `/adherer/`
   (30 tentatives, 5 s d'écart) ;
3. si le contrôle de santé échoue, le job remet automatiquement l'image précédente et se termine en échec
   (visible dans l'onglet Actions). Si la construction elle-même échoue, l'ancien conteneur reste en service.

Un seul déploiement à la fois. Pour relancer sans nouveau commit : onglet Actions, « Déploiement »,
« Run workflow », branche `main`. **Aucun secret GitHub n'est nécessaire.**

## Mise en place (une seule fois)

1. **DNS** : enregistrement `A` `ukan` → IP du serveur `alliance`, dans la zone `allianceconsultants.net`.
2. **Port** : vérifier que 3040 est libre sur le serveur (`ss -ltn | grep ':3040 '` ne doit rien afficher) ;
   sinon, changer le port dans `docker-compose.yml`, `.github/workflows/deploy.yml` (`APP_URL`) et le vhost.
3. **Runner** (depuis votre poste, en une connexion SSH) :
   ```bash
   TOKEN=$(gh api -X POST repos/bkourouma/UKAN/actions/runners/registration-token --jq .token)
   ssh alliance 'bash -s' -- "$TOKEN" < site/ukan-nextjs/deploy/install-runner.sh
   ```
   Le script crée aussi `/home/deployer/apps/ukan-site`.
4. **Nginx de l'hôte et certificat** (sur le serveur, en administrateur) :
   ```bash
   # d'abord le certificat (le vhost HTTPS en a besoin pour démarrer)
   certbot certonly --webroot -w /var/www/html -d ukan.allianceconsultants.net
   cp nginx-ukan.allianceconsultants.net.conf /etc/nginx/sites-available/ukan.allianceconsultants.net
   ln -s ../sites-available/ukan.allianceconsultants.net /etc/nginx/sites-enabled/
   nginx -t && systemctl reload nginx
   ```
   (Si le webroot `/var/www/html` n'est pas encore servi pour ce nom, `certbot --nginx -d ukan.allianceconsultants.net`
   fait les deux étapes d'un coup.)
5. **Premier déploiement** : fusionner la PR, ou « Run workflow » sur `main`.

Pensez à ajouter la ligne `3040 | ukan-site | ukan.allianceconsultants.net` au registre des ports
(`docs/PROMPT_CICD_NOUVELLE_APP.md` du dépôt `allianceconsultants_net`).

## Retour arrière et secours manuel

- Retour arrière automatique : voir ci-dessus (contrôle de santé en échec).
- Retour arrière à la main (sur le serveur, utilisateur `deployer`) : `docker image ls ukan-site` pour repérer
  l'étiquette `avant-ci-…`, puis
  `docker tag ukan-site:avant-ci-… ukan-site:latest && cd ~/apps/ukan-site && docker compose up -d --no-build`.
- Secours si GitHub Actions est indisponible : copier `site/ukan-nextjs` dans `~/apps/ukan-site` puis
  `docker compose up -d --build`.
- Journaux : `docker logs --tail 60 ukan-site` ; nginx hôte : `/var/log/nginx/ukan-*.log`.
