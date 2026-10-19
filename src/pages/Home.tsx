import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { Amp, Button, Eyebrow, SectionHeading } from "../components/ui";
import { PRODUCTS, SERVICES, STATS, SITE } from "../data/site";
import { ProductMark } from "../components/ProductMark";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "Investissement, conseil & technologie · Luxembourg",
    "STARTWISE S.à r.l. — société luxembourgeoise qui conçoit des produits numériques et accompagne dirigeants et investisseurs : financement immobilier, levée de fonds, gestion de portefeuille et conseil."
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
      {/* grille fine éditoriale */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.6]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,20,18,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,20,18,0.05) 1px, transparent 1px)",
          backgroundSize: "92px 92px",
          maskImage:
            "radial-gradient(ellipse 85% 65% at 50% 20%, black, transparent 78%)",
        }}
      />
      <div className="grain absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Société luxembourgeoise · investissement · conseil · technologie</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 max-w-4xl text-balance text-[2.7rem] leading-[1.02] text-ink-900 sm:text-[4rem] md:text-[5rem]">
            Nous bâtissons des sociétés,
            <br className="hidden sm:block" /> du{" "}
            <span className="italic">capital</span> et des produits.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-stone-500">
            {SITE.legalName} est une société luxembourgeoise qui conçoit des
            produits numériques et accompagne dirigeants et investisseurs : du
            financement immobilier à la levée de fonds, de la gestion de
            portefeuille au conseil stratégique.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button to="/produits-services">Découvrir STARTWISE</Button>
            <Button to="/contact" variant="ghost">
              Prendre contact
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink-900/10 pt-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl text-ink-900 sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm leading-snug text-stone-500">
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
/*  Positionnement — section sombre                                    */
/* ------------------------------------------------------------------ */
function Positioning() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-paper-100 sm:py-32">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            onDark
            eyebrow="La société"
            title={
              <>
                Une seule société,
                <br /> deux manières de créer de la valeur.
              </>
            }
          />
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-paper-200/70">
            STARTWISE réunit un{" "}
            <span className="text-paper-50">studio de produits</span> numériques
            et un pôle de{" "}
            <span className="text-paper-50">services financiers et de conseil</span>.
            D'un côté, nous construisons des logiciels qui simplifient la vie des
            entreprises. De l'autre, nous structurons leur capital, leur
            financement et leur croissance.
          </p>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-paper-200/70">
            Chaque produit garde son nom et sa marque ; STARTWISE en est la
            colonne vertébrale — l'exigence, le réseau et le savoir-faire
            financier.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <figure className="relative rounded-2xl border border-paper-200/12 bg-ink-800 p-9 sm:p-12">
            <span
              className="absolute inset-x-8 top-0 h-px bg-pine-500/50"
              aria-hidden="true"
            />
            <svg
              viewBox="0 0 24 24"
              className="h-9 w-9 text-paper-200/30"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.5 4C6.5 5.6 4.5 8.8 4.5 12.4V20h7v-7.6H8c0-2.4 1.2-4.4 3.4-5.6L9.5 4zm9 0c-3 1.6-5 4.8-5 8.4V20h7v-7.6H16c0-2.4 1.2-4.4 3.4-5.6L18.5 4z" />
            </svg>
            <blockquote className="mt-6 font-display text-2xl leading-snug text-paper-50 sm:text-[1.75rem]">
              « Nous n'aidons pas seulement à démarrer une entreprise — nous
              l'aidons à se structurer, se financer et durer. »
            </blockquote>
            <figcaption className="label mt-7 flex items-center gap-3 text-paper-200/50">
              <span className="h-px w-8 bg-pine-400/60" />
              La conviction STARTWISE
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Studio — produits numériques (clair)                               */
/* ------------------------------------------------------------------ */
function Studio() {
  return (
    <section className="bg-paper-100 py-24 sm:py-32">
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
      ? "bg-pine-500"
      : product.status === "soon"
        ? "bg-stone-400"
        : "bg-stone-300";

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
      <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-paper-50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-pine-600/40 hover:shadow-[0_20px_50px_-24px] hover:shadow-ink-900/30">
        <div className="flex items-center justify-between">
          <span className="label text-stone-500">{product.category}</span>
          <span className="label inline-flex items-center gap-1.5 text-stone-500">
            <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
            {product.statusLabel}
          </span>
        </div>

        <div className="mt-7 flex items-center gap-3">
          <ProductMark id={product.id} className="h-8 w-8 flex-none" />
          <h3 className="font-display text-3xl text-ink-900">{product.name}</h3>
        </div>
        <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-stone-500">
          {product.blurb}
        </p>

        <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink-900 transition-colors duration-300 group-hover:text-pine-700">
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
/*  Expertises — services financiers (section verte)                   */
/* ------------------------------------------------------------------ */
function Expertises() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-paper-100 sm:py-32">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            onDark
            eyebrow="Les expertises"
            title={<Amp>Financement, capital & conseil</Amp>}
            intro="Au-delà du logiciel, STARTWISE accompagne dirigeants et investisseurs sur les décisions qui engagent l'avenir de leur patrimoine et de leur entreprise."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper-200/10 bg-paper-200/10 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 90}>
              <div className="flex h-full flex-col bg-ink-950 p-8 transition-colors duration-500 hover:bg-ink-800 sm:p-10">
                <span className="label font-display text-base text-pine-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-pretty text-2xl text-paper-50">
                  <Amp>{s.title}</Amp>
                </h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-paper-200/70">
                  {s.summary}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-paper-200/85">
                  {s.points.slice(0, 3).map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span className="mt-2.5 h-px w-3.5 flex-none bg-pine-400/80" />
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
            <Button to="/produits-services" variant="ghost" onDark>
              Voir tous les services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Approche (clair)                                                   */
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
    <section className="bg-paper-100 py-24 sm:py-32">
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
                <span className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-pine-600 to-transparent" />
                <span className="label text-pine-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl text-ink-900">{p.title}</h3>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-stone-500">
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
/*  CTA — bande sombre                                                 */
/* ------------------------------------------------------------------ */
function CtaBand() {
  return (
    <section className="bg-paper-100">
      <div className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-8 py-16 text-center text-paper-100 sm:px-16 sm:py-20">
            <div className="grain absolute inset-0" aria-hidden="true" />
            <div
              className="absolute left-1/2 top-0 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-paper-100/10 blur-[100px]"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex justify-center">
                <Eyebrow onDark>Travaillons ensemble</Eyebrow>
              </div>
              <h2 className="mx-auto mt-6 max-w-2xl text-balance text-[2rem] leading-tight text-paper-50 sm:text-[2.8rem]">
                Un projet, un financement ou une idée à structurer ?
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-pretty leading-relaxed text-paper-200/70">
                Parlons de votre société, de votre portefeuille ou du produit que
                vous voulez construire.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button to="/contact" onDark>
                  Nous contacter
                </Button>
                <Button to="/a-propos" variant="ghost" onDark>
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
