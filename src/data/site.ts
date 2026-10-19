export const SITE = {
  name: "STARTWISE",
  legalName: "STARTWISE S.à r.l.",
  domain: "startwise.lu",
  email: "contact@startwise.lu",
  rcs: "RCS Luxembourg B 280700",
  tva: "LU35185639",
  address: "57, rue des Pommiers, L-2343 Luxembourg",
  city: "Luxembourg",
} as const;

export type ProductStatus = "live" | "soon" | "project";

/** Données structurelles des produits ; les textes vivent dans i18n (t.products[id]). */
export type Product = {
  id: "letzsetup" | "ownset" | "compta";
  status: ProductStatus;
  href?: string;
  external?: boolean;
};

export const PRODUCTS: Product[] = [
  { id: "letzsetup", status: "live", href: "https://letzsetup.com", external: true },
  { id: "ownset", status: "live", href: "https://ownset.io", external: true },
  { id: "compta", status: "project" },
];

/** Ordre des expertises ; les textes vivent dans i18n (t.services[id]). */
export const SERVICE_IDS = [
  "immobilier",
  "levee",
  "portefeuille",
  "conseil",
] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

/** Liens de navigation ; le libellé vient de i18n (t.nav[key]). */
export const NAV = [
  { to: "/a-propos", key: "about" },
  { to: "/produits-services", key: "solutions" },
  { to: "/contact", key: "contact" },
] as const;
