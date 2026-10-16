# Déploiement — Cloudflare Pages

Site : **STARTWISE** (corporate) · Domaine visé : **startwise.lu**

## Build
- **Framework preset** : Vite
- **Build command** : `npm run build`
- **Build output directory** : `dist`
- **Node version** : 20+ (le projet est testé sur Node 24)

## Routing SPA
Le fichier [`public/_redirects`](public/_redirects) redirige toutes les routes vers
`index.html` (code 200) pour que le routeur React gère la navigation côté client.

## Étapes (dashboard Cloudflare Pages)
1. **Workers & Pages → Create → Pages → Connect to Git**, sélectionner ce dépôt.
2. Renseigner build command / output comme ci-dessus.
3. Déployer.
4. **Custom domains → Set up a custom domain → `startwise.lu`** (et `www.startwise.lu`),
   puis suivre les instructions DNS.

## Développement local
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # build de production dans dist/
npm run preview    # prévisualiser le build
```

> Domaine distinct des produits (letzsetup.com, etc.) : le SEO de STARTWISE
> ne cannibalise pas celui des produits du groupe.
