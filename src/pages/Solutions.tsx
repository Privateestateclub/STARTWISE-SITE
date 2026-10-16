import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Button, SectionHeading } from "../components/ui";
import { PRODUCTS, SERVICES } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Solutions() {
  usePageMeta(
    "Produits & services",
    "Le studio de produits numériques de STARTWISE (LETZSETUP, Ownset, Compta) et ses expertises : financement immobilier, levée de fonds, gestion de portefeuille et conseil."
  );
  return (
    <>
      <PageHeader
        eyebrow="Produits & services"
        title={
          <>
            Deux pôles,
            <br /> un même niveau d'exigence.
          </>
        }
        intro="Un studio qui construit des produits numériques, et une expertise financière et de conseil au service des dirigeants et des investisseurs."
      />

      {/* Produits */}
      <section className="bg-paper-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Le studio"
              title="Nos produits numériques"
              intro="Des logiciels sobres et efficaces, conçus autour des besoins réels des sociétés luxembourgeoises."
            />
          </Reveal>

          <div className="mt-14 space-y-6">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <article className="group grid gap-6 rounded-2xl border border-ink-900/10 bg-paper-50 p-8 transition-all duration-500 hover:border-pine-600/40 hover:shadow-[0_20px_50px_-28px] hover:shadow-ink-900/40 sm:grid-cols-[0.8fr_1.5fr_auto] sm:items-center sm:p-10">
                  <div>
                    <span className="label inline-flex items-center gap-1.5 text-stone-500">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          p.status === "live"
                            ? "bg-pine-500"
                            : p.status === "soon"
                              ? "bg-stone-400"
                              : "bg-stone-300"
                        }`}
                      />
                      {p.statusLabel}
                    </span>
                    <h3 className="mt-3 font-display text-3xl text-ink-900">
                      {p.name}
                    </h3>
                    <p className="label mt-2 text-stone-500">{p.category}</p>
                  </div>

                  <p className="text-pretty leading-relaxed text-stone-500">
                    {p.description}
                  </p>

                  <div className="sm:justify-self-end">
                    {p.href ? (
                      <Button href={p.href} variant="ghost">
                        Visiter
                      </Button>
                    ) : (
                      <span className="label inline-flex rounded-full border border-ink-900/12 px-5 py-3 text-stone-500">
                        {p.statusLabel}
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services — section verte */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 sm:py-28">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              onDark
              eyebrow="Les expertises"
              title="Financement, capital & conseil"
              intro="Nous accompagnons dirigeants et investisseurs sur les décisions structurantes, avec la rigueur et le réseau d'un acteur financier luxembourgeois."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-paper-200/12 bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800 sm:p-10">
                  <div className="flex items-center gap-4">
                    <span className="label flex h-10 w-10 flex-none items-center justify-center rounded-full border border-pine-400/40 font-display text-base text-pine-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-pretty text-2xl text-paper-50">{s.title}</h3>
                  </div>
                  <p className="mt-5 text-pretty leading-relaxed text-paper-200/70">
                    {s.summary}
                  </p>
                  <ul className="mt-6 grid gap-2.5 text-sm text-paper-200/85 sm:grid-cols-2">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-pine-400" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper-100 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Discutons"
              title="Un besoin précis, ou simplement une question ?"
              align="center"
              className="mx-auto"
            />
            <div className="mt-10 flex justify-center">
              <Button to="/contact">Prendre contact</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
