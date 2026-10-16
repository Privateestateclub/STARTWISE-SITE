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
      <section className="py-20 sm:py-28">
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
                <article className="group grid gap-6 rounded-2xl border border-cream/10 bg-ink-800/50 p-8 transition-all duration-500 hover:border-gold-500/35 hover:bg-ink-800 sm:grid-cols-[0.8fr_1.5fr_auto] sm:items-center sm:p-10">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-cream/45">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          p.status === "live"
                            ? "bg-emerald-400"
                            : p.status === "soon"
                              ? "bg-gold-400"
                              : "bg-cream/40"
                        }`}
                      />
                      {p.statusLabel}
                    </span>
                    <h3 className="mt-3 font-display text-3xl text-cream">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-gold-300/80">{p.category}</p>
                  </div>

                  <p className="text-pretty leading-relaxed text-cream/65">
                    {p.description}
                  </p>

                  <div className="sm:justify-self-end">
                    {p.href ? (
                      <Button href={p.href} variant="ghost">
                        Visiter
                      </Button>
                    ) : (
                      <span className="inline-flex rounded-full border border-cream/12 px-5 py-3 text-sm text-cream/45">
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

      {/* Services */}
      <section className="border-y border-cream/10 bg-forest-700/25 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Les expertises"
              title="Financement, capital & conseil"
              intro="Nous accompagnons dirigeants et investisseurs sur les décisions structurantes, avec la rigueur et le réseau d'un acteur financier luxembourgeois."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2) * 90}>
                <article className="flex h-full flex-col rounded-2xl border border-cream/10 bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800 sm:p-10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-gold-500/30 font-display text-sm text-gold-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-pretty text-2xl text-cream">{s.title}</h3>
                  </div>
                  <p className="mt-5 text-pretty leading-relaxed text-cream/65">
                    {s.summary}
                  </p>
                  <ul className="mt-6 grid gap-2.5 text-sm text-cream/70 sm:grid-cols-2">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-gold-500" />
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
      <section className="py-24 sm:py-28">
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
