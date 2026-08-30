import Section from "@/components/Section";
import { experience } from "@/src/data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-8">
        {experience.map((entry) => (
          <li key={`${entry.role}-${entry.organization}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {entry.role}
                {entry.kind === "academic-service" && (
                  <span className="ml-2 inline-block translate-y-[-0.1em] rounded-full border border-border bg-surface px-2.5 py-0.5 align-middle text-xs font-sans font-medium tracking-wide text-muted">
                    Academic service
                  </span>
                )}
              </h3>
              <p className="shrink-0 text-sm text-muted">{entry.period}</p>
            </div>
            <p className="mt-0.5 text-sm font-medium text-accent">
              {entry.organization}
            </p>
            {entry.kind === "work" && (
              <p className="mt-2">{entry.description}</p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
