import type { SectionId } from "@/src/data/sections";

export default function Section({
  id,
  title,
  children,
}: {
  id: SectionId;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-12 first:border-t-0">
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-6 space-y-6 text-[0.95rem] leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}
