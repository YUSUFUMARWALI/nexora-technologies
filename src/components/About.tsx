export default function About() {
  return (
    <section id="about" className="px-6 py-16 text-white md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
            About
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Building useful technology with purpose.
          </h2>

          <p className="mt-6 leading-8 text-white/70">
            I am Yusuf Umar Wali, a software developer, AI enthusiast and founder
            of Nexora Technologies. My work focuses on building practical digital
            products that solve real problems across web, mobile, automation,
            artificial intelligence and business technology.
          </p>

          <p className="mt-5 leading-8 text-white/70">
            My goal is to build products that are clean, scalable and valuable,
            especially for organizations, startups, communities and institutions
            that need reliable technology to grow.
          </p>
        </div>

        <div className="rounded-3xl border border-[#F0B33D]/30 bg-[#F0B33D]/10 p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#F0B33D]">
            Mission
          </p>

          <h3 className="mt-4 text-2xl font-black">
            Turning ideas into digital products.
          </h3>

          <p className="mt-5 leading-8 text-white/70">
            Through Nexora Technologies, I aim to help individuals, businesses
            and organizations transform ideas into professional digital systems.
          </p>
        </div>
      </div>
    </section>
  );
}
