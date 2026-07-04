import { ArrowUpRight, BookOpen, BrainCircuit, CreditCard, ShieldCheck } from "lucide-react";

const publication = {
  title:
    "Comparative Analysis on Credit Card Fraud Detection Using Machine Learning Algorithms",
  journal: "IRE Journals",
  role: "Co-author",
  topics: ["Machine Learning", "Fraud Detection", "FinTech", "Artificial Intelligence"],
  link: "https://www.irejournals.com/formatedpaper/1705531.pdf",
};

export default function ResearchPreview() {
  return (
    <section id="research" className="section-shell text-white">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="rounded-[2rem] border border-[#F0B33D]/30 bg-[#F0B33D]/10 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
              Research & Innovation
            </p>

            <h2 className="mt-5 text-4xl font-black">
              Engineering informed by research.
            </h2>

            <p className="mt-6 leading-8 text-white/70">
              Nexora values the connection between academic research and practical
              software engineering, exploring how intelligent technologies can
              address financial, social and business challenges.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="flex items-center gap-4 rounded-2xl bg-black/20 p-4">
                <BookOpen className="h-7 w-7 text-[#F0B33D]" />
                <div>
                  <p className="font-bold">Published Research</p>
                  <p className="text-sm text-white/55">Machine Learning</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-black/20 p-4">
                <BrainCircuit className="h-7 w-7 text-[#F0B33D]" />
                <div>
                  <p className="font-bold">AI Focus</p>
                  <p className="text-sm text-white/55">Applied Intelligence</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-black/20 p-4">
                <ShieldCheck className="h-7 w-7 text-[#F0B33D]" />
                <div>
                  <p className="font-bold">Real-World Problems</p>
                  <p className="text-sm text-white/55">Research to Solutions</p>
                </div>
              </div>
            </div>
          </div>

          <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-bold text-green-300">
                Published
              </span>

              <span className="text-sm font-semibold text-white/50">
                {publication.journal}
              </span>
            </div>

            <CreditCard className="mt-10 h-10 w-10 text-[#F0B33D]" />

            <h3 className="mt-6 max-w-4xl text-3xl font-black leading-tight md:text-4xl">
              {publication.title}
            </h3>

            <p className="mt-5 leading-8 text-white/65">
              A comparative machine learning study focused on credit card fraud
              detection and the application of intelligent algorithms to improve
              the identification of fraudulent financial transactions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {publication.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/65"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-7">
              <div>
                <p className="text-sm text-white/50">Contribution</p>
                <p className="mt-1 font-bold">{publication.role}</p>
              </div>

              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F0B33D] px-5 py-3 font-bold text-[#050914] transition hover:bg-white"
              >
                Read Publication
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
