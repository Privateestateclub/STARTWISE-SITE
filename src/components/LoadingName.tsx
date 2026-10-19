import { useLang } from "../i18n";

/**
 * Remplace le nom d'un produit non encore dévoilé (statut « en projet »)
 * par un signe de chargement animé (3 points). S'accélère au survol
 * d'une carte parente portant la classe `group`.
 */
export function LoadingName({
  small = false,
  className = "",
}: {
  small?: boolean;
  className?: string;
}) {
  const { t } = useLang();
  return (
    <span
      className={`loading-dots ${small ? "is-small" : ""} ${className}`}
      role="status"
      aria-label={t.status.project}
      title={t.status.project}
    >
      <span className="loading-dot" />
      <span className="loading-dot" />
      <span className="loading-dot" />
    </span>
  );
}
