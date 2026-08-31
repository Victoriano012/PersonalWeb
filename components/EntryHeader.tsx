interface EntryHeaderProps {
  role: string;
  /** Institution or company; omitted when the role has no formal employer */
  place?: string;
  /** Date or period; omitted when the entry has none */
  dates?: string;
}

/**
 * Shared header for Experience, Research and Awards entries: title with the
 * institution/organization inline to its right, dates right-aligned.
 */
export default function EntryHeader({ role, place, dates }: EntryHeaderProps) {
  return (
    <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
      <h3 className="font-medium text-foreground">
        {role}
        {place && (
          <>
            <span className="font-normal text-muted">{" · "}</span>
            <span className="font-normal text-accent">{place}</span>
          </>
        )}
      </h3>
      {dates && <p className="shrink-0 text-sm text-muted">{dates}</p>}
    </div>
  );
}
