import { useFinance, type UserRole } from "@/context/FinanceContext";
import { Shield, Eye } from "lucide-react";

export default function RoleSwitcher() {
  const { role, setRole } = useFinance();

  const roles: { value: UserRole; label: string; icon: typeof Shield }[] = [
    { value: "admin", label: "Admin", icon: Shield },
    { value: "viewer", label: "Viewer", icon: Eye },
  ];

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-card p-1">
      {roles.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => setRole(value)}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
            role === value
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon className="w-3.5 h-3.5" />
          {label}
        </button>
      ))}
    </div>
  );
}
