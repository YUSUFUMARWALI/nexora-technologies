import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExploreGateway from "@/components/ExploreGateway";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050914]">
      <Navbar />
      <Hero />
      <About />
      <ExploreGateway />
      <ContactCTA />
      <Footer />
      <FloatingContact />
      <CommandPalette />
    </main>
  );
}
