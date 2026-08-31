import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Research — Victor Conchello",
  description: "Victor Conchello's research positions and publications in AI and machine learning.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <PageShell title="Research & Publications">
      <p>Coming soon.</p>
    </PageShell>
  );
}
