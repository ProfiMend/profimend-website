import { motion } from "framer-motion";
import { DollarSign, BarChart3, Calculator } from "lucide-react";
import ProfiMendLogo from "~/components/ProfiMendLogo";
import HeroShowcase from "~/components/HeroShowcase";
import Testimonials from "~/components/Testimonials";

function Feature({
  icon,
  title,
  text,
  color,
}: { icon: React.ReactNode; title: string; text: string; color: string }) {
  return (
    <div className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 border-t-4 ${color}`}>
      <div className="flex items-center gap-3 text-slate-900">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 ring-1 ring-sky-200">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600">{text}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800">
      {/* Top nav with logo */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ProfiMendLogo className="h-7 w-7" withWordmark />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#security" className="hover:text-slate-900">Security</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="text-sm text-slate-600 hover:text-slate-900">Sign in</a>
            <a
              href="/signup"
              className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700"
            >
              Start free
            </a>
          </div>
        </div>
      </header>

      {/* Blue hero banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500" />
        <svg className="absolute inset-0 opacity-20 mix-blend-overlay" viewBox="0 0 800 400" aria-hidden>
          <defs>
            <linearGradient id="g" x1="0" x2="1"><stop offset="0%" stopColor="white"/><stop offset="100%" stopColor="transparent"/></linearGradient>
          </defs>
          <rect width="800" height="400" fill="url(#g)"/>
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-40 text-center text-white">
          <motion.h1 className="text-4xl md:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
            Finance, reimagined — <span className="text-amber-200">beautifully simple</span>
          </motion.h1>
          <motion.p className="mt-4 text-lg md:text-xl text-sky-50/90"
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .1 }}>
            ProfiMend unites smart pricing, real cash flow visibility, and modern reporting in one intuitive space.
          </motion.p>
          <motion.div className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .2 }}>
            <a href="/signup" className="rounded-xl bg-white/95 text-sky-700 px-6 py-3 font-semibold shadow hover:bg-white">Get Started Free</a>
            <a href="/demo" className="rounded-xl border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10">Watch demo</a>
          </motion.div>
          <p className="mt-4 text-sm text-sky-50/80">No credit card required · Secure and private</p>

          {/* Floating objects */}
          <HeroShowcase />
        </div>
      </section>

      {/* Feature cards */}
      <section id="features" className="mx-auto max-w-7xl px-6 -mt-14 pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Feature icon={<DollarSign className="h-5 w-5" />} title="Pricing Tool"
            color="border-sky-300" text="Set profitable prices in seconds with cost + margin intelligence." />
          <Feature icon={<BarChart3 className="h-5 w-5" />} title="Cash Flow"
            color="border-amber-300" text="Forecast balances across 1–36 months with scenario tests." />
          <Feature icon={<Calculator className="h-5 w-5" />} title="Budget vs Actuals"
            color="border-sky-300" text="Track performance live from your transactions." />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-10 text-center shadow-sm backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Build clarity around your numbers</h2>
          <p className="mt-2 text-slate-600">Start a free workspace and explore the Pricing and Cash Flow tools in minutes.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="/signup" className="rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white shadow hover:bg-sky-700">Create my workspace</a>
            <a href="/contact" className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">Talk to us</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} ProfiMend</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-slate-700">Privacy</a>
            <a href="/terms" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}




