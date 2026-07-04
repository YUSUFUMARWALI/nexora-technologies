import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Services from "@/components/Services";
import ProductsShowcase from "@/components/ProductsShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050914]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProductsShowcase />
      <Education />
    </main>
  );
}
