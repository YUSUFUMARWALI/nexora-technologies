import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="px-6 py-12 text-white md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-7 rounded-[2rem] border border-[#F0B33D]/25 bg-gradient-to-r from-[#F0B33D]/15 via-white/[0.04] to-[#0B4EA2]/15 p-7 md:flex-row md:items-center md:justify-between md:p-9">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F0B33D]">
              Build With Nexora
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black md:text-4xl">
              Have a serious idea? Let&apos;s turn it into a working product.
            </h2>
          </div>

          <Link
            href="/contact"
            className="btn-gold inline-flex shrink-0 items-center justify-center gap-2"
          >
            Start a Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
