# Déploiement — Cloudflare (Workers Static Assets)

Site : **STARTWISE** (corporate) · Domaine visé : **startwise.lu**
Repo : `Privateestateclub/STARTWISE-SITE`

## Build & deploy
- **Build command** : `npm run build`
- **Deploy command** : `npx wrangler deploy`
- **Build output** : `dist` (déclaré dans [`wrangler.jsonc`](wrangler.jsonc))
- **Node version** : 20+ (testé sur Node 24)

La config de déploiement vit dans [`wrangler.jsonc`](wrangler.jsonc) :
sert `dist` en statique et renvoie `index.html` pour les routes inconnues
(`not_found_handling: single-page-application`) → routing React côté client.

> ⚠️ Ne pas ajouter de fichier `public/_redirects` : en mode Workers Static
> Assets le routing SPA est géré par `wrangler.jsonc`, et une règle
> `/* /index.html 200` fait échouer le déploiement (boucle infinie).

## Mise en ligne (dashboard Cloudflare)
1. **Workers & Pages → Create → Import a repository** → `STARTWISE-SITE`.
2. Build command `npm run build`, deploy command `npx wrangler deploy`.
3. **Deploy** → site live sur `*.workers.dev` (redéploiement auto à chaque push sur `main`).
4. Domaine : ajouter `startwise.lu` comme zone Cloudflare (nameservers), puis
   projet → **Settings → Domains & Routes → Add → Custom domain** (`startwise.lu` + `www`).

## Développement local
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # build de production dans dist/
npm run preview    # prévisualiser le build
```

> Domaine distinct des produits (letzsetup.com, ownset.io, …) : le SEO de
> STARTWISE ne cannibalise pas celui des produits.
