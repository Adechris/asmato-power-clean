import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/layout/Chrome";
import { SERVICES } from "@/lib/site";
import commercialImg from "@/assets/commercial.jpg";
import industrialImg from "@/assets/industrial.jpg";
import windowImg from "@/assets/window.jpg";
import upholsteryImg from "@/assets/upholstery.jpg";
import domesticImg from "@/assets/domestic.jpg";
import fumigationImg from "@/assets/fumigation.jpg";
import heroImg from "@/assets/hero-cleaner.jpg";

const IMG: Record<string, string> = {
  commercial: commercialImg, industrial: industrialImg, window: windowImg,
  upholstery: upholsteryImg, domestic: domesticImg, fumigation: fumigationImg,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Asmato Cleaning & Fumigation" },
      { name: "description", content: "Commercial, industrial, window, upholstery, domestic cleaning and licensed fumigation services in Ogbomoso, Nigeria." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <PageShell>
      <section className="relative bg-deep-blue py-32 overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/95 to-accent-dark/90" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-sky-brand text-xs uppercase tracking-wider">Home → Services</div>
          <h1 className="display-h text-white text-4xl md:text-6xl mt-4 max-w-3xl">
            Six Services.<br />
            <span className="text-sky-brand">One Trusted Team.</span>
          </h1>
          <div className="w-24 h-1 bg-sky-brand mt-6" />
        </div>
      </section>

      <div className="bg-white">
        {SERVICES.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <section key={s.slug} className={`py-20 md:py-28 ${i % 2 === 1 ? "bg-off-white" : "bg-white"}`}>
              <div className="max-w-7xl mx-auto px-4">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <img src={IMG[s.image]} alt={s.name} className="w-full h-[440px] object-cover shadow-2xl" loading="lazy" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="display-h text-sky-brand text-6xl opacity-40">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="display-h text-deep-blue text-3xl md:text-4xl uppercase mt-2">
                      {s.icon} {s.name}
                    </h2>
                    <p className="text-steel mt-4 leading-relaxed">{s.short}</p>
                    <p className="text-steel mt-3 leading-relaxed">
                      Our team brings the equipment, the products, and the discipline — so you get consistent, professional results every single time.
                    </p>

                    <div className="mt-6">
                      <div className="label-caps text-sky-brand mb-3">What's Included</div>
                      <ul className="space-y-2">
                        {s.included.map(item => (
                          <li key={item} className="flex gap-2 text-deep-blue">
                            <CheckCircle2 size={18} className="text-sky-brand shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <div className="label-caps text-sky-brand mb-2">Ideal For</div>
                      <p className="text-deep-blue">{s.idealFor}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.equipment.map(e => (
                        <span key={e} className="text-xs bg-sky-brand/10 text-sky-dark border border-sky-brand/30 px-3 py-1 font-semibold">
                          {e}
                        </span>
                      ))}
                    </div>

                    {s.slug === "fumigation" && (
                      <div className="mt-6 bg-sky-brand/10 border-l-4 border-sky-brand p-5 text-deep-blue text-sm">
                        <strong>Safety note:</strong> All our fumigation chemicals are approved and safe for use around children and pets after the recommended 4–6 hour re-entry period.
                      </div>
                    )}

                    <Link to="/book" className="mt-8 inline-flex bg-sky-brand hover:bg-sky-dark text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm">
                      Book This Service
                    </Link>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </PageShell>
  );
}
