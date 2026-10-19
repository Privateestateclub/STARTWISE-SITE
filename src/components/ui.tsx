import { Link } from "react-router-dom";
import { Fragment, type ReactNode } from "react";

/**
 * Rend les « & » d'un titre serif dans la police sans : l'esperluette
 * décorative de Fraunces ressemble à un « @ », celle-ci est classique.
 */
export function Amp({ children }: { children: string }) {
  const parts = children.split("&");
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="font-sans font-normal">&amp;</span>}
          {p}
        </Fragment>
      ))}
    </>
  );
}

export function Eyebrow({
  children,
  onDark = false,
}: {
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <span
      className={`label inline-flex items-center gap-2.5 ${
        onDark ? "text-paper-200/70" : "text-stone-600"
      }`}
    >
      <span className={`h-px w-6 ${onDark ? "bg-pine-400" : "bg-pine-600"}`} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-5 text-pretty text-[2rem] leading-[1.05] sm:text-[2.6rem] md:text-[3rem] ${
          onDark ? "text-paper-50" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 max-w-xl text-pretty text-[1.02rem] leading-relaxed ${
            onDark ? "text-paper-200/75" : "text-stone-500"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "solid" | "ghost";
  onDark?: boolean;
  className?: string;
};

export function Button({
  children,
  to,
  href,
  variant = "solid",
  onDark = false,
  className = "",
}: BtnProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine-500";

  const solid = onDark
    ? "bg-paper-50 text-ink-900 hover:bg-paper-200"
    : "bg-ink-900 text-paper-50 hover:bg-ink-700 hover:shadow-[0_10px_30px_-12px] hover:shadow-ink-900/50";
  const ghost = onDark
    ? "border border-paper-200/25 text-paper-50 hover:border-paper-100"
    : "border border-ink-900/20 text-ink-900 hover:border-ink-900";

  const cls = `${base} ${variant === "solid" ? solid : ghost} ${className}`;
  const inner = (
    <>
      {children}
      <Arrow />
    </>
  );

  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  if (to)
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  return <span className={cls}>{inner}</span>;
}

function Arrow() {
  return (
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
  );
}
