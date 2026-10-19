import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Amp, Button, SectionHeading } from "../components/ui";
import { ProductMark } from "../components/ProductMark";
import { PRODUCTS, SERVICE_IDS } from "../data/site";
import { useLang } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Solutions() {
  const { t } = useLang();
  const s = t.solutions;
  usePageMeta(t.meta.solutions.title, t.meta.solutions.desc);

  return (
    <>
      <PageHeader eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

      {/* Produits */}
      <section className="bg-paper-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={s.productsEyebrow}
              title={s.productsTitle}
              intro={s.productsIntro}
            />
          </Reveal>

          <div className="mt-14 space-y-6">
            {PRODUCTS.map((product, i) => {
              const p = t.products[product.id];
              return (
                <Reveal key={product.id} delay={i * 80}>
                  <article className="group grid gap-6 rounded-2xl border border-ink-900/10 bg-paper-50 p-8 transition-all duration-500 hover:border-pine-600/40 hover:shadow-[0_20px_50px_-28px] hover:shadow-ink-900/40 sm:grid-cols-[0.8fr_1.5fr_auto] sm:items-center sm:p-10">
                    <div>
                      <span className="label inline-flex items-center gap-1.5 text-stone-500">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            product.status === "live"
                              ? "bg-pine-500"
                              : product.status === "soon"
                                ? "bg-stone-400"
                                : "bg-stone-300"
                          }`}
                        />
                        {t.status[product.status]}
                      </span>
                      <div className="mt-3 flex items-center gap-3">
                        <ProductMark id={product.id} className="h-8 w-8 flex-none" />
                        <h3 className="font-display text-3xl text-ink-900">
                          {p.name}
                        </h3>
                      </div>
                      <p className="label mt-2 text-stone-500">{p.category}</p>
                    </div>

                    <p className="text-pretty leading-relaxed text-stone-500">
                      {p.description}
                    </p>

                    <div className="sm:justify-self-end">
                      {product.href ? (
                        <Button href={product.href} variant="ghost">
                          {t.common.visit}
                        </Button>
                      ) : (
                        <span className="label inline-flex rounded-full border border-ink-900/12 px-5 py-3 text-stone-500">
                          {t.status[product.status]}
                        </span>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services — section sombre */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 sm:py-28">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              onDark
              eyebrow={t.expertises.eyebrow}
              title={<Amp>{t.expertises.title}</Amp>}
              intro={t.expertises.introSolutions}
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {SERVICE_IDS.map((id, i) => {
              const svc = t.services[id];
              return (
                <Reveal key={id} delay={(i % 2) * 90}>
                  <article className="flex h-full flex-col rounded-2xl border border-paper-200/12 bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800 sm:p-10">
                    <span className="label text-pine-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-5 text-pretty text-2xl leading-snug text-paper-50">
                      <Amp>{svc.title}</Amp>
                    </h3>
                    <p className="mt-4 text-pretty text-sm leading-relaxed text-paper-200/70">
                      {svc.summary}
                    </p>
                    <ul className="mt-7 space-y-3 border-t border-paper-200/10 pt-6 text-sm text-paper-200/85">
                      {svc.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <span className="mt-2.5 h-px w-3.5 flex-none bg-pine-400/80" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper-100 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow={s.ctaEyebrow}
              title={s.ctaTitle}
              align="center"
              className="mx-auto"
            />
            <div className="mt-10 flex justify-center">
              <Button to="/contact">{s.ctaButton}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
