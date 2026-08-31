interface EntryHeaderProps {
  role: string;
  /** Institution or company; omitted when the role has no formal employer */
  place?: string;
  /** Date or period; omitted when the entry has none */
  dates?: string;
  /**
   * Let the title use the full width and tuck the dates into the right edge of
   * its last line (dropping to a line of their own only if they don't fit),
   * instead of reserving a column for them at every line.
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
  const title = (
    <>
      {role}
      {place && (
        <>
          <span className="font-normal text-muted">{" · "}</span>
          <span className="font-normal text-accent">{place}</span>
        </>
      )}
    </>
  );

  if (inlineDates) {
    return (
      <h3 className='font-medium text-foreground after:block after:clear-both after:content-[""]'>
        {title}
        {dates && (
          <span className="float-right ml-4 text-sm font-normal leading-6 text-muted whitespace-nowrap">
            {dates}
          </span>
        )}
      </h3>
    );
  }

  return (
    <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
      <h3 className="font-medium text-foreground">{title}</h3>
      {dates && <p className="shrink-0 text-sm text-muted">{dates}</p>}
    </div>
  );
}
