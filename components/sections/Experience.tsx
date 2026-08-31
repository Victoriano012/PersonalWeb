import EntryHeader from "@/components/EntryHeader";
import Section from "@/components/Section";
import { experience } from "@/src/data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-6">
        {experience.map((entry) => (
          <li key={`${entry.role}-${entry.organization}`}>
            <EntryHeader
              role={entry.role}
              place={entry.organization}
              dates={entry.period}
              badge={
                entry.kind === "academic-service" && (
                  <span className="ml-2 inline-block translate-y-[-0.1em] rounded-full border border-border bg-surface px-2.5 py-0.5 align-middle text-xs font-medium tracking-wide text-muted">
                    Academic service
                  </span>
                )
              }
            />
            <p className="mt-1">{entry.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
