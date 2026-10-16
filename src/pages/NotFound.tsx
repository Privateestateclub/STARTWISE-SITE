import { Button } from "../components/ui";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page introuvable");
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5">
      <div
        className="absolute left-1/2 top-1/3 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gold-500/8 blur-[120px]"
        aria-hidden="true"
      />
      <div className="text-center">
        <p className="font-display text-[7rem] leading-none text-gold-grad sm:text-[10rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl text-cream">Page introuvable</h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-cream/60">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-10 flex justify-center">
          <Button to="/">Retour à l'accueil</Button>
        </div>
      </div>
    </section>
  );
}
