import { profile } from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050914]/90 px-6 py-4 text-white backdrop-blur md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#" className="leading-none">
          <p className="text-2xl font-black tracking-widest text-[#F0B33D]">
            NEXORA
          </p>
          <p className="text-xs uppercase tracking-[0.45em] text-white/55">
            Technologies
          </p>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/70 lg:flex">
          {["About", "Projects", "Skills", "Research", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition hover:text-[#F0B33D]"
            >
              {item}
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

