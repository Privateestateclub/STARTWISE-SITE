import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { Button, SectionHeading } from "../components/ui";
import { SITE } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

const VALUES = [
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
];

const TIMELINE = [
  {
    phase: "Le constat",
    body: "Créer une société au Luxembourg, la financer et la structurer restait fragmenté entre une multitude d'intervenants. Il manquait une maison capable de relier le tout.",
  },
  {
    phase: "Le studio",
    body: "Nous avons commencé par le logiciel, avec LETZSETUP pour la création de sociétés, puis une feuille de route de produits complémentaires (Ownset, Compta).",
  },
  {
    phase: "La maison",
    body: "Autour du studio, nous avons structuré un pôle de services financiers et de conseil : financement immobilier, levée de fonds, gestion de portefeuille, accompagnement des dirigeants.",
  },
  {
    phase: "Aujourd'hui",
    body: "STARTWISE réunit les deux : une maison luxembourgeoise qui conçoit des produits et structure le capital de ses clients, de l'idée jusqu'à la croissance.",
  },
];

export default function About() {
  usePageMeta(
    "À propos",
    "La maison derrière les produits et le capital : STARTWISE réunit un studio de produits numériques et une expertise en financement, investissement et conseil au Luxembourg."
  );
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title={
          <>
            La maison derrière
            <br /> les produits et le capital.
          </>
        }
        intro={`${SITE.legalName} est un groupe luxembourgeois qui réunit un studio de produits numériques et une expertise en financement, investissement et conseil.`}
      />

      {/* Mission */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading eyebrow="Notre mission" title="Donner aux dirigeants les moyens de bâtir, financer et faire durer." />
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-pretty leading-relaxed text-cream/65">
              <p>
                Nous croyons qu'entreprendre ne devrait pas s'arrêter à la
                création d'une société. Les vraies questions arrivent ensuite :
                comment financer sa croissance, structurer son patrimoine, lever
                des fonds, choisir les bons partenaires bancaires.
              </p>
              <p>
                STARTWISE a été pensée comme la maison qui relie ces mondes. D'un
                côté, un studio qui construit des produits numériques sobres et
                efficaces. De l'autre, une expertise financière et de conseil au
                service des dirigeants et des investisseurs.
              </p>
              <p>
                Le tout avec l'exigence, la discrétion et l'ancrage
                luxembourgeois qui inspirent confiance aux clients comme aux
                partenaires — banques, notaires et institutionnels.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valeurs */}
      <section className="border-y border-cream/10 bg-ink-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Nos valeurs" title="Ce qui guide chaque décision" />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 80}>
                <div className="flex h-full flex-col bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800">
                  <h3 className="text-xl text-cream">{v.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/60">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire / timeline */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Notre histoire" title="Du logiciel à la maison d'investissement" />
          </Reveal>
          <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-cream/10">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.phase} delay={i * 70}>
                <li className="grid gap-4 bg-ink-900 p-8 transition-colors duration-500 hover:bg-ink-800 sm:grid-cols-[0.3fr_1fr] sm:items-baseline sm:p-10">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm text-gold-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl text-cream">{t.phase}</h3>
                  </div>
                  <p className="text-pretty leading-relaxed text-cream/65">
                    {t.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Entité légale */}
      <section className="border-t border-cream/10 bg-ink-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="grid gap-8 rounded-2xl border border-cream/10 bg-ink-900 p-8 sm:grid-cols-2 sm:p-12 lg:grid-cols-4">
              <Info label="Entité" value={SITE.legalName} />
              <Info label="Registre de commerce" value={SITE.rcs} />
              <Info label="TVA intracommunautaire" value={`TVA ${SITE.tva}`} />
              <Info label="Siège" value={SITE.address} />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <Button to="/contact">Entrer en relation</Button>
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
      <p className="text-xs uppercase tracking-[0.22em] text-cream/40">{label}</p>
      <p className="mt-2 text-cream/85">{value}</p>
    </div>
  );
}
