import EntryHeader from "@/components/EntryHeader";
import { awards } from "@/src/data/awards";

export default function Awards() {
  return (
    <ul className="space-y-8">
      {awards.map((award) => (
        <li key={`${award.title}-${award.org ?? ""}`}>
          <EntryHeader
            role={award.title}
            place={award.org}
            dates={award.year}
          />
          {award.description && (
            <p className="mt-1 max-w-prose text-sm leading-relaxed">
              {award.description}
            </p>
          )}
          {award.items && award.items.length > 0 && (
            <ul className="mt-2.5 space-y-1 border-l border-border pl-4 text-sm">
              {award.items.map((item, index) => (
                <li
                  key={`${item.label}-${item.year ?? ""}-${item.detail ?? index}`}
                  className="flex items-baseline justify-between gap-x-4"
                >
                  <span className="min-w-0">
                    <span className="text-foreground">{item.label}</span>
                    {item.detail && <span>{` — ${item.detail}`}</span>}
                  </span>
                  {item.year && (
                    <span className="shrink-0 tabular-nums">{item.year}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
