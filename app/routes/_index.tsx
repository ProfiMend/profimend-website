import { motion } from "framer-motion";
import { DollarSign, BarChart3, Calculator } from "lucide-react";
import ProfiMendLogo from "~/components/ProfiMendLogo";
import Testimonials from "~/components/Testimonials";
import DemoShowcase from "~/components/DemoShowcase";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800 flex flex-col">
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ProfiMendLogo className="h-7 w-7" withWordmark />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <div className="relative group">
              <span className="hover:text-slate-900 flex items-center gap-1 cursor-pointer">
                Features
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-slate-200 rounded-xl shadow-lg w-40 py-2 z-20">
                <a href="/features/cashflow" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900">Cashflow</a>
                <a href="#pricing" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900">Pricing Tool</a>
                <a href="#budget" className="block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900">Budget</a>
              </div>
            </div>
            <a href="#customers" className="hover:text-slate-900">Customers</a>
            <a href="/contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="text-sm text-slate-600 hover:text-slate-900">Sign in</a>
            <a href="/signup" className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700">Start free</a>
          </div>
        </div>
      </header>
    </div>
  );
}
