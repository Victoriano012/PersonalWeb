interface EntryHeaderProps {
  role: string;
  /** Institution or company; omitted when the role has no formal employer */
  place?: string;
  /** Date or period; omitted when the entry has none */
  dates?: string;
  /** Small square logo shown just before the title; omitted when there is none */
  logo?: string;
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
  logo,
  inlineDates = false,
}: EntryHeaderProps) {
  const title = (
    <>
      {logo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt=""
          width={24}
          height={24}
          className="mr-2 inline-block h-[1em] w-[1em] shrink-0 object-contain align-[-0.14em]"
        />
      )}
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
