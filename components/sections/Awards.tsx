import { awards } from "@/src/data/awards";

export default function Awards() {
  return (
    <ul className="space-y-6">
      {awards.map((award) => (
        <li
          key={`${award.title}-${award.org}`}
          className="flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between"
        >
          <div className="min-w-0">
            <p>
              <span className="font-medium text-foreground">{award.title}</span>
              {award.org && (
                <>
                  <span aria-hidden="true"> · </span>
                  <span>{award.org}</span>
                </>
              )}
            </p>
            {award.description && (
              <p className="mt-0.5 text-sm">{award.description}</p>
            )}
            {award.items && (
              <ul className="mt-1.5 space-y-0.5 text-sm">
                {award.items.map((item, index) => (
                  <li
                    key={`${item.label}-${item.year}-${item.detail ?? index}`}
                    className="flex gap-2"
                  >
                    <span aria-hidden="true" className="text-muted">
                      ·
                    </span>
                    <span>
                      <span className="text-foreground">{item.label}</span>
                      {item.detail && <span>{` — ${item.detail}`}</span>}
                      {item.year && (
                        <span className="text-muted tabular-nums">
                          {` (${item.year})`}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {award.year && (
            <span className="shrink-0 text-sm tabular-nums">{award.year}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
