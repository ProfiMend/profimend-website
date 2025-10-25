// app/components/Testimonials.tsx
import { motion } from "framer-motion";

const ITEMS = [
  {
    text:
      "ProfiMend gave us pricing clarity in days, not months. Our gross margin improved 6% within a quarter.",
    author: "Ava Hart",
    title: "CFO, Northwind",
  },
  {
    text:
      "The cash flow views are deceptively simple — and exactly what our board wanted to see every week.",
    author: "Noah Patel",
    title: "Founder, Octave Labs",
  },
  {
    text:
      "Setup took minutes. Budget vs Actuals updates live from our transactions — no more spreadsheet gymnastics.",
    author: "Mia Chen",
    title: "Head of Ops, River & Co.",
  },
];

function TestimonialCard({
  text,
  author,
  title,
}: {
  text: string;
  author: string;
  title: string;
}) {
  return (
    <motion.div
      className="rounded-3xl bg-white/95 p-12 shadow-sm ring-1 ring-slate-200 min-h-[340px] flex flex-col"
      whileHover={{ y: -4, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 140, damping: 16 }}
    >
      <p className="text-lg md:text-xl leading-8 text-slate-800 flex-1">
        “{text}”
      </p>
      <div className="mt-8 text-base md:text-lg text-slate-600">
        <span className="font-semibold text-slate-900">{author}</span> — {title}
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section id="customers" className="mx-auto max-w-7xl px-6 py-22">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-slate-900">
          Loved by modern finance teams
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          Real results from teams who review ProfiMend daily.
        </p>
      </div>

      {/* Same sizing as “What you get” blocks */}
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {ITEMS.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}

