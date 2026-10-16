import { Button } from "../components/ui";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page introuvable");
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-paper-100 px-5">
      <div className="text-center">
        <p className="font-display text-[7rem] leading-none text-ink-900 sm:text-[10rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl text-ink-900">Page introuvable</h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-stone-500">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-10 flex justify-center">
          <Button to="/">Retour à l'accueil</Button>
        </div>
      </div>
    </section>
  );
}
