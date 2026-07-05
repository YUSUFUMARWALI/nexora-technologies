import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Boxes,
  FlaskConical,
  UserRound,
} from "lucide-react";

const gateways = [
  {
    title: "Solutions",
    text: "Web, mobile, AI, design and automation capabilities.",
    href: "/services",
    icon: BrainCircuit,
  },
  {
    title: "Products",
    text: "Explore platforms and products being built by Nexora.",
    href: "/products",
    icon: Boxes,
  },
  {
    title: "Research",
    text: "Published work and research-driven technology interests.",
    href: "/research",
    icon: FlaskConical,
  },
  {
    title: "Founder",
    text: "Meet the founder, explore education, work and certifications.",
    href: "/founder",
    icon: UserRound,
  },
];

export default function ExploreGateway() {
  return (
    <section className="px-6 py-12 text-white md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
              Explore Nexora
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Choose where you want to go next.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/50">
            The homepage stays focused. Detailed products, services, research and
            founder information live in dedicated spaces.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {gateways.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="gateway-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#F0B33D]/10 blur-2xl transition group-hover:bg-[#F0B33D]/20" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <Icon className="h-8 w-8 text-[#F0B33D]" />
                    <ArrowUpRight className="h-5 w-5 text-white/35 transition group-hover:text-[#F0B33D]" />
                  </div>

                  <h3 className="mt-8 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/55">{item.text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
