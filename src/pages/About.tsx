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
    body: "Créer une société au Luxembourg, la financer et la structurer restait fragmenté entre une multitude d'intervenants. Il manquait un acteur capable de relier le tout.",
  },
  {
    phase: "Le studio",
    body: "Nous avons commencé par le logiciel, avec LETZSETUP pour la création de sociétés, rejoint par OWNSET, aujourd'hui opérationnel, et le projet Compta.",
  },
  {
    phase: "La société",
    body: "Autour du studio, nous avons structuré un pôle de services financiers et de conseil : financement immobilier, levée de fonds, gestion de portefeuille, accompagnement des dirigeants.",
  },
  {
    phase: "Aujourd'hui",
    body: "STARTWISE réunit les deux : une société luxembourgeoise qui conçoit des produits et structure le capital de ses clients, de l'idée jusqu'à la croissance.",
  },
];

export default function About() {
  usePageMeta(
    "À propos",
    "La société derrière les produits et le capital : STARTWISE réunit un studio de produits numériques et une expertise en financement, investissement et conseil au Luxembourg."
  );
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title={
          <>
            La société derrière
            <br /> les produits et le capital.
          </>
        }
        intro={`${SITE.legalName} est une société luxembourgeoise qui réunit un studio de produits numériques et une expertise en financement, investissement et conseil.`}
      />

      {/* Mission */}
      <section className="bg-paper-100 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Notre mission"
              title="Donner aux dirigeants les moyens de bâtir, financer et faire durer."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-pretty leading-relaxed text-stone-500">
              <p>
                Nous croyons qu'entreprendre ne devrait pas s'arrêter à la
                création d'une société. Les vraies questions arrivent ensuite :
                comment financer sa croissance, structurer son patrimoine, lever
                des fonds, choisir les bons partenaires bancaires.
              </p>
              <p>
                STARTWISE a été pensée comme le trait d'union entre ces mondes. D'un
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

      {/* Valeurs — section sombre */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-paper-100 sm:py-28">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading onDark eyebrow="Nos valeurs" title="Ce qui guide chaque décision" />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper-200/10 bg-paper-200/10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
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
            <SectionHeading eyebrow="Notre histoire" title="Du logiciel à l'investissement" />
          </Reveal>
          <ol className="mt-14 space-y-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.phase} delay={i * 70}>
                <li className="grid gap-4 bg-paper-50 p-8 transition-colors duration-500 hover:bg-paper-200/60 sm:grid-cols-[0.3fr_1fr] sm:items-baseline sm:p-10">
                  <div className="flex items-baseline gap-4">
                    <span className="label font-display text-base text-pine-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl text-ink-900">{t.phase}</h3>
                  </div>
                  <p className="text-pretty leading-relaxed text-stone-500">
                    {t.body}
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
      <p className="label text-stone-500">{label}</p>
      <p className="mt-2 text-ink-900">{value}</p>
    </div>
  );
}
