interface EntryHeaderProps {
  role: string;
  /** Institution or company; omitted when the role has no formal employer */
  place?: string;
  dates: string;
}

/**
 * Shared header for Experience and Research entries: role with the
 * institution/company inline to its right, dates right-aligned.
 */
export default function EntryHeader({ role, place, dates }: EntryHeaderProps) {
  return (
    <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
      <h3 className="font-medium text-foreground">
        {role}
        {place && (
          <>
            <span className="text-muted">{" · "}</span>
            <span className="font-medium text-accent">{place}</span>
          </>
        )}
      </h3>
      <p className="shrink-0 text-sm text-muted">{dates}</p>
    </div>
  );
}
