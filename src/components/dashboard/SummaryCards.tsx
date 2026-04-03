import { useFinance } from "@/context/FinanceContext";
import { TrendingUp, TrendingDown, Wallet } from "lucide-react";

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(n);

const cards = [
  {
    key: "balance" as const,
    label: "Total Balance",
    icon: Wallet,
    colorClass: "text-primary",
    bgClass: "bg-secondary",
  },
  {
    key: "income" as const,
    label: "Total Income",
    icon: TrendingUp,
    colorClass: "text-income",
    bgClass: "bg-income-muted",
  },
  {
    key: "expenses" as const,
    label: "Total Expenses",
    icon: TrendingDown,
    colorClass: "text-expense",
    bgClass: "bg-expense-muted",
  },
];

export default function SummaryCards() {
  const { totalBalance, totalIncome, totalExpenses } = useFinance();
  const values = { balance: totalBalance, income: totalIncome, expenses: totalExpenses };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {cards.map(({ key, label, icon: Icon, colorClass, bgClass }) => (
        <div
          key={key}
          className="flex-1 flex items-center gap-4 rounded-xl bg-card p-5 card-hover border border-border"
        >
          <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${bgClass}`}>
            <Icon className={`w-6 h-6 ${colorClass}`} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">{label}</span>
            <span className="text-xl font-semibold text-card-foreground">
              {formatCurrency(values[key])}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
