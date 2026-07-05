import { Compass, Target } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 py-12 text-white md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
              About Nexora
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
              Engineering useful technology with clarity, purpose and ambition.
            </h2>

            <p className="mt-6 max-w-4xl leading-8 text-white/65">
              Nexora Technologies is a technology company focused on transforming
              ideas and real-world challenges into modern digital products. We
              build web platforms, mobile applications, intelligent systems and
              automation solutions for organizations, businesses and communities.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-[#F0B33D]/25 bg-[#F0B33D]/10 p-7">
              <Target className="h-8 w-8 text-[#F0B33D]" />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-[#F0B33D]">
                Mission
              </p>
              <p className="mt-3 leading-7 text-white/70">
                Turn meaningful ideas into reliable, scalable and accessible
                digital products.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#6BA7FF]/20 bg-[#0B4EA2]/15 p-7">
              <Compass className="h-8 w-8 text-[#6BA7FF]" />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-[#6BA7FF]">
                Vision
              </p>
              <p className="mt-3 leading-7 text-white/70">
                Grow into a technology company recognized for practical innovation
                and products that create measurable impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
