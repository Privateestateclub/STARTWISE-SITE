import { useState, type FormEvent } from "react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { SITE } from "../data/site";
import { useLang } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  usePageMeta(t.meta.contact.title, t.meta.contact.desc);
  const [subject, setSubject] = useState(c.subjects[0]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const body = [
      `${c.mailName} : ${name}`,
      company && `${c.mailCompany} : ${company}`,
      `${c.mailSubject} : ${subject}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `[Contact] ${subject}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <section className="bg-paper-100 pb-28 pt-12">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Coordonnées */}
          <Reveal>
            <div className="space-y-10">
              <ContactLine
                label={c.labelEmail}
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactLine label={c.labelAddress} value={SITE.address} />
              <ContactLine
                label={c.labelEntity}
                value={SITE.legalName}
                sub={SITE.rcs}
              />

              <div className="rounded-2xl border border-ink-900/10 bg-paper-50 p-7">
                <p className="text-pretty text-sm leading-relaxed text-stone-500">
                  {c.note}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-ink-900/10 bg-paper-50 p-7 sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label={c.fieldName} name="name" required />
                <Field label={c.fieldCompany} name="company" />
              </div>

              <div className="mt-6">
                <span className="label text-stone-500">{c.fieldSubject}</span>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {c.subjects.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSubject(item)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                        subject === item
                          ? "border-ink-900 bg-ink-900 text-paper-50"
                          : "border-ink-900/15 text-stone-500 hover:border-ink-900/35"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="label text-stone-500">
                  {c.fieldMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-3 w-full resize-none rounded-xl border border-ink-900/15 bg-paper-100 px-4 py-3 text-sm text-ink-900 placeholder:text-stone-400 focus:border-pine-600 focus:outline-none focus:ring-1 focus:ring-pine-600/40"
                  placeholder={c.placeholder}
                />
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-paper-50 transition-all duration-300 hover:bg-ink-700 hover:shadow-[0_10px_30px_-12px] hover:shadow-ink-900/50 sm:w-auto"
              >
                {c.send}
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
              </button>
              <p className="mt-4 text-xs text-stone-400">{c.disclaimer}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactLine({
  label,
  value,
  sub,
  href,
}: {
  label: string;
  value: string;
  sub?: string;
  href?: string;
}) {
  return (
    <div>
      <p className="label text-stone-500">{label}</p>
      {href ? (
        <a
          href={href}
          className="mt-2 block font-display text-2xl text-ink-900 transition hover:text-pine-700"
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 font-display text-2xl text-ink-900">{value}</p>
      )}
      {sub && <p className="mt-1 text-sm text-stone-400">{sub}</p>}
    </div>
  );
}

function Field({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="label text-stone-500">
        {label}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        className="mt-3 w-full rounded-xl border border-ink-900/15 bg-paper-100 px-4 py-3 text-sm text-ink-900 placeholder:text-stone-400 focus:border-pine-600 focus:outline-none focus:ring-1 focus:ring-pine-600/40"
      />
    </div>
  );
}
