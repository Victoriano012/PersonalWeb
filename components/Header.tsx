import Link from "next/link";
import { sections } from "@/src/data/sections";
import { profile } from "@/src/data/profile";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-3 sm:px-6">
        <Link
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight text-foreground"
        >
          {profile.name}
        </Link>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="transition-colors hover:text-accent"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
