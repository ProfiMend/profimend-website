// app/components/DemoShowcase.tsx
import { motion } from "framer-motion";

function Shell({ children, className = "" }: any) {
  return (
    <motion.div
      className={`rounded-3xl bg-white/95 p-6 shadow-2xl ring-1 ring-slate-200 ${className}`}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 140, damping: 14 }}
    >
      {children}
    </motion.div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <div className="text-[10px] uppercase tracking-wide text-slate-500">{label}</div>
      <input
        value={value}
        readOnly
        className="mt-1 w-full rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-sm text-slate-700"
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
      <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
      <div
        className={`text-xl font-semibold ${
          highlight ? "text-amber-700" : "text-slate-900"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

export default function DemoShowcase() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50 via-cyan-50 to-white" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900">
            Explore the tools—live and intuitive
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-slate-600">
            Quick, delightful previews of the Pricing and Cash Flow experiences—no
            setup required.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Quick Price (Demo) */}
          <Shell>
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold text-slate-800">Quick Price (Demo)</div>
              <div className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-200">
                live preview
              </div>
            </div>

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

          {/* Cash Projection */}
          <Shell>
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold text-slate-800">Cash Projection</div>
              <div className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-200">
                scenario
              </div>
            </div>

            <div className="mt-5 h-36 w-full rounded-2xl bg-gradient-to-r from-sky-200 via-sky-300 to-cyan-200" />
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-xs text-slate-500">MRR</div>
                <div className="text-xl font-semibold text-slate-900">$8,240</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-xs text-slate-500">BURN</div>
                <div className="text-xl font-semibold text-rose-600">-3,120</div>
              </div>
            </div>
          </Shell>
        </div>
      </div>
    </section>
  );
}
