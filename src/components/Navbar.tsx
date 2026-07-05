"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  ["Company", "/#about"],
  ["Solutions", "/services"],
  ["Products", "/products"],
  ["Research", "/research"],
  ["Founder", "/founder"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050914]/85 px-5 py-3 text-white backdrop-blur-xl md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="rounded-xl bg-white px-2.5 py-1.5">
            <Image
              src="/images/logo/nexora-logo.jpeg"
              alt="Nexora Technologies Logo"
              width={170}
              height={60}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-white/65 lg:flex">
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="transition hover:text-[#F0B33D]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-[#F0B33D] px-5 py-2.5 text-sm font-bold text-[#050914] transition hover:bg-white sm:block"
            >
              Hire Me
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[120] bg-[#050914]/95 p-5 text-white backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex h-full max-w-2xl flex-col">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-white px-2.5 py-1.5"
              >
                <Image
                  src="/images/logo/nexora-logo.jpeg"
                  alt="Nexora Technologies Logo"
                  width={170}
                  height={60}
                  className="h-9 w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-12 grid gap-2">
              {links.map(([label, href], index) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-2xl font-black transition hover:border-white/10 hover:bg-white/5"
                >
                  <span>{label}</span>

                  <span className="text-sm font-bold text-[#F0B33D]">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-auto rounded-[2rem] border border-[#F0B33D]/25 bg-[#F0B33D]/10 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F0B33D]">
                Have a project?
              </p>

              <p className="mt-3 text-white/60">
                Start a conversation with Nexora Technologies.
              </p>

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-5 inline-flex"
              >
                Contact Nexora
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
