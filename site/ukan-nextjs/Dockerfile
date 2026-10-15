# Site UKAN Côte d'Ivoire : image de production.
# Next.js produit un export statique (out/), servi ensuite par nginx sans Node.

FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
# Figée dans les pages au moment du build (liens canoniques, partage, langues)
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# nginx sans droits root, sur le port 8080
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runner
COPY deploy/nginx-conteneur.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 8080
