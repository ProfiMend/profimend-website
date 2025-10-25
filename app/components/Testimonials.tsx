// app/components/Testimonials.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    text:
      "ProfiMend gave us pricing clarity in days, not months. Our gross margin improved 6% within a quarter.",
    author: "Ava Hart",
    title: "CFO, Northwind",
  },
  {
    text:
      "The cash flow views are deceptively simple—and exactly what our board wanted to see every week.",
    author: "Noah Patel",
    title: "Founder, Octave Labs",
  },
  {
    text:
      "Setup took minutes. Budget vs Actuals updates live from our transactions—no more spreadsheet gymnastics.",
    author: "Mia Chen",
    title: "Head of Ops, River & Co.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-center text-3xl md:text-5xl font-semibold text-slate-900">
        Loved by modern finance teams
      </h2>
      <p className="mt-4 text-center text-lg text-slate-600">
        Real results from teams who review ProfiMend daily.
      </p>

      <div className="relative mx-auto mt-12 max-w-4xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl min-h-[260px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-xl leading-8 text-slate-800">{t.text}</p>
              <div className="mt-6 text-base text-slate-600">
                <span className="font-semibold text-slate-900">{t.author}</span> — {t.title}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots + Controls */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${
                i === index ? "bg-sky-600" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

