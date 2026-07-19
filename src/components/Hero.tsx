"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { HeroCanvas } from "@/components/HeroCanvas";
import { site } from "@/lib/site";

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-item]",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.1,
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-x-clip"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <HeroCanvas />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 md:px-8 md:py-28">
        <p
          data-hero-item
          className="font-display text-5xl font-semibold leading-[1.1] tracking-tight text-ink pb-1 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {site.name}
        </p>
        <h1
          data-hero-item
          className="mt-6 max-w-xl font-serif text-2xl leading-snug text-ink sm:text-3xl"
        >
          Cybersecurity practitioner.
        </h1>
        <p
          data-hero-item
          className="mt-5 max-w-md font-sans text-base leading-relaxed text-muted sm:text-lg"
        >
          {site.focus}
        </p>
        <div data-hero-item className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            href="/work/"
            className="font-sans text-sm tracking-wide text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
          >
            View work
          </Link>
        </div>
      </div>
    </section>
  );
}
