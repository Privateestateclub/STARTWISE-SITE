import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Button, Eyebrow, SectionHeading } from "../components/ui";
import { PRODUCTS, SERVICES, STATS, SITE } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "Investissement, conseil & technologie · Luxembourg",
    "STARTWISE S.à r.l. — maison luxembourgeoise qui conçoit des produits numériques et accompagne dirigeants et investisseurs : financement immobilier, levée de fonds, gestion de portefeuille et conseil."
  );
  return (
    <>
      <Hero />
      <Positioning />
      <Studio />
      <Expertises />
      <Approach />
      <CtaBand />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pt-44">
      {/* halo lumineux */}
      <div
        className="absolute left-1/2 top-[-18rem] -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]"
        aria-hidden="true"
      />
      {/* grille fine */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ede8dd 1px, transparent 1px), linear-gradient(to bottom, #ede8dd 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 25%, black, transparent 75%)",
        }}
      />
      <div className="grain absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Groupe luxembourgeois · investissement · conseil · technologie</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl text-balance text-[2.7rem] leading-[1.02] sm:text-[4rem] md:text-[5rem]">
            Nous bâtissons des{" "}
            <span className="text-gold-grad">sociétés</span>,
            <br className="hidden sm:block" /> du{" "}
            <span className="italic text-gold-grad">capital</span> et des{" "}
            <span className="text-gold-grad">produits</span>.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-cream/70">
            {SITE.legalName} est une maison luxembourgeoise qui conçoit des
            produits numériques et accompagne dirigeants et investisseurs : du
            financement immobilier à la levée de fonds, de la gestion de
            portefeuille au conseil stratégique.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button to="/produits-services">Découvrir le groupe</Button>
            <Button to="/contact" variant="ghost">
              Prendre contact
            </Button>
          </div>
        </Reveal>

        {/* Bandeau statistiques */}
        <Reveal delay={320}>
          <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-cream/10 pt-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl text-cream sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-cream/50">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Positionnement                                                     */
/* ------------------------------------------------------------------ */
function Positioning() {
  return (
    <section className="relative border-y border-cream/10 bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="La maison"
            title={
              <>
                Une seule maison,
                <br /> deux manières de créer de la valeur.
              </>
            }
          />
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-cream/65">
            STARTWISE réunit un <span className="text-cream">studio de produits</span>{" "}
            numériques et un pôle de{" "}
            <span className="text-cream">services financiers et de conseil</span>.
            D'un côté, nous construisons des logiciels qui simplifient la vie des
            entreprises. De l'autre, nous structurons leur capital, leur
            financement et leur croissance.
          </p>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-cream/65">
            Chaque produit garde son nom et sa marque ; STARTWISE en est la
            colonne vertébrale — l'exigence, le réseau et le savoir-faire
            financier.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <figure className="relative rounded-2xl border border-cream/10 bg-gradient-to-br from-ink-800 to-ink-900 p-9 sm:p-12">
            <div className="hairline absolute inset-x-8 top-0 h-px" aria-hidden="true" />
            <svg
              viewBox="0 0 24 24"
              className="h-9 w-9 text-gold-500/50"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.5 4C6.5 5.6 4.5 8.8 4.5 12.4V20h7v-7.6H8c0-2.4 1.2-4.4 3.4-5.6L9.5 4zm9 0c-3 1.6-5 4.8-5 8.4V20h7v-7.6H16c0-2.4 1.2-4.4 3.4-5.6L18.5 4z" />
            </svg>
            <blockquote className="mt-6 font-display text-2xl leading-snug text-cream/90 sm:text-[1.75rem]">
              « Nous n'aidons pas seulement à démarrer une entreprise — nous
              l'aidons à se structurer, se financer et durer. »
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3 text-sm text-cream/50">
              <span className="h-px w-8 bg-gold-500/60" />
              La conviction STARTWISE
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Studio — produits numériques                                       */
/* ------------------------------------------------------------------ */
function Studio() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Le studio"
            title="Les produits que nous construisons"
            intro="Des logiciels pensés pour les entrepreneurs et les sociétés luxembourgeoises, du premier jour à la gestion quotidienne."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProductCard product={PRODUCTS[i]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  const dot =
    product.status === "live"
      ? "bg-emerald-400"
      : product.status === "soon"
        ? "bg-gold-400"
        : "bg-cream/40";

  const Wrapper = ({ children }: { children: ReactNode }) =>
    product.href ? (
      <a
        href={product.href}
        target="_blank"
        rel="noreferrer"
        className="group block h-full"
      >
        {children}
      </a>
    ) : (
      <Link to="/produits-services" className="group block h-full">
        {children}
      </Link>
    );

  return (
    <Wrapper>
      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-ink-800/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-ink-800">
        <div className="hairline absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-cream/45">
            {product.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-cream/55">
            <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
            {product.statusLabel}
          </span>
        </div>

        <h3 className="mt-7 font-display text-3xl text-cream">{product.name}</h3>
        <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-cream/60">
          {product.blurb}
        </p>

        <span className="mt-7 inline-flex items-center gap-2 text-sm text-gold-300">
          {product.href ? "Visiter le site" : "En savoir plus"}
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </article>
    </Wrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  Expertises — services financiers & conseil                         */
/* ------------------------------------------------------------------ */
function Expertises() {
  return (
    <section className="relative overflow-hidden border-y border-cream/10 bg-forest-700/25 py-24 sm:py-32">
      <div
        className="absolute right-[-10rem] top-[-6rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-forest-500/20 blur-[120px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Les expertises"
            title="Financement, capital & conseil"
            intro="Au-delà du logiciel, STARTWISE accompagne dirigeants et investisseurs sur les décisions qui engagent l'avenir de leur patrimoine et de leur entreprise."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 90}>
              <div className="flex h-full flex-col bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800 sm:p-10">
                <span className="font-display text-sm text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-pretty text-2xl text-cream">{s.title}</h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-cream/60">
                  {s.summary}
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-cream/70">
                  {s.points.slice(0, 3).map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-gold-500" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10">
            <Button to="/produits-services" variant="ghost">
              Voir tous les services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Approche                                                           */
/* ------------------------------------------------------------------ */
const PRINCIPLES = [
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
];

function Approach() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Notre approche"
            title="Ce qui nous distingue"
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="relative pl-6">
                <span className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-gold-500/70 to-transparent" />
                <h3 className="text-xl text-cream">{p.title}</h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-cream/60">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                */
/* ------------------------------------------------------------------ */
function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/25 bg-gradient-to-br from-ink-800 via-ink-900 to-forest-700/40 px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="grain absolute inset-0" aria-hidden="true" />
            <div
              className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-gold-500/15 blur-[90px]"
              aria-hidden="true"
            />
            <div className="relative">
              <Eyebrow>Travaillons ensemble</Eyebrow>
              <h2 className="mx-auto mt-6 max-w-2xl text-balance text-[2rem] leading-tight sm:text-[2.8rem]">
                Un projet, un financement ou une idée à structurer ?
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-pretty leading-relaxed text-cream/65">
                Parlons de votre société, de votre portefeuille ou du produit que
                vous voulez construire.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button to="/contact">Nous contacter</Button>
                <Button to="/a-propos" variant="ghost">
                  En savoir plus sur STARTWISE
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
