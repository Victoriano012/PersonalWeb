import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects — Victor Conchello",
  description: "Personal projects built by Victor Conchello, including AutoProject, Closer Congress, FoodApp and InvestApp.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <PageShell title="Projects">
      <Projects />
    </PageShell>
  );
}
