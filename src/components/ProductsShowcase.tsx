import { ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function ProductsShowcase() {
  return (
    <section id="products" className="section-shell text-white">
      <div className="container-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
              Products
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
              Building the future, one product at a time.
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-white/65">
              Every solution we build is designed to solve real-world challenges
              through technology, innovation and human-centered design.
            </p>
          </div>

          <div className="rounded-3xl border border-[#F0B33D]/30 bg-[#F0B33D]/10 p-5">
            <p className="text-3xl font-black text-[#F0B33D]">6+</p>
            <p className="text-sm text-white/65">Products & platforms</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6">
          {projects.map((project, index) => {
            const isLive = project.status === "Live";

            return (
              <a
                key={project.name}
                href={project.link}
                target={project.link === "#" ? "_self" : "_blank"}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition hover:border-[#F0B33D]/60"
              >
                <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative min-h-[240px] bg-gradient-to-br from-[#0B4EA2]/40 via-[#F0B33D]/10 to-black p-8">
                    <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.22)_1px,transparent_0)] [background-size:22px_22px]" />

                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-bold text-white/75">
                          0{index + 1}
                        </span>

                        <span
                          className={`rounded-full px-4 py-2 text-xs font-bold ${
                            isLive
                              ? "bg-green-400/15 text-green-300"
                              : "bg-[#F0B33D]/15 text-[#F0B33D]"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <div>
                        <Sparkles className="mb-4 h-10 w-10 text-[#F0B33D]" />
                        <h3 className="text-3xl font-black">{project.name}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="max-w-3xl leading-8 text-white/70">
                      {project.description}
                    </p>

                    {isLive && (
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {[
                          "Live Website",
                          "SEO Optimized",
                          "Google Analytics",
                          "Vercel Deployment",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-sm text-white/70"
                          >
                            <ShieldCheck className="h-5 w-5 text-[#F0B33D]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-7 inline-flex items-center gap-2 font-bold text-[#F0B33D]">
                      {isLive ? "View Live Project" : "View Product Story"}
                      {project.link !== "#" && <ExternalLink className="h-5 w-5" />}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
