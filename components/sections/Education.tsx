import { education } from "@/src/data/education";

export default function Education() {
  return (
    <ol className="relative border-l border-border pl-6 sm:pl-8">
      {education.map((entry) => (
        <li
          key={`${entry.degree}-${entry.institution}`}
          className="relative pb-8 last:pb-0"
        >
          <span
            aria-hidden
            className="absolute -left-6 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background sm:-left-8"
          />
          <p className="font-mono text-xs uppercase tracking-wide text-muted">
            {entry.period}
          </p>
          <h3 className="mt-1 text-base font-semibold text-foreground">
            {entry.degree}
          </h3>
          <p className="mt-0.5">{entry.institution}</p>
          {entry.details?.map((detail) => (
            <p key={detail} className="mt-1 text-sm text-accent">
              {detail}
            </p>
          ))}
        </li>
      ))}
    </ol>
  );
}
