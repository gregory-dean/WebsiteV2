import Link from "next/link";
import { formatDate, kindLabel, type NoteMeta } from "@/lib/content";

type NoteCardProps = {
  note: NoteMeta;
};

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Link
      href={`/work/${note.slug}/`}
      className="group block border-t border-rule py-6 transition-transform duration-300 hover:translate-x-1"
    >
      <p className="font-sans text-xs tracking-wide text-ink/50">
        {kindLabel(note.kind)}
      </p>
      <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-display text-xl font-semibold leading-[1.15] tracking-tight text-ink pb-0.5 sm:text-2xl">
          {note.title}
        </h3>
        <p className="font-sans text-sm text-muted">
          <time dateTime={note.date}>{formatDate(note.date)}</time>
          {note.kind === "article" ? (
            <>
              <span aria-hidden="true"> · </span>
              {note.readingMinutes} min
            </>
          ) : null}
        </p>
      </div>
      <p className="mt-2 max-w-2xl font-sans text-base leading-relaxed text-muted">
        {note.summary}
      </p>
      {note.tags.length > 0 ? (
        <p className="mt-3 font-sans text-xs tracking-wide text-ink/50">
          {note.tags.join(" · ")}
        </p>
      ) : null}
      <span className="mt-3 inline-block font-sans text-sm text-ink underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-ink">
        Read more
      </span>
    </Link>
  );
}
