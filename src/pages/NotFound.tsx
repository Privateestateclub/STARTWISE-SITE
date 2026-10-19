import { Button } from "../components/ui";
import { useLang } from "../i18n";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  const { t } = useLang();
  usePageMeta(t.meta.notfound.title);
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-paper-100 px-5">
      <div
        className="absolute left-1/2 top-1/3 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-pine-600/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="text-center">
        <p className="font-display text-[7rem] leading-none text-ink-900 sm:text-[10rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl text-ink-900">
          {t.notfound.title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-stone-500">
          {t.notfound.body}
        </p>
        <div className="mt-10 flex justify-center">
          <Button to="/">{t.notfound.back}</Button>
        </div>
      </div>
    </section>
  );
}
