import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { SITE, NAV, PRODUCTS } from "../data/site";
import { useLang } from "../i18n";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-paper-100">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper-200/60">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="label text-paper-200/40">{t.footer.navigate}</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-paper-200/75 transition hover:text-pine-300"
                >
                  {t.common.home}
                </Link>
              </li>
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-paper-200/75 transition hover:text-pine-300"
                  >
                    {t.nav[n.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label text-paper-200/40">{t.footer.products}</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {PRODUCTS.map((p) =>
                p.href ? (
                  <li key={p.id}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-paper-200/75 transition hover:text-pine-300"
                    >
                      {t.products[p.id].name} ↗
                    </a>
                  </li>
                ) : (
                  <li key={p.id} className="text-paper-200/75">
                    {t.products[p.id].name}
                    <span className="ml-1.5 text-paper-200/35">
                      · {t.status[p.status]}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="label text-paper-200/40">{SITE.legalName}</h3>
            <address className="mt-5 space-y-2 text-sm not-italic text-paper-200/75">
              <p>{SITE.address}</p>
              <p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-pine-300"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="text-paper-200/45">{SITE.rcs}</p>
              <p className="text-paper-200/45">TVA {SITE.tva}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper-200/10 pt-7 text-xs text-paper-200/45 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.legalName}. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link
              to="/mentions-legales"
              className="transition hover:text-paper-100"
            >
              {t.footer.legal}
            </Link>
            <Link to="/contact" className="transition hover:text-paper-100">
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
