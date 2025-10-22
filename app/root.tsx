import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import styles from "~/styles/tailwind.css?url";
import { motion } from "framer-motion";
import { DollarSign, BarChart3, Calculator } from "lucide-react";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
  <div className="min-h-screen bg-white text-gray-800">
  <header className="w-full">
    <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-700">ProfiMend</div>
      <nav className="hidden md:flex gap-6 text-sm">
        <a href="#" className="hover:text-blue-700">Features</a>
        <a href="#" className="hover:text-blue-700">Pricing</a>
        <a href="#" className="hover:text-blue-700">About</a>
        <a href="https://YOUR-JETADMIN-URL" className="text-orange-600 font-semibold">Login</a>
      </nav>
    </div>
  </header>

  <section className="text-center py-24 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
    <motion.h1 className="text-5xl font-bold mb-4">
      Smarter Financial Decisions for Small Businesses
    </motion.h1>
    <p className="text-lg max-w-2xl mx-auto mb-8">
      AI-powered dashboards to price your products, forecast cash flow, and grow confidently.
    </p>
    <a
      href="https://YOUR-JETADMIN-URL"
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-2xl"
    >
      Get Started Free
    </a>
  </section>

  <section id="features" className="py-24 max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10">
  <div className="shadow-xl border-t-4 border-blue-500 rounded-2xl p-10 text-center flex flex-col items-center justify-between min-h-[320px]"
>
      <DollarSign className="w-10 h-10 mx-auto text-blue-500 mb-4" />
      <h3 className="font-semibold text-2xl mb-3">Pricing Tool</h3>
      <p className="text-lg leading-relaxed">
        Find your perfect price point based on fixed and variable costs, break-even, and competition.
      </p>
    </div>

    <div className="shadow-xl border-t-4 border-orange-500 rounded-2xl p-10 text-center flex flex-col items-center justify-between min-h-[320px]"
>
      <BarChart3 className="w-10 h-10 mx-auto text-orange-500 mb-4" />
      <h3 className="font-semibold text-2xl mb-3">Cash Flow Forecast</h3>
      <p className="text-lg leading-relaxed">Track inflows and outflows, predict balance shortfalls, and visualize your financial future.</p>
    </div>

    <div className="shadow-xl border-t-4 border-blue-400 rounded-2xl p-10 text-center flex flex-col items-center justify-between min-h-[320px]"
>
      <Calculator className="w-10 h-10 mx-auto text-blue-400 mb-4" />
      <h3 className="font-semibold text-2xl mb-3">Budget vs Actuals</h3>
      <p className="text-lg leading-relaxed">Compare your goals and performance, and identify improvement areas in real time.</p>
    </div>
  </section>

  <section className="py-24 bg-blue-50 text-center">
    <h2 className="text-3xl font-bold mb-4 text-blue-700">
      Ready to simplify your business finances?
    </h2>
    <p className="mb-8 text-gray-600">
      Join ProfiMend and start managing your numbers with clarity and confidence.
    </p>
    <a
      href="https://YOUR-JETADMIN-URL"
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-2xl"
    >
      Create Free Account
    </a>
  </section>

  <footer className="py-10 bg-blue-600 text-white text-center">
    <p className="text-sm">© {new Date().getFullYear()} ProfiMend. All rights reserved.</p>
  </footer>
</div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />     
      </body>
    </html>
  );
}
