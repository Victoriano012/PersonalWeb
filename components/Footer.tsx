import { profile } from "@/src/data/profile";
import type { ContactLink } from "@/src/data/types";

const icons: Record<ContactLink["icon"], React.ReactNode> = {
  github: (
    <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12.63 0H1.37C.61 0 0 .6 0 1.34v13.32C0 15.4.61 16 1.37 16h11.26c.76 0 1.37-.6 1.37-1.34V1.34C14 .6 13.39 0 12.63 0ZM4.15 13.63H2.08V6.94h2.08v6.69ZM3.11 6.02a1.2 1.2 0 1 1 0-2.41 1.2 1.2 0 0 1 0 2.41Zm8.82 7.61H9.86v-3.25c0-.78-.01-1.77-1.08-1.77-1.08 0-1.25.85-1.25 1.72v3.3H5.46V6.94h1.99v.91h.03c.28-.52.95-1.08 1.96-1.08 2.1 0 2.49 1.38 2.49 3.18v3.68Z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M.05 3.56A1.5 1.5 0 0 1 1.5 2.5h13a1.5 1.5 0 0 1 1.45 1.06L8 8.41.05 3.56ZM0 4.7v7.05l4.71-3.7L0 4.7Zm5.62 4.06L0 13.16c.16.5.63.84 1.5.84h13c.87 0 1.34-.34 1.5-.84l-5.62-4.4L8 9.83 5.62 8.76ZM11.29 8.05 16 11.75V4.7l-4.71 3.35Z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M3.65 1.33a.68.68 0 0 1 1.05-.11l1.9 1.9c.31.3.36.78.13 1.15l-.85 1.36c-.14.22-.13.5.02.71a11.4 11.4 0 0 0 3.76 3.76c.21.15.49.16.71.02l1.36-.85c.37-.23.85-.18 1.15.13l1.9 1.9c.29.29.24.77-.11 1.05l-1.4 1.13c-.5.4-1.17.51-1.77.28-2.02-.77-3.9-2-5.53-3.63C4.34 8.5 3.11 6.62 2.34 4.6c-.23-.6-.12-1.27.28-1.77l1.03-1.5Z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-4 py-8 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {profile.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                {icons[link.icon]}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
