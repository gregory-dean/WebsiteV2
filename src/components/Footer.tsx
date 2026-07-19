import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative z-40 mt-auto border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 font-sans text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-5">
          <Link href="/contact/" className="text-ink/70 transition-opacity hover:opacity-100">
            Contact
          </Link>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/70 transition-opacity hover:opacity-100"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/70 transition-opacity hover:opacity-100"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
