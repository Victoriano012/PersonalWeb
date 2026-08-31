interface EntryHeaderProps {
  role: string;
  /** Institution or company; omitted when the role has no formal employer */
  place?: string;
  /** Date or period; omitted when the entry has none */
  dates?: string;
  /**
   * Keep the dates on the title's first line at every width instead of
   * stacking them below the title on small screens.
   */
  inlineDates?: boolean;
}

/**
 * Shared header for Experience, Research and Awards entries: title with the
 * institution/organization inline to its right, dates right-aligned.
 */
export default function EntryHeader({
  role,
  place,
  dates,
  inlineDates = false,
}: EntryHeaderProps) {
  return (
    <div
      className={
        inlineDates
          ? "flex flex-row items-baseline justify-between gap-x-4"
          : "flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between"
      }
    >
      <h3
        className={`font-medium text-foreground${inlineDates ? " flex-1" : ""}`}
      >
        {role}
        {place && (
          <>
            <span className="font-normal text-muted">{" · "}</span>
            <span className="font-normal text-accent">{place}</span>
          </>
        )}
      </h3>
      {dates && (
        <p className="shrink-0 whitespace-nowrap text-sm text-muted">{dates}</p>
      )}
    </div>
  );
}
