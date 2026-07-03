import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="skills" className="px-6 py-16 text-white md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
            Education
          </p>

          <h2 className="mt-4 text-3xl font-black">Academic Journey</h2>

          <div className="mt-8 space-y-5">
            {education.map((item) => (
              <div key={item} className="rounded-2xl bg-white/5 p-5">
                <p className="text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
            Certifications
          </p>

          <h2 className="mt-4 text-3xl font-black">Professional Learning</h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
