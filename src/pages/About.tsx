import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Button, SectionHeading } from "../components/ui";
import { SITE } from "../data/site";
import { useLang } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  usePageMeta(t.meta.about.title, t.meta.about.desc);

  return (
    <>
      <PageHeader eyebrow={a.eyebrow} title={a.title} intro={a.intro} />

      {/* Mission */}
      <section className="bg-paper-100 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading eyebrow={a.missionEyebrow} title={a.missionTitle} />
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-pretty leading-relaxed text-stone-500">
              {a.missionBody.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valeurs — section sombre */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 sm:py-28">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading onDark eyebrow={a.valuesEyebrow} title={a.valuesTitle} />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper-200/10 bg-paper-200/10 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 80}>
                <div className="flex h-full flex-col bg-ink-950 p-8 transition-colors duration-500 hover:bg-ink-800">
                  <h3 className="text-xl text-paper-50">{v.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-paper-200/65">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire / timeline */}
      <section className="bg-paper-100 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow={a.historyEyebrow} title={a.historyTitle} />
          </Reveal>
          <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10">
            {a.timeline.map((it, i) => (
              <Reveal key={it.phase} delay={i * 70}>
                <li className="grid gap-4 bg-paper-50 p-8 transition-colors duration-500 hover:bg-paper-200/60 sm:grid-cols-[0.3fr_1fr] sm:items-baseline sm:p-10">
                  <div className="flex items-baseline gap-4">
                    <span className="label font-display text-base text-pine-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl text-ink-900">
                      {it.phase}
                    </h3>
                  </div>
                  <p className="text-pretty leading-relaxed text-stone-500">
                    {it.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Entité légale */}
      <section className="bg-paper-200/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-8 rounded-2xl border border-ink-900/10 bg-paper-50 p-8 sm:grid-cols-2 sm:p-12 lg:grid-cols-4">
              <Info label={a.entity.entity} value={SITE.legalName} />
              <Info label={a.entity.rcs} value={SITE.rcs} />
              <Info label={a.entity.tva} value={`TVA ${SITE.tva}`} />
              <Info label={a.entity.seat} value={SITE.address} />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <Button to="/contact">{a.entity.cta}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="label text-stone-500">{label}</p>
      <p className="mt-2 text-ink-900">{value}</p>
    </div>
  );
}
