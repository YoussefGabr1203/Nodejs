import Link from "next/link";

const recentTests = [
  {
    name: "John Doe",
    initials: "JD",
    date: "Oct 24, 2023",
    type: "Tremor Analysis",
    score: "8.5/10",
    status: "Severe",
    statusColor: "red",
  },
  {
    name: "Jane Smith",
    initials: "JS",
    date: "Oct 23, 2023",
    type: "Gait Stability",
    score: "3.2/10",
    status: "Normal",
    statusColor: "emerald",
  },
  {
    name: "Robert Brown",
    initials: "RB",
    date: "Oct 23, 2023",
    type: "Finger Tap",
    score: "5.1/10",
    status: "Moderate",
    statusColor: "yellow",
  },
  {
    name: "Michael Wilson",
    initials: "MW",
    date: "Oct 22, 2023",
    type: "Rigidity Test",
    score: "6.8/10",
    status: "Elevated",
    statusColor: "orange",
  },
];

const notifications = [
  {
    icon: "smart_toy",
    iconColor: "primary",
    borderColor: "border-primary",
    title: "AI Analysis Ready",
    desc: "Gait analysis for John Doe has been processed. Anomalies detected in left stride.",
    time: "10 min ago",
  },
  {
    icon: "warning",
    iconColor: "orange-500",
    borderColor: "border-orange-500",
    title: "Medication Alert",
    desc: "Patient Emily Davis missed scheduled logging for 2 consecutive days.",
    time: "2 hours ago",
  },
  {
    icon: "calendar_today",
    iconColor: "slate-400",
    borderColor: "border-transparent",
    title: "Appointment Reminder",
    desc: "Follow-up with Robert Brown tomorrow at 09:00 AM.",
    time: "5 hours ago",
  },
  {
    icon: "check_circle",
    iconColor: "emerald-400",
    borderColor: "border-transparent",
    title: "System Update",
    desc: "Neuro Glove firmware v2.4 is now available for deployment.",
    time: "1 day ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, Dr. Smith
          </h1>
          <p className="text-slate-400">
            Here is your daily summary of patient diagnostics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "person",
              iconBg: "bg-primary/10",
              iconColor: "text-primary",
              label: "Total Patients",
              value: "142",
              trend: "+12%",
              trendUp: true,
            },
            {
              icon: "monitor_heart",
              iconBg: "bg-purple-500/10",
              iconColor: "text-purple-400",
              label: "Tests This Month",
              value: "89",
              trend: "+5%",
              trendUp: true,
            },
            {
              icon: "warning",
              iconBg: "bg-orange-500/10",
              iconColor: "text-orange-400",
              label: "Critical Alerts",
              value: "3",
              trend: "-2%",
              trendUp: false,
            },
            {
              icon: "assignment",
              iconBg: "bg-blue-500/10",
              iconColor: "text-blue-400",
              label: "Pending Reports",
              value: "12",
              extra: "Requires review",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface-dark border border-border-dark rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`${stat.iconBg} p-2 rounded-lg ${stat.iconColor}`}>
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </div>
                {stat.trend && (
                  <span
                    className={`flex items-center text-sm font-medium px-2 py-1 rounded ${
                      stat.trendUp
                        ? "text-emerald-400 bg-emerald-400/10"
                        : "text-emerald-400 bg-emerald-400/10"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px] mr-1">
                      {stat.trendUp ? "trending_up" : "arrow_downward"}
                    </span>
                    {stat.trend}
                  </span>
                )}
              </div>
              <h3 className="text-slate-400 text-sm font-medium mb-1">
                {stat.label}
              </h3>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              {stat.extra && (
                <p className="text-xs text-slate-500 mt-2">{stat.extra}</p>
              )}
            </div>
          ))}
        </div>

        {/* Recent Tests + Notifications */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Recent Tests Table */}
          <div className="xl:col-span-2 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                Recent Test Results
              </h2>
              <button className="text-sm text-primary hover:text-primary-dark font-medium flex items-center gap-1">
                View All{" "}
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-border-dark/30 border-b border-border-dark text-xs uppercase text-slate-400 font-semibold tracking-wider">
                      <th className="px-6 py-4">Patient Name</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Test Type</th>
                      <th className="px-6 py-4">Score</th>
                      <th className="px-6 py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-dark">
                    {recentTests.map((test) => (
                      <tr
                        key={test.name}
                        className="group hover:bg-border-dark/20 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <Link
                            href="/dashboard/patients/1"
                            className="flex items-center gap-3"
                          >
                            <div className="h-8 w-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                              {test.initials}
                            </div>
                            <span className="text-slate-200 font-medium group-hover:text-white">
                              {test.name}
                            </span>
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-slate-400 text-sm">
                          {test.date}
                        </td>
                        <td className="px-6 py-4 text-slate-300 text-sm">
                          {test.type}
                        </td>
                        <td className="px-6 py-4 text-slate-400 text-sm font-mono">
                          {test.score}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${test.statusColor}-500/10 text-${test.statusColor}-400 border border-${test.statusColor}-500/20`}
                          >
                            {test.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Notifications</h2>
              <button className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-border-dark">
                <span className="material-symbols-outlined text-[20px]">
                  filter_list
                </span>
              </button>
            </div>
            <div className="bg-surface-dark border border-border-dark rounded-xl p-4 flex flex-col gap-4 h-full">
              {notifications.map((notif, i) => (
                <div
                  key={i}
                  className={`flex gap-3 p-3 rounded-lg hover:bg-border-dark/30 transition-colors border-l-2 ${notif.borderColor}`}
                >
                  <div className="mt-0.5 min-w-[24px]">
                    <span
                      className={`material-symbols-outlined text-${notif.iconColor} text-sm bg-${notif.iconColor}/20 p-1 rounded-full`}
                    >
                      {notif.icon}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm text-slate-200 font-medium">
                      {notif.title}
                    </p>
                    <p className="text-xs text-slate-400">{notif.desc}</p>
                    <p className="text-[10px] text-slate-500 mt-1">
                      {notif.time}
                    </p>
                  </div>
                </div>
              ))}
              <button className="mt-auto w-full py-2 text-xs font-medium text-slate-400 hover:text-white border border-border-dark rounded-lg hover:bg-border-dark/50 transition-colors">
                View All Notifications
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
          <div className="bg-gradient-to-r from-primary/20 to-surface-dark border border-border-dark rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                Start New Examination
              </h3>
              <p className="text-sm text-slate-400">
                Connect a Neuro Glove to begin a new diagnostic session.
              </p>
            </div>
            <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all flex items-center gap-2 whitespace-nowrap">
              <span className="material-symbols-outlined text-[20px]">add</span>
              New Session
            </button>
          </div>
          <div className="bg-gradient-to-r from-accent-teal/10 to-surface-dark border border-border-dark rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                AI Clinical Assistant
              </h3>
              <p className="text-sm text-slate-400">
                Get diagnostic support from our AI-powered clinical assistant.
              </p>
            </div>
            <Link
              href="/dashboard/ai-assistant"
              className="bg-accent-teal hover:bg-accent-teal/90 text-white px-5 py-2.5 rounded-lg font-medium shadow-lg shadow-accent-teal/20 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[20px]">
                smart_toy
              </span>
              Open Assistant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
