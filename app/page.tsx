import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Research from "@/components/sections/Research";
import Projects from "@/components/sections/Projects";
import Awards from "@/components/sections/Awards";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <Hero />
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
