import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Research from "@/components/sections/Research";
import Projects from "@/components/sections/Projects";
import Awards from "@/components/sections/Awards";
import { profile } from "@/src/data/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <div className="py-16">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{profile.tagline}</p>
        </div>
        <About />
        <Education />
        <Experience />
        <Research />
        <Projects />
        <Awards />
        <div className="pb-16" />
      </main>
      <Footer />
    </>
  );
}
