import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const inputData = [
  { name: 'Jan', expenses: 4000, income: 2400 },
  { name: 'Feb', expenses: 3000, income: 1398 },
  { name: 'Mar', expenses: 2000, income: 9800 },
  { name: 'Apr', expenses: 2780, income: 3908 },
  { name: 'May', expenses: 1890, income: 4800 },
];

const trendData = [
  { month: 'Jan', cashflow: 2000 },
  { month: 'Feb', cashflow: 1000 },
  { month: 'Mar', cashflow: 7800 },
  { month: 'Apr', cashflow: 1128 },
  { month: 'May', cashflow: 2910 },
];

export default function CashflowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-800 flex flex-col items-center px-6 py-20">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 text-center mb-6">Cash Flow Overview</h1>
        <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto mb-12">
          Visualize your incoming and outgoing cash to make better business decisions. ProfiMend's cash flow tools provide clarity and control with smart forecasting and live insights.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/80 backdrop-blur rounded-3xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cash Flow Inputs</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={inputData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#475569" />
                <YAxis stroke="#475569" />
                <Tooltip />
                <Bar dataKey="income" fill="#0ea5e9" name="Income" />
                <Bar dataKey="expenses" fill="#f59e0b" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-3xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cash Flow Trends</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#475569" />
                <YAxis stroke="#475569" />
                <Tooltip />
                <Line type="monotone" dataKey="cashflow" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}