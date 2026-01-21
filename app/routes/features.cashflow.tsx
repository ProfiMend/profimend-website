import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";

export default function CashflowFeature() {
  const forecastData = [
    { name: 'Apr', cashflow: 1200 },
    { name: 'May', cashflow: 1800 },
    { name: 'Jun', cashflow: 2500 },
    { name: 'Jul', cashflow: 3000 },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 space-y-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-sky-600">Cashflow Management</h1>
        <p className="text-lg text-gray-600">
          Track income and expenses effortlessly and forecast your cash position anytime.
          ProfiMend’s Cashflow helps you stay in control of your finances.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Income & Expense Data</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Type</th>
                  <th>Description</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Income</td><td>Subscription revenue</td><td className="text-right text-green-600">+4,500</td></tr>
                <tr><td>Income</td><td>Consulting project</td><td className="text-right text-green-600">+1,200</td></tr>
                <tr><td>Expense</td><td>Salaries</td><td className="text-right text-red-500">−2,800</td></tr>
                <tr><td>Expense</td><td>Software tools</td><td className="text-right text-red-500">−600</td></tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Cashflow Forecast</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData}>
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Line type="monotone" dataKey="cashflow" stroke="#0284c7" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <motion.div className="mt-16 rounded-3xl bg-sky-600 p-10 text-center text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <h2 className="text-2xl font-semibold mb-4">Start forecasting your cashflow in minutes</h2>
        <p className="mb-6 text-sky-100 max-w-xl mx-auto">
          Create your account and experience real‑time cashflow insights.
        </p>
        <Link to="/register">
          <Button size="lg" className="rounded-2xl bg-white text-sky-700 hover:bg-slate-100 px-8 py-4 text-lg font-medium">
            Register to Start Using Cashflow
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}