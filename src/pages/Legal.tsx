import type { ReactNode } from "react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { SITE } from "../data/site";
import { useLang } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Legal() {
  const { t } = useLang();
  const l = t.legal;
  usePageMeta(t.meta.legal.title, t.meta.legal.desc);

  const mail = (
    <a
      href={`mailto:${SITE.email}`}
      className="text-pine-700 transition hover:text-pine-600"
    >
      {SITE.email}
    </a>
  );

  return (
    <>
      <PageHeader eyebrow={l.eyebrow} title={l.title} />

      <section className="bg-paper-100 pb-28 pt-8">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="space-y-12 text-pretty leading-relaxed text-stone-600">
              <Block title={l.editorTitle}>
                <p>
                  {l.editorIntro1}
                  <strong className="font-medium text-ink-900">
                    {SITE.legalName}
                  </strong>
                  {l.editorIntro2}
                </p>
                <ul className="mt-4 space-y-1.5">
                  <li>
                    {l.seat}
                    {SITE.address}
                  </li>
                  <li>{SITE.rcs}</li>
                  <li>{l.capital}</li>
                  <li>
                    {l.vat}LU {SITE.tva.replace(/^LU/, "")}
                  </li>
                  <li>{l.permit}</li>
                  <li>
                    {l.email}
                    {mail}
                  </li>
                </ul>
              </Block>

              <Block title={l.dirTitle}>
                <p>{l.dirBody}</p>
              </Block>

              <Block title={l.hostTitle}>
                <p>{l.hostBody}</p>
              </Block>

              <Block title={l.ipTitle}>
                <p>{l.ipBody1}</p>
                <p className="mt-3">{l.ipBody2}</p>
              </Block>

              <Block title={l.dataTitle}>
                <p>
                  {l.dataBody1a}
                  {mail}.
                </p>
                <p className="mt-3">{l.dataBody2}</p>
                <p className="mt-3">{l.dataBody3}</p>
              </Block>

              <Block title={l.regTitle}>
                <p>{l.regBody}</p>
              </Block>

              <Block title={l.natureTitle}>
                <p>{l.natureBody}</p>
              </Block>

              <Block title={l.respTitle}>
                <p>{l.respBody}</p>
              </Block>

              <Block title={l.lawTitle}>
                <p>{l.lawBody}</p>
              </Block>

              <p className="border-t border-ink-900/10 pt-8 text-sm text-stone-400">
                {l.updated}
                {new Date().toLocaleDateString(l.locale, {
                  year: "numeric",
                  month: "long",
                })}
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-ink-900">{title}</h2>
      <div className="mt-4 space-y-2">{children}</div>
    </div>
  );
}
