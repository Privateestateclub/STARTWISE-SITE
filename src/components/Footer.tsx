import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SITE, NAV, PRODUCTS } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-ink-950">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/55">
              {SITE.baseline} Une maison luxembourgeoise qui conçoit des produits
              et structure le capital, le financement et la croissance.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-cream/40">
              Naviguer
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/" className="text-cream/70 transition hover:text-gold-300">
                  Accueil
                </Link>
              </li>
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-cream/70 transition hover:text-gold-300"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-cream/40">
              Le groupe
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {PRODUCTS.map((p) =>
                p.href ? (
                  <li key={p.id}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cream/70 transition hover:text-gold-300"
                    >
                      {p.name} ↗
                    </a>
                  </li>
                ) : (
                  <li key={p.id} className="text-cream/70">
                    {p.name}
                    <span className="ml-1.5 text-cream/35">· {p.statusLabel}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-cream/40">
              {SITE.legalName}
            </h3>
            <address className="mt-5 space-y-2 text-sm not-italic text-cream/70">
              <p>{SITE.address}</p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-gold-300"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="text-cream/45">{SITE.rcs}</p>
              <p className="text-cream/45">TVA {SITE.tva}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-7 text-xs text-cream/45 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.legalName}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="transition hover:text-cream/80">
              Mentions légales
            </Link>
            <Link to="/contact" className="transition hover:text-cream/80">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
