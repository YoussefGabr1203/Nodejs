"use client";

import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const trendData = [
  { month: "Jun", score: 62 },
  { month: "Jul", score: 55 },
  { month: "Aug", score: 48 },
  { month: "Sep", score: 42 },
  { month: "Oct", score: 44 },
  { month: "Nov", score: 38 },
];

const recentSessions = [
  {
    date: "Oct 24, 2023",
    type: "Full Motor Assessment",
    duration: "12m 30s",
    severity: 65,
    severityLabel: "Moderate",
    severityColor: "orange",
    status: "Completed",
  },
  {
    date: "Oct 10, 2023",
    type: "Rapid Tremor Check",
    duration: "03m 45s",
    severity: 25,
    severityLabel: "Mild",
    severityColor: "green",
    status: "Completed",
  },
  {
    date: "Sep 28, 2023",
    type: "Gait Analysis",
    duration: "08m 15s",
    severity: 45,
    severityLabel: "Elevated",
    severityColor: "yellow",
    status: "Analyzed",
  },
];

export default function PatientDetailPage() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 mb-6 text-sm">
        <Link
          href="/dashboard"
          className="text-text-secondary hover:text-primary transition-colors"
        >
          Dashboard
        </Link>
        <span className="material-symbols-outlined text-[14px] text-slate-400">
          chevron_right
        </span>
        <Link
          href="/dashboard"
          className="text-text-secondary hover:text-primary transition-colors"
        >
          Patients
        </Link>
        <span className="material-symbols-outlined text-[14px] text-slate-400">
          chevron_right
        </span>
        <span className="text-white font-medium">Sarah Jenkins</span>
      </div>

      {/* Patient Header Card */}
      <div className="bg-surface-dark rounded-xl border border-border-dark p-6 mb-8 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
          <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/40 to-accent-teal/30 rounded-full size-24 flex items-center justify-center text-3xl font-black text-white border-2 border-primary/20">
                SJ
              </div>
              <div
                className="absolute bottom-0 right-0 bg-green-500 size-5 rounded-full border-4 border-surface-dark"
                title="Active Status"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold text-white">Sarah Jenkins</h1>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-secondary">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    id_card
                  </span>
                  ID: #PD-8921
                </span>
                <span className="hidden sm:inline">|</span>
                <span>Age: 68</span>
                <span className="hidden sm:inline">|</span>
                <span>Gender: Female</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold border border-orange-500/30">
                  Stage 2 Parkinson&apos;s
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
                  Last Visit: Oct 24, 2023
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-border-dark border border-border-dark text-white text-sm font-semibold hover:bg-[#38404b] transition-colors">
              <span className="material-symbols-outlined text-[18px]">
                edit
              </span>
              Edit Profile
            </button>
            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-border-dark mb-8 gap-8 no-scrollbar">
        <button className="flex items-center gap-2 border-b-[3px] border-primary text-primary pb-3 px-1 whitespace-nowrap">
          <span className="material-symbols-outlined text-[20px]">
            monitoring
          </span>
          <span className="text-sm font-bold">Trends</span>
        </button>
        {[
          { icon: "history", label: "Test History" },
          { icon: "clinical_notes", label: "Clinical Notes" },
          { icon: "lab_profile", label: "Reports" },
        ].map((tab) => (
          <button
            key={tab.label}
            className="flex items-center gap-2 border-b-[3px] border-transparent text-text-secondary hover:text-white pb-3 px-1 whitespace-nowrap transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {tab.icon}
            </span>
            <span className="text-sm font-bold">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Chart */}
        <div className="col-span-12 bg-surface-dark rounded-xl border border-border-dark p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                Diagnostic Score Trends
              </h3>
              <p className="text-sm text-text-secondary">
                Aggregated UPDRS Part III Motor Score over last 6 months
              </p>
            </div>
            <div className="flex items-center bg-background-dark rounded-lg p-1">
              {["1M", "3M", "6M", "1Y"].map((period) => (
                <button
                  key={period}
                  className={`px-3 py-1 rounded-md text-xs font-medium ${
                    period === "3M"
                      ? "bg-border-dark text-primary font-bold shadow-sm"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5d7fb1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#5d7fb1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2e343d" />
                <XAxis
                  dataKey="month"
                  stroke="#a2abb9"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  stroke="#a2abb9"
                  fontSize={12}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#2e343d",
                    border: "1px solid #424a57",
                    borderRadius: "8px",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#5d7fb1"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorScore)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Metric Cards */}
        {[
          {
            label: "Tremor Amplitude",
            value: "4.2",
            unit: "mm",
            icon: "waves",
            iconBg: "bg-red-500/10",
            iconColor: "text-red-500",
            trend: "+12% vs last month",
            trendColor: "text-red-500",
            trendIcon: "trending_up",
          },
          {
            label: "Bradykinesia Score",
            value: "18",
            unit: "/ 132",
            icon: "speed",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-500",
            trend: "-3% improvement",
            trendColor: "text-green-500",
            trendIcon: "trending_down",
          },
          {
            label: "Medication Adherence",
            value: "94%",
            unit: "",
            icon: "medication",
            iconBg: "bg-green-500/10",
            iconColor: "text-green-500",
            trend: "Stable over 3 months",
            trendColor: "text-text-secondary",
            trendIcon: "check_circle",
          },
        ].map((metric) => (
          <div
            key={metric.label}
            className="col-span-12 md:col-span-4 bg-surface-dark rounded-xl border border-border-dark p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-sm font-semibold text-text-secondary">
                  {metric.label}
                </h4>
                <div className="text-3xl font-bold text-white mt-1">
                  {metric.value}{" "}
                  {metric.unit && (
                    <span className="text-sm font-normal text-text-secondary">
                      {metric.unit}
                    </span>
                  )}
                </div>
              </div>
              <div className={`p-2 ${metric.iconBg} rounded-lg ${metric.iconColor}`}>
                <span className="material-symbols-outlined text-[20px]">
                  {metric.icon}
                </span>
              </div>
            </div>
            <div
              className={`mt-4 flex items-center text-xs font-medium ${metric.trendColor}`}
            >
              <span className="material-symbols-outlined text-[16px] mr-1">
                {metric.trendIcon}
              </span>
              {metric.trend}
            </div>
          </div>
        ))}

        {/* Recent Test Sessions */}
        <div className="col-span-12 lg:col-span-8 bg-surface-dark rounded-xl border border-border-dark overflow-hidden shadow-sm">
          <div className="p-6 border-b border-border-dark flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">
              Recent Test Sessions
            </h3>
            <button className="text-sm font-semibold text-primary hover:text-primary/80">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-background-dark text-xs uppercase text-text-secondary">
                <tr>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Test Type</th>
                  <th className="px-6 py-4 font-semibold">Duration</th>
                  <th className="px-6 py-4 font-semibold">Severity Score</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-dark">
                {recentSessions.map((session) => (
                  <tr
                    key={session.date}
                    className="hover:bg-border-dark/30 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {session.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {session.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">
                      {session.duration}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 rounded-full bg-gray-700 overflow-hidden">
                          <div
                            className={`h-full bg-${session.severityColor}-400`}
                            style={{ width: `${session.severity}%` }}
                          />
                        </div>
                        <span
                          className={`text-sm font-medium text-${session.severityColor}-400`}
                        >
                          {session.severityLabel}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                        <span className="size-1.5 rounded-full bg-green-500" />
                        {session.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: AI Insight + Notes */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          {/* AI Insight Card */}
          <div className="bg-gradient-to-br from-indigo-900 to-primary/40 rounded-xl border border-primary/30 p-6 shadow-sm relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-indigo-300">
                  auto_awesome
                </span>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  AI Insight
                </h3>
              </div>
              <p className="text-white font-medium mb-3">
                Tremor patterns suggest medication effectiveness peaks at 4
                hours, decreasing faster than previously noted.
              </p>
              <Link
                href="/dashboard/ai-assistant"
                className="text-xs font-bold text-indigo-200 hover:text-white underline decoration-indigo-400/50 hover:decoration-white underline-offset-4"
              >
                View Detailed Analysis
              </Link>
            </div>
          </div>

          {/* Doctor Notes */}
          <div className="bg-surface-dark rounded-xl border border-border-dark p-6 shadow-sm flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">
                Doctor&apos;s Notes
              </h3>
              <button className="size-8 rounded-lg flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  add
                </span>
              </button>
            </div>
            <div className="space-y-4">
              {[
                {
                  doctor: "Dr. Amina K.",
                  time: "Today, 09:30 AM",
                  note: "Patient reports slight increase in morning tremors. Adjusted dosage recommendation for next review.",
                },
                {
                  doctor: "Dr. Smith",
                  time: "Oct 15, 2023",
                  note: "Physical therapy adherence is good. Motor skills showing stabilization.",
                },
              ].map((note) => (
                <div
                  key={note.time}
                  className="p-3 rounded-lg bg-background-dark border border-border-dark"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-semibold text-white">
                      {note.doctor}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {note.time}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary">{note.note}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm text-text-secondary font-medium border border-dashed border-slate-600 rounded-lg hover:bg-border-dark transition-colors">
              View All History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
