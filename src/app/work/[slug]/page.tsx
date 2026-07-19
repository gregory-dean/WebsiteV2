import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/MdxContent";
import {
  formatDate,
  getNote,
  getNotes,
  kindLabel,
} from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: "Work" };
  return {
    title: note.meta.title,
    description: note.meta.summary,
  };
}

export default async function WorkItemPage({ params }: PageProps) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const { meta, content } = note;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
      <Link
        href="/work/"
        className="font-sans text-sm text-muted transition-opacity hover:opacity-70"
      >
        ← Work
      </Link>
      <header className="mt-8">
        <p className="font-sans text-xs tracking-wide text-ink/50">
          {kindLabel(meta.kind)}
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink pb-1 md:text-5xl">
          {meta.title}
        </h1>
        <p className="mt-4 font-sans text-sm text-muted">
          <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          {meta.role ? (
            <>
              <span aria-hidden="true"> · </span>
              {meta.role}
            </>
          ) : null}
          {meta.kind === "article" ? (
            <>
              <span aria-hidden="true"> · </span>
              {meta.readingMinutes} min read
            </>
          ) : null}
        </p>
        <p className="mt-6 font-serif text-xl leading-relaxed text-muted">
          {meta.summary}
        </p>
        {meta.tags.length > 0 ? (
          <p className="mt-4 font-sans text-xs tracking-wide text-ink/50">
            {meta.tags.join(" · ")}
          </p>
        ) : null}
        {meta.links && meta.links.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-5">
            {meta.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>
      <div className="mt-12 border-t border-rule pt-12">
        <MdxContent source={content} />
      </div>
    </article>
  );
}
