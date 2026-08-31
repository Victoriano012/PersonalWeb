import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Projects — Victor Conchello",
  description: "Personal projects built by Victor Conchello, including FoodApp, InvestApp and AutoJira.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <PageShell title="Projects">
      <p>Coming soon.</p>
    </PageShell>
  );
}
