import Link from "next/link";
import { ArrowLeft, BrainCircuit, Code2, Palette, Smartphone, Sparkles, Workflow } from "lucide-react";

const services = [
  ["Web Platforms", "Modern websites, dashboards and web applications built with performance, SEO and scalability in mind.", Code2],
  ["Mobile Apps", "Cross-platform Android and iOS apps for startups, organizations, marketplaces and service platforms.", Smartphone],
  ["AI Solutions", "Machine learning, generative AI, automation and intelligent workflows for real business problems.", BrainCircuit],
  ["Branding & UI/UX", "Clean visual identity, product interfaces, brand systems and user experience design.", Palette],
  ["Business Automation", "Digital workflows, admin panels, reporting tools and systems that reduce manual work.", Workflow],
  ["Technical Consulting", "Guidance for founders, NGOs, students, startups and institutions building digital products.", Sparkles],
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050914] text-white">
      <section className="section-shell">
        <div className="container-shell">
          <Link href="/" className="inline-flex items-center gap-2 text-[#F0B33D]">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
            Services
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black md:text-7xl">
            Digital solutions for businesses, founders and organizations.
          </h1>

          <p className="mt-6 max-w-3xl leading-8 text-white/65">
            Nexora Technologies helps turn ideas into modern digital products through
            software engineering, design, AI, automation and strategic technology support.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(([title, description, Icon]) => (
              <div key={title as string} className="card-glass p-7">
                <Icon className="h-10 w-10 text-[#F0B33D]" />
                <h2 className="mt-6 text-2xl font-black">{title as string}</h2>
                <p className="mt-4 leading-8 text-white/65">{description as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

