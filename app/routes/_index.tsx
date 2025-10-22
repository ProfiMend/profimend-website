import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { ArrowRight, Sparkles, Star, Quote, Calculator, TrendingUp, BarChart3, ShieldCheck } from "lucide-react";

/** Premium round logo (inline SVG so it always matches brand) */
function ProfiMendLogo({ size=28 }:{size?:number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="ProfiMend" className="shrink-0">
      <defs>
        <linearGradient id="pmNavy" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b2240"/>
          <stop offset="100%" stopColor="#0c4a6e"/>
        </linearGradient>
        <linearGradient id="pmRise" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0ea5e9"/>
          <stop offset="100%" stopColor="#10b981"/>
        </linearGradient>
        <linearGradient id="pmGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#fbbf24"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" stroke="url(#pmGold)" strokeWidth="1.5" fill="transparent" opacity="0.55"/>
      <circle cx="32" cy="32" r="26" fill="url(#pmNavy)"/>
      <circle cx="32" cy="32" r="25" stroke="#0ea5e9" strokeOpacity="0.18" strokeWidth="2" fill="none"/>
      <g transform="translate(14,16)">
        <rect x="6" y="18" width="3.6" height="10" rx="1.5" fill="#38bdf8"/>
        <rect x="13" y="14" width="3.6" height="14" rx="1.5" fill="#22c55e"/>
        <rect x="20" y="10" width="3.6" height="18" rx="1.5" fill="#0ea5e9"/>
        <path d="M6 20 C14 12, 20 12, 28 8" stroke="url(#pmRise)" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
        <path d="M26 6 L31 8 L28 12 Z" fill="url(#pmRise)"/>
        <path d="M6 6 h10 c6 0 10 4 10 9 s-4 9-10 9 h-4" stroke="white" strokeOpacity="0.85" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
        <circle cx="33" cy="6" r="2" fill="url(#pmGold)"/>
      </g>
    </svg>
  );
}

/** Minimal brand sparkline chart (inline, no libraries) */
function MiniChart({className=""}:{className?:string}) {
  return (
    <svg viewBox="0 0 300 120" className={className}>
      <defs>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M10,100 C40,90 60,70 90,75 C120,80 150,60 180,55 C210,50 250,35 290,45"
        fill="none" stroke="#0284c7" strokeWidth="3" />
      <path d="M10,100 C40,90 60,70 90,75 C120,80 150,60 180,55 C210,50 250,35 290,45 L290,110 L10,110 Z"
        fill="url(#area)" />
    </svg>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="profimend-header-gradient text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <ProfiMendLogo />
            <span className="font-semibold">ProfiMend</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="opacity-90 hover:opacity-100">Features</a>
            <a href="#tools" className="opacity-90 hover:opacity-100">Tools</a>
            <a href="#pricing" className="opacity-90 hover:opacity-100">Pricing</a>
            <a href="#security" className="opacity-90 hover:opacity-100">Security</a>
            <a href="#contact" className="opacity-90 hover:opacity-100">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a className="hidden md:inline text-white/90 hover:text-white" href="/signin">Sign in</a>
            <Button>Start free</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-emerald-50/40" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-[1.1fr,0.9fr] gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Finance, reimagined —
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600">
                beautifully simple
              </span>
            </h1>
            <p className="mt-4 text-slate-600">
              ProfiMend unites smart pricing, real cash flow visibility, and modern reporting in one intuitive space.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Button className="px-5">Start free</Button>
              <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-slate-300 hover:bg-white">
                <ArrowRight className="h-4 w-4" /> Watch demo
              </button>
            </div>

            <div className="mt-4 flex items-center gap-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> Secure & private
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-500" /> No credit card required
              </span>
            </div>
          </div>

          {/* Floating “cool objects” */}
          <div className="relative">
            <motion.div
              className="absolute -top-6 right-2 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg"
              initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
            >
              <div className="text-sm font-medium text-slate-700">Cash Projection</div>
              <MiniChart className="mt-2 w-full h-[100px]" />
            </motion.div>

            <motion.div
              className="absolute top-24 -left-4 w-[380px] rounded-2xl border border-slate-200 bg-white p-4 shadow-lg"
              initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }}
            >
              <div className="text-sm font-semibold">Quick Price (Demo)</div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-lg border p-2">
                  <div className="text-slate-500">Variable cost / unit</div>
                  <div className="mt-1">12.5</div>
                </div>
                <div className="rounded-lg border p-2">
                  <div className="text-slate-500">Target margin %</div>
                  <div className="mt-1">40</div>
                </div>
                <div className="rounded-lg border p-2">
                  <div className="text-slate-500">Units</div>
                  <div className="mt-1">120</div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2 text-xs">
                <div className="rounded-xl border p-2"><div className="text-slate-500">PRICE</div><div className="text-lg font-semibold">$20.83</div></div>
                <div className="rounded-xl border p-2"><div className="text-slate-500">REVENUE</div><div className="text-lg font-semibold">$2,500</div></div>
                <div className="rounded-xl border p-2"><div className="text-slate-500">VAR COST</div><div className="text-lg font-semibold">$1,500</div></div>
                <div className="rounded-xl border p-2 bg-orange-50 border-orange-200"><div className="text-amber-700">PROFIT</div><div className="text-lg font-semibold text-amber-700">$1,000</div></div>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[220px] right-6 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-md"
              initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
            >
              <div className="text-xs font-semibold">Snapshot</div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border p-3 bg-emerald-50 border-emerald-200">
                  <div className="text-emerald-800">MRR</div><div className="text-lg font-semibold text-emerald-800">$8,240</div>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="text-slate-500">BURN</div><div className="text-lg font-semibold">-$3,120</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold">Why teams pick ProfiMend</h2>
        <p className="text-slate-600 mt-1">Clarity, speed, and modern finance tooling that clients love.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <Calculator className="text-amber-500" />
              <CardTitle>Pricing Tool</CardTitle>
            </div>
            <CardContent className="pt-3 text-slate-600">
              Set profitable prices in seconds with cost + margin intelligence.
            </CardContent>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3">
              <TrendingUp className="text-sky-600" />
              <CardTitle>Cash Flow</CardTitle>
            </div>
            <CardContent className="pt-3 text-slate-600">
              Forecast balances across 1–36 months with scenario tests.
            </CardContent>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3">
              <BarChart3 className="text-sky-900" />
              <CardTitle>Budget vs Actuals</CardTitle>
            </div>
            <CardContent className="pt-3 text-slate-600">
              Track performance live from your transactions.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* “See it in action” */}
      <section id="tools" className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Sparkles className="h-4 w-4" /> Explore tools — instant preview
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <Card className="p-5">
            <CardTitle>Quick Price (Demo)</CardTitle>
            <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
              <Input defaultValue="12.5" />
              <Input defaultValue="40" />
              <Input defaultValue="120" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2 text-xs">
              <div className="rounded-xl border p-3"><div className="text-slate-500">PRICE</div><div className="text-lg font-semibold">$20.83</div></div>
              <div className="rounded-xl border p-3"><div className="text-slate-500">REVENUE</div><div className="text-lg font-semibold">$2,500</div></div>
              <div className="rounded-xl border p-3"><div className="text-slate-500">VAR COST</div><div className="text-lg font-semibold">$1,500</div></div>
              <div className="rounded-xl border p-3 bg-orange-50 border-orange-200"><div className="text-amber-700">PROFIT</div><div className="text-lg font-semibold text-amber-700">$1,000</div></div>
            </div>
          </Card>
          <Card className="p-5">
            <CardTitle>Cash Projection</CardTitle>
            <MiniChart className="mt-3 w-full h-[120px]" />
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold">Loved by modern finance teams</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i)=>(
              <Card key={i} className="p-6">
                <Quote className="text-pmsky" />
                <p className="mt-3 text-slate-600 italic">
                  “ProfiMend gave us real pricing discipline and visibility. Our margins rose within weeks.”
                </p>
                <div className="mt-3 font-semibold">CFO, Series A SaaS</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-14">
        <div className="profimend-cta-gradient rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl font-bold">Build clarity around your numbers</h2>
          <p className="opacity-90 mt-1">Start a free workspace and explore the Pricing and Cash Flow tools in minutes.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button className="bg-white text-slate-900 hover:bg-slate-100">Create my workspace</Button>
            <button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-slate-900/20 hover:bg-slate-900/30">
              Talk to us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <ProfiMendLogo />
              <span className="font-semibold">ProfiMend</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">Exclusive financial tools to improve profitability.</p>
          </div>
          <div>
            <div className="font-semibold">Product</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li>Pricing</li><li>Cash Flow</li><li>Budget vs Actuals</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li>About</li><li>Security</li><li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li>Terms</li><li>Privacy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-slate-400">
            © {new Date().getFullYear()} ProfiMend
          </div>
        </div>
      </footer>
    </div>
  );
}

