import EntryHeader from "@/components/EntryHeader";
import Section from "@/components/Section";
import SubgroupHeading from "@/components/SubgroupHeading";
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
    p.authors.some((a) => a.equalContribution),
  );

  return (
    <Section id="research" title="Research">
      <div className="space-y-10">
        <div>
          <SubgroupHeading>Papers</SubgroupHeading>
          <ul className="mt-4 space-y-6">
            {publications.map((paper) => (
              <li key={paper.title}>
                <h4 className="font-medium text-foreground">{paper.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  <AuthorList authors={paper.authors} />
                </p>
                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-3">
                  {(paper.venue || paper.workshop) && (
                    <ul className="flex flex-wrap items-center gap-2">
                      {paper.venue && (
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
                      )}
                      {paper.workshop && (
                        <VenueBadge>
                          Presented
                          <span aria-hidden="true"> · </span>
                          {paper.workshop}
                        </VenueBadge>
                      )}
                    </ul>
                  )}
                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex w-fit items-center gap-1 rounded-sm text-sm text-link transition-colors hover:text-link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-link/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Paper
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {hasEqualContribution && (
            <p className="mt-4 text-sm">* Equal contribution.</p>
          )}
        </div>

        <div>
          <SubgroupHeading>Academic Visits</SubgroupHeading>
          <ul className="mt-4 space-y-6">
            {researchExperience.map((entry) => (
              <li key={entry.role}>
                <EntryHeader
                  role={entry.role}
                  place={entry.organization}
                  dates={entry.period}
                />
                <p className="mt-1">{entry.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
