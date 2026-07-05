import Image from "next/image";
import { profile } from "@/data/portfolio";

const links = [
  ["Company", "#about"],
  ["Solutions", "/services"],
  ["Products", "/products"],
  ["Research", "/research"],
  ["Founder", "/founder"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050914]/90 px-6 py-4 text-white backdrop-blur md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="/" className="rounded-xl bg-white px-3 py-2">
          <Image
            src="/images/logo/nexora-logo.jpeg"
            alt="Nexora Technologies Logo"
            width={170}
            height={60}
            priority
            className="h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/70 lg:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-[#F0B33D]">
              {label}
            </a>
          ))}
        </nav>

        <a
          href={profile.whatsapp}
          target="_blank"
          className="rounded-full bg-[#F0B33D] px-5 py-3 text-sm font-bold text-[#050914] transition hover:bg-white"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
