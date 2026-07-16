import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/layout/Chrome";
import { SITE, SERVICES, whatsappUrl } from "@/lib/site";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Service — Asmato Cleaning & Fumigation" },
      { name: "description", content: "Book professional cleaning or fumigation services in Ogbomoso. Fill the form and we'll confirm within 2 hours." },
    ],
  }),
  component: Book,
});

function genRef() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `ASM-2025-${n}`;
}

function Book() {
  const [submitted, setSubmitted] = useState<{ name: string; service: string; ref: string } | null>(null);
  const [sameWa, setSameWa] = useState(true);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSubmitted({
      name: String(fd.get("name") || "Client"),
      service: String(fd.get("service") || "Cleaning"),
      ref: genRef(),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <PageShell>
      <section className="bg-gradient-to-br from-sky-brand to-sky-dark py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="display-h text-white text-4xl md:text-6xl">Book Your Cleaning Service</h1>
          <p className="text-white/90 mt-5 max-w-xl mx-auto">
            Fill the form below and we'll contact you within 2 hours to confirm your booking.
          </p>
        </div>
      </section>

      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-white shadow-2xl border-t-4 border-sky-brand p-8 md:p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.1 }}
                className="mx-auto w-20 h-20 rounded-full bg-sky-brand flex items-center justify-center"
              >
                <CheckCircle2 size={44} className="text-white" />
              </motion.div>
              <h2 className="display-h text-deep-blue text-3xl md:text-4xl mt-6">Booking Received! 🎉</h2>
              <p className="text-steel mt-4">
                Thank you <strong>{submitted.name}</strong>! Your booking request for <strong>{submitted.service}</strong> has been received. Our team will call or WhatsApp you within 2 hours to confirm.
              </p>
              <div className="mt-6 inline-block bg-off-white border border-brand-border px-6 py-3">
                <div className="label-caps text-sky-brand text-xs">Booking Reference</div>
                <div className="display-h text-deep-blue text-2xl mt-1">{submitted.ref}</div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappUrl(`Hello Asmato! I just submitted a booking (Ref: ${submitted.ref}) for ${submitted.service}. Please confirm.`)}
                  target="_blank" rel="noreferrer"
                  className="bg-[#25D366] hover:opacity-90 text-white font-semibold px-6 py-3 inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18}/> Send on WhatsApp
                </a>
                <Link to="/" className="border-2 border-deep-blue text-deep-blue px-6 py-3 font-semibold uppercase tracking-wide text-sm">
                  Back to Home
                </Link>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="bg-white shadow-2xl border-t-4 border-sky-brand p-6 md:p-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" required />
                <Field label="Phone Number" name="phone" type="tel" required />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-deep-blue">
                  <input type="checkbox" checked={sameWa} onChange={e => setSameWa(e.target.checked)} className="accent-sky-brand w-4 h-4"/>
                  WhatsApp number same as phone
                </label>
                {!sameWa && <Field className="mt-3" label="WhatsApp Number" name="whatsapp" type="tel" />}
              </div>
              <Field label="Email (optional)" name="email" type="email" />

              <div className="grid md:grid-cols-2 gap-5">
                <Select label="Service Type" name="service" required options={[...SERVICES.map(s => s.name), "Multiple Services"]} />
                <Select label="Property Type" name="property" required options={["Home", "Office", "Factory", "Warehouse", "School", "Church", "Other"]} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Preferred Date" name="date" type="date" required min={new Date().toISOString().slice(0,10)} />
                <Select label="Preferred Time Slot" name="time" required options={["Morning (7AM–12PM)", "Afternoon (12PM–4PM)", "Evening (4PM–7PM)"]} />
              </div>

              <Textarea label="Location / Address in Ogbomoso" name="address" required rows={2} />
              <Textarea label="Additional details" name="details" placeholder="Tell us more about your space or specific concerns..." rows={3} />
              <Select label="How did you hear about us?" name="referral" options={["Google Search", "Facebook / Instagram", "Friend / Family", "Passed by our team", "WhatsApp", "Other"]} />

              <button type="submit" className="w-full bg-sky-brand hover:bg-sky-dark text-white font-display uppercase tracking-widest py-4 text-sm">
                Submit Booking Request
              </button>
              <p className="text-xs text-steel text-center">
                Prefer to talk? Call <a className="text-sky-brand font-semibold" href={SITE.phoneHref}>{SITE.phone}</a> or WhatsApp us.
              </p>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, className = "", ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; name: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="label-caps text-deep-blue text-[11px]">{label}</span>
      <input
        name={name}
        {...rest}
        className="mt-2 w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue bg-white transition-colors"
      />
    </label>
  );
}

function Textarea({ label, name, rows = 3, ...rest }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; name: string; rows?: number }) {
  return (
    <label className="block">
      <span className="label-caps text-deep-blue text-[11px]">{label}</span>
      <textarea
        name={name} rows={rows} {...rest}
        className="mt-2 w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue bg-white transition-colors resize-none"
      />
    </label>
  );
}

function Select({ label, name, options, required }: { label: string; name: string; options: readonly string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="label-caps text-deep-blue text-[11px]">{label}</span>
      <select
        name={name} required={required}
        className="mt-2 w-full border-2 border-brand-border focus:border-sky-brand outline-none px-4 py-3 text-deep-blue bg-white transition-colors"
        defaultValue=""
      >
        <option value="" disabled>Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
