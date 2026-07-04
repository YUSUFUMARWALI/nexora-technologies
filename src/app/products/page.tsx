import Link from "next/link";
import { ArrowLeft, ExternalLink, Rocket } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#050914] text-white">
      <section className="section-shell">
        <div className="container-shell">
          <Link href="/" className="inline-flex items-center gap-2 text-[#F0B33D]">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
            Products
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black md:text-7xl">
            Digital products built for real-world impact.
          </h1>

          <p className="mt-6 max-w-3xl leading-8 text-white/65">
            Nexora Technologies builds platforms across fintech, logistics,
            education, security, aviation, nonprofit technology and digital
            transformation.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.link}
                target={project.link === "#" ? "_self" : "_blank"}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#F0B33D]/60"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-bold text-[#F0B33D]">
                      0{index + 1}
                    </p>

                    <h2 className="mt-4 text-3xl font-black">
                      {project.name}
                    </h2>
                  </div>

                  {project.link !== "#" ? (
                    <ExternalLink className="h-6 w-6 text-[#F0B33D]" />
                  ) : (
                    <Rocket className="h-6 w-6 text-[#F0B33D]" />
                  )}
                </div>

                <p className="mt-5 leading-8 text-white/65">
                  {project.description}
                </p>

                <span className="mt-7 inline-block rounded-full border border-[#F0B33D]/40 px-4 py-2 text-xs font-bold text-[#F0B33D]">
                  {project.status}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
