import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import {
  Pause,
  Play,
  ArrowRight,
  Star,
  Shield,
  Sparkles as SparkleIcon,
  Clock,
  DollarSign,
  Leaf,
  Phone,
  MessageCircle,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { PageShell, Sparkles } from "@/components/layout/Chrome";
import { SITE, SERVICES, whatsappUrl } from "@/lib/site";
import heroImg from "@/assets/hero-cleaner.jpg";
import teamImg from "@/assets/team.jpg";
import commercialImg from "@/assets/commercial.jpg";
import industrialImg from "@/assets/industrial.jpg";
import windowImg from "@/assets/window.jpg";
import upholsteryImg from "@/assets/upholstery.jpg";
import domesticImg from "@/assets/domestic.jpg";
import fumigationImg from "@/assets/fumigation.jpg";
import beforeCarpet from "@/assets/before-carpet.jpg";
import afterCarpet from "@/assets/after-carpet.jpg";
import beforeFloor from "@/assets/before-floor.jpg";
import afterFloor from "@/assets/after-floor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asmato Cleaning & Fumigation — Ogbomoso, Nigeria" },
      {
        name: "description",
        content:
          "Ogbomoso's most trusted cleaning and fumigation team. Commercial, industrial, window, upholstery, domestic cleaning and licensed fumigation.",
      },
    ],
  }),
  component: Home,
});

const IMG: Record<string, string> = {
  commercial: commercialImg,
  industrial: industrialImg,
  window: windowImg,
  upholstery: upholsteryImg,
  domestic: domesticImg,
  fumigation: fumigationImg,
};

function Home() {
  return (
    <PageShell>
      <Hero />
      <Stats />
      <WhatWeDo />
      <ServicesSection />
      <HowItWorks />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <Coverage />
      <FinalCTA />
    </PageShell>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen overflow-hidden bg-deep-blue">
      {/* Video / Image bg */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroImg}
        >
          <source
            src="https://cdn.pixabay.com/video/2022/12/14/143008-780499660_large.mp4"
            type="video/mp4"
          />
        </video>
        <img
          src={heroImg}
          alt="Professional cleaning team at work"
          className="absolute inset-0 w-full h-full object-cover ken-burns -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/85 via-deep-blue/75 to-accent-dark/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.25),transparent_60%)]" />
      </div>

      <Sparkles />

      <button
        onClick={toggle}
        className="absolute top-24 right-4 md:right-8 z-10 w-10 h-10 border border-white/40 text-white flex items-center justify-center bg-black/30 backdrop-blur-sm hover:bg-sky-brand"
        aria-label={playing ? "Pause video" : "Play video"}
      >
        {playing ? <Pause size={16} /> : <Play size={16} />}
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-32 md:pt-32 md:pb-40 min-h-[92vh] md:min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="label-caps text-sky-brand text-[13px] mb-6 flex items-center gap-3">
            <span className="w-10 h-px bg-sky-brand" />
            Professional Cleaning & Fumigation
          </div>
          <h1 className="display-h text-white text-[54px] leading-[0.98] md:text-[88px] tracking-tight">
           Committed To  
            <br />
            Your Health
            <br />
            <span className="text-sky-brand">And The Environment .</span>
          </h1>
          <p className="mt-8 text-white/80 text-base md:text-[17px] leading-relaxed max-w-xl">
            Asmato delivers industrial-grade cleaning and fumigation services for homes, offices,
            and businesses across Ogbomoso — spotlessly clean, every single time.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/book"
              className="bg-sky-brand hover:bg-sky-dark text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm inline-flex items-center gap-2 justify-center"
            >
              Book a Service <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white/60 hover:border-sky-brand hover:text-sky-brand text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm inline-flex items-center justify-center"
            >
              See Our Services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-white/70 text-[13px]">
            <span>🧹 Certified Cleaners</span>
            <span className="text-sky-brand">•</span>
            <span>🪲 Licensed Fumigation</span>
            <span className="text-sky-brand">•</span>
            <span>✅ Satisfaction Guaranteed</span>
          </div>
        </motion.div>
      </div>

      {/* Diagonal slash */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 z-10">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon points="0,100 1440,0 1440,100" fill="var(--sky-brand)" opacity="0.9" />
          <polygon points="0,100 1440,30 1440,100" fill="white" />
        </svg>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => Math.round(v).toLocaleString() + suffix);
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.8, ease: "easeOut" });
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{display}</motion.span>;
}

function Stats() {
  const stats = [
    { icon: "🏢", n: 500, s: "+", label: "Clients Served" },
    { icon: "📅", n: 8, s: "+", label: "Years Experience" },
    { icon: "👷", n: 12, s: "+", label: "Trained Cleaners" },
    { icon: "✅", n: 100, s: "%", label: "Satisfaction Rate" },
  ];
  return (
    <section className="bg-deep-blue py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="display-h text-white text-5xl md:text-6xl">
              <CountUp to={s.n} suffix={s.s} />
            </div>
            <div className="label-caps text-sky-brand text-[11px] md:text-xs mt-2">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- WHAT WE DO ---------- */
function WhatWeDo() {
  return (
    <section className="bg-off-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="label-caps text-sky-brand mb-4">Our Core Business</div>
          <h2 className="display-h text-deep-blue text-4xl md:text-5xl">
            Ogbomoso's Most Trusted
            <br />
            Cleaning Professionals
          </h2>
          <p className="mt-6 text-steel leading-relaxed">
            Asmato Laundry and Cleaning Services delivers thorough, reliable, and professionally
            executed cleaning and fumigation solutions. From residential homes to large industrial
            facilities — we bring expert hands, professional equipment, and a commitment to
            perfection to every job.
          </p>
          <blockquote className="mt-8 border-l-4 border-sky-brand bg-white p-6 shadow-lg">
            <p className="italic text-deep-blue text-lg leading-relaxed">
              "We don't just clean surfaces. We sanitize environments and protect the people inside
              them."
            </p>
          </blockquote>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 text-sky-brand font-semibold hover:text-sky-dark"
          >
            See Our Services <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={teamImg}
            alt="Asmato professional cleaning team"
            className="w-full h-[520px] object-cover shadow-2xl"
            loading="lazy"
          />
          <div className="absolute -top-4 -right-4 bg-sky-brand text-white px-5 py-3 font-display uppercase text-sm tracking-wider shadow-xl">
            Licensed & Certified ✅
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white shadow-2xl p-5 flex items-center gap-3">
            <div className="flex text-sky-brand">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <div>
              <div className="font-display text-deep-blue text-2xl leading-none">4.9/5</div>
              <div className="text-xs text-steel">Client Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function ServicesSection() {
  return (
    <section id="services" className="relative bg-deep-blue py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label-caps text-sky-brand">Our Services</div>
          <h2 className="display-h text-white text-4xl md:text-5xl mt-3">
            Everything Clean.
            <br />
            Everything Protected.
          </h2>
          <p className="text-white/70 mt-5">
            Six specialized services — each delivered with trained professionals, proper equipment,
            and guaranteed results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              className="group bg-[#0D3251] border-t-[3px] border-sky-brand p-8 sky-glow sky-glow-hover"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="display-h text-white text-xl uppercase">{s.name}</h3>
              <p className="text-white/60 text-sm mt-3 leading-relaxed">{s.short}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {s.badges.map((b) => (
                  <span
                    key={b}
                    className="text-xs bg-sky-brand/15 text-sky-brand px-2.5 py-1 border border-sky-brand/30"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <Link
                to="/book"
                className="mt-6 inline-flex items-center gap-2 text-sky-brand text-sm font-semibold group-hover:gap-3 transition-all"
              >
                Get a Quote <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    {
      icon: "📞",
      title: "Book Your Service",
      body: "Call, WhatsApp, or fill our booking form — tell us what you need and when.",
    },
    {
      icon: "📋",
      title: "We Assess & Quote",
      body: "Our team assesses your space and gives you a transparent, no-hidden-fee quote.",
    },
    {
      icon: "🧹",
      title: "We Show Up & Clean",
      body: "Trained professionals arrive on time with all equipment — fully uniformed.",
    },
    {
      icon: "✅",
      title: "Inspection & Handover",
      body: "We do a final walkthrough with you — not done until you're satisfied.",
    },
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label-caps text-sky-brand">Our Process</div>
          <h2 className="display-h text-deep-blue text-4xl md:text-5xl mt-3">
            From Booking to Spotless —<br />
            We Handle Everything
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative">
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-sky-brand/50" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-sky-brand text-white flex items-center justify-center text-3xl shadow-xl shadow-sky-brand/30 relative z-10">
                {step.icon}
              </div>
              <div className="display-h text-sky-brand text-5xl mt-3 opacity-40">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="display-h text-deep-blue text-lg uppercase mt-1">{step.title}</h3>
              <p className="text-steel text-sm mt-2 max-w-[240px]">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE ---------- */
function WhyChoose() {
  const benefits = [
    {
      icon: <Shield size={26} />,
      title: "Certified Professionals",
      body: "All our cleaners are trained, vetted, and uniformed — professionals you can trust in your home or office.",
    },
    {
      icon: "🪲",
      title: "Licensed Fumigation",
      body: "Our fumigation team is licensed and uses only approved, safe chemicals — effective without endangering your family.",
    },
    {
      icon: <Clock size={26} />,
      title: "Always On Time",
      body: "We respect your schedule. Our teams arrive as booked — no delays, no excuses.",
    },
    {
      icon: <Leaf size={26} />,
      title: "Eco-Friendly Products",
      body: "We use cleaning agents that are tough on dirt but safe for children, pets, and the environment.",
    },
    {
      icon: <Phone size={26} />,
      title: "24/7 Availability",
      body: "Emergency cleaning needed? We're available around the clock — call or WhatsApp anytime.",
    },
    {
      icon: <DollarSign size={26} />,
      title: "Transparent Pricing",
      body: "No hidden charges. You get a full quote before we start — what we quote is what you pay.",
    },
  ];
  return (
    <section className="relative bg-sky-brand py-24 md:py-32 overflow-hidden">
      <Sparkles />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="label-caps text-white">Why Choose Us</div>
          <h2 className="display-h text-white text-4xl md:text-5xl mt-3">
            Built for Cleanliness.
            <br />
            Trusted by Ogbomoso.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="bg-sky-dark/70 backdrop-blur-sm border border-white/10 p-8 hover:bg-deep-blue transition-colors"
            >
              <div className="text-white/90 text-3xl">{b.icon}</div>
              <h3 className="display-h text-white text-xl uppercase mt-4">{b.title}</h3>
              <p className="text-white/80 text-sm mt-3 leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BEFORE / AFTER ---------- */
function Gallery() {
  const pairs = [
    { before: beforeCarpet, after: afterCarpet, label: "Carpet Deep Clean" },
    { before: beforeFloor, after: afterFloor, label: "Industrial Floor" },
    { before: beforeCarpet, after: afterCarpet, label: "Fabric Restoration" },
  ];
  return (
    <section className="bg-off-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-caps text-sky-brand">Our Work</div>
          <h2 className="display-h text-deep-blue text-4xl md:text-5xl mt-3">
            See the Asmato Difference
          </h2>
          <p className="text-steel mt-4">Drag the handle. See what a proper clean looks like.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pairs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="shadow-2xl overflow-hidden border-4 border-white"
            >
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={p.before} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={p.after} alt="After" />}
                className="h-72"
                style={{ height: 288 }}
              />
              <div className="bg-deep-blue text-white p-4 flex justify-between items-center">
                <span className="font-display uppercase tracking-wide">{p.label}</span>
                <span className="text-sky-brand text-xs label-caps">Before → After</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-14">
          <p className="text-deep-blue font-display text-xl md:text-2xl uppercase">
            Every job looks like this when we're done.
          </p>
          <Link
            to="/book"
            className="mt-6 inline-flex bg-sky-brand hover:bg-sky-dark text-white px-8 py-4 uppercase font-semibold tracking-wider text-sm"
          >
            Book Your Cleaning Today
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    {
      quote:
        "Asmato fumigated our entire warehouse and the results were incredible. Not a single pest since. Very professional team.",
      name: "Mr. Adebayo T.",
      role: "Warehouse Owner, Ogbomoso",
    },
    {
      quote:
        "I called them for deep home cleaning before my daughter's naming ceremony. My house has never looked this good. Highly recommended!",
      name: "Mrs. Folake O.",
      role: "Domestic Client, Ogbomoso",
    },
    {
      quote:
        "Their upholstery cleaning is top-notch. They removed stains I thought were permanent. Will definitely use again.",
      name: "Pastor Emmanuel A.",
      role: "Church Admin, Ogbomoso",
    },
  ];
  return (
    <section className="bg-deep-blue py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-caps text-sky-brand">Client Testimonials</div>
          <h2 className="display-h text-white text-4xl md:text-5xl mt-3">
            What Our Clients Say About Us
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#0D3251] border-l-4 border-sky-brand p-8 relative"
            >
              <span className="absolute top-4 right-6 text-sky-brand/40 font-display text-7xl leading-none">
                "
              </span>
              <p className="text-white/90 italic text-[15px] leading-[1.7] relative">{t.quote}</p>
              <div className="flex text-sky-brand mt-6 mb-3">
                {[0, 1, 2, 3, 4].map((i2) => (
                  <Star key={i2} size={14} fill="currentColor" />
                ))}
              </div>
              <div className="text-white font-semibold">{t.name}</div>
              <div className="text-sky-brand text-xs">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- COVERAGE ---------- */
function Coverage() {
  const areas = [
    "Ogbomoso North",
    "Ogbomoso South",
    "Surulere LGA",
    "Ogo-Oluwa",
    "Orire LGA",
    "Surrounding Areas",
  ];
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="label-caps text-sky-brand">Where We Operate</div>
          <h2 className="display-h text-deep-blue text-4xl md:text-5xl mt-3">
            Based in Ogbomoso.
            <br />
            Serving the Whole Region.
          </h2>
        </div>
        <div className="border-4 border-sky-brand shadow-2xl overflow-hidden">
          <iframe
            title="Ogbomoso Map"
            src="https://maps.google.com/maps?q=Ogbomoso%2C%20Oyo%20State%2C%20Nigeria&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px] md:h-[500px]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {areas.map((a) => (
            <span
              key={a}
              className="bg-off-white border border-brand-border text-deep-blue px-4 py-2 text-sm font-medium"
            >
              {a}
            </span>
          ))}
        </div>
        <p className="text-center text-steel mt-6">
          Not sure if we cover your area?{" "}
          <a
            href={whatsappUrl("Hi Asmato, do you cover my area?")}
            className="text-sky-brand font-semibold hover:underline"
          >
            WhatsApp us to confirm 💬
          </a>
        </p>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative bg-deep-blue overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "repeating-linear-gradient(135deg, transparent 0 40px, rgba(14,165,233,0.15) 40px 80px)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-2 bg-sky-brand" />
      <div className="relative max-w-5xl mx-auto px-4 py-24 md:py-32 text-center">
        <h2 className="display-h text-white text-4xl md:text-6xl">
          Ready for a Spotlessly
          <br />
          Clean Space?
        </h2>
        <p className="text-white/70 mt-6 max-w-xl mx-auto">
          Book your service today and experience the Asmato difference. Serving Ogbomoso and beyond.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/book"
            className="bg-sky-brand hover:bg-sky-dark text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm"
          >
            Book a Service
          </Link>
          <a
            href={SITE.phoneHref}
            className="border-2 border-white/60 hover:border-sky-brand hover:text-sky-brand text-white font-semibold px-8 py-4 uppercase tracking-wider text-sm"
          >
            Call Us Now
          </a>
        </div>
        <div className="mt-8 flex justify-center gap-6 text-white/70 text-sm">
          <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-sky-brand">
            <Phone size={16} /> Call
          </a>
          <a
            href={whatsappUrl("Hello Asmato!")}
            className="flex items-center gap-2 hover:text-sky-brand"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-sky-brand">
            <Mail size={16} /> Email
          </a>
        </div>
      </div>
    </section>
  );
}

// unused import guard
void CheckCircle2;
void SparkleIcon;
void IMG;
