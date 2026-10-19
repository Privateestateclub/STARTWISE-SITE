import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";
import { NAV } from "../data/site";
import { useLang } from "../i18n";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink-900/10 bg-paper-100/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `label !tracking-[0.12em] relative transition-colors duration-200 ${
                  isActive ? "text-ink-900" : "text-stone-500 hover:text-ink-900"
                } after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-pine-600 after:transition-all after:duration-300 ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {t.nav[item.key]}
            </NavLink>
          ))}
          <LangSwitcher />
          <Link
            to="/contact"
            className="rounded-full border border-ink-900/20 px-5 py-2 text-sm text-ink-900 transition-all duration-300 hover:border-ink-900 hover:bg-ink-900 hover:text-paper-50"
          >
            {t.nav.write}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Fermer / Close" : "Menu"}
          aria-expanded={open}
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 h-px w-6 bg-ink-900 transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-6 bg-ink-900 transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-6 bg-ink-900 transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-paper-50/98 px-6 pt-28 backdrop-blur-xl transition-all duration-400 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="border-b border-ink-900/10 py-5 font-display text-3xl text-ink-900"
            >
              {t.nav[item.key]}
            </NavLink>
          ))}
        </nav>
        <div className="mt-8">
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}
