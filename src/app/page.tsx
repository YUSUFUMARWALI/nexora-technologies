import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProductsShowcase from "@/components/ProductsShowcase";
import FounderPreview from "@/components/FounderPreview";
import ResearchPreview from "@/components/ResearchPreview";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050914]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProductsShowcase />
      <FounderPreview />
      <ResearchPreview />
      <Education />
    </main>
  );
}
