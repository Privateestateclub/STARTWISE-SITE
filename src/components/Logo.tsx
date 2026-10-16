import { Link } from "react-router-dom";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="STARTWISE — accueil"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src="/startwise-logo.png"
        alt="STARTWISE"
        className="h-6 w-auto brightness-0 invert transition-opacity duration-300 hover:opacity-80 sm:h-7"
        width={1280}
        height={217}
        draggable={false}
      />
    </Link>
  );
}
