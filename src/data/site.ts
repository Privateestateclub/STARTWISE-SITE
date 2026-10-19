export const SITE = {
  name: "STARTWISE",
  legalName: "STARTWISE S.à r.l.",
  domain: "startwise.lu",
  email: "contact@startwise.lu",
  rcs: "RCS Luxembourg B 280700",
  tva: "LU35185639",
  address: "57, rue des Pommiers, L-2343 Luxembourg",
  city: "Luxembourg",
  baseline: "Bâtisseurs de sociétés, de capital et de produits.",
} as const;

export type Product = {
  id: string;
  name: string;
  category: string;
  blurb: string;
  description: string;
  status: "live" | "soon" | "project";
  statusLabel: string;
  href?: string;
  external?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "letzsetup",
    name: "LETZSETUP",
    category: "Création de sociétés",
    blurb:
      "La voie la plus rapide pour créer et immatriculer une société au Luxembourg, de bout en bout.",
    description:
      "Plateforme qui digitalise la constitution de sociétés luxembourgeoises : choix de la structure, rédaction des statuts, coordination notaire et banque, immatriculation RCS. Pensée pour les fondateurs comme pour les cabinets.",
    status: "live",
    statusLabel: "En ligne",
    href: "https://letzsetup.com",
    external: true,
  },
  {
    id: "ownset",
    name: "OWNSET",
    category: "Produit numérique",
    blurb:
      "Produit numérique du studio STARTWISE, déjà opérationnel.",
    description:
      "OWNSET est un produit numérique développé par STARTWISE, aujourd'hui opérationnel. Présentation détaillée à venir.",
    status: "live",
    statusLabel: "En ligne",
  },
  {
    id: "compta",
    name: "Compta",
    category: "Comptabilité & finance",
    blurb:
      "Une plateforme de comptabilité moderne, prolongement naturel d'une société créée avec LETZSETUP.",
    description:
      "Projet de plateforme de comptabilité (dans l'esprit des acteurs modernes du secteur) destinée aux sociétés luxembourgeoises. Cross-sell naturel depuis LETZSETUP : toute société créée a besoin d'une comptabilité fiable. Cadre réglementaire en cours de structuration.",
    status: "project",
    statusLabel: "En projet",
  },
];

export type Service = {
  id: string;
  title: string;
  summary: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    id: "immobilier",
    title: "Financement & refinancement immobilier",
    summary:
      "Nous montons et optimisons le financement de vos actifs et portefeuilles immobiliers.",
    points: [
      "Financement d'acquisitions et de projets",
      "Refinancement de portefeuilles existants",
      "Négociation des conditions bancaires",
      "Structuration des garanties et covenants",
    ],
  },
  {
    id: "levee",
    title: "Levée de fonds institutionnelle",
    summary:
      "Nous ouvrons l'accès aux investisseurs institutionnels et structurons l'opération.",
    points: [
      "Préparation de l'equity story et du dossier",
      "Mise en relation avec investisseurs institutionnels",
      "Structuration de la table de capitalisation",
      "Accompagnement jusqu'au closing",
    ],
  },
  {
    id: "portefeuille",
    title: "Gestion & structuration de portefeuille",
    summary:
      "Nous sélectionnons les asset managers et banques les mieux alignés avec vos objectifs.",
    points: [
      "Sélection d'asset managers et de banques",
      "Allocation et architecture de portefeuille",
      "Suivi de performance et reporting",
      "Mise en concurrence des contreparties",
    ],
  },
  {
    id: "conseil",
    title: "Conseil en gestion & accompagnement des dirigeants",
    summary:
      "Nous aidons les dirigeants à structurer leur entreprise et leurs décisions stratégiques.",
    points: [
      "Structuration juridique et financière",
      "Pilotage et gouvernance",
      "Stratégie de croissance et M&A",
      "Accompagnement opérationnel des dirigeants",
    ],
  },
];

export const STATS = [
  { value: "Luxembourg", label: "Ancrage & cadre réglementaire" },
  { value: "3", label: "Produits numériques au sein du studio" },
  { value: "4", label: "Expertises financières & conseil" },
  { value: "360°", label: "De l'idée à la structuration du capital" },
];

export const NAV = [
  { label: "À propos", to: "/a-propos" },
  { label: "Produits & services", to: "/produits-services" },
  { label: "Contact", to: "/contact" },
];
