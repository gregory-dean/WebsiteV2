import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentRoot = path.join(process.cwd(), "content");

export type NoteKind = "project" | "article";

export type NoteMeta = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  kind: NoteKind;
  role?: string;
  featured?: boolean;
  draft?: boolean;
  links?: { label: string; href: string }[];
  readingMinutes: number;
};

export type ContentItem<T> = {
  meta: T;
  content: string;
};

function readDir(dir: string) {
  const full = path.join(contentRoot, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));
}

function parseFile(dir: string, filename: string) {
  const slug = filename.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(contentRoot, dir, filename), "utf8");
  const { data, content } = matter(raw);
  return { slug, data, content };
}

function toNoteMeta(
  slug: string,
  data: Record<string, unknown>,
  content: string,
): NoteMeta {
  const kindRaw = String(data.kind ?? "article");
  const kind: NoteKind = kindRaw === "project" ? "project" : "article";
  const stats = readingTime(content);

  return {
    slug,
    title: String(data.title ?? slug),
    summary: String(data.summary ?? ""),
    date: String(data.date ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    kind,
    role: data.role ? String(data.role) : undefined,
    featured: Boolean(data.featured),
    draft: Boolean(data.draft),
    links: Array.isArray(data.links)
      ? (data.links as { label: string; href: string }[])
      : undefined,
    readingMinutes: Math.max(1, Math.round(stats.minutes)),
  };
}

export function getNotes(): NoteMeta[] {
  return readDir("work")
    .map((filename) => {
      const { slug, data, content } = parseFile("work", filename);
      return toNoteMeta(slug, data as Record<string, unknown>, content);
    })
    .filter((note) => !note.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNote(slug: string): ContentItem<NoteMeta> | null {
  const filename = readDir("work").find(
    (file) => file.replace(/\.mdx?$/, "") === slug,
  );
  if (!filename) return null;
  const { data, content } = parseFile("work", filename);
  const meta = toNoteMeta(slug, data as Record<string, unknown>, content);
  if (meta.draft) return null;
  return { meta, content };
}

export function formatDate(date: string) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export function kindLabel(kind: NoteKind) {
  return kind === "project" ? "Project" : "Article";
}
