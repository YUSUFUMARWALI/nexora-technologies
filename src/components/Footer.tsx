import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { profile } from "@/data/portfolio";

const links = [
  ["Company", "#about"],
  ["Solutions", "#services"],
  ["Products", "#products"],
  ["Founder", "/founder"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-white md:px-16 lg:px-24">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="text-2xl font-black tracking-widest text-[#F0B33D]">
              NEXORA
            </p>
            <p className="text-xs uppercase tracking-[0.45em] text-white/55">
              Technologies
            </p>
            <p className="mt-5 max-w-md leading-8 text-white/60">
              Building technology that creates real-world impact through web,
              mobile, AI, automation and human-centered design.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#F0B33D]">Navigate</h3>
            <div className="mt-5 grid gap-3 text-white/65">
              {links.map(([label, href]) => (
                <Link key={label} href={href} className="hover:text-[#F0B33D]">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#F0B33D]">Contact</h3>

            <div className="mt-5 grid gap-3">
              <a href={profile.whatsapp} target="_blank" className="inline-flex items-center gap-3 text-white/65 hover:text-[#F0B33D]">
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>

              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 text-white/65 hover:text-[#F0B33D]">
                <Mail className="h-5 w-5" />
                {profile.email}
              </a>

              <a href={profile.instagram} target="_blank" className="inline-flex items-center gap-3 text-white/65 hover:text-[#F0B33D]">
                <FaInstagram className="h-5 w-5" />
                Instagram
              </a>

              <a href={profile.github} target="_blank" className="inline-flex items-center gap-3 text-white/65 hover:text-[#F0B33D]">
                <FaGithub className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Nexora Technologies. All rights reserved.</p>
          <p>Founder: Yusuf Umar Wali</p>
        </div>
      </div>
    </footer>
  );
}
