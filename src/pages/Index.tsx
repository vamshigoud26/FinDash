import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FinanceProvider } from "@/context/FinanceContext";
import SummaryCards from "@/components/dashboard/SummaryCards";
import BalanceTrendChart from "@/components/dashboard/BalanceTrendChart";
import SpendingBreakdown from "@/components/dashboard/SpendingBreakdown";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import InsightsPanel from "@/components/dashboard/InsightsPanel";
import RoleSwitcher from "@/components/dashboard/RoleSwitcher";
import { LayoutDashboard, Moon, Sun } from "lucide-react";

export default function Index() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <FinanceProvider>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5 text-primary" />
              <h1 className="text-lg font-semibold text-foreground">FinDash</h1>
            </div>
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition hover:bg-secondary"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  aria-label="Toggle dark mode"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}
              <RoleSwitcher />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 flex flex-col gap-6">
          <SummaryCards />

          {/* Charts row */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-[2]">
              <BalanceTrendChart />
            </div>
            <div className="flex-1">
              <SpendingBreakdown />
            </div>
          </div>

          {/* Transactions + Insights */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-[2]">
              <TransactionsTable />
            </div>
            <div className="flex-1">
              <InsightsPanel />
            </div>
          </div>
        </main>
      </div>
    </FinanceProvider>
  );
}
