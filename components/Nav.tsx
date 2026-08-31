"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "@/src/data/sections";
import { profile } from "@/src/data/profile";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-3 py-3 sm:px-6">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-foreground"
        >
          {profile.name}
        </Link>
        <ul className="flex w-full flex-nowrap items-center justify-between gap-x-1.5 text-xs tracking-tight text-muted min-[360px]:text-sm sm:w-auto sm:justify-end sm:gap-x-4 sm:tracking-normal">
          {sections.map((section) => {
            const isActive = pathname === section.href;
            return (
              <li key={section.id}>
                <Link
                  href={section.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`whitespace-nowrap border-b-2 pb-0.5 transition-colors ${
                    isActive
                      ? "border-accent font-medium text-accent"
                      : "border-transparent hover:text-accent"
                  }`}
                >
                  {section.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
