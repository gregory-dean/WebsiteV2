import type { Metadata } from "next";
import { NoteCard } from "@/components/NoteCard";
import { getNotes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects and writing by Gregory Dean — a shared space for work documentation and research.",
};

export default function WorkPage() {
  const notes = getNotes();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-24">
      <header className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink pb-1 md:text-5xl">
          Work
        </h1>
        <p className="mt-4 font-serif text-lg leading-relaxed text-muted">
          Projects, research, and documentation in one place.
        </p>
      </header>
      <div className="mt-12 border-b border-rule">
        {notes.map((note) => (
          <NoteCard key={note.slug} note={note} />
        ))}
      </div>
    </div>
  );
}
