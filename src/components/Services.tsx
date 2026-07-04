import { BrainCircuit, Code2, Palette, Smartphone, Sparkles, Workflow } from "lucide-react";

const services = [
  {
    title: "Web Platforms",
    description:
      "Modern, fast and SEO-ready websites and web applications built for organizations, startups and institutions.",
    icon: Code2,
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform Android and iOS applications designed for real users, clean interfaces and scalable growth.",
    icon: Smartphone,
  },
  {
    title: "AI Solutions",
    description:
      "Machine learning, automation and intelligent systems that help businesses solve complex problems.",
    icon: BrainCircuit,
  },
  {
    title: "Branding & Design",
    description:
      "Professional visual identity, UI/UX design and digital branding for modern businesses and products.",
    icon: Palette,
  },
  {
    title: "Business Automation",
    description:
      "Digital workflows, dashboards and tools that reduce manual work and improve business operations.",
    icon: Workflow,
  },
  {
    title: "Digital Strategy",
    description:
      "Technical consulting for founders, NGOs, startups and organizations building digital products.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell text-white">
      <div className="container-shell">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
          Solutions
        </p>

        <h2 className="mt-4 max-w-3xl text-4xl font-black">
          Intelligent software solutions for real-world impact.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="card-glass p-7 transition hover:border-[#F0B33D]/50"
              >
                <Icon className="h-9 w-9 text-[#F0B33D]" />

                <h3 className="mt-6 text-2xl font-black">{service.title}</h3>

                <p className="mt-4 leading-8 text-white/65">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

