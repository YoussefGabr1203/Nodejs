"use client";

import { useState } from "react";
import Link from "next/link";

const initialMessages = [
  {
    role: "system" as const,
    content: "Session Started: Today, 09:41 AM",
  },
  {
    role: "ai" as const,
    time: "09:41 AM",
    content:
      "Hello Dr. Smith. I'm ready to assist with your diagnosis.\n\nI can analyze tremor frequency, rigidity coefficients, and bradykinesia onset patterns from the Neuro Glove data. Would you like to load a specific patient profile to begin?",
    suggestions: ["Load Patient: John Doe", "Analyze Last Recording"],
  },
  {
    role: "user" as const,
    time: "09:42 AM",
    content:
      "Yes, please load the latest session for John Doe (ID: #88392) and analyze the resting tremor in the right hand. Specifically looking for frequency consistency.",
  },
  {
    role: "ai" as const,
    time: "09:42 AM",
    content:
      'I\'ve analyzed the session from **Oct 24, 2023 - 08:30 AM** for Patient John Doe.',
    dataCard: {
      title: "Right Hand Tremor Analysis",
      badge: "High Variance",
      metrics: [
        { label: "Peak Frequency", value: "5.4 Hz" },
        { label: "Amplitude (RMS)", value: "2.1 m/s²" },
        { label: "Duration", value: "45s" },
      ],
      bars: [30, 50, 70, 90, 60, 40, 30, 20],
    },
    findings: [
      "Tremor frequency remains consistent within the 4-6Hz range, typical of Parkinsonian resting tremor.",
      "Significant amplitude spikes observed during cognitive loading tasks.",
      'Compared to last month, there is a <span class="text-red-400 font-medium">12% increase</span> in resting tremor amplitude.',
    ],
  },
];

export default function AIAssistantPage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col h-full">
      {/* Disclaimer Banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-2 flex items-center justify-center gap-2 shrink-0">
        <span className="material-symbols-outlined text-amber-500 text-[18px]">
          warning
        </span>
        <p className="text-amber-400 text-xs font-medium text-center">
          AI interpretations are supportive only. Always verify findings with
          clinical observation and standard diagnostic protocols.
        </p>
      </div>

      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border-dark bg-background-dark shrink-0">
        <div>
          <h1 className="text-xl font-bold text-white">
            Clinical Diagnostic Assistant
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="flex size-2 rounded-full bg-emerald-500" />
            <p className="text-sm text-slate-400">
              Online • Model v4.2 (Neuro-tuned)
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-border-dark text-slate-200 hover:bg-[#3e4550] transition-colors border border-transparent">
            <span className="material-symbols-outlined text-[20px]">
              person_add
            </span>
            <span className="text-sm font-medium">Link Patient</span>
          </button>
          <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-border-dark text-slate-200 hover:bg-[#3e4550] transition-colors border border-transparent">
            <span className="material-symbols-outlined text-[20px]">
              upload_file
            </span>
            <span className="text-sm font-medium">Import EMG Data</span>
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 flex flex-col gap-6">
        {initialMessages.map((msg, idx) => {
          if (msg.role === "system") {
            return (
              <div key={idx} className="flex justify-center my-4">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest bg-border-dark px-3 py-1 rounded-full">
                  {msg.content}
                </span>
              </div>
            );
          }

          if (msg.role === "user") {
            return (
              <div
                key={idx}
                className="flex gap-4 max-w-3xl self-end flex-row-reverse"
              >
                <div className="size-10 rounded-full bg-[#3e4550] flex items-center justify-center shrink-0 text-sm font-bold text-white">
                  DS
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">{msg.time}</span>
                    <span className="font-semibold text-white text-sm">
                      Dr. Smith
                    </span>
                  </div>
                  <div className="p-4 bg-primary text-white rounded-2xl rounded-tr-none shadow-md text-sm leading-relaxed">
                    <p>{msg.content}</p>
                  </div>
                </div>
              </div>
            );
          }

          // AI message
          return (
            <div key={idx} className="flex gap-4 max-w-3xl">
              <div className="size-10 rounded-full bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-[20px]">
                  smart_toy
                </span>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white text-sm">
                    NABD Assistant
                  </span>
                  <span className="text-xs text-slate-400">{msg.time}</span>
                </div>
                <div className="flex flex-col gap-3 p-4 bg-border-dark rounded-2xl rounded-tl-none shadow-sm border border-slate-700/50 text-slate-200 text-sm leading-relaxed w-full">
                  <p dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold text-white">$1</span>') }} />

                  {/* Data Card */}
                  {msg.dataCard && (
                    <div className="bg-background-dark rounded-xl p-4 border border-slate-700/50 my-2">
                      <div className="flex items-center justify-between mb-3 border-b border-slate-700 pb-2">
                        <h4 className="font-semibold text-white flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[18px]">
                            waves
                          </span>
                          {msg.dataCard.title}
                        </h4>
                        <span className="bg-red-500/10 text-red-500 text-xs px-2 py-1 rounded font-medium border border-red-500/20">
                          {msg.dataCard.badge}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {msg.dataCard.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="text-xs text-slate-500 mb-1">
                              {m.label}
                            </p>
                            <p className="text-lg font-bold text-white">
                              {m.value}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 h-16 w-full flex items-end gap-1">
                        {msg.dataCard.bars.map((h, i) => (
                          <div
                            key={i}
                            className="w-full bg-primary rounded-t-sm"
                            style={{
                              height: `${h}%`,
                              opacity: 0.2 + (h / 100) * 0.8,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Findings */}
                  {msg.findings && (
                    <>
                      <p>
                        <strong>Key Findings:</strong>
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-slate-300">
                        {msg.findings.map((f, i) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: f }}
                          />
                        ))}
                      </ul>
                      <div className="mt-2 flex gap-2">
                        <button className="text-primary hover:text-primary-light text-xs font-medium flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            visibility
                          </span>
                          View Full Report
                        </button>
                        <button className="text-primary hover:text-primary-light text-xs font-medium flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            share
                          </span>
                          Share with Specialist
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Suggestions */}
                {msg.suggestions && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {msg.suggestions.map((s) => (
                      <button
                        key={s}
                        className="px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary text-xs font-medium transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="h-4" />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-background-dark border-t border-border-dark shrink-0">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 relative bg-border-dark rounded-xl border border-slate-700 shadow-sm focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all">
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 p-4 min-h-[60px] max-h-[150px] resize-none text-white placeholder:text-slate-500 custom-scrollbar"
              placeholder="Ask about patient metrics, compare sessions, or request diagnostic support..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex justify-between items-center px-3 pb-3">
              <div className="flex gap-2 text-slate-500">
                <button
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  title="Attach File"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    attach_file
                  </span>
                </button>
                <button
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  title="Voice Input"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    mic
                  </span>
                </button>
                <button
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  title="Compare Sessions"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    compare_arrows
                  </span>
                </button>
              </div>
              <button className="bg-primary hover:bg-primary-dark text-white rounded-lg px-4 py-2 flex items-center gap-2 font-medium transition-all transform active:scale-95">
                <span>Send</span>
                <span className="material-symbols-outlined text-[18px]">
                  send
                </span>
              </button>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 mt-2">
            Patient data is encrypted end-to-end. HIPAA Compliant.
          </p>
        </div>
      </div>
    </div>
  );
}
