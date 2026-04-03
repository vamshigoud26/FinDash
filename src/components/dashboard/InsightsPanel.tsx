import { useMemo } from "react";
import { useFinance } from "@/context/FinanceContext";
import { monthlyData } from "@/data/mockData";
import { AlertCircle, TrendingUp, BarChart3, Lightbulb } from "lucide-react";

export default function InsightsPanel() {
  const { transactions } = useFinance();

  const insights = useMemo(() => {
    // Highest spending category
    const catMap: Record<string, number> = {};
    transactions
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        catMap[t.category] = (catMap[t.category] || 0) + t.amount;
      });
    const sorted = Object.entries(catMap).sort((a, b) => b[1] - a[1]);
    const topCategory = sorted[0];

    // Monthly comparison (last two months)
    const current = monthlyData[monthlyData.length - 1];
    const prev = monthlyData[monthlyData.length - 2];
    const expenseChange = current && prev
      ? ((current.expenses - prev.expenses) / prev.expenses) * 100
      : 0;
    const incomeChange = current && prev
      ? ((current.income - prev.income) / prev.income) * 100
      : 0;

    // Average transaction
    const expenses = transactions.filter((t) => t.type === "expense");
    const avgExpense = expenses.length > 0
      ? expenses.reduce((s, t) => s + t.amount, 0) / expenses.length
      : 0;

    // Savings rate
    const totalIncome = transactions.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0);
    const totalExpenses = expenses.reduce((s, t) => s + t.amount, 0);
    const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome) * 100 : 0;

    return { topCategory, expenseChange, incomeChange, avgExpense, savingsRate };
  }, [transactions]);

  const cards = [
    {
      icon: AlertCircle,
      title: "Highest Spending",
      value: insights.topCategory ? insights.topCategory[0] : "N/A",
      detail: insights.topCategory
        ? `₹${insights.topCategory[1].toFixed(2)} total`
        : "",
      colorClass: "text-expense",
      bgClass: "bg-expense-muted",
    },
    {
      icon: TrendingUp,
      title: "Monthly Expenses",
      value: `${insights.expenseChange >= 0 ? "+" : ""}${insights.expenseChange.toFixed(1)}%`,
      detail: "vs. last month",
      colorClass: insights.expenseChange > 0 ? "text-expense" : "text-income",
      bgClass: insights.expenseChange > 0 ? "bg-expense-muted" : "bg-income-muted",
    },
    {
      icon: BarChart3,
      title: "Avg. Expense",
      value: `₹${insights.avgExpense.toFixed(2)}`,
      detail: "per transaction",
      colorClass: "text-primary",
      bgClass: "bg-secondary",
    },
    {
      icon: Lightbulb,
      title: "Savings Rate",
      value: `${insights.savingsRate.toFixed(1)}%`,
      detail: insights.savingsRate > 30 ? "Great job!" : "Room to improve",
      colorClass: "text-income",
      bgClass: "bg-income-muted",
    },
  ];

  return (
    <div className="rounded-xl bg-card border border-border p-5 flex flex-col gap-4">
      <div>
        <h3 className="text-base font-semibold text-card-foreground">Insights</h3>
        <p className="text-sm text-muted-foreground">Key observations from your data</p>
      </div>
      <div className="flex flex-col gap-3">
        {cards.map((card) => (
          <div key={card.title} className="flex items-center gap-3 rounded-lg p-3 bg-muted/40">
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${card.bgClass}`}>
              <card.icon className={`w-5 h-5 ${card.colorClass}`} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">{card.title}</span>
              <span className="text-sm font-semibold text-card-foreground">{card.value}</span>
              <span className="text-xs text-muted-foreground">{card.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
