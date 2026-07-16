import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/layout/Chrome";
import teamImg from "@/assets/team.jpg";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";
import team4 from "@/assets/team4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Asmato — Cleaning Ogbomoso, One Space at a Time" },
      { name: "description", content: "Learn about Asmato Laundry and Cleaning Services — the story, mission, values and team behind Ogbomoso's most trusted cleaning company." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative bg-deep-blue py-32 md:py-40 overflow-hidden">
        <img src={teamImg} alt="Team" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/95 to-accent-dark/90" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-sky-brand text-xs uppercase tracking-wider">Home → About</div>
          <h1 className="display-h text-white text-4xl md:text-6xl mt-4 max-w-3xl">
            Cleaning Ogbomoso,<br />
            <span className="text-sky-brand">One Space</span> at a Time.
          </h1>
          <div className="w-24 h-1 bg-sky-brand mt-6" />
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="label-caps text-sky-brand mb-4">Our Story</div>
            <h2 className="display-h text-deep-blue text-4xl md:text-5xl">Built in Ogbomoso. Trusted Everywhere.</h2>
            <p className="mt-6 text-steel leading-relaxed">
              Asmato started as a small family-run cleaning service in the heart of Ogbomoso. Founded with a single mop, a hard-working team, and an obsession with doing the job right — we grew because our clients kept coming back.
            </p>
            <p className="mt-4 text-steel leading-relaxed">
              Today, Asmato serves hundreds of homes, offices, factories, and businesses across Oyo State. We've invested in industrial equipment, licensed fumigation training, and a growing team of uniformed professionals — but we still show up with the same commitment we started with.
            </p>
            <blockquote className="mt-8 border-l-4 border-sky-brand bg-off-white p-6">
              <p className="italic text-deep-blue">
                "From a single client to serving all of Ogbomoso — every space we clean, we treat like our own home."
              </p>
            </blockquote>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            src={teamImg} alt="Founder and team"
            className="w-full h-[560px] object-cover shadow-2xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-off-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="bg-deep-blue border-t-4 border-sky-brand p-10 md:p-12">
            <div className="text-4xl">🎯</div>
            <h3 className="display-h text-white text-3xl uppercase mt-4">Mission</h3>
            <p className="text-white/80 mt-4 leading-relaxed">
              To deliver the highest standard of cleaning and fumigation services that protect health, enhance environments, and exceed client expectations.
            </p>
          </div>
          <div className="bg-sky-brand p-10 md:p-12">
            <div className="text-4xl">👁️</div>
            <h3 className="display-h text-white text-3xl uppercase mt-4">Vision</h3>
            <p className="text-white/95 mt-4 leading-relaxed">
              To become the most trusted and recognized cleaning services company in Oyo State and across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="label-caps text-sky-brand">Our Values</div>
            <h2 className="display-h text-deep-blue text-4xl md:text-5xl mt-3">The Standards We Live By</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: "🏅", title: "Integrity" },
              { icon: "💧", title: "Cleanliness" },
              { icon: "⏰", title: "Reliability" },
              { icon: "❤️", title: "Client First" },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-off-white border-l-4 border-sky-brand p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl">{v.icon}</div>
                <div className="display-h text-deep-blue uppercase text-lg mt-4">{v.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-deep-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="label-caps text-sky-brand">Meet the Team</div>
            <h2 className="display-h text-white text-4xl md:text-5xl mt-3">The Professionals Behind Asmato</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { img: team1, name: "Samuel A.", role: "Operations Lead" },
              { img: team2, name: "Chinaza O.", role: "Cleaning Supervisor" },
              { img: team3, name: "Kunle B.", role: "Lead Fumigation Specialist" },
              { img: team4, name: "Adenike F.", role: "Client Success Manager" },
            ].map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="ring-4 ring-sky-brand overflow-hidden aspect-[3/4] shadow-2xl">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="mt-4 display-h text-white uppercase text-lg">{m.name}</div>
                <div className="text-sky-brand text-sm">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-off-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="label-caps text-sky-brand">Certifications & Equipment</div>
          <h2 className="display-h text-deep-blue text-3xl md:text-4xl mt-3 mb-10">Licensed. Equipped. Trusted.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Licensed Fumigator", "Health & Safety Certified", "Kärcher Equipment", "Eco-Safe Products", "NAFDAC Approved Chemicals"].map(c => (
              <span key={c} className="bg-white border-2 border-sky-brand/40 text-deep-blue px-5 py-3 font-semibold">
                ✅ {c}
              </span>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/book" className="bg-sky-brand hover:bg-sky-dark text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm inline-block">
              Book a Service
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
