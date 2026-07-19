import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Gregory Dean.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        Contact
      </h1>
      <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-muted">
        Open to conversations about security work, collaboration, and research.
      </p>

      <ul className="mt-12 space-y-0 border-y border-rule">
        <li className="border-b border-rule">
          <a
            href={`mailto:${site.email}`}
            className="group flex items-baseline justify-between gap-6 py-6 transition-transform duration-300 hover:translate-x-1"
          >
            <span className="font-sans text-sm tracking-wide text-muted">Email</span>
            <span className="font-display text-xl font-semibold text-ink underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-ink sm:text-2xl">
              {site.email}
            </span>
          </a>
        </li>
        <li className="border-b border-rule">
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline justify-between gap-6 py-6 transition-transform duration-300 hover:translate-x-1"
          >
            <span className="font-sans text-sm tracking-wide text-muted">
              LinkedIn
            </span>
            <span className="font-display text-xl font-semibold text-ink underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-ink sm:text-2xl">
              Profile
            </span>
          </a>
        </li>
        <li>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline justify-between gap-6 py-6 transition-transform duration-300 hover:translate-x-1"
          >
            <span className="font-sans text-sm tracking-wide text-muted">GitHub</span>
            <span className="font-display text-xl font-semibold text-ink underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-ink sm:text-2xl">
              Repositories
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
