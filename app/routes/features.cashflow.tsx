import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";

export default function CashflowFeature() {
  const dataFeed = [
    { name: 'Jan', income: 4000, expenses: 2400 },
    { name: 'Feb', income: 3000, expenses: 1398 },
    { name: 'Mar', income: 5000, expenses: 2800 },
  ];

  const forecastData = [
    { name: 'Apr', cashflow: 1200 },
    { name: 'May', cashflow: 1800 },
    { name: 'Jun', cashflow: 2500 },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full px-6 py-12 space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">Cashflow Management</h1>
        <p className="text-lg text-gray-600">
          Track your income, manage expenses, and forecast your cash position anytime.
          ProfiMend’s Cashflow feature helps you stay in control of your business finances.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Data Feed</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dataFeed}>
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="income" stroke="#4ade80" strokeWidth={2} />
                  <Line type="monotone" dataKey="expenses" stroke="#f87171" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Cashflow Forecast</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData}>
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="cashflow" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <Link to="/register">
          <Button size="lg" className="rounded-2xl px-8 py-4 text-lg font-medium">
            Register to Start Using Cashflow
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}