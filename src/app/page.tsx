import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050914]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Education />
    </main>
  );
}
