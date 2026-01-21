// webdev test edit
import { motion } from "framer-motion";
import { DollarSign, BarChart3, Calculator } from "lucide-react";
import ProfiMendLogo from "~/components/ProfiMendLogo";
import Testimonials from "~/components/Testimonials";
import DemoShowcase from "~/components/DemoShowcase";

function Feature({
  icon,
  title,
  text,
  borderColor,
  tint,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  borderColor: string;
  tint: string;
}) {
  return (
    <motion.div
      className={`rounded-3xl ${tint} p-12 shadow-sm ring-1 ring-slate-200 border-t-4 ${borderColor} min-h-[340px]`}
      whileHover={{ y: -4, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 140, damping: 16 }}
    >
      <div className="flex items-center gap-5">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white text-sky-600 ring-1 ring-slate-200">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700">{text}</p>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800 flex flex-col">
      {/* Top nav */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ProfiMendLogo className="h-7 w-7" withWordmark />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <div className="relative group">
  <button className="hover:text-slate-900 flex items-center gap-1 focus:outline-none" onClick={(e) => e.currentTarget.nextSibling?.classList.toggle('hidden')}>
    Features
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
  </button>
  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-slate-200 rounded-xl shadow-lg w-40 py-2 z-20">
    <a href="/cashflow" onClick={(e)=>e.stopPropagation()} className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900">Cashflow</a>
    <a href="#pricing" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900">Pricing Tool</a>
    <a href="#budget" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900">Budget</a>
  </div>
</div>
            <a href="#customers" className="hover:text-slate-900">Customers</a>
            <a href="/contact" className="hover:text-slate-900">Contact</a>
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

      {/* HERO */}
      <section className="relative mb-28">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Finance, reimagined — <span className="text-amber-200">beautifully simple</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-sky-50/90"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ProfiMend unites smart pricing, real cash flow visibility, and modern reporting
            in one intuitive space.
          </motion.p>
          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="/signup" className="rounded-xl bg-white/95 text-sky-700 px-7 py-3 font-semibold shadow hover:bg-white">
              Get Started Free
            </a>
            <a href="/demo" className="rounded-xl border border-white/70 px-7 py-3 font-semibold text-white hover:bg-white/10">
              Watch demo
            </a>
          </motion.div>
          <p className="mt-4 text-sm text-sky-50/80">
            No credit card required · Secure and private
          </p>
        </div>
      </section>

      {/* Showcase */}
      <section className="mb-28">
        <DemoShowcase />
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 mb-28">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
            What you get — precision, visibility, control
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Bigger tools, clearer decisions. Designed to make complex finance feel effortless.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <Feature
            icon={<DollarSign className="h-8 w-8" />}
            title="Pricing Tool"
            text="Set profitable prices in seconds with cost + margin intelligence. Give your sales team guardrails that protect margin."
            borderColor="border-sky-300"
            tint="bg-sky-50"
          />
          <Feature
            icon={<BarChart3 className="h-8 w-8" />}
            title="Cash Flow"
            text="Forecast balances across 1–36 months with scenario tests. Plan for hiring, seasonality, or expansion with confidence."
            borderColor="border-amber-300"
            tint="bg-amber-50/50"
          />
          <Feature
            icon={<Calculator className="h-8 w-8" />}
            title="Budget vs Actuals"
            text="Track performance live from your transactions. Spot gaps early and course-correct in days, not quarters."
            borderColor="border-cyan-300"
            tint="bg-cyan-50/70"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section id="customers" className="bg-white/60 mb-28">
        <Testimonials />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 mb-28">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-14 text-center shadow-sm backdrop-blur">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Build clarity around your numbers
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Start a free workspace and explore the Pricing and Cash Flow tools in minutes.
          </p>
          <div className="mt-8 flex items-center justify-center gap-5">
            <a
              href="/signup"
              className="rounded-xl bg-sky-600 px-7 py-3 text-lg font-semibold text-white shadow hover:bg-sky-700"
            >
              Create my workspace
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-slate-300 px-7 py-3 text-lg font-semibold text-slate-700 hover:bg-slate-50"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="mt-auto border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <ProfiMendLogo className="h-6 w-6" />
                <span className="text-lg font-semibold text-slate-900">ProfiMend</span>
              </div>
              <p className="mt-4 max-w-xs text-slate-600">
                Elegant finance tools for pricing, cash flow and performance — built for clarity.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Product</h4>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li><a href="#features" className="hover:text-slate-900">Features</a></li>
                <li><a href="/pricing" className="hover:text-slate-900">Pricing</a></li>
                <li><a href="/security" className="hover:text-slate-900">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Company</h4>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li><a href="/about" className="hover:text-slate-900">About</a></li>
                <li><a href="/careers" className="hover:text-slate-900">Careers</a></li>
                <li><a href="/contact" className="hover:text-slate-900">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Resources</h4>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li><a href="/docs" className="hover:text-slate-900">Docs</a></li>
                <li><a href="/blog" className="hover:text-slate-900">Blog</a></li>
                <li><a href="/support" className="hover:text-slate-900">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-slate-500 md:flex-row">
            <div>© {new Date().getFullYear()} ProfiMend. All rights reserved.</div>
            <div className="space-x-4 text-sm">
              <a href="/privacy" className="hover:text-slate-700">Privacy</a>
              <a href="/terms" className="hover:text-slate-700">Terms</a>
              <a href="/status" className="hover:text-slate-700">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
