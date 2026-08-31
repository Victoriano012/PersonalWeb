import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-4 px-4 py-32 text-center sm:px-6">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="max-w-md text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-2 text-sm font-medium text-link transition-colors hover:text-link-hover"
      >
        ← Back to home
      </Link>
    </main>
  );
}
