import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold-400">
      <span className="h-px w-6 bg-gold-500/60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-pretty text-[2rem] leading-[1.05] sm:text-[2.6rem] md:text-[3rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 max-w-xl text-pretty text-[1.02rem] leading-relaxed text-cream/65">
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
  className?: string;
};

export function Button({
  children,
  to,
  href,
  variant = "solid",
  className = "",
}: BtnProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400";
  const styles =
    variant === "solid"
      ? "bg-gold-500 text-ink-950 hover:bg-gold-400 hover:shadow-[0_8px_30px_-8px] hover:shadow-gold-500/50"
      : "border border-cream/18 text-cream hover:border-gold-500/60 hover:text-gold-300";
  const cls = `${base} ${styles} ${className}`;

  const inner = (
    <>
      {children}
      <Arrow />
    </>
  );

  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
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
