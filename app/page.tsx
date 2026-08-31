import Hero from "@/components/Hero";
import { profile } from "@/src/data/profile";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 pb-24 sm:px-6">
      <Hero />
      <div className="h-px w-10 bg-accent" />
      <p className="mt-8 max-w-prose text-[0.95rem] leading-relaxed text-muted">
        {profile.bio}
      </p>
    </main>
  );
}
