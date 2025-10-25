// app/components/DemoShowcase.tsx
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Shell({
  children,
  className = "",
  label,
  badge,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
  badge?: string;
}) {
  return (
    <motion.div
      className={`rounded-3xl bg-white/95 p-6 shadow-2xl ring-1 ring-slate-200 ${className}`}
      whileHover={{ y: -5, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 140, damping: 14 }}
    >
      <div className="flex items-center justify-between">
        <div className="text-lg md:text-xl font-semibold text-slate-900">
          {label}
        </div>
        {badge ? (
          <div className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200">
            {badge}
          </div>
        ) : null}
      </div>
      {children}
    </motion.div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <div className="text-[11px] uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <input
        value={value}
        readOnly
        className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-base text-slate-800"
      />
    </div>
  );
}

function Kpi({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 text-center ${
        highlight ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"
      }`}
    >
      <div className="text-[11px] uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div
        className={`text-xl md:text-2xl font-semibold ${
          highlight ? "text-amber-700" : "text-slate-900"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

const cashData = [
  { m: "Apr", bal: 12000 },
  { m: "May", bal: 13800 },
  { m: "Jun", bal: 13100 },
  { m: "Jul", bal: 14950 },
  { m: "Aug", bal: 16100 },
  { m: "Sep", bal: 15500 },
  { m: "Oct", bal: 17250 },
  { m: "Nov", bal: 18000 },
  { m: "Dec", bal: 19150 },
];

export default function DemoShowcase() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50 via-cyan-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
            Explore the tools — live and intuitive
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Bigger previews of Pricing and Cash Flow, tuned for clarity and speed.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Quick Price (Demo) — slightly smaller than before */}
          <Shell label="Quick Price (Demo)" badge="live preview">
            <div className="mt-5 grid grid-cols-3 gap-4">
              <Field label="Variable cost / unit" value="12.5" />
              <Field label="Target margin %" value="40" />
              <Field label="Units" value="120" />
            </div>

            <div className="mt-5 grid grid-cols-4 gap-4">
              <Kpi label="PRICE" value="$20.83" />
              <Kpi label="REVENUE" value="$2,500" />
              <Kpi label="VAR COST" value="$1,500" />
              <Kpi label="PROFIT" value="$1,000" highlight />
            </div>
          </Shell>

          {/* Cash Projection — chart slightly shorter */}
          <Shell label="Cash Projection" badge="scenario">
            <div className="mt-5 h-[280px] w-full rounded-2xl border border-slate-200 bg-white p-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={cashData} margin={{ top: 12, right: 16, left: 0, bottom: 4 }}>
                  <defs>
                    <linearGradient id="cashFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="m" tick={{ fill: "#64748b" }} />
                  <YAxis tick={{ fill: "#64748b" }} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: 12,
                      borderColor: "#e2e8f0",
                      boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="bal"
                    stroke="#0ea5e9"
                    strokeWidth={2.4}
                    fill="url(#cashFill)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-xs text-slate-500">MRR</div>
                <div className="text-xl md:text-2xl font-semibold text-slate-900">$8,240</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-xs text-slate-500">BURN</div>
                <div className="text-xl md:text-2xl font-semibold text-rose-600">-3,120</div>
              </div>
            </div>
          </Shell>
        </div>
      </div>
    </section>
  );
}
