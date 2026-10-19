import { useId } from "react";

/**
 * Marque (logo) d'un produit du groupe, en couleurs d'origine.
 * Retourne `null` si aucun logo n'est disponible pour cet identifiant.
 */
export function ProductMark({
  id,
  className = "h-9 w-9",
}: {
  id: string;
  className?: string;
}) {
  const gid = useId();

  if (id === "ownset") {
    return (
      <img
        src="/ownset-mark.png"
        alt="Logo OWNSET"
        className={className}
        width={240}
        height={240}
        draggable={false}
      />
    );
  }

  if (id === "letzsetup") {
    return (
      <svg
        viewBox="0 0 44 44"
        className={className}
        role="img"
        aria-label="Logo LETZSETUP"
      >
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#C8362E" />
            <stop offset="0.5" stopColor="#EAF2F7" />
            <stop offset="1" stopColor="#5EA7D6" />
          </linearGradient>
        </defs>
        <circle
          cx="22"
          cy="22"
          r="17.5"
          fill="none"
          stroke="#121517"
          strokeWidth="1.3"
        />
        <path
          d="M13.5 26 L22 15.5 L30.5 26"
          fill="none"
          stroke={`url(#${gid})`}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return null;
}
