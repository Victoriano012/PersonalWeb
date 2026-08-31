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
        <ul className="mt-4 space-y-5">
          {publications.map((paper) => (
            <li key={paper.title}>
              <p>
                <AuthorList authors={paper.authors} />
                {". "}
                <span className="italic text-foreground">{paper.title}</span>
                {"."}
              </p>
              <p className="mt-0.5 text-sm">
                <span>
                  {paper.status ? `${paper.status} at ` : ""}
                  {paper.venue}
                  {paper.year ? ` ${paper.year}` : ""}.
                </span>
                {paper.workshop && (
                  <span> Presented at {paper.workshop}.</span>
                )}
                {paper.link && (
                  <>
                    {" "}
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-2 hover:text-accent-hover"
                    >
                      Paper
                    </a>
                  </>
                )}
              </p>
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
