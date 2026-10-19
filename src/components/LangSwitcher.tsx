import { useLang, type Lang } from "../i18n";

const LANGS: Lang[] = ["fr", "en"];

export function LangSwitcher({
  onDark = false,
  className = "",
}: {
  onDark?: boolean;
  className?: string;
}) {
  const { lang, setLang } = useLang();
  const base = onDark ? "text-paper-200/50" : "text-stone-500";
  const active = onDark ? "text-paper-50" : "text-ink-900";
  const hover = onDark ? "hover:text-paper-50" : "hover:text-ink-900";

  return (
    <div
      className={`label inline-flex items-center gap-1.5 ${className}`}
      role="group"
      aria-label="Langue / Language"
    >
      {LANGS.map((l, i) => (
        <span key={l} className="inline-flex items-center gap-1.5">
          {i > 0 && <span className={base} aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`transition-colors duration-200 ${
              lang === l ? active : `${base} ${hover}`
            }`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
