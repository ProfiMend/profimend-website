import React, { useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  PlayCircle,
  CheckCircle2,
  Menu,
  Sparkles,
  Star,
  Quote,
} from "lucide-react";
import ClientOnly from "~/components/ClientOnly";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent, useBindTabs } from "~/components/ui/tabs";
import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// ------------------------------------------------------------
// ProfiMend Homepage — v11 (premium logo integrated)
// - Premium logo (double ring + PM monogram + profit arrow)
// - Blue-only primary CTAs
// - Feature cards bigger with orange highlights allowed
// - Sections: Header, Hero, Features, Demo/Tools, Testimonials, CTA, Footer
// ------------------------------------------------------------

const gradient = "bg-[radial-gradient(70rem_70rem_at_50%_-10%,rgba(16,185,129,0.08),rgba(56,189,248,0.08),rgba(255,255,255,0))]";

// -------------------- Brand --------------------
function ProfiMendLogo({ showWordmark = true, className = "" }) {
  // Premium round mark: double ring (navy + subtle gold), monogram P/M with rising bars forming an arrow
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ProfiMend premium logo">
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
        {/* outer subtle gold ring for exclusivity */}
        <circle cx="32" cy="32" r="30" stroke="url(#pmGold)" strokeWidth="1.5" fill="transparent" opacity="0.55"/>
        {/* main navy disc */}
        <circle cx="32" cy="32" r="26" fill="url(#pmNavy)"/>
        {/* inner cut ring */}
        <circle cx="32" cy="32" r="25" stroke="#0ea5e9" strokeOpacity="0.18" strokeWidth="2" fill="none"/>
        {/* Monogram: P stem + M valleys formed by bars; arrow for profitability */}
        <g transform="translate(14,16)">
          {/* rising bars */}
          <rect x="6" y="18" width="3.6" height="10" rx="1.5" fill="#38bdf8"/>
          <rect x="13" y="14" width="3.6" height="14" rx="1.5" fill="#22c55e"/>
          <rect x="20" y="10" width="3.6" height="18" rx="1.5" fill="#0ea5e9"/>
          {/* arrow to the right */}
          <path d="M6 20 C14 12, 20 12, 28 8" stroke="url(#pmRise)" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
          <path d="M26 6 L31 8 L28 12" fill="url(#pmRise)"/>
          {/* Monogram P curve encircling bars */}
          <path d="M6 6 h10 c6 0 10 4 10 9 s-4 9-10 9 h-4" stroke="white" strokeOpacity="0.85" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
          {/* subtle spark accent */}
          <circle cx="33" cy="6" r="2" fill="url(#pmGold)"/>
        </g>
      </svg>
      {showWordmark && (
        <span className="font-semibold tracking-tight text-sky-900">ProfiMend</span>
      )}
    </div>
  );
}

// Shared wrapper (for floating UI cards)
function FloatingCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`rounded-2xl border bg-white shadow-[0_8px_40px_rgba(0,0,0,0.05)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Primary blue button
function BlueButton({ children, ...props }) {
  return (
    <Button {...props} className="rounded-xl bg-sky-600 hover:bg-sky-700 text-white border-0">
      {children}
    </Button>
  );
}

// --- Demo Mini Chart ---
function MiniChart() {
  const chartData = Array.from({ length: 12 }).map((_, i) => ({
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
    balance: Math.round(12000 + Math.sin(i / 1.5) * 3500 + i * 900),
  }));
  return (
    <Card className="w-full shadow-sm border-muted bg-white/70 backdrop-blur">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-sky-600" /> Cash Balance (Demo)
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="pmGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity={0.32} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0.08} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} dy={6} />
              <YAxis tickLine={false} axisLine={false} width={40} />
              <Tooltip cursor={{ stroke: "#e5e7eb" }} contentStyle={{ borderRadius: 12 }} />
              <Area type="monotone" dataKey="balance" stroke="#0284c7" fill="url(#pmGradient)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

// --- Demo Mini Pricing ---
function MiniPricingCalculator() {
  const [cost, setCost] = useState(12.5);
  const [margin, setMargin] = useState(40);
  const [units, setUnits] = useState(120);

  const price = useMemo(() => cost / (1 - margin / 100), [cost, margin]);
  const revenue = useMemo(() => price * units, [price, units]);
  const variableTotal = useMemo(() => cost * units, [cost, units]);
  const profit = useMemo(() => revenue - variableTotal, [revenue, variableTotal]);

  return (
    <Card className="w-full shadow-sm border-muted bg-white/70 backdrop-blur">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Calculator className="h-4 w-4 text-sky-600" /> Quick Price (Demo)
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="grid grid-cols-3 gap-3">
          <InputGroup label="Variable cost / unit" value={cost} setValue={setCost} />
          <InputGroup label="Target margin %" value={margin} setValue={setMargin} />
          <InputGroup label="Units" value={units} setValue={setUnits} />
        </div>
        <div className="grid grid-cols-4 gap-3 pt-1">
          <Stat label="Price" value={`$${price.toFixed(2)}`} />
          <Stat label="Revenue" value={`$${revenue.toLocaleString()}`} />
          <Stat label="Var Cost" value={`$${variableTotal.toLocaleString()}`} />
          <Stat label="Profit" value={`$${profit.toLocaleString()}`} highlight />
        </div>
      </CardContent>
    </Card>
  );
}

function InputGroup({ label, value, setValue }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground">{label}</label>
      <Input type="number" step="0.1" value={value} onChange={(e) => setValue(parseFloat(e.target.value || "0"))} />
    </div>
  );
}

function Stat({ label, value, highlight = false }) {
  return (
    <div className={`rounded-xl border p-3 ${highlight ? "border-emerald-300/70 bg-emerald-50" : "border-muted bg-white"}`}>
      <div className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="text-base font-semibold">{value}</div>
    </div>
  );
}

// -------------------- Layout Sections --------------------
function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <ProfiMendLogo />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#tools" className="hover:text-foreground">Tools</a>
          <a href="#testimonials" className="hover:text-foreground">Customers</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#security" className="hover:text-foreground">Security</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="rounded-xl">Sign in</Button>
          <BlueButton>Start free</BlueButton>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden"><Menu className="h-5 w-5" /></Button>
      </div>
    </header>
  );
}

function FloatingHero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -25]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const y3 = useTransform(scrollY, [0, 300], [0, -15]);

  return (
    <section className={`relative isolate ${gradient} pt-20 pb-16`}>
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-semibold tracking-tight">
            Finance, reimagined — <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-emerald-500">beautifully simple</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-4 text-muted-foreground text-lg">
            ProfiMend unites smart pricing, real cash flow visibility, and modern reporting in one intuitive space.
          </motion.p>
          <div className="mt-6 flex gap-3">
            <BlueButton size="lg">Start free <ArrowRight className="ml-1 h-4 w-4" /></BlueButton>
            <Button variant="outline" className="rounded-xl" size="lg">Watch demo <PlayCircle className="ml-1 h-4 w-4" /></Button>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 text-sky-600" /> No credit card required
            <ShieldCheck className="h-4 w-4 text-emerald-600 ml-4" /> Secure and private
          </div>
        </div>
        <div className="relative h-[520px]">
          <motion.div style={{ y: y1 }} className="absolute top-2 right-2 w-[62%]">
            <FloatingCard>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><TrendingUp className="h-4 w-4 text-sky-600"/> Cash Projection</div>
                <div className="mt-2"><MiniChart /></div>
              </div>
            </FloatingCard>
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute bottom-8 left-0 w-[58%]">
            <FloatingCard>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground"><Calculator className="h-4 w-4 text-emerald-600"/> Quick Price</div>
                <div className="mt-2"><MiniPricingCalculator /></div>
              </div>
            </FloatingCard>
          </motion.div>
          <motion.div style={{ y: y3 }} className="absolute top-28 left-[42%] w-[38%]">
            <FloatingCard>
              <div className="p-4">
                <div className="text-xs text-muted-foreground">Snapshot</div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <Stat label="MRR" value="$8,240" highlight />
                  <Stat label="Burn" value="$-3,120" />
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-6 h-12 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

function FeatureRow() {
  const items = [
    { iconBg: "bg-orange-50 text-orange-600", icon: <Calculator className="h-6 w-6" />, title: "Pricing Tool", text: "Set profitable prices in seconds with cost + margin intelligence." },
    { iconBg: "bg-sky-50 text-sky-600", icon: <TrendingUp className="h-6 w-6" />, title: "Cash Flow", text: "Forecast balances across 1–36 months with scenario tests." },
    { iconBg: "bg-orange-50 text-orange-600", icon: <BarChart3 className="h-6 w-6" />, title: "Budget vs Actuals", text: "Track performance live from your transactions." },
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}>
            <div className="rounded-3xl border bg-white p-7 md:p-8 min-h-[180px] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all ring-1 ring-transparent hover:ring-sky-100">
              <div className="flex items-center gap-3">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${it.iconBg}`}>{it.icon}</div>
                <span className="text-lg font-semibold tracking-tight">{it.title}</span>
              </div>
              <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed">{it.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ToolSwitcher() {
  const [tab, setTab] = useState("pricing");
  return (
    <Card className="w-full shadow-sm border-muted bg-white/70 backdrop-blur">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          <Sparkles className="h-4 w-4" /> Explore Tools
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="grid grid-cols-3">
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
            <TabsTrigger value="bva">Budget vs Actuals</TabsTrigger>
          </TabsList>
          <TabsContent value="pricing" className="mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <MiniPricingCalculator />
              <MiniChart />
            </div>
          </TabsContent>
          <TabsContent value="cashflow" className="mt-4">
            <div className="grid md:grid-cols-3 gap-4">
              <KPI title="Current Cash" value="$42,880" trend="↑ 12%" />
              <KPI title="Runway" value="7.2 mo" />
              <KPI title="Alerts" value="None" />
            </div>
            <div className="mt-4"><MiniChart /></div>
          </TabsContent>
          <TabsContent value="bva" className="mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <DiffCard label="Revenue" actual={128400} budget={120000} />
              <DiffCard label="Expenses" actual={74900} budget={78500} invert />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function KPI({ title, value, trend }) {
  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="text-xs text-muted-foreground">{title}</div>
      <div className="text-xl font-semibold flex items-center gap-2">{value} {trend && <span className="text-emerald-600 text-sm">{trend}</span>}</div>
    </div>
  );
}

function DiffCard({ label, actual, budget, invert = false }) {
  const diff = actual - budget;
  const positive = invert ? diff < 0 : diff > 0;
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-2 grid grid-cols-3 gap-3 items-end">
        <div>
          <div className="text-[11px] text-muted-foreground">Actual</div>
          <div className="text-lg font-semibold">${actual.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-[11px] text-muted-foreground">Budget</div>
          <div className="text-lg font-semibold">${budget.toLocaleString()}</div>
        </div>
        <div className={`justify-self-end px-2 py-1 rounded-md text-sm ${positive ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
          {positive ? "Better" : "Worse"} {diff > 0 ? "+" : ""}{diff.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const items = [
    { quote: "ProfiMend gave us pricing clarity in a day. Cash forecasting finally feels under control.", name: "Anna K.", role: "Founder, Bloom & Co." },
    { quote: "Clean UI, smart defaults, and our team actually wants to use it — that’s rare.", name: "Michael R.", role: "COO, Northwave Media" },
    { quote: "Budget vs Actuals updates automatically. We make decisions faster with less noise.", name: "Jasmine L.", role: "Owner, Oak Studio" },
  ];

  return (
    <section id="testimonials" className="container mx-auto px-4 py-16">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Loved by modern finance teams</h2>
        <p className="mt-2 text-muted-foreground">Real stories from small businesses using ProfiMend daily.</p>
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {items.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}>
            <div className="rounded-2xl border bg-white p-6 h-full flex flex-col">
              <div className="flex items-center gap-2 text-sky-600">
                <Quote className="h-4 w-4" />
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-sky-500 text-sky-500" />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-foreground">{t.quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function DemoBlocks() {
  return (
    <section id="tools" className="container mx-auto px-4 py-14">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">See it in action</h2>
        <p className="mt-2 text-muted-foreground">Interactive previews of core tools — no setup required.</p>
      </div>
      <div className="mt-6 grid lg:grid-cols-2 gap-6">
        <ToolSwitcher />
        <Card className="shadow-sm border-muted bg-white/70 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Why teams pick ProfiMend
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm">
            <li className="list-none flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5"/> Clear, modern UI that clients enjoy using</li>
            <li className="list-none flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5"/> Desktop‑first with smooth mobile experience</li>
            <li className="list-none flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5"/> Built for speed: minimal clicks, instant insight</li>
            <li className="list-none flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5"/> Privacy‑first. Your data stays yours</li>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="pricing" className="container mx-auto px-4 py-16">
      <div className="rounded-3xl border bg-gradient-to-br from-white to-emerald-50 p-10 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">Build clarity around your numbers</h3>
        <p className="mt-2 text-muted-foreground">Start a free workspace and explore the Pricing and Cash Flow tools in minutes.</p>
        <div className="mt-5 flex gap-3 justify-center">
          <BlueButton size="lg">Create my workspace</BlueButton>
          <Button size="lg" variant="outline" className="rounded-xl">Talk to us</Button>
        </div>
      </div>
    </section>
  );
}

function BigFooter() {
  const col = (title, links) => (
    <div>
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l, i) => (
          <li key={i}><a className="hover:text-foreground" href="#">{l}</a></li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="border-t" id="security">
      <div className="container mx-auto px-4 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {col("Product", ["Pricing", "Cash Flow", "Budget vs Actuals", "Roadmap"])}
        {col("Company", ["About", "Contact", "Press", "Careers"])}
        {col("Resources", ["Docs", "Guides", "Templates", "Blog"])}
        {col("Security", ["Compliance", "Data Privacy", "Status", "Report an Issue"])}
        {col("Legal", ["Terms", "Privacy", "Cookies", "DPA"])}
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <ProfiMendLogo />
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground">Status</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// -------------------- Page --------------------
export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-foreground">
      <Header />
      <main>
        <FloatingHero />
        <FeatureRow />
        <DemoBlocks />
        <Testimonials />
        <CTA />
      </main>
      <BigFooter />
    </div>
  );
}
