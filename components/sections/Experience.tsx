import EntryHeader from "@/components/EntryHeader";
import SubgroupHeading from "@/components/SubgroupHeading";
import { experience } from "@/src/data/experience";
import type { ExperienceEntry } from "@/src/data/types";

const work = experience.filter((entry) => entry.kind === "work");
const academicService = experience.filter(
  (entry) => entry.kind === "academic-service",
);

function EntryList({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="space-y-6">
      {entries.map((entry) => (
        <li key={`${entry.role}-${entry.organization ?? ""}`}>
          <EntryHeader
            role={entry.role}
            place={entry.organization}
            dates={entry.period}
            logo={entry.logo}
          />
          <p className="mt-1">{entry.description}</p>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  return (
    <div className="space-y-10">
      <EntryList entries={work} />
      <div>
        <SubgroupHeading>Academic Service</SubgroupHeading>
        <div className="mt-4">
          <EntryList entries={academicService} />
        </div>
      </div>
    </div>
  );
}
