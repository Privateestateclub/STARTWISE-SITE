import type { ReactNode } from "react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { SITE } from "../data/site";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Legal() {
  usePageMeta("Mentions légales", "Mentions légales de STARTWISE S.à r.l.");
  return (
    <>
      <PageHeader eyebrow="Informations légales" title="Mentions légales" />

      <section className="bg-paper-100 pb-28 pt-8">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <div className="space-y-12 text-pretty leading-relaxed text-stone-600">
              <Block title="Éditeur du site">
                <p>
                  Le présent site est édité par{" "}
                  <strong className="font-medium text-ink-900">
                    {SITE.legalName}
                  </strong>
                  , société à responsabilité limitée de droit luxembourgeois.
                </p>
                <ul className="mt-4 space-y-1.5">
                  <li>Siège social : {SITE.address}</li>
                  <li>{SITE.rcs}</li>
                  <li>Numéro de TVA : LU {SITE.tva.replace(/^LU/, "")}</li>
                  <li>
                    Email :{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-pine-700 transition hover:text-pine-600"
                    >
                      {SITE.email}
                    </a>
                  </li>
                </ul>
              </Block>

              <Block title="Directeur de la publication">
                <p>
                  Le directeur de la publication est le représentant légal de{" "}
                  {SITE.legalName}.
                </p>
              </Block>

              <Block title="Hébergement">
                <p>
                  Le site est hébergé par Cloudflare, Inc., 101 Townsend Street,
                  San Francisco, CA 94107, États-Unis — qui assure la diffusion et
                  la mise à disposition du site.
                </p>
              </Block>

              <Block title="Propriété intellectuelle">
                <p>
                  L'ensemble des éléments du site (textes, visuels, logos, marques,
                  identité graphique et code) est la propriété de {SITE.legalName}{" "}
                  ou de ses partenaires, et est protégé par les lois en vigueur
                  relatives à la propriété intellectuelle. Toute reproduction ou
                  représentation, totale ou partielle, sans autorisation préalable
                  est interdite.
                </p>
                <p className="mt-3">
                  Les marques des produits du groupe (notamment LETZSETUP, Ownset)
                  restent la propriété de leurs titulaires respectifs.
                </p>
              </Block>

              <Block title="Données personnelles">
                <p>
                  Les données que vous nous transmettez via le formulaire de
                  contact (ouvert dans votre messagerie) sont utilisées uniquement
                  pour répondre à votre demande. Conformément au Règlement général
                  sur la protection des données (RGPD) et à la législation
                  luxembourgeoise applicable, vous disposez d'un droit d'accès, de
                  rectification et de suppression de vos données, exerçable à
                  l'adresse{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-pine-700 transition hover:text-pine-600"
                  >
                    {SITE.email}
                  </a>
                  .
                </p>
                <p className="mt-3">
                  Ce site ne dépose pas de cookies de suivi publicitaire.
                </p>
              </Block>

              <Block title="Nature de l'information">
                <p>
                  Les informations présentées sur ce site ont une vocation
                  générale et d'information. Elles ne constituent ni un conseil en
                  investissement, ni une recommandation financière ou juridique
                  personnalisée. Toute prestation fait l'objet d'un cadre
                  contractuel spécifique.
                </p>
              </Block>

              <Block title="Responsabilité">
                <p>
                  {SITE.legalName} s'efforce d'assurer l'exactitude des
                  informations diffusées mais ne saurait être tenue responsable des
                  erreurs, omissions ou de l'indisponibilité du site. Les liens vers
                  des sites tiers sont fournis à titre pratique ; {SITE.legalName}{" "}
                  n'exerce aucun contrôle sur leur contenu.
                </p>
              </Block>

              <Block title="Droit applicable">
                <p>
                  Le présent site et ses mentions légales sont régis par le droit
                  luxembourgeois. Tout litige relève de la compétence des
                  juridictions du Grand-Duché de Luxembourg.
                </p>
              </Block>

              <p className="border-t border-ink-900/10 pt-8 text-sm text-stone-400">
                Dernière mise à jour :{" "}
                {new Date().toLocaleDateString("fr-FR", {
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
