"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="relative z-10 w-full max-w-[420px] flex flex-col items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-white mb-4">
          <div className="size-10 text-primary">
            <span className="material-symbols-outlined text-4xl">
              medical_services
            </span>
          </div>
          <span className="text-2xl font-bold tracking-tight">NABD</span>
        </Link>

        {/* Login Card */}
        <div className="w-full rounded-xl border border-border-dark bg-surface-dark shadow-xl p-8 flex flex-col gap-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-text-secondary text-sm">
              Sign in to your NABD account to continue
            </p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-200">
                Email Address
              </span>
              <div className="relative">
                <input
                  className="w-full rounded-lg border border-slate-600 bg-card-dark pl-10 pr-4 py-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-500"
                  placeholder="doctor@hospital.org"
                  type="email"
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                  mail
                </span>
              </div>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-200">
                Password
              </span>
              <div className="relative">
                <input
                  className="w-full rounded-lg border border-slate-600 bg-card-dark pl-10 pr-4 py-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-500"
                  placeholder="••••••••"
                  type="password"
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                  lock
                </span>
              </div>
            </label>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-600 bg-card-dark text-primary focus:ring-primary focus:ring-offset-0"
                />
                <span className="text-sm text-slate-300">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-primary hover:text-primary-light transition-colors font-medium"
              >
                Forgot password?
              </a>
            </div>

            <Link
              href="/dashboard"
              className="w-full h-12 flex items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg shadow-primary/20 transform hover:-translate-y-0.5"
            >
              Sign In
            </Link>
          </form>

          <div className="relative flex items-center justify-center my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border-dark" />
            </div>
            <span className="relative bg-surface-dark px-4 text-xs text-slate-500 uppercase tracking-wider">
              or
            </span>
          </div>

          <Link
            href="/register"
            className="w-full h-12 flex items-center justify-center rounded-lg border border-border-dark text-white font-semibold hover:bg-card-dark transition-colors gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">
              domain_add
            </span>
            Register Institution
          </Link>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 text-slate-500 text-xs text-center">
          <span className="material-symbols-outlined text-sm">lock</span>
          <p>HIPAA-compliant, end-to-end encrypted</p>
        </div>
      </div>
    </div>
  );
}
