import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, GraduationCap, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { certifications, education, profile } from "@/data/portfolio";

const publication = {
  title: "Comparative Analysis on Credit Card Fraud Detection Using Machine Learning Algorithms",
  journal: "IRE Journals",
  link: "https://www.irejournals.com/formatedpaper/1705531.pdf",
};

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-[#050914] text-white">
      <section className="section-shell">
        <div className="container-shell">
          <Link href="/" className="inline-flex items-center gap-2 text-[#F0B33D]">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="card-glass p-6">
              <Image
                src="/images/profile/yusuf.png"
                alt="Yusuf Umar Wali"
                width={520}
                height={720}
                priority
                className="mx-auto object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
                Founder
              </p>

              <h1 className="mt-4 text-5xl font-black md:text-7xl">
                Yusuf <span className="text-[#F0B33D]">Umar</span> Wali
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-9 text-white/70">
                Founder of Nexora Technologies, software developer, AI enthusiast
                and product builder focused on creating practical digital
                solutions across web, mobile, artificial intelligence and automation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={profile.whatsapp} target="_blank" className="btn-gold inline-flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>

                <a href={`mailto:${profile.email}`} className="btn-ghost inline-flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email
                </a>

                <a href={profile.instagram} target="_blank" className="btn-ghost inline-flex items-center gap-2">
                  <FaInstagram className="h-5 w-5" />
                  Instagram
                </a>

                <a href={profile.github} target="_blank" className="btn-ghost inline-flex items-center gap-2">
                  <FaGithub className="h-5 w-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div className="card-glass p-8">
            <GraduationCap className="h-9 w-9 text-[#F0B33D]" />
            <h2 className="mt-5 text-3xl font-black">Education</h2>

            <div className="mt-7 space-y-4">
              {education.map((item) => (
                <div key={item} className="rounded-2xl bg-white/5 p-5 text-white/70">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card-glass p-8">
            <ShieldCheck className="h-9 w-9 text-[#F0B33D]" />
            <h2 className="mt-5 text-3xl font-black">Certifications</h2>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {certifications.map((cert) => (
                <div key={cert} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container-shell">
          <div className="card-glass p-8 md:p-10">
            <BookOpen className="h-10 w-10 text-[#F0B33D]" />

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
              Research Publication
            </p>

            <h2 className="mt-4 max-w-5xl text-3xl font-black md:text-5xl">
              {publication.title}
            </h2>

            <p className="mt-5 leading-8 text-white/65">
              Co-authored publication in {publication.journal}, focused on
              applying machine learning algorithms to credit card fraud detection
              and financial technology security.
            </p>

            <a href={publication.link} target="_blank" className="btn-gold mt-8 inline-block">
              Read Publication
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

