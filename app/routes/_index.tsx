// app/routes/_index.tsx
import { motion } from "framer-motion";
import { DollarSign, BarChart3, Calculator, ShieldCheck, Sparkles } from "lucide-react";
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
  borderColor: string; // e.g. "border-sky-300"
  tint: string;        // e.g. "bg-sky-50"
}) {
  return (
    <motion.div
      className={`rounded-3xl ${tint} p-8 shadow-sm ring-1 ring-slate-200 border-t-4 ${borderColor}`}
      whileHover={{ y: -3, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 140, damping: 16 }}
    >
      <div className="flex items-center gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-sky-600 ring-1 ring-slate-200">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-4 text-lg leading-7 text-slate-700">{text}</p>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800">
      {/* Top nav */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Your premium logo component */}
            <ProfiMendLogo className="h-7 w-7" withWordmark />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#security" className="hover:text-slate-900">Security</a>
            <a href="#customers" className="hover:text-slate-900">Customers</a>
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

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500" />
        <div className="relative mx-auto max-w-7xl px-6 pt-18 pb-16 text-center text-white md:pt-20 md:pb-18">
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

      {/* BIG DYNAMIC SHOWCASE (separate from hero) */}
      <DemoShowcase />

      {/* FEATURES — bigger blocks + title (consistent with testimonials) */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">
            What you get—precision, visibility, control
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-600">
            Bigger tools, clearer decisions. Designed to make complex finance feel effortless.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <Feature
            icon={<DollarSign className="h-6 w-6" />}
            title="Pricing Tool"
            text="Set profitable prices in seconds with cost + margin intelligence. Give your sales team guardrails that protect margin."
            borderColor="border-sky-300"
            tint="bg-sky-50"
          />
          <Feature
            icon={<BarChart3 className="h-6 w-6" />}
            title="Cash Flow"
            text="Forecast balances across 1–36 months with scenario tests. Plan for hiring, seasonality, or expansion with confidence."
            borderColor="border-amber-300"
            tint="bg-amber-50/50"
          />
          <Feature
            icon={<Calculator className="h-6 w-6" />}
            title="Budget vs Actuals"
            text="Track performance live from your transactions. Spot gaps early and course-correct in days, not quarters."
            borderColor="border-cyan-300"
            tint="bg-cyan-50/70"
          />
        </div>

        {/* Bonus skinny row for classiness */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Feature
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Security by default"
            text="SOC 2–friendly controls, least-privilege architecture, and encrypted data—without configuration headaches."
            borderColor="border-slate-300"
            tint="bg-white"
          />
          <Feature
            icon={<Sparkles className="h-6 w-6" />}
            title="Modern UI your team enjoys"
            text="Fast, frictionless interactions with tasteful motion. The product feels alive, not noisy."
            borderColor="border-sky-200"
            tint="bg-white"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="customers" className="bg-white/60">
        <Testimonials />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-200 bg-white/70 p-10 text-center shadow-sm backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Build clarity around your numbers
          </h2>
          <p className="mt-2 text-slate-600">
            Start a free workspace and explore the Pricing and Cash Flow tools in minutes.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="/signup"
              className="rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow hover:bg-sky-700"
            >
              Create my workspace
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Talk to us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER (complete, tasteful) */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 gap-8 md:grid-cols-4 text-sm">
          <div>
            <div className="font-semibold text-slate-900">Product</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="#features" className="hover:text-slate-900">Features</a></li>
              <li><a href="/pricing" className="hover:text-slate-900">Pricing</a></li>
              <li><a href="/security" className="hover:text-slate-900">Security</a></li>
              <li><a href="/changelog" className="hover:text-slate-900">Changelog</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Company</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="/about" className="hover:text-slate-900">About</a></li>
              <li><a href="/careers" className="hover:text-slate-900">Careers</a></li>
              <li><a href="/blog" className="hover:text-slate-900">Blog</a></li>
              <li><a href="/contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Resources</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="/docs" className="hover:text-slate-900">Docs</a></li>
              <li><a href="/guides" className="hover:text-slate-900">Guides</a></li>
              <li><a href="/support" className="hover:text-slate-900">Support</a></li>
              <li><a href="/partners" className="hover:text-slate-900">Partners</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Legal</div>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li><a href="/privacy" className="hover:text-slate-900">Privacy</a></li>
              <li><a href="/terms" className="hover:text-slate-900">Terms</a></li>
              <li><a href="/dpa" className="hover:text-slate-900">DPA</a></li>
              <li><a href="/security" className="hover:text-slate-900">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-8 text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ProfiMendLogo className="h-5 w-5" />
            <span>© {new Date().getFullYear()} ProfiMend</span>
          </div>
          <div className="text-sm">
            Made for finance teams who care about clarity.
          </div>
        </div>
      </footer>
    </div>
  );
}




