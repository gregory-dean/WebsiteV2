"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="relative z-40 border-b border-rule">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-5 md:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm tracking-wide transition-opacity ${
                  active ? "text-ink opacity-100" : "text-ink/70 hover:opacity-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
