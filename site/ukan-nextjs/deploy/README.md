# Mise en ligne de ukan.allianceconsultants.net

Chaque fusion sur `main` qui touche `site/ukan-nextjs/` déclenche le workflow
GitHub Actions **« Déployer le site »** (`.github/workflows/deploy-site.yml`) :

1. il installe les dépendances, vérifie les types et construit l’export statique
   (`out/`) avec `NEXT_PUBLIC_SITE_URL=https://ukan.allianceconsultants.net` ;
2. il envoie `out/` sur le serveur par SSH (`rsync --delete`) ;
3. il vérifie que https://ukan.allianceconsultants.net répond.

On peut aussi le lancer à la main : onglet **Actions** › « Déployer le site » › **Run workflow**.

## Préparer le serveur (une seule fois)

Sur le VPS (Debian/Ubuntu), en administrateur :

```bash
# 1. Nginx et certbot
apt-get update && apt-get install -y nginx certbot python3-certbot-nginx rsync

# 2. Un utilisateur réservé au déploiement, propriétaire du dossier du site
adduser --disabled-password --gecos "" deploy
mkdir -p /var/www/ukan.allianceconsultants.net
chown deploy:deploy /var/www/ukan.allianceconsultants.net

# 3. Une clé SSH pour GitHub Actions (à faire sur votre poste ou sur le serveur)
ssh-keygen -t ed25519 -N "" -C "github-actions-ukan" -f ukan_deploy
install -d -m 700 -o deploy -g deploy /home/deploy/.ssh
cat ukan_deploy.pub >> /home/deploy/.ssh/authorized_keys
chown deploy:deploy /home/deploy/.ssh/authorized_keys && chmod 600 /home/deploy/.ssh/authorized_keys

# 4. Nginx
cp nginx-ukan.conf /etc/nginx/sites-available/ukan.allianceconsultants.net
ln -s ../sites-available/ukan.allianceconsultants.net /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

# 5. HTTPS (une fois le DNS en place)
certbot --nginx -d ukan.allianceconsultants.net
```

**DNS** : chez le gestionnaire du domaine `allianceconsultants.net`, créez un
enregistrement `A` `ukan` → adresse IPv4 du serveur (et `AAAA` si IPv6).

## Secrets GitHub

Dans le dépôt : **Settings › Secrets and variables › Actions › New repository secret**.

| Secret | Valeur |
|---|---|
| `DEPLOY_HOST` | nom ou adresse IP du serveur |
| `DEPLOY_USER` | `deploy` |
| `DEPLOY_SSH_KEY` | contenu du fichier `ukan_deploy` (clé **privée**, en entier) |
| `DEPLOY_KNOWN_HOSTS` | sortie de `ssh-keyscan -H <hôte>` lancée depuis votre poste |
| `DEPLOY_PATH` | `/var/www/ukan.allianceconsultants.net` |
| `DEPLOY_PORT` | facultatif, si SSH n’écoute pas sur 22 |

Une fois les secrets ajoutés, lancez le workflow à la main une première fois
(**Run workflow**) pour vérifier la chaîne complète.

## En cas d’échec

- **Permission denied (publickey)** : la clé publique n’est pas dans
  `/home/deploy/.ssh/authorized_keys`, ou `DEPLOY_SSH_KEY` est incomplète.
- **Host key verification failed** : `DEPLOY_KNOWN_HOSTS` ne correspond pas au
  serveur ; relancez `ssh-keyscan -H <hôte>` et remplacez le secret.
- **« ne répond pas 200 »** : les fichiers sont envoyés mais Nginx ne sert pas le
  dossier, ou le DNS/HTTPS n’est pas encore en place.
