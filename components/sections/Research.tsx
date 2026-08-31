import Section from "@/components/Section";
import { publications, researchExperience } from "@/src/data/research";
import type { Author } from "@/src/data/types";

function AuthorList({ authors }: { authors: Author[] }) {
  return (
    <>
      {authors.map((author, i) => (
        <span key={author.name}>
          {i > 0 && ", "}
          {author.highlight ? (
            <strong className="font-semibold text-foreground">
              {author.name}
            </strong>
          ) : (
            author.name
          )}
          {author.equalContribution && "*"}
        </span>
      ))}
    </>
  );
}

function VenueBadge({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs text-muted">
      {children}
    </li>
  );
}

export default function Research() {
  const hasEqualContribution = publications.some((p) =>
    p.authors.some((a) => a.equalContribution)
  );

  return (
    <Section id="research" title="Research & Publications">
      <ul className="space-y-6">
        {researchExperience.map((entry) => (
          <li key={entry.role}>
            <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-medium text-foreground">
                {entry.role}
                <span className="font-normal text-muted">
                  {" · "}
                  {entry.organization}
                </span>
              </h3>
              <p className="shrink-0 text-sm text-muted">{entry.period}</p>
            </div>
            <p className="mt-1">{entry.description}</p>
          </li>
        ))}
      </ul>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
          Papers
        </h3>
        <ul className="mt-4 space-y-6">
          {publications.map((paper) => (
            <li key={paper.title}>
              <h4 className="font-medium text-foreground">{paper.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                <AuthorList authors={paper.authors} />
              </p>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                {paper.link ? (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1 rounded-sm text-sm text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    Paper
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span />
                )}
                <ul className="flex flex-wrap items-center gap-2 sm:justify-end">
                  <VenueBadge>
                    {paper.status && (
                      <>
                        {paper.status}
                        <span aria-hidden="true"> · </span>
                      </>
                    )}
                    {paper.venue}
                    {paper.year ? ` ${paper.year}` : ""}
                  </VenueBadge>
                  {paper.workshop && (
                    <VenueBadge>
                      Presented
                      <span aria-hidden="true"> · </span>
                      {paper.workshop}
                    </VenueBadge>
                  )}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        {hasEqualContribution && (
          <p className="mt-4 text-sm">* Equal contribution.</p>
        )}
      </div>
    </Section>
  );
}
