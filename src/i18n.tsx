import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";

/* ------------------------------------------------------------------ */
/*  Dictionnaire — français (référence)                                */
/* ------------------------------------------------------------------ */
const fr = {
  status: { live: "En ligne", soon: "Bientôt", project: "En projet" },

  nav: {
    about: "À propos",
    solutions: "Produits & services",
    contact: "Contact",
    write: "Nous écrire",
  },

  common: {
    home: "Accueil",
    visit: "Visiter",
    visitSite: "Visiter le site",
    learnMore: "En savoir plus",
  },

  hero: {
    eyebrow: "Société luxembourgeoise · investissement · conseil · technologie",
    titlePre: "Nous bâtissons des sociétés,",
    titleMid: " du ",
    titleEm: "capital",
    titlePost: " et des produits.",
    para: "STARTWISE S.à r.l. est une société luxembourgeoise qui conçoit des produits numériques et accompagne dirigeants et investisseurs : du financement immobilier à la levée de fonds, de l'analyse de portefeuille au conseil stratégique.",
    ctaPrimary: "Découvrir STARTWISE",
    ctaSecondary: "Prendre contact",
  },

  stats: [
    { value: "Luxembourg", label: "Ancrage & cadre réglementaire" },
    { value: "3", label: "Produits numériques au sein du studio" },
    { value: "4", label: "Expertises financières & conseil" },
    { value: "360°", label: "De l'idée à la structuration du capital" },
  ],

  positioning: {
    eyebrow: "La société",
    title: "Une seule société, deux manières de créer de la valeur.",
    para1:
      "STARTWISE réunit un studio de produits numériques et un pôle de services financiers et de conseil. D'un côté, nous construisons des logiciels qui simplifient la vie des entreprises. De l'autre, nous structurons leur capital, leur financement et leur croissance.",
    para2:
      "Chaque produit garde son nom et sa marque ; STARTWISE en est la colonne vertébrale — l'exigence, le réseau et le savoir-faire financier.",
    quote:
      "« Nous n'aidons pas seulement à démarrer une entreprise — nous l'aidons à se structurer, se financer et durer. »",
    conviction: "La conviction STARTWISE",
  },

  studio: {
    eyebrow: "Le studio",
    title: "Les produits que nous construisons",
    intro:
      "Des logiciels pensés pour les entrepreneurs et les sociétés luxembourgeoises, du premier jour à la gestion quotidienne.",
  },

  expertises: {
    eyebrow: "Les expertises",
    title: "Financement, capital & conseil",
    introHome:
      "Au-delà du logiciel, STARTWISE accompagne dirigeants et investisseurs sur les décisions qui engagent l'avenir de leur patrimoine et de leur entreprise.",
    introSolutions:
      "Nous accompagnons dirigeants et investisseurs sur les décisions structurantes, avec la rigueur et le réseau d'un acteur financier luxembourgeois.",
    seeAll: "Voir tous les services",
  },

  approach: {
    eyebrow: "Notre approche",
    title: "Ce qui nous distingue",
    items: [
      {
        title: "Ancrage luxembourgeois",
        body: "Nous connaissons le cadre réglementaire, bancaire et notarial du Luxembourg, et nous l'utilisons comme un avantage pour nos clients.",
      },
      {
        title: "Exigence & discrétion",
        body: "Un niveau d'exécution que l'on attend d'un partenaire financier : rigueur, confidentialité et sens du détail.",
      },
      {
        title: "De l'idée au capital",
        body: "Nous couvrons toute la chaîne : créer la société, bâtir le produit, puis la financer et la faire croître.",
      },
    ],
  },

  cta: {
    eyebrow: "Travaillons ensemble",
    title: "Un projet, un financement ou une idée à structurer ?",
    para: "Parlons de votre société, de votre portefeuille ou du produit que vous voulez construire.",
    primary: "Nous contacter",
    secondary: "En savoir plus sur STARTWISE",
  },

  products: {
    letzsetup: {
      name: "LETZSETUP",
      category: "Création de sociétés",
      blurb:
        "La voie la plus rapide pour créer et immatriculer une société au Luxembourg, de bout en bout.",
      description:
        "Plateforme qui digitalise la constitution de sociétés luxembourgeoises : choix de la structure, rédaction des statuts, coordination notaire et banque, immatriculation RCS. Pensée pour les fondateurs comme pour les cabinets.",
    },
    ownset: {
      name: "OWNSET",
      category: "Patrimoine immobilier",
      blurb:
        "La plateforme qui réunit votre patrimoine immobilier — documents, dépenses, entretien et valeur — en un seul espace.",
      description:
        "OWNSET centralise documents, dépenses, entretien et valeur de vos biens immobiliers dans un espace clair et sécurisé. Scan intelligent des factures, passeport du bien en PDF, suivi des échéances et de la valeur nette : organiser aujourd'hui, valoriser demain.",
    },
    compta: {
      name: "Compta",
      category: "Comptabilité & finance",
      blurb:
        "Une plateforme de comptabilité moderne, prolongement naturel d'une société créée avec LETZSETUP.",
      description:
        "Projet de plateforme de comptabilité (dans l'esprit des acteurs modernes du secteur) destinée aux sociétés luxembourgeoises. Cross-sell naturel depuis LETZSETUP : toute société créée a besoin d'une comptabilité fiable. Cadre réglementaire en cours de structuration.",
    },
  },

  services: {
    immobilier: {
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
    levee: {
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
    portefeuille: {
      title: "Analyse & accompagnement de portefeuille",
      summary:
        "Nous analysons votre portefeuille et vous accompagnons dans vos choix — sans gérer les actifs à votre place.",
      points: [
        "Analyse de portefeuille et reporting",
        "Recommandations et pistes d'optimisation",
        "Comparaison d'asset managers et de banques",
        "Aide à la décision, en toute indépendance",
      ],
    },
    conseil: {
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
  },

  footer: {
    tagline:
      "Bâtisseurs de sociétés, de capital et de produits. Une société luxembourgeoise qui conçoit des produits et structure le capital, le financement et la croissance.",
    navigate: "Naviguer",
    products: "Nos produits",
    rights: "Tous droits réservés.",
    legal: "Mentions légales",
  },

  about: {
    eyebrow: "À propos",
    title: "La société derrière les produits et le capital.",
    intro:
      "STARTWISE S.à r.l. est une société luxembourgeoise qui réunit un studio de produits numériques et une expertise en financement, investissement et conseil.",
    missionEyebrow: "Notre mission",
    missionTitle:
      "Donner aux dirigeants les moyens de bâtir, financer et faire durer.",
    missionBody: [
      "Nous croyons qu'entreprendre ne devrait pas s'arrêter à la création d'une société. Les vraies questions arrivent ensuite : comment financer sa croissance, structurer son patrimoine, lever des fonds, choisir les bons partenaires bancaires.",
      "STARTWISE a été pensée comme le trait d'union entre ces mondes. D'un côté, un studio qui construit des produits numériques sobres et efficaces. De l'autre, une expertise financière et de conseil au service des dirigeants et des investisseurs.",
      "Le tout avec l'exigence, la discrétion et l'ancrage luxembourgeois qui inspirent confiance aux clients comme aux partenaires — banques, notaires et institutionnels.",
    ],
    valuesEyebrow: "Nos valeurs",
    valuesTitle: "Ce qui guide chaque décision",
    values: [
      {
        title: "Rigueur",
        body: "La précision d'un acteur financier appliquée à tout ce que nous faisons, du code aux montages de financement.",
      },
      {
        title: "Indépendance",
        body: "Nous sélectionnons banques, asset managers et partenaires dans le seul intérêt de nos clients.",
      },
      {
        title: "Long terme",
        body: "Nous construisons des produits et des relations faits pour durer, pas pour l'effet d'annonce.",
      },
      {
        title: "Proximité",
        body: "Un interlocuteur qui comprend le dirigeant, parce que nous en sommes.",
      },
    ],
    historyEyebrow: "Notre histoire",
    historyTitle: "Du logiciel à l'investissement",
    timeline: [
      {
        phase: "Le constat",
        body: "Créer une société au Luxembourg, la financer et la structurer restait fragmenté entre une multitude d'intervenants. Il manquait un acteur capable de relier le tout.",
      },
      {
        phase: "Le studio",
        body: "Nous avons commencé par le logiciel, avec LETZSETUP pour la création de sociétés, rejoint par OWNSET, aujourd'hui opérationnel, et le projet Compta.",
      },
      {
        phase: "La société",
        body: "Autour du studio, nous avons structuré un pôle de services financiers et de conseil : financement immobilier, levée de fonds, analyse de portefeuille, accompagnement des dirigeants.",
      },
      {
        phase: "Aujourd'hui",
        body: "STARTWISE réunit les deux : une société luxembourgeoise qui conçoit des produits et structure le capital de ses clients, de l'idée jusqu'à la croissance.",
      },
    ],
    entity: {
      entity: "Entité",
      rcs: "Registre de commerce",
      tva: "TVA intracommunautaire",
      seat: "Siège",
      cta: "Entrer en relation",
    },
  },

  solutions: {
    eyebrow: "Produits & services",
    title: "Deux pôles, un même niveau d'exigence.",
    intro:
      "Un studio qui construit des produits numériques, et une expertise financière et de conseil au service des dirigeants et des investisseurs.",
    productsEyebrow: "Le studio",
    productsTitle: "Nos produits numériques",
    productsIntro:
      "Des logiciels sobres et efficaces, conçus autour des besoins réels des sociétés luxembourgeoises.",
    ctaEyebrow: "Discutons",
    ctaTitle: "Un besoin précis, ou simplement une question ?",
    ctaButton: "Prendre contact",
  },

  contact: {
    eyebrow: "Contact",
    title: "Parlons de votre projet.",
    intro:
      "Une société à créer, un financement à monter, un portefeuille à structurer ou un produit à construire — écrivez-nous, nous revenons vers vous rapidement.",
    subjects: [
      "Produits numériques",
      "Financement immobilier",
      "Levée de fonds",
      "Analyse de portefeuille",
      "Conseil & accompagnement",
      "Autre",
    ],
    labelEmail: "Email",
    labelAddress: "Adresse",
    labelEntity: "Entité",
    note: "STARTWISE accompagne principalement une clientèle de dirigeants, d'entrepreneurs et d'investisseurs au Luxembourg et en Grande Région. Chaque demande est traitée de manière confidentielle.",
    fieldName: "Nom complet",
    fieldCompany: "Société (optionnel)",
    fieldSubject: "Sujet",
    fieldMessage: "Votre message",
    placeholder: "Décrivez votre projet ou votre question…",
    send: "Envoyer le message",
    disclaimer:
      "Ce formulaire ouvre votre messagerie pré-remplie — aucune donnée n'est stockée sur ce site.",
    mailName: "Nom",
    mailCompany: "Société",
    mailSubject: "Sujet",
  },

  legal: {
    eyebrow: "Informations légales",
    title: "Mentions légales",
    editorTitle: "Éditeur du site",
    editorIntro1: "Le présent site est édité par ",
    editorIntro2:
      ", société à responsabilité limitée de droit luxembourgeois.",
    seat: "Siège social : ",
    vat: "Numéro de TVA : ",
    email: "Email : ",
    capital: "Capital social : 12 000 €",
    permit:
      "Autorisation d'établissement (ministère de l'Économie) : n° 10156858 / 0.",
    dirTitle: "Directeur de la publication",
    dirBody:
      "Le directeur de la publication est Marc Gérard, gérant unique de STARTWISE S.à r.l.",
    hostTitle: "Hébergement",
    hostBody:
      "Le site est hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis — qui assure la diffusion et la mise à disposition du site.",
    ipTitle: "Propriété intellectuelle",
    ipBody1:
      "L'ensemble des éléments du site (textes, visuels, logos, identité graphique et code) est la propriété de STARTWISE S.à r.l. ou de ses partenaires, et est protégé par les lois en vigueur relatives à la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, sans autorisation préalable est interdite.",
    ipBody2:
      "LETZSETUP et OWNSET sont des noms désignant des produits et services édités par STARTWISE S.à r.l.",
    dataTitle: "Données personnelles",
    dataBody1a:
      "Les données que vous nous transmettez via le formulaire de contact (ouvert dans votre messagerie) sont utilisées uniquement pour répondre à votre demande. Conformément au Règlement général sur la protection des données (RGPD) et à la législation luxembourgeoise applicable, vous disposez d'un droit d'accès, de rectification et de suppression de vos données, exerçable à l'adresse ",
    dataBody2: "Ce site ne dépose pas de cookies de suivi publicitaire.",
    dataBody3:
      "STARTWISE S.à r.l. agit en qualité de responsable du traitement. Vous disposez également du droit d'introduire une réclamation auprès de la Commission nationale pour la protection des données (CNPD), autorité de contrôle luxembourgeoise.",
    regTitle: "Statut réglementaire",
    regBody:
      "STARTWISE S.à r.l. n'est pas un professionnel du secteur financier (PSF) agréé et n'est ni agréée ni surveillée par la Commission de Surveillance du Secteur Financier (CSSF). Elle ne fournit pas de services d'investissement réglementés ni de gestion de portefeuille au sens de la réglementation financière ; ses prestations relèvent du conseil, de l'accompagnement et de la mise en relation.",
    natureTitle: "Nature de l'information",
    natureBody:
      "Les informations présentées sur ce site ont une vocation générale et d'information. Elles ne constituent ni un conseil en investissement, ni une recommandation financière ou juridique personnalisée. Toute prestation fait l'objet d'un cadre contractuel spécifique.",
    respTitle: "Responsabilité",
    respBody:
      "STARTWISE S.à r.l. s'efforce d'assurer l'exactitude des informations diffusées mais ne saurait être tenue responsable des erreurs, omissions ou de l'indisponibilité du site. Les liens vers des sites tiers sont fournis à titre pratique ; STARTWISE S.à r.l. n'exerce aucun contrôle sur leur contenu.",
    lawTitle: "Droit applicable",
    lawBody:
      "Le présent site et ses mentions légales sont régis par le droit luxembourgeois. Tout litige relève de la compétence des juridictions du Grand-Duché de Luxembourg.",
    updated: "Dernière mise à jour : ",
    locale: "fr-FR",
  },

  notfound: {
    title: "Page introuvable",
    body: "La page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },

  meta: {
    home: {
      title: "Investissement, conseil & technologie · Luxembourg",
      desc: "STARTWISE S.à r.l. — société luxembourgeoise qui conçoit des produits numériques et accompagne dirigeants et investisseurs : financement immobilier, levée de fonds, analyse de portefeuille et conseil.",
    },
    about: {
      title: "À propos",
      desc: "La société derrière les produits et le capital : STARTWISE réunit un studio de produits numériques et une expertise en financement, investissement et conseil au Luxembourg.",
    },
    solutions: {
      title: "Produits & services",
      desc: "Le studio de produits numériques de STARTWISE (LETZSETUP, OWNSET, Compta) et ses expertises : financement immobilier, levée de fonds, analyse de portefeuille et conseil.",
    },
    contact: {
      title: "Contact",
      desc: "Parlons de votre projet : société à créer, financement à monter, portefeuille à structurer ou produit à construire. Écrivez à STARTWISE.",
    },
    legal: { title: "Mentions légales", desc: "Mentions légales de STARTWISE S.à r.l." },
    notfound: { title: "Page introuvable" },
  },
};

export type Dict = typeof fr;

/* ------------------------------------------------------------------ */
/*  Dictionnaire — anglais                                             */
/* ------------------------------------------------------------------ */
const en: Dict = {
  status: { live: "Live", soon: "Soon", project: "In progress" },

  nav: {
    about: "About",
    solutions: "Products & services",
    contact: "Contact",
    write: "Get in touch",
  },

  common: {
    home: "Home",
    visit: "Visit",
    visitSite: "Visit the site",
    learnMore: "Learn more",
  },

  hero: {
    eyebrow: "Luxembourg company · investment · advisory · technology",
    titlePre: "We build companies,",
    titleMid: " ",
    titleEm: "capital",
    titlePost: " and products.",
    para: "STARTWISE S.à r.l. is a Luxembourg company that builds digital products and supports founders and investors — from real-estate financing to fundraising, from portfolio analysis to strategic advisory.",
    ctaPrimary: "Discover STARTWISE",
    ctaSecondary: "Get in touch",
  },

  stats: [
    { value: "Luxembourg", label: "Rooted in its regulatory framework" },
    { value: "3", label: "Digital products within the studio" },
    { value: "4", label: "Financial & advisory expertises" },
    { value: "360°", label: "From the idea to structuring capital" },
  ],

  positioning: {
    eyebrow: "The company",
    title: "One company, two ways of creating value.",
    para1:
      "STARTWISE brings together a digital-product studio and a financial services & advisory practice. On one side, we build software that makes companies' lives simpler. On the other, we structure their capital, financing and growth.",
    para2:
      "Each product keeps its own name and brand; STARTWISE is the backbone — the standards, the network and the financial know-how.",
    quote:
      "“We don't just help start a company — we help it get structured, financed and built to last.”",
    conviction: "The STARTWISE belief",
  },

  studio: {
    eyebrow: "The studio",
    title: "The products we build",
    intro:
      "Software designed for entrepreneurs and Luxembourg companies, from day one to day-to-day operations.",
  },

  expertises: {
    eyebrow: "The expertises",
    title: "Financing, capital & advisory",
    introHome:
      "Beyond software, STARTWISE supports founders and investors on the decisions that shape the future of their wealth and their business.",
    introSolutions:
      "We support founders and investors on structuring decisions, with the rigour and network of a Luxembourg financial player.",
    seeAll: "See all services",
  },

  approach: {
    eyebrow: "Our approach",
    title: "What sets us apart",
    items: [
      {
        title: "Rooted in Luxembourg",
        body: "We know Luxembourg's regulatory, banking and notarial framework, and we turn it into an advantage for our clients.",
      },
      {
        title: "Standards & discretion",
        body: "The level of execution you expect from a financial partner: rigour, confidentiality and attention to detail.",
      },
      {
        title: "From idea to capital",
        body: "We cover the whole chain: create the company, build the product, then finance it and help it grow.",
      },
    ],
  },

  cta: {
    eyebrow: "Let's work together",
    title: "A project, a financing or an idea to structure?",
    para: "Let's talk about your company, your portfolio or the product you want to build.",
    primary: "Contact us",
    secondary: "More about STARTWISE",
  },

  products: {
    letzsetup: {
      name: "LETZSETUP",
      category: "Company formation",
      blurb:
        "The fastest way to create and register a company in Luxembourg, end to end.",
      description:
        "A platform that digitalises the incorporation of Luxembourg companies: choice of structure, drafting of the articles, notary and bank coordination, RCS registration. Built for founders and firms alike.",
    },
    ownset: {
      name: "OWNSET",
      category: "Property wealth",
      blurb:
        "The platform that brings your property — documents, expenses, upkeep and value — into one clear space.",
      description:
        "OWNSET brings your properties' documents, expenses, upkeep and value together in one clear, secure space: smart invoice scanning, a PDF property passport, deadline and net-worth tracking. Organise today, grow tomorrow.",
    },
    compta: {
      name: "Compta",
      category: "Accounting & finance",
      blurb:
        "A modern accounting platform, the natural next step for a company created with LETZSETUP.",
      description:
        "A planned accounting platform (in the spirit of the sector's modern players) for Luxembourg companies. A natural cross-sell from LETZSETUP: every company that is created needs reliable accounting. Regulatory framework currently being structured.",
    },
  },

  services: {
    immobilier: {
      title: "Real-estate financing & refinancing",
      summary:
        "We structure and optimise the financing of your real-estate assets and portfolios.",
      points: [
        "Financing of acquisitions and projects",
        "Refinancing of existing portfolios",
        "Negotiation of banking terms",
        "Structuring of guarantees and covenants",
      ],
    },
    levee: {
      title: "Institutional fundraising",
      summary:
        "We open access to institutional investors and structure the transaction.",
      points: [
        "Preparation of the equity story and materials",
        "Introductions to institutional investors",
        "Structuring of the capitalisation table",
        "Support all the way to closing",
      ],
    },
    portefeuille: {
      title: "Portfolio analysis & support",
      summary:
        "We analyse your portfolio and support you in your choices — without managing the assets on your behalf.",
      points: [
        "Portfolio analysis and reporting",
        "Recommendations and optimisation avenues",
        "Comparison of asset managers and banks",
        "Decision support, in full independence",
      ],
    },
    conseil: {
      title: "Management consulting & executive support",
      summary:
        "We help executives structure their business and their strategic decisions.",
      points: [
        "Legal and financial structuring",
        "Steering and governance",
        "Growth strategy and M&A",
        "Hands-on support for executives",
      ],
    },
  },

  footer: {
    tagline:
      "Builders of companies, capital and products. A Luxembourg company that designs products and structures capital, financing and growth.",
    navigate: "Navigate",
    products: "Our products",
    rights: "All rights reserved.",
    legal: "Legal notice",
  },

  about: {
    eyebrow: "About",
    title: "The company behind the products and the capital.",
    intro:
      "STARTWISE S.à r.l. is a Luxembourg company bringing together a digital-product studio and expertise in financing, investment and advisory.",
    missionEyebrow: "Our mission",
    missionTitle: "Giving leaders the means to build, finance and last.",
    missionBody: [
      "We believe entrepreneurship shouldn't stop at creating a company. The real questions come next: how to finance growth, structure wealth, raise funds, choose the right banking partners.",
      "STARTWISE was designed as the link between these worlds. On one side, a studio that builds clean, effective digital products. On the other, financial and advisory expertise serving executives and investors.",
      "All with the standards, discretion and Luxembourg roots that inspire confidence in clients and partners alike — banks, notaries and institutions.",
    ],
    valuesEyebrow: "Our values",
    valuesTitle: "What guides every decision",
    values: [
      {
        title: "Rigour",
        body: "The precision of a financial player applied to everything we do, from code to financing structures.",
      },
      {
        title: "Independence",
        body: "We select banks, asset managers and partners in our clients' sole interest.",
      },
      {
        title: "Long term",
        body: "We build products and relationships made to last, not for the headline.",
      },
      {
        title: "Closeness",
        body: "A counterpart who understands the leader — because we are one.",
      },
    ],
    historyEyebrow: "Our story",
    historyTitle: "From software to investment",
    timeline: [
      {
        phase: "The observation",
        body: "Creating a company in Luxembourg, financing it and structuring it remained fragmented across a multitude of players. A partner able to connect it all was missing.",
      },
      {
        phase: "The studio",
        body: "We started with software, with LETZSETUP for company formation, joined by OWNSET — now operational — and the Compta project.",
      },
      {
        phase: "The company",
        body: "Around the studio, we structured a financial services & advisory practice: real-estate financing, fundraising, portfolio analysis, executive support.",
      },
      {
        phase: "Today",
        body: "STARTWISE brings both together: a Luxembourg company that builds products and structures its clients' capital, from the idea to growth.",
      },
    ],
    entity: {
      entity: "Entity",
      rcs: "Trade register",
      tva: "VAT number",
      seat: "Registered office",
      cta: "Start a conversation",
    },
  },

  solutions: {
    eyebrow: "Products & services",
    title: "Two practices, one standard of excellence.",
    intro:
      "A studio that builds digital products, and financial & advisory expertise serving executives and investors.",
    productsEyebrow: "The studio",
    productsTitle: "Our digital products",
    productsIntro:
      "Clean, effective software built around the real needs of Luxembourg companies.",
    ctaEyebrow: "Let's talk",
    ctaTitle: "A specific need, or simply a question?",
    ctaButton: "Get in touch",
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your project.",
    intro:
      "A company to create, a financing to arrange, a portfolio to structure or a product to build — write to us and we'll get back to you quickly.",
    subjects: [
      "Digital products",
      "Real-estate financing",
      "Fundraising",
      "Portfolio analysis",
      "Advisory & support",
      "Other",
    ],
    labelEmail: "Email",
    labelAddress: "Address",
    labelEntity: "Entity",
    note: "STARTWISE mainly serves executives, entrepreneurs and investors in Luxembourg and the Greater Region. Every request is handled confidentially.",
    fieldName: "Full name",
    fieldCompany: "Company (optional)",
    fieldSubject: "Subject",
    fieldMessage: "Your message",
    placeholder: "Describe your project or your question…",
    send: "Send message",
    disclaimer:
      "This form opens your email client pre-filled — no data is stored on this site.",
    mailName: "Name",
    mailCompany: "Company",
    mailSubject: "Subject",
  },

  legal: {
    eyebrow: "Legal information",
    title: "Legal notice",
    editorTitle: "Site publisher",
    editorIntro1: "This site is published by ",
    editorIntro2: ", a limited liability company under Luxembourg law.",
    seat: "Registered office: ",
    vat: "VAT number: ",
    email: "Email: ",
    capital: "Share capital: €12,000",
    permit:
      "Business permit (Ministry of the Economy): no. 10156858 / 0.",
    dirTitle: "Publication director",
    dirBody:
      "The publication director is Marc Gérard, sole manager of STARTWISE S.à r.l.",
    hostTitle: "Hosting",
    hostBody:
      "The site is hosted by Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA — which ensures the distribution and availability of the site.",
    ipTitle: "Intellectual property",
    ipBody1:
      "All elements of the site (texts, visuals, logos, graphic identity and code) are the property of STARTWISE S.à r.l. or its partners, and are protected by the applicable intellectual-property laws. Any reproduction or representation, in whole or in part, without prior authorisation is prohibited.",
    ipBody2:
      "LETZSETUP and OWNSET are names designating products and services published by STARTWISE S.à r.l.",
    dataTitle: "Personal data",
    dataBody1a:
      "The data you send us via the contact form (opened in your email client) is used solely to answer your request. In accordance with the General Data Protection Regulation (GDPR) and applicable Luxembourg law, you have a right to access, rectify and delete your data, which you can exercise at ",
    dataBody2: "This site does not set any advertising tracking cookies.",
    dataBody3:
      "STARTWISE S.à r.l. acts as data controller. You also have the right to lodge a complaint with the Commission nationale pour la protection des données (CNPD), the Luxembourg supervisory authority.",
    regTitle: "Regulatory status",
    regBody:
      "STARTWISE S.à r.l. is not an authorised financial-sector professional (PSF) and is neither licensed nor supervised by the Commission de Surveillance du Secteur Financier (CSSF). It does not provide regulated investment services or portfolio management within the meaning of financial regulation; its services consist of advisory, support and introductions.",
    natureTitle: "Nature of the information",
    natureBody:
      "The information presented on this site is general and informational in nature. It constitutes neither investment advice nor a personalised financial or legal recommendation. Every engagement is governed by a specific contractual framework.",
    respTitle: "Liability",
    respBody:
      "STARTWISE S.à r.l. strives to ensure the accuracy of the information published but cannot be held liable for errors, omissions or the unavailability of the site. Links to third-party sites are provided for convenience; STARTWISE S.à r.l. exercises no control over their content.",
    lawTitle: "Governing law",
    lawBody:
      "This site and its legal notice are governed by Luxembourg law. Any dispute falls under the jurisdiction of the courts of the Grand Duchy of Luxembourg.",
    updated: "Last updated: ",
    locale: "en-GB",
  },

  notfound: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or has been moved.",
    back: "Back to home",
  },

  meta: {
    home: {
      title: "Investment, advisory & technology · Luxembourg",
      desc: "STARTWISE S.à r.l. — a Luxembourg company that builds digital products and supports founders and investors: real-estate financing, fundraising, portfolio analysis and advisory.",
    },
    about: {
      title: "About",
      desc: "The company behind the products and the capital: STARTWISE brings together a digital-product studio and expertise in financing, investment and advisory in Luxembourg.",
    },
    solutions: {
      title: "Products & services",
      desc: "STARTWISE's digital-product studio (LETZSETUP, OWNSET, Compta) and its expertises: real-estate financing, fundraising, portfolio analysis and advisory.",
    },
    contact: {
      title: "Contact",
      desc: "Let's talk about your project: a company to create, a financing to arrange, a portfolio to structure or a product to build. Write to STARTWISE.",
    },
    legal: { title: "Legal notice", desc: "Legal notice of STARTWISE S.à r.l." },
    notfound: { title: "Page not found" },
  },
};

export const translations: Record<Lang, Dict> = { fr, en };

/* ------------------------------------------------------------------ */
/*  Contexte                                                           */
/* ------------------------------------------------------------------ */
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LanguageContext = createContext<Ctx | null>(null);

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  if (typeof navigator !== "undefined" && navigator.language) {
    return navigator.language.toLowerCase().startsWith("en") ? "en" : "fr";
  }
  return "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang: setLangState, t: translations[lang] }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
