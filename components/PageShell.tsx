export default function PageShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <div className="mt-8 text-[0.95rem] leading-relaxed text-muted">
        {children}
      </div>
    </main>
  );
}
