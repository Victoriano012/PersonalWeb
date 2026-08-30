import Section from "@/components/Section";
import { awards } from "@/src/data/awards";

export default function Awards() {
  return (
    <Section id="awards" title="Awards & Distinctions">
      <ul className="space-y-4">
        {awards.map((award) => (
          <li
            key={`${award.title}-${award.organization}`}
            className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div className="min-w-0">
              <p>
                <span className="font-medium text-foreground">
                  {award.title}
                </span>
                <span aria-hidden="true"> · </span>
                <span>{award.organization}</span>
              </p>
              {award.description && (
                <p className="mt-0.5 text-sm">{award.description}</p>
              )}
            </div>
            <span className="shrink-0 text-sm tabular-nums">
              {award.period}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
