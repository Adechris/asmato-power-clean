import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Phone, MessageCircle, Mail, Clock, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/layout/Chrome";
import { SITE, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Asmato — Cleaning & Fumigation in Ogbomoso" },
      { name: "description", content: "Call, WhatsApp, email or visit Asmato Laundry and Cleaning Services in Ogbomoso, Oyo State." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <section className="bg-deep-blue py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sky-brand text-xs uppercase tracking-wider">Home → Contact</div>
          <h1 className="display-h text-white text-4xl md:text-6xl mt-4">Get In Touch <span className="text-sky-brand">With Us</span></h1>
          <p className="text-white/70 mt-5 max-w-xl">We're always available — call, WhatsApp, or send us a message.</p>
          <div className="w-24 h-1 bg-sky-brand mt-6" />
        </div>
      </section>

      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white shadow-2xl border-t-4 border-sky-brand p-6 md:p-10">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="mx-auto w-20 h-20 rounded-full bg-sky-brand flex items-center justify-center">
                  <CheckCircle2 size={44} className="text-white" />
                </div>
                <h3 className="display-h text-deep-blue text-2xl mt-6">Message Sent</h3>
                <p className="text-steel mt-3">We'll respond within a few hours!</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <h2 className="display-h text-deep-blue text-2xl uppercase">Send a Message</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input required name="name" placeholder="Full name" className="w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue" />
                  <input required name="email" type="email" placeholder="Email" className="w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue" />
                </div>
                <input required name="phone" type="tel" placeholder="Phone" className="w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue" />
                <select required defaultValue="" className="w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue bg-white">
                  <option value="" disabled>Subject…</option>
                  {["General Inquiry", "Request a Quote", "Complaint", "Partnership", "Other"].map(o => <option key={o}>{o}</option>)}
                </select>
                <textarea required rows={5} placeholder="Your message..." className="w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue resize-none" />
                <button type="submit" className="w-full bg-sky-brand hover:bg-sky-dark text-white font-display uppercase tracking-widest py-3.5 text-sm">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-4">
            <InfoCard icon={<MapPin size={20} />} label="Address" value={SITE.address} />
            <InfoCard icon={<Phone size={20} />} label="Phone" value={SITE.phone} href={SITE.phoneHref} />
            <a
              href={whatsappUrl("Hello Asmato! I need cleaning/fumigation services.")}
              target="_blank" rel="noreferrer"
              className="block bg-sky-brand hover:bg-sky-dark text-white p-6 shadow-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageCircle size={28} />
                <div>
                  <div className="label-caps text-white/80 text-[11px]">WhatsApp</div>
                  <div className="font-display text-2xl uppercase">Chat With Us →</div>
                </div>
              </div>
            </a>
            <InfoCard icon={<Mail size={20} />} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <InfoCard icon={<Clock size={20} />} label="Working Hours" value={`${SITE.hoursWeek}\n${SITE.hoursSun}`} />

            <div className="bg-sky-brand border-l-4 border-deep-blue p-6 shadow-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle size={26} className="text-deep-blue shrink-0" />
                <div>
                  <div className="display-h text-deep-blue text-xl uppercase">Need Emergency Cleaning?</div>
                  <p className="text-deep-blue/90 text-sm mt-1">Call or WhatsApp us NOW — we respond within the hour.</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <a href={SITE.phoneHref} className="bg-deep-blue text-white px-4 py-2 text-sm font-semibold">Call Now</a>
                    <a href={whatsappUrl("Emergency cleaning needed!")} className="bg-white text-deep-blue px-4 py-2 text-sm font-semibold">WhatsApp Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="max-w-7xl mx-auto px-4 mt-12">
          <div className="border-4 border-sky-brand shadow-2xl overflow-hidden">
            <iframe
              title="Ogbomoso Map"
              src="https://maps.google.com/maps?q=Ogbomoso%2C%20Oyo%20State%2C%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function InfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="bg-white p-6 shadow-lg border-l-4 border-sky-brand flex items-start gap-4 hover:shadow-xl transition-shadow">
      <div className="text-sky-brand mt-1">{icon}</div>
      <div>
        <div className="label-caps text-sky-brand text-[11px]">{label}</div>
        <div className="text-deep-blue font-semibold mt-1 whitespace-pre-line">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}
