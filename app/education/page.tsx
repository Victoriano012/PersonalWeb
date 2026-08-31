import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Education from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Education — Victor Conchello",
  description: "Victor Conchello's academic background, from the International Baccalaureate to a Master's in Data Science at Harvard.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return (
    <PageShell title="Education">
      <Education />
    </PageShell>
  );
}
