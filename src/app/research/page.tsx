import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, BrainCircuit, CreditCard, ShieldCheck } from "lucide-react";

const publication = {
  title:
    "Comparative Analysis on Credit Card Fraud Detection Using Machine Learning Algorithms",
  journal: "IRE Journals",
  role: "Co-author",
  authors: ["Yusuf Umar Wali", "Ahmad Haruna", "Ahmad Umar Barmo"],
  link: "https://www.irejournals.com/formatedpaper/1705531.pdf",
  topics: ["Machine Learning", "Credit Card Fraud", "FinTech", "AI Security"],
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#050914] text-white">
      <section className="section-shell">
        <div className="container-shell">
          <Link href="/" className="inline-flex items-center gap-2 text-[#F0B33D]">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
            Research
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-black md:text-7xl">
            Research-driven thinking for intelligent digital products.
          </h1>

          <p className="mt-6 max-w-3xl leading-8 text-white/65">
            Nexora Technologies connects practical software engineering with
            research in artificial intelligence, machine learning, financial
            technology, security and digital transformation.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Machine Learning", "Applied intelligence for real-world decision systems.", BrainCircuit],
              ["FinTech Security", "Fraud detection, financial systems and trust-focused digital infrastructure.", CreditCard],
              ["Responsible Innovation", "Building solutions with purpose, reliability and measurable value.", ShieldCheck],
            ].map(([title, text, Icon]) => (
              <div key={title as string} className="card-glass p-7">
                <Icon className="h-10 w-10 text-[#F0B33D]" />
                <h2 className="mt-6 text-2xl font-black">{title as string}</h2>
                <p className="mt-4 leading-8 text-white/65">{text as string}</p>
              </div>
            ))}
          </div>

          <article className="mt-12 rounded-[2rem] border border-[#F0B33D]/30 bg-[#F0B33D]/10 p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full bg-green-400/15 px-4 py-2 text-xs font-bold text-green-300">
                Published Research
              </span>

              <span className="text-sm font-semibold text-white/55">
                {publication.journal}
              </span>
            </div>

            <BookOpen className="mt-10 h-12 w-12 text-[#F0B33D]" />

            <h2 className="mt-6 max-w-5xl text-3xl font-black leading-tight md:text-5xl">
              {publication.title}
            </h2>

            <div className="mt-6">
              <p className="text-sm text-white/50">Authors</p>
              <p className="mt-2 font-semibold text-white/85">
                {publication.authors.join(" • ")}
              </p>
            </div>

            <p className="mt-6 leading-8 text-white/70">
              This publication examines machine learning approaches for detecting
              fraudulent credit card transactions, focusing on how intelligent
              algorithms can support stronger financial security and fraud
              prevention systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {publication.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-7">
              <div>
                <p className="text-sm text-white/50">Contribution</p>
                <p className="mt-1 font-bold">{publication.role}</p>
              </div>

              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                Read Publication
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}


