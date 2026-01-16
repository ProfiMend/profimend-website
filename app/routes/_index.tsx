// webdev test edit
import { motion } from "framer-motion";
import { DollarSign, BarChart3, Calculator } from "lucide-react";
import ProfiMendLogo from "~/components/ProfiMendLogo";
import Testimonials from "~/components/Testimonials";
import DemoShowcase from "~/components/DemoShowcase";

function Feature({
  icon,
  title,
  text,
  borderColor,
  tint,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  borderColor: string;
  tint: string;
}) {
  return (
    <motion.div
      className={`rounded-3xl ${tint} p-12 shadow-sm ring-1 ring-slate-200 border-t-4 ${borderColor} min-h-[340px]`}
      whileHover={{ y: -4, scale: 1.008 }}
      transition={{ type: "spring", stiffness: 140, damping: 16 }}
    >
      <div className="flex items-center gap-5">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white text-sky-600 ring-1 ring-slate-200">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-6 text-lg md:text-xl leading-8 text-slate-700">{text}</p>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800 flex flex-col">
      {/* Top nav */}
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ProfiMendLogo className="h-7 w-7" withWordmark />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#customers" className="hover:text-slate-900">Customers</a>
            <a href="/pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="text-sm text-slate-600 hover:text-slate-900">Sign in</a>
            <a
              href="/signup"
              className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700"
            >
              Start free
            </a>
          </div>
        </div>
      </header>

      {/* Remaining content unchanged */}
    </div>
  );
}