import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export default function CashflowPage() {
  const entriesData = [
    { item: 'Salary', date: 'Jan 5', amount: 3000 },
    { item: 'Groceries', date: 'Jan 8', amount: -200 },
    { item: 'Rent', date: 'Jan 10', amount: -1000 },
    { item: 'Freelance', date: 'Jan 15', amount: 800 }
  ];

  const forecastData = [
    { month: 'Jan', balance: 1600 },
    { month: 'Feb', balance: 2200 },
    { month: 'Mar', balance: 2800 },
    { month: 'Apr', balance: 3100 }
  ];

  return (
    <div className="p-8 space-y-8">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Understand and Forecast Your Cashflow</h1>
        <p className="text-lg text-muted-foreground mb-6">
          ProfiMend Cashflow gives you a clear view of where your money is going and helps you plan ahead with smart forecasting tools.
        </p>
        <Button size="lg">Register Now</Button>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Recent Entries</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={entriesData}>
                <XAxis dataKey="item" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Cashflow Forecast</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={forecastData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="balance" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}