import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers3, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-20 text-white md:px-16 md:pb-20 md:pt-24 lg:px-24">
      <div className="premium-grid absolute inset-0 -z-30" />
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F0B33D]/30 bg-[#F0B33D]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#F0B33D] backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Digital Products • AI • Software Engineering
          </div>

          <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-[5.6rem]">
            Technology built for
            <span className="block bg-gradient-to-r from-[#F0B33D] via-white to-[#6BA7FF] bg-clip-text text-transparent">
              real-world impact.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
            Nexora Technologies designs and builds modern digital products across
            web, mobile, artificial intelligence and business automation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/products" className="btn-gold inline-flex items-center gap-2">
              Explore Products
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link href="/contact" className="btn-ghost inline-flex items-center gap-2">
              Start a Project
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/45">
            <span>Web Platforms</span>
            <span>Mobile Products</span>
            <span>Applied AI</span>
            <span>Automation</span>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-lg lg:block">
          <div className="hero-depth-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F0B33D]/10 via-transparent to-[#0B4EA2]/20" />

            <div className="relative">
              <div className="rounded-2xl bg-white p-4">
                <Image
                  src="/images/logo/nexora-logo.jpeg"
                  alt="Nexora Technologies"
                  width={700}
                  height={250}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="floating-mini-card rounded-2xl border border-white/10 bg-black/30 p-5">
                  <Layers3 className="h-7 w-7 text-[#F0B33D]" />
                  <p className="mt-4 text-2xl font-black">6+</p>
                  <p className="mt-1 text-sm text-white/50">Digital products</p>
                </div>

                <div className="floating-mini-card floating-delay rounded-2xl border border-white/10 bg-black/30 p-5">
                  <Zap className="h-7 w-7 text-[#F0B33D]" />
                  <p className="mt-4 text-2xl font-black">4</p>
                  <p className="mt-1 text-sm text-white/50">Core capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
