import Image from "next/image";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-16 text-white md:px-16 lg:px-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(240,179,61,0.22),transparent_35%),radial-gradient(circle_at_10%_85%,rgba(11,78,162,0.25),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-block rounded-full border border-[#F0B33D]/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#F0B33D]">
            Software Developer • AI Enthusiast • Product Builder
          </p>

          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Yusuf <span className="text-[#F0B33D]">Umar</span> Wali
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/75">
            Founder of <span className="font-bold text-[#F0B33D]">Nexora Technologies</span>,
            building scalable digital products across web, mobile, AI and automation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={profile.whatsapp} target="_blank" className="inline-flex items-center gap-2 rounded-xl bg-[#F0B33D] px-5 py-3 font-bold text-[#050914]">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>

            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-bold hover:border-[#F0B33D]">
              <Mail className="h-5 w-5" /> Email
            </a>

            <a href={profile.instagram} target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-bold hover:border-[#F0B33D]">
              <FaInstagram className="h-5 w-5" /> Instagram
            </a>

            <a href={profile.github} target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-bold hover:border-[#F0B33D]">
              <FaGithub className="h-5 w-5" /> GitHub
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-white/65">
            <MapPin className="h-4 w-4 text-[#F0B33D]" />
            {profile.location}
          </p>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <Image
              src="/images/profile/yusuf.png"
              alt="Yusuf Umar Wali"
              width={520}
              height={720}
              priority
              className="mx-auto object-contain"
            />

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#050914]/80 p-5">
              <p className="font-bold text-[#F0B33D]">Personal Info</p>
              <p className="mt-3 text-sm text-white/70">
                Born: 15 March 2000, Wednesday
              </p>
              <p className="mt-2 text-sm text-white/70">
                Gusau, Zamfara State, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



