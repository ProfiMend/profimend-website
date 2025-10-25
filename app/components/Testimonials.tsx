// app/components/Testimonials.tsx
import { useMemo } from "react";

/** Three premium quotes (duplicate for seamless loop) */
const ITEMS = [
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

function Card({ text, author, title }: { text: string; author: string; title: string }) {
  return (
    <div className="mx-3 w-[320px] md:w-[380px] shrink-0 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-[15px] leading-7 text-slate-800">{text}</p>
      <div className="mt-5 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">{author}</span> — {title}
      </div>
    </div>
  );
}

export default function Testimonials() {
  // duplicate list to make seamless loop
  const loop = useMemo(() => [...ITEMS, ...ITEMS, ...ITEMS], []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-center text-3xl md:text-5xl font-semibold text-slate-900">
        Loved by modern finance teams
      </h2>
      <p className="mt-4 text-center text-lg text-slate-600">
        Real results from teams who review ProfiMend daily.
      </p>

      {/* Marquee */}
      <div className="relative mt-10 overflow-hidden">
        {/* gradient masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

        <div
          className="flex"
          style={{
            width: "max-content",
            animation: "pm-marquee 28s linear infinite",
          }}
        >
          {loop.map((t, i) => (
            <Card key={i} {...t} />
          ))}
        </div>

        {/* keyframes (scoped) */}
        <style>
          {`
            @keyframes pm-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @media (min-width: 768px) {
              @keyframes pm-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.333%); } /* slower on desktop */
              }
            }
          `}
        </style>
      </div>
    </section>
  );
}
