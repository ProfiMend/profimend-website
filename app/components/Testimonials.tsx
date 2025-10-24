// app/components/Testimonials.tsx
export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-center text-2xl md:text-4xl font-semibold text-slate-900">
        Loved by modern finance teams
      </h2>
      <p className="mt-3 text-center text-slate-600">
        Real results from teams who review ProfiMend daily.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Quote
          text="ProfiMend gave us pricing clarity in days, not months. Our gross margin improved 6% within a quarter."
          author="Ava Hart"
          title="CFO, Northwind"
        />
        <Quote
          text="The cash flow views are deceptively simple—and exactly what our board wanted to see every week."
          author="Noah Patel"
          title="Founder, Octave Labs"
        />
        <Quote
          text="Setup took minutes. Budget vs Actuals updates live from our transactions—no more spreadsheet gymnastics."
          author="Mia Chen"
          title="Head of Ops, River & Co."
        />
      </div>
    </section>
  );
}

function Quote({
  text,
  author,
  title,
}: {
  text: string;
  author: string;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-slate-800">{text}</p>
      <div className="mt-4 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">{author}</span> — {title}
      </div>
    </div>
  );
}
