import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-16 text-white md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
          Featured Work
        </p>

        <h2 className="mt-4 text-4xl font-black">
          Projects, products and platforms.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target={project.link === "#" ? "_self" : "_blank"}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-[#F0B33D]/60"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-black">{project.name}</h3>
                {project.link !== "#" && (
                  <ExternalLink className="h-5 w-5 text-[#F0B33D]" />
                )}
              </div>

              <p className="mt-5 leading-8 text-white/65">
                {project.description}
              </p>

              <span className="mt-6 inline-block rounded-full border border-[#F0B33D]/40 px-4 py-2 text-xs font-bold text-[#F0B33D]">
                {project.status}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
