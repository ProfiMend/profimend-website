import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function CashflowPage() {
  const entriesData = [
    { type: "Income", item: "Salary", amount: 3000, date: "Jan 5" },
    { type: "Expense", item: "Groceries", amount: -200, date: "Jan 8" },
    { type: "Expense", item: "Rent", amount: -1000, date: "Jan 10" },
    { type: "Income", item: "Freelance", amount: 800, date: "Jan 15" },
  ];

  const forecastData = [
    { month: "Jan", balance: 1600 },
    { month: "Feb", balance: 2200 },
    { month: "Mar", balance: 2800 },
    { month: "Apr", balance: 3100 },
  ];

  const formatAmount = (amount: number) => {
    if (amount < 0) return `(${Math.abs(amount)})`;
    return amount.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 via-white to-white">
      {/* Marketing Section */}
      <section className="text-center max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Understand and Forecast Your Cashflow
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          ProfiMend Cashflow gives you a clear view of where your money is going and
          helps you plan ahead with smart forecasting tools.
        </p>
        <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
          Register Now
        </Button>
      </section>

      {/* Entries and Forecast Section */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 pb-16">
        {/* Recent Entries Table */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-slate-900">Recent Entries</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-slate-100 text-slate-900">
                  <tr>
                    <th className="p-3 font-medium">Type</th>
                    <th className="p-3 font-medium">Item</th>
                    <th className="p-3 font-medium text-right">Amount</th>
                    <th className="p-3 font-medium text-right">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {entriesData.map((entry, index) => (
                    <tr
                      key={index}
                      className={`$${index} % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-cyan-50 transition`}
                    >
                      <td
                        className={`p-3 font-medium ${entry.type === "Income" ? "text-green-600" : "text-red-500"}`}
                      >
                        {entry.type}
                      </td>
                      <td className="p-3">{entry.item}</td>
                      <td
                        className={`p-3 text-right font-semibold ${entry.amount < 0 ? "text-red-500" : "text-green-600"}`}
                      >
                        {formatAmount(entry.amount)}
                      </td>
                      <td className="p-3 text-right text-slate-700">{entry.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Cashflow Forecast Chart */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-slate-900">Cashflow Forecast</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={forecastData}>
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="balance" stroke="#0891b2" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Register Button CTA */}
      <div className="text-center py-12 bg-white border-t border-slate-100">
        <Button
          size="lg"
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-10"
          asChild
        >
          <a href="/setup">Register and Get Started</a>
        </Button>
      </div>
    </div>
  );
}