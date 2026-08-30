import { profile } from "@/src/data/profile";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <p>{profile.tagline}</p>
      <p className="italic">Full bio coming soon.</p>
    </Section>
  );
}
