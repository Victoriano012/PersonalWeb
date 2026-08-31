import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Awards — Victor Conchello",
  description: "Awards, scholarships and competition distinctions earned by Victor Conchello.",
  alternates: { canonical: "/awards" },
};

export default function AwardsPage() {
  return (
    <PageShell title="Awards & Distinctions">
      <p>Coming soon.</p>
    </PageShell>
  );
}
