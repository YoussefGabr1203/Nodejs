"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/dashboard/patients", label: "Patients", icon: "groups" },
  {
    href: "/dashboard/ai-assistant",
    label: "AI Assistant",
    icon: "smart_toy",
    badge: "BETA",
  },
  { href: "/dashboard/analytics", label: "Analytics", icon: "analytics" },
  { href: "/dashboard/settings", label: "Settings", icon: "settings" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-surface-dark border-r border-border-dark flex-shrink-0 hidden md:flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3 border-b border-border-dark/50">
        <div className="bg-primary/20 p-2 rounded-lg">
          <span className="material-symbols-outlined text-primary text-3xl">
            neurology
          </span>
        </div>
        <div>
          <Link href="/dashboard">
            <h1 className="text-white text-lg font-bold tracking-tight">
              NABD
            </h1>
          </Link>
          <p className="text-slate-400 text-xs font-medium">
            Neuro Glove Portal
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
              isActive(item.href)
                ? "bg-primary/15 text-primary"
                : "text-slate-400 hover:text-slate-100 hover:bg-border-dark/50"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border-dark/50">
        <div className="flex items-center gap-3 px-2">
          <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold text-white border-2 border-primary/30">
            DS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">Dr. Smith</span>
            <span className="text-xs text-slate-400">Neurologist</span>
          </div>
          <Link
            href="/"
            className="ml-auto text-slate-400 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
