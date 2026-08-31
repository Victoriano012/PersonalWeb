import type { ReactNode } from "react";

interface EntryHeaderProps {
  role: string;
  place: string;
  dates: string;
  /** Optional pill rendered after the role, e.g. "Academic service" */
  badge?: ReactNode;
}

/**
 * Shared header for Experience and Research entries: role with the
 * institution/company inline to its right, dates right-aligned.
 */
export default function EntryHeader({
  role,
  place,
  dates,
  badge,
}: EntryHeaderProps) {
  return (
    <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
      <h3 className="font-medium text-foreground">
        {role}
        <span className="text-muted">{" · "}</span>
        <span className="font-medium text-accent">{place}</span>
        {badge}
      </h3>
      <p className="shrink-0 text-sm text-muted">{dates}</p>
    </div>
  );
}
