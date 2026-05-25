import DashboardSidebar from "@/modules/shared/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen overflow-hidden bg-background-dark">
      <DashboardSidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-border-dark bg-background-dark/95 backdrop-blur flex items-center justify-between px-6 md:px-10 shrink-0">
          <div className="md:hidden flex items-center gap-2">
            <span className="material-symbols-outlined text-white">menu</span>
            <span className="font-bold text-lg text-white">NABD</span>
          </div>
          <div className="hidden md:block" />
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined text-[20px]">
                search
              </span>
              <input
                className="bg-surface-dark border border-border-dark rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-primary w-64"
                placeholder="Search patients..."
                type="text"
              />
            </div>
            <button className="relative p-2 text-slate-400 hover:text-white">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full animate-pulse" />
            </button>
          </div>
        </header>
        {/* Content */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}
