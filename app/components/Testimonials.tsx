export default function Testimonials() {
  const items = [
    {
      name: "Ava Hart",
      role: "CFO, Northwind",
      quote:
        "ProfiMend gave us pricing clarity in days, not months. Our gross margin improved 6% within a quarter.",
    },
    {
      name: "Noah Patel",
      role: "Founder, Octave Labs",
      quote:
        "The cash flow views are deceptively simple—and exactly what our board wanted to see every week.",
    },
    {
      name: "Mia Chen",
      role: "Head of Ops, River & Co.",
      quote:
        "Setup took minutes. Budget vs Actuals updates live from our transactions—no more spreadsheet gymnastics.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 text-center">
        Loved by modern finance teams
      </h2>
      <p className="mt-2 text-slate-600 text-center">
        Real results from teams who review ProfiMend daily.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <blockquote className="text-slate-700">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">
              <span className="font-medium text-slate-900">{t.name}</span> • {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
