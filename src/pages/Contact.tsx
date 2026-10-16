import { useState, type FormEvent } from "react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { SITE } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const SUBJECTS = [
  "Produits numériques",
  "Financement immobilier",
  "Levée de fonds",
  "Gestion de portefeuille",
  "Conseil & accompagnement",
  "Autre",
];

export default function Contact() {
  usePageMeta(
    "Contact",
    "Parlons de votre projet : société à créer, financement à monter, portefeuille à structurer ou produit à construire. Écrivez à STARTWISE."
  );
  const [subject, setSubject] = useState(SUBJECTS[0]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");
    const body = [
      `Nom : ${name}`,
      company && `Société : ${company}`,
      `Sujet : ${subject}`,
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
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet."
        intro="Une société à créer, un financement à monter, un portefeuille à structurer ou un produit à construire — écrivez-nous, nous revenons vers vous rapidement."
      />

      <section className="pb-28 pt-12">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Coordonnées */}
          <Reveal>
            <div className="space-y-10">
              <ContactLine
                label="Email"
                value={SITE.email}
                href={`mailto:${SITE.email}`}
              />
              <ContactLine label="Adresse" value={SITE.address} />
              <ContactLine label="Entité" value={SITE.legalName} sub={SITE.rcs} />

              <div className="rounded-2xl border border-cream/10 bg-ink-800/50 p-7">
                <p className="text-pretty text-sm leading-relaxed text-cream/60">
                  STARTWISE accompagne principalement une clientèle de dirigeants,
                  d'entrepreneurs et d'investisseurs au Luxembourg et en Grande
                  Région. Chaque demande est traitée de manière confidentielle.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-cream/10 bg-ink-800/50 p-7 sm:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Nom complet" name="name" required />
                <Field label="Société (optionnel)" name="company" />
              </div>

              <div className="mt-6">
                <label className="block text-xs uppercase tracking-[0.2em] text-cream/45">
                  Sujet
                </label>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {SUBJECTS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSubject(s)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                        subject === s
                          ? "border-gold-500 bg-gold-500/10 text-gold-200"
                          : "border-cream/15 text-cream/60 hover:border-cream/35"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-[0.2em] text-cream/45"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-3 w-full resize-none rounded-xl border border-cream/15 bg-ink-900 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold-500/60 focus:outline-none"
                  placeholder="Décrivez votre projet ou votre question…"
                />
              </div>

              <button
                type="submit"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_8px_30px_-8px] hover:shadow-gold-500/50 sm:w-auto"
              >
                Envoyer le message
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
              <p className="mt-4 text-xs text-cream/40">
                Ce formulaire ouvre votre messagerie pré-remplie — aucune donnée
                n'est stockée sur ce site.
              </p>
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
      <p className="text-xs uppercase tracking-[0.22em] text-cream/40">{label}</p>
      {href ? (
        <a
          href={href}
          className="mt-2 block font-display text-2xl text-cream transition hover:text-gold-300"
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 font-display text-2xl text-cream">{value}</p>
      )}
      {sub && <p className="mt-1 text-sm text-cream/45">{sub}</p>}
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
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.2em] text-cream/45"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        className="mt-3 w-full rounded-xl border border-cream/15 bg-ink-900 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold-500/60 focus:outline-none"
      />
    </div>
  );
}
