import Section from "@/components/Section";
import { projects } from "@/src/data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Personal Projects">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-lg border border-border p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {project.name}
              </h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm font-medium text-accent hover:text-accent-hover"
                aria-label={`${project.name} on GitHub`}
              >
                GitHub ↗
              </a>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
