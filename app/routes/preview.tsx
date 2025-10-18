import { useState } from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  BarChart3,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";

export default function PreviewPage() {
  const tabs = ["Home (Long)", "Features", "Pricing", "Customers", "About", "Get Started / Login"];
  const [tab, setTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Sticky nav for switching mockups */}
      <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400" />
            <span className="font-bold">ProfiMend — Preview</span>
          </div>
          <div className="flex gap-2 text-sm">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1 rounded-full transition ${
                  tab === t ? "bg-blue-600 text-white" : "hover:bg-slate-100"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        {tab === "Home (Long)" && <HomeLong />}
        {tab === "Features" && <FeaturesDeep />}
        {tab === "Pricing" && <PricingModern />}
        {tab === "Customers" && <CustomersPage />}
        {tab === "About" && <AboutPage />}
        {tab === "Get Started / Login" && <LoginPage />}
      </div>
    </div>
  );
}

/* ---------------- HOME (Long) ---------------- */
function HomeLong(){
  return (
    <div className="space-y-20">
      {/* HERO — animated gradient + floating orbs */}
      <section className="relative overflow-hidden rounded-3xl text-white">
        {/* animated gradient bg */}
        <div className="absolute inset-0 -z-10 animate-[pulse_12s_ease-in-out_infinite] bg-[radial-gradient(1200px_600px_at_20%_-20%,#2563eb_0%,transparent_60%),radial-gradient(900px_500px_at_120%_20%,#10b981_0%,transparent_55%),linear-gradient(120deg,#2563eb_0%,#3b82f6_40%,#22c55e_90%)] opacity-90" />
        {/* floating blobs */}
        <div className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 w-[380px] h-[380px] rounded-full bg-white/10 blur-3xl" />

        <div className="max-w-6xl mx-auto px-8 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Make Confident Money Moves
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto opacity-95"
          >
            Price smarter, forecast cash with clarity, and track budget vs. actuals — in a fast, modern dashboard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <a href="#" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-2xl shadow">
              Get Started Free
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </a>
            <a href="#tour" className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20">
              See how it works
            </a>
          </motion.div>

          {/* animated counters */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left md:text-center">
            {[
              {label: "Avg setup time", value: "12 min"},
              {label: "Pilot satisfaction", value: "97%"},
              {label: "Reports created", value: "10k+"},
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="backdrop-blur rounded-2xl bg-white/10 border border-white/20 p-5"
              >
                <div className="text-3xl md:text-4xl font-extrabold">{s.value}</div>
                <div className="opacity-90">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE — trusted by … */}
      <section className="rounded-2xl border border-slate-200 p-0 overflow-hidden">
        <div className="px-6 pt-6 text-center text-sm text-slate-500">Trusted by owners across retail, services, and e-commerce</div>
        <div className="relative mt-4 h-16">
          <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex items-center gap-12 animate-[marquee_18s_linear_infinite] px-6">
              {Array.from({length:12}).map((_,i)=>(
                <div key={i} className="w-28 h-8 rounded bg-slate-100" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOUR — with id for the link */}
      <section id="tour" className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-blue-700">A quick tour</h2>
          <div className="space-y-2 text-slate-700">
            <div className="flex items-start gap-3"><span className="w-2.5 h-2.5 mt-2 rounded-full bg-green-500" />Enter costs & goals — get price + margin instantly</div>
            <div className="flex items-start gap-3"><span className="w-2.5 h-2.5 mt-2 rounded-full bg-green-500" />Import CSVs; see cash runway & alerts</div>
            <div className="flex items-start gap-3"><span className="w-2.5 h-2.5 mt-2 rounded-full bg-green-500" />Spot variances in seconds with clean visuals</div>
          </div>
          <div className="flex gap-3">
            <a className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl" href="#">Try a demo</a>
            <a className="px-5 py-3 rounded-xl border border-slate-300" href="#">Download sample CSV</a>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="h-64 rounded-xl bg-gradient-to-tr from-slate-50 to-slate-100 flex items-center justify-center text-slate-400">
            Screenshot placeholder
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center rounded-3xl bg-blue-50 p-10">
        <h3 className="text-2xl font-bold text-blue-700">Ready to try ProfiMend?</h3>
        <p className="text-slate-600 mt-2">Spin up a demo in minutes — connect your data later.</p>
        <a className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl mt-4" href="#">
          Create Free Account
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </a>
      </section>

      {/* keyframes */}
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.03); } }
      `}</style>
    </div>
  );
}

/* ---------------- Other pages (compact previews) ---------------- */
function FeaturesDeep() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-700">Features</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <MiniFeature title="Pricing Tool" points={["Cost + competitor inputs", "Break-even bands", "Scenario compare"]} />
        <MiniFeature title="Cash Flow" points={["Inflow/outflow calendar", "Balance line & runway", "Shortfall alerts"]} />
        <MiniFeature title="Budget vs Actuals" points={["Variance by category", "Drilldowns", "Exports (CSV/PDF)"]} />
      </div>
    </div>
  );
}

function PricingModern() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-700">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <Plan name="Starter" price="Free" desc="Explore dashboards and calculators." features={["Demo data", "Email support (48h)", "Basic calculators"]} cta="Get Started" />
        <Plan name="Pro" highlight price="$19/mo" desc="Full access to JetAdmin dashboards." features={["Pricing + Forecast + BvA", "CSV/Airtable import", "Priority support"]} cta="Choose Pro" />
        <Plan name="Team" price="$39/mo" desc="Collaborate with teammates." features={["Everything in Pro", "3 seats included", "Sharing & notes"]} cta="Start Team" />
      </div>
    </div>
  );
}

function CustomersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-700">Customers</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {["Coffee Roastery", "HVAC Services", "Online Boutique"].map((c, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="h-28 rounded-xl bg-slate-100 mb-4" />
            <h3 className="font-semibold">{c}</h3>
            <p className="text-slate-700 text-sm mt-1">Short write-up about how they use pricing & cash flow to plan confidently.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-700">About</h1>
      <p className="max-w-3xl text-slate-700">
        Built by an entrepreneur for entrepreneurs. ProfiMend focuses on clarity, speed, and practical automation so you can run your business with confidence.
      </p>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-700">Get Started</h1>
      <p className="text-slate-700 mt-2">Create your account to access your JetAdmin dashboard. Already have one? Use the same button to log in.</p>
      <a className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl mt-6" href="#">
        Go to App <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

/* ---------------- small components ---------------- */
function FeatureCard({ color, icon, title, desc }: { color: string; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className={`shadow-xl border-t-4 ${color} rounded-2xl p-8 text-center flex flex-col items-center justify-between min-h-[280px]`}>
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-2xl mb-2">{title}</h3>
      <p className="text-lg leading-relaxed text-slate-700">{desc}</p>
    </div>
  );
}
function ListItem({ text }: { text: string }) {
  return <div className="flex items-start gap-3 text-slate-700"><CheckCircle2 className="text-green-500 mt-1" />{text}</div>;
}
function Plan({ name, price, desc, features, cta, highlight }: { name: string; price: string; desc: string; features: string[]; cta: string; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl p-8 border ${highlight ? "border-orange-500 bg-orange-50" : "border-slate-200"} shadow-sm flex flex-col`}>
      {highlight && <span className="self-start text-xs font-semibold bg-orange-500 text-white px-2 py-1 rounded">Best value</span>}
      <h3 className="text-xl font-semibold mt-2">{name}</h3>
      <div className="text-4xl font-bold mt-1">{price}</div>
      <p className="text-slate-700">{desc}</p>
      <ul className="mt-5 space-y-2 text-slate-700">
        {features.map((f, i) => <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-1 text-blue-600" />{f}</li>)}
      </ul>
      <a href="#" className={`mt-6 inline-block text-center px-5 py-2 rounded-xl ${highlight ? "bg-orange-500 hover:bg-orange-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}>{cta}</a>
    </div>
  );
}
function MiniFeature({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="font-semibold text-lg">{title}</div>
      <ul className="mt-4 space-y-2 text-slate-700">
        {points.map((p, i) => <li key={i} className="flex items-start gap-2"><CheckCircle2 className="text-blue-600 mt-1" />{p}</li>)}
      </ul>
    </div>
  );
}
