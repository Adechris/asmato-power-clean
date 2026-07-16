import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, MapPin, Phone, MessageCircle, Facebook, Instagram, Mail, Clock } from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/book", label: "Book a Service" },
  { to: "/contact", label: "Contact" },
] as const;

export function TopBar() {
  return (
    <div className="bg-sky-brand text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} /> {SITE.address}
        </span>
        <div className="flex items-center gap-4">
          <a href={SITE.phoneHref} className="flex items-center gap-1.5 hover:underline">
            <Phone size={14} /> {SITE.phone}
          </a>
          <a
            href={whatsappUrl("Hello Asmato! I need cleaning services.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:underline"
          >
            <MessageCircle size={14} /> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 bg-deep-blue border-b-2 border-sky-brand transition-shadow ${
          scrolled ? "shadow-2xl shadow-black/40" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none">
            <span className="text-white font-display font-bold text-2xl md:text-3xl tracking-tight">
              {SITE.shortName}
            </span>
            <span className="text-sky-brand text-[10px] md:text-xs uppercase tracking-[0.2em] mt-0.5">
              {SITE.tagline}
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-white text-sm font-medium hover:text-sky-brand transition-colors"
                activeProps={{ className: "text-sky-brand" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/book"
              className="hidden md:inline-flex bg-sky-brand hover:bg-sky-dark text-white font-semibold text-sm px-5 py-2.5 transition-colors"
            >
              Book a Service
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-white p-2"
              aria-label="Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-deep-blue flex flex-col animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-4 h-16 border-b border-sky-brand/30">
            <span className="text-white font-display text-xl">MENU</span>
            <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="Close">
              <X size={26} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sky-brand font-display text-3xl uppercase tracking-wide"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-4 bg-sky-brand text-white font-semibold px-8 py-3"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-accent-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="font-display font-bold text-3xl">{SITE.shortName}</div>
            <div className="text-sky-brand text-xs uppercase tracking-[0.2em] mt-1">
              {SITE.tagline}
            </div>
            <p className="text-white/70 mt-6 text-sm italic leading-relaxed">
              Clean Spaces. Safe Environments. Happy Clients.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-sky-brand/30 flex items-center justify-center hover:bg-sky-brand transition-colors"
                >
                  <Icon size={16} className="text-sky-brand hover:text-white" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="label-caps text-sky-brand mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-sky-brand">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="label-caps text-sky-brand mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Commercial Cleaning</li>
              <li>Industrial Cleaning</li>
              <li>Window Cleaning</li>
              <li>Upholstery Cleaning</li>
              <li>Domestic Cleaning</li>
              <li>Fumigation</li>
            </ul>
          </div>
          <div>
            <h4 className="label-caps text-sky-brand mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex gap-2"><MapPin size={16} className="text-sky-brand shrink-0" /> {SITE.address}</li>
              <li><a href={SITE.phoneHref} className="flex gap-2 hover:text-sky-brand"><Phone size={16} className="text-sky-brand shrink-0" /> {SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="flex gap-2 hover:text-sky-brand"><Mail size={16} className="text-sky-brand shrink-0" /> {SITE.email}</a></li>
              <li className="flex gap-2"><Clock size={16} className="text-sky-brand shrink-0" /> <span>{SITE.hoursWeek}<br/>{SITE.hoursSun}</span></li>
            </ul>
            <a
              href={whatsappUrl("Hello Asmato!")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-sky-brand hover:bg-sky-dark text-white px-4 py-2 text-sm font-semibold"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
        <div className="border-t border-sky-brand/20 mt-12 pt-6 text-center text-xs text-white/50">
          © 2025 Asmato Laundry and Cleaning Services. All rights reserved. Ogbomoso, Nigeria.
        </div>
      </div>
    </footer>
  );
}

export function FloatingButtons() {
  return (
    <>
      <a
        href={whatsappUrl("Hello Asmato! I need cleaning/fumigation services.")}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 left-5 z-30 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageCircle size={26} />
      </a>
      <Link
        to="/book"
        aria-label="Book Now"
        className="fixed bottom-5 right-5 z-30 bg-sky-brand hover:bg-sky-dark text-white font-display uppercase tracking-wide text-sm px-5 h-14 flex items-center shadow-2xl hover:scale-105 transition-transform"
      >
        Book Now
      </Link>
    </>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      {children}
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export function Sparkles() {
  const dots = Array.from({ length: 14 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => (
        <span
          key={i}
          className="sparkle absolute w-1 h-1 rounded-full bg-sky-brand/60"
          style={{
            left: `${(i * 7.3) % 100}%`,
            top: `${(i * 13.7) % 100}%`,
            animationDelay: `${(i % 6) * 0.7}s`,
          }}
        />
      ))}
    </div>
  );
}
