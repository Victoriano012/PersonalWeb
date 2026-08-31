import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Experience — Victor Conchello",
  description: "Victor Conchello's work experience and academic service roles.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <PageShell title="Experience">
      <p>Coming soon.</p>
    </PageShell>
  );
}
