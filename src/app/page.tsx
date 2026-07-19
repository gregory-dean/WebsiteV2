import Link from "next/link";
import { ExperienceTree } from "@/components/ExperienceTree";
import { Hero } from "@/components/Hero";
import { NoteCard } from "@/components/NoteCard";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/experience";
import { getNotes } from "@/lib/content";

export default function HomePage() {
  const featured =
    getNotes().find((note) => note.featured && note.kind === "project") ??
    getNotes().find((note) => note.kind === "project") ??
    getNotes()[0];

  return (
    <>
      <Hero />

      <section className="border-t border-rule">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold leading-[1.15] tracking-tight text-ink pb-1 md:text-3xl">
              Experience
            </h2>
            <p className="mt-3 max-w-2xl font-serif text-lg leading-relaxed text-muted">
              Roles and major projects along the way.
            </p>
            <div className="mt-10">
              <ExperienceTree items={experience} />
            </div>
          </Reveal>
        </div>
      </section>

      {featured ? (
        <section className="border-t border-rule">
          <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-20">
            <Reveal>
              <div className="mb-8 flex items-baseline justify-between gap-4">
                <h2 className="font-display text-2xl font-semibold leading-[1.15] tracking-tight text-ink pb-1 md:text-3xl">
                  Featured
                </h2>
                <Link
                  href="/work/"
                  className="font-sans text-sm text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
                >
                  All work
                </Link>
              </div>
              <NoteCard note={featured} />
            </Reveal>
          </div>
        </section>
      ) : null}
    </>
  );
}
