import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Code2, GraduationCap } from "lucide-react";

export default function FounderPreview() {
  return (
    <section id="founder" className="section-shell text-white">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-[#0B4EA2]/30 via-[#F0B33D]/10 to-[#050914] p-8">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] [background-size:24px_24px]" />

              <div className="relative flex h-full items-end justify-center">
                <Image
                  src="/images/profile/yusuf.png"
                  alt="Yusuf Umar Wali, Founder of Nexora Technologies"
                  width={500}
                  height={700}
                  className="max-h-[500px] w-auto object-contain"
                />
              </div>
            </div>

            <div className="p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
                Founder
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Technology, research and products with purpose.
              </h2>

              <p className="mt-6 leading-8 text-white/70">
                Yusuf Umar Wali is the founder of Nexora Technologies, a software
                developer, product builder and AI enthusiast focused on creating
                practical digital solutions across web, mobile, artificial
                intelligence and automation.
              </p>

              <p className="mt-5 leading-8 text-white/70">
                His work combines continuous academic development, published
                machine learning research and hands-on product development to
                build technology that addresses real-world challenges.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <GraduationCap className="h-7 w-7 text-[#F0B33D]" />
                  <p className="mt-4 font-bold">B.Sc. IT</p>
                  <p className="mt-1 text-sm text-white/55">Current Study</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <BookOpen className="h-7 w-7 text-[#F0B33D]" />
                  <p className="mt-4 font-bold">Published</p>
                  <p className="mt-1 text-sm text-white/55">ML Research</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Code2 className="h-7 w-7 text-[#F0B33D]" />
                  <p className="mt-4 font-bold">Product Builder</p>
                  <p className="mt-1 text-sm text-white/55">Web, Mobile & AI</p>
                </div>
              </div>

              <Link
                href="#founder"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F0B33D] px-5 py-3 font-bold text-[#050914] transition hover:bg-white"
              >
                Meet the Founder
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

