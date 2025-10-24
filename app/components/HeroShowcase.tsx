import { motion } from "framer-motion";

function Card({ children, className = "" }: any) {
  return (
    <div className={`rounded-2xl bg-white/95 shadow-xl ring-1 ring-slate-200 ${className}`}>
      {children}
    </div>
  );
}

export default function HeroShowcase() {
  return (
    <motion.div
      className="mx-auto mt-10 max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Quick Price */}
      <Card className="p-4">
        <div className="text-sm font-medium text-slate-700">Quick Price (Demo)</div>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <Field label="Variable cost / unit" value="12.5" />
          <Field label="Target margin %" value="40" />
          <Field label="Units" value="120" />
        </div>
        <div className="mt-4 grid grid-cols-4 gap-3">
          <Kpi label="PRICE" value="$20.83" />
          <Kpi label="REVENUE" value="$2,500" />
          <Kpi label="VAR COST" value="$1,500" />
          <Kpi label="PROFIT" value="$1,000" highlight />
        </div>
      </Card>

      {/* Cash Projection */}
      <Card className="p-4">
        <div className="text-sm font-medium text-slate-700">Cash Projection</div>
        <div className="mt-3 h-28 rounded-lg bg-gradient-to-r from-sky-200 via-sky-300 to-cyan-200" />
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">MRR</div>
            <div className="text-lg font-semibold">$8,240</div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="text-xs text-slate-500">BURN</div>
            <div className="text-lg font-semibold text-rose-600">-3,120</div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-2">
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
      className={`rounded-lg border p-3 text-center ${
        highlight ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-white"
      }`}
    >
      <div className="text-[10px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className={`text-lg font-semibold ${highlight ? "text-amber-700" : "text-slate-900"}`}>
        {value}
      </div>
    </div>
  );
}

