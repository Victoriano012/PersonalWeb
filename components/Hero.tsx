import { profile } from "@/src/data/profile";
import type { ContactLink } from "@/src/data/types";

const icons: Record<ContactLink["icon"], React.ReactNode> = {
  github: (
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  ),
  linkedin: (
    <path d="M13.63 13.63h-2.37V9.92c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.96-1.43 1.96v3.78H6.22V6h2.28v1.04h.03c.32-.6 1.09-1.24 2.25-1.24 2.4 0 2.85 1.58 2.85 3.64v4.19ZM3.54 4.96a1.38 1.38 0 1 1 0-2.75 1.38 1.38 0 0 1 0 2.75Zm1.19 8.67H2.35V6h2.38v7.63ZM14.82 0H1.18C.53 0 0 .52 0 1.15v13.7C0 15.48.53 16 1.18 16h13.63c.65 0 1.19-.52 1.19-1.15V1.15C16 .52 15.46 0 14.82 0Z" />
  ),
  email: (
    <path d="M.05 3.56A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.56L8 8.42.05 3.56ZM0 4.7v7.1l4.71-3.42L0 4.7Zm5.68 4.28L.13 13.01A2 2 0 0 0 2 14h12a2 2 0 0 0 1.87-.99l-5.55-4.03L8 10.36 5.68 8.98Zm5.61-.6L16 11.8V4.7l-4.71 3.68Z" />
  ),
};

function isExternal(url: string) {
  return url.startsWith("http");
}

export default function Hero() {
  return (
    <div id="top" className="pb-10 pt-14 sm:pt-20">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">{profile.tagline}</p>
      <ul className="mt-8 flex flex-nowrap items-center justify-center gap-2 sm:flex-wrap sm:justify-start sm:gap-x-6 sm:gap-y-3">
        {profile.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.url}
              aria-label={link.label}
              title={link.label}
              {...(isExternal(link.url)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex min-h-10 min-w-10 items-center justify-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-link sm:min-h-0 sm:min-w-0 sm:justify-start"
            >
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-muted sm:h-4 sm:w-4"
              >
                {icons[link.icon]}
              </svg>
              <span className="hidden sm:inline">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
