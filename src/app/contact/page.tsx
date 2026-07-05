import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, Send } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050914] text-white">
      <section className="section-shell">
        <div className="container-shell">
          <Link href="/" className="inline-flex items-center gap-2 text-[#F0B33D]">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
            Contact
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black md:text-7xl">
            Let&apos;s build something meaningful.
          </h1>

          <p className="mt-6 max-w-3xl leading-8 text-white/65">
            Reach out for websites, mobile apps, AI solutions, branding, automation,
            consulting, collaborations, or product development.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <a href={profile.whatsapp} target="_blank" className="card-glass p-7 hover:border-[#F0B33D]/60">
              <MessageCircle className="h-10 w-10 text-[#F0B33D]" />
              <h2 className="mt-6 text-2xl font-black">WhatsApp</h2>
              <p className="mt-3 text-white/60">Start a direct conversation.</p>
            </a>

            <a href={`mailto:${profile.email}`} className="card-glass p-7 hover:border-[#F0B33D]/60">
              <Mail className="h-10 w-10 text-[#F0B33D]" />
              <h2 className="mt-6 text-2xl font-black">Email</h2>
              <p className="mt-3 text-white/60">{profile.email}</p>
            </a>

            <a href={profile.instagram} target="_blank" className="card-glass p-7 hover:border-[#F0B33D]/60">
              <FaInstagram className="h-10 w-10 text-[#F0B33D]" />
              <h2 className="mt-6 text-2xl font-black">Instagram</h2>
              <p className="mt-3 text-white/60">@nexora_techng</p>
            </a>

            <a href={profile.github} target="_blank" className="card-glass p-7 hover:border-[#F0B33D]/60">
              <FaGithub className="h-10 w-10 text-[#F0B33D]" />
              <h2 className="mt-6 text-2xl font-black">GitHub</h2>
              <p className="mt-3 text-white/60">View projects and code.</p>
            </a>
          </div>

          <div className="mt-12 rounded-[2rem] border border-[#F0B33D]/30 bg-[#F0B33D]/10 p-8 md:p-10">
            <Send className="h-10 w-10 text-[#F0B33D]" />
            <h2 className="mt-6 text-3xl font-black">Project Inquiry</h2>
            <p className="mt-4 max-w-3xl leading-8 text-white/70">
              Tell me what you want to build, the problem you want to solve, and
              your preferred timeline. I&apos;ll respond with the best next steps.
            </p>

            <a href={profile.whatsapp} target="_blank" className="btn-gold mt-8 inline-block">
              Discuss a Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

