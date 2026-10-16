import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-6 pt-36 sm:pt-44">
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,20,18,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,20,18,0.05) 1px, transparent 1px)",
          backgroundSize: "92px 92px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 30% 10%, black, transparent 72%)",
        }}
      />
      <div className="grain absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-balance text-[2.5rem] leading-[1.03] text-ink-900 sm:text-[3.6rem] md:text-[4.2rem]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-stone-500">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
