import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Gregory Dean, cybersecurity practitioner.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        About
      </h1>
      <div className="mt-10 space-y-6 font-serif text-lg leading-relaxed text-muted">
        <p>
          I&apos;m {site.name}, a cybersecurity practitioner focused on defending
          systems and making security decisions clearer for the people who have to
          live with them.
        </p>
        <p>
          My work sits at the intersection of detection, assessment, and
          communication — translating noisy signal into action, and helping teams
          understand risk without theater.
        </p>
        <p>
          This site is a place to share projects I&apos;m proud of, research I&apos;m
          exploring, and writing that might be useful to others in the field.
        </p>
      </div>

      <section className="mt-16 border-t border-rule pt-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          Focus areas
        </h2>
        <ul className="mt-6 space-y-3 font-sans text-base text-muted">
          <li className="border-l border-rule pl-4">Detection engineering</li>
          <li className="border-l border-rule pl-4">Threat modeling</li>
          <li className="border-l border-rule pl-4">Security assessments</li>
          <li className="border-l border-rule pl-4">Clear technical writing</li>
        </ul>
      </section>

      <p className="mt-16 font-sans text-base text-muted">
        Want to connect?{" "}
        <Link
          href="/contact/"
          className="text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
        >
          Get in touch
        </Link>
        .
      </p>
    </div>
  );
}
