import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function ContactCTA() {
  return (
    <section id="contact" className="section-shell text-white">
      <div className="container-shell">
        <div className="rounded-[2rem] border border-[#F0B33D]/30 bg-gradient-to-br from-[#F0B33D]/20 via-white/[0.04] to-[#0B4EA2]/20 p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
            Let&apos;s Build
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black md:text-6xl">
            Have an idea, project or product? Let&apos;s turn it into reality.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/70">
            Nexora Technologies helps individuals, startups, NGOs and businesses
            build modern digital products with strong design, clean engineering
            and real-world purpose.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={profile.whatsapp} target="_blank" className="btn-gold inline-flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            <a href={`mailto:${profile.email}`} className="btn-ghost inline-flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Send Email
            </a>

            <a href="#products" className="btn-ghost inline-flex items-center gap-2">
              View Products
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
