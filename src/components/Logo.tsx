import { Link } from "react-router-dom";

/**
 * Logo officiel STARTWISE.
 * Source : PNG noir sur fond transparent.
 * - `onDark` = sur une section sombre → rendu en crème (invert).
 * - défaut = sur fond clair → rendu noir (sans filtre).
 */
export function Logo({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      to="/"
      aria-label="STARTWISE — accueil"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src="/startwise-logo.png"
        alt="STARTWISE"
        className={`h-6 w-auto transition-opacity duration-300 hover:opacity-70 sm:h-7 ${
          onDark ? "[filter:brightness(0)_invert(0.95)]" : ""
        }`}
        width={1280}
        height={217}
        draggable={false}
      />
    </Link>
  );
}
