"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Boxes,
  BrainCircuit,
  FlaskConical,
  Mail,
  Search,
  UserRound,
  X,
} from "lucide-react";

const actions = [
  {
    label: "Explore Products",
    description: "View Nexora products and platforms",
    href: "/products",
    icon: Boxes,
  },
  {
    label: "View Solutions",
    description: "Explore software, AI and automation capabilities",
    href: "/services",
    icon: BrainCircuit,
  },
  {
    label: "Research",
    description: "View published research and technology interests",
    href: "/research",
    icon: FlaskConical,
  },
  {
    label: "Meet the Founder",
    description: "Founder profile, education and certifications",
    href: "/founder",
    icon: UserRound,
  },
  {
    label: "Start a Project",
    description: "Contact Nexora Technologies",
    href: "/contact",
    icon: Mail,
  },
];

export default function CommandPalette() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const filteredActions = actions.filter((action) =>
    `${action.label} ${action.description}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  function navigate(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open quick navigation"
        className="fixed bottom-5 left-5 z-40 hidden items-center gap-2 rounded-full border border-white/10 bg-[#050914]/80 px-4 py-3 text-xs font-bold text-white/60 shadow-2xl backdrop-blur-xl transition hover:border-[#F0B33D]/50 hover:text-white md:flex"
      >
        <Search className="h-4 w-4 text-[#F0B33D]" />
        Quick Navigate
        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/40">
          Ctrl K
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Quick navigation"
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-5 pt-[12vh] backdrop-blur-md"
          onMouseDown={() => setOpen(false)}
        >
          <div
            className="command-panel w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#090E1B]/95 shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5">
              <Search className="h-5 w-5 text-[#F0B33D]" />

              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Where do you want to go?"
                className="h-16 flex-1 bg-transparent text-white outline-none placeholder:text-white/30"
              />

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close quick navigation"
                className="rounded-full border border-white/10 p-2 text-white/50 transition hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto p-3">
              {filteredActions.length > 0 ? (
                filteredActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <button
                      type="button"
                      key={action.label}
                      onClick={() => navigate(action.href)}
                      className="group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition hover:bg-white/[0.06]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#F0B33D]">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="flex-1">
                        <span className="block font-bold text-white">
                          {action.label}
                        </span>

                        <span className="mt-1 block text-sm text-white/45">
                          {action.description}
                        </span>
                      </span>

                      <span className="text-white/20 transition group-hover:text-[#F0B33D]">
                        →
                      </span>
                    </button>
                  );
                })
              ) : (
                <p className="px-4 py-10 text-center text-white/40">
                  No destination found.
                </p>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 text-xs text-white/30">
              <span>Nexora Quick Navigator</span>
              <span>ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
