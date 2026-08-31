import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Research from "@/components/sections/Research";

export const metadata: Metadata = {
  title: "Research — Victor Conchello",
  description: "Victor Conchello's research positions and publications in AI and machine learning.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <PageShell title="Research">
      <Research />
    </PageShell>
  );
}
