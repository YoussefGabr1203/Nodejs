"use client";

import Link from "next/link";
import Navbar from "@/modules/shared/components/Navbar";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex flex-1 justify-center py-10 px-4 md:px-8">
        <div className="flex flex-col w-full max-w-[800px] gap-8">
          {/* Progress & Title */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                  Step 2 of 3
                </span>
                <span className="text-slate-400 text-sm">
                  Institution Verification
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-surface-dark overflow-hidden">
                <div className="h-full bg-primary w-[66%] rounded-full" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                Verify Your Institution
              </h1>
              <p className="text-slate-400 text-lg">
                Please provide your medical facility&apos;s official details and
                upload necessary credentials for verification.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="rounded-xl border border-border-dark bg-surface-dark shadow-sm p-6 md:p-8 flex flex-col gap-8">
            {/* Section: Institution Details */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 border-b border-border-dark pb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">domain</span>
                </div>
                <h2 className="text-lg font-bold text-white">
                  Institution Details
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-200">
                    Institution Legal Name
                  </span>
                  <input
                    className="w-full rounded-lg border border-slate-600 bg-card-dark px-4 py-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-500"
                    placeholder="e.g. King Faisal Specialist Hospital"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-200">
                    License Number
                  </span>
                  <div className="relative">
                    <input
                      className="w-full rounded-lg border border-slate-600 bg-card-dark pl-10 pr-4 py-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-500"
                      placeholder="MOH-1234-5678"
                      type="text"
                    />
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                      badge
                    </span>
                  </div>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-200">
                    Institution Type
                  </span>
                  <select className="w-full rounded-lg border border-slate-600 bg-card-dark px-4 py-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                    <option value="">Select type...</option>
                    <option>Hospital</option>
                    <option>Private Clinic</option>
                    <option>Research Center</option>
                    <option>University Hospital</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-slate-200">
                    Doctor&apos;s Syndicate Number
                  </span>
                  <input
                    className="w-full rounded-lg border border-slate-600 bg-card-dark px-4 py-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-500"
                    placeholder="e.g. SYN-98765"
                    type="text"
                  />
                </label>
                <label className="flex flex-col gap-2 md:col-span-2">
                  <span className="text-sm font-medium text-slate-200">
                    Official Address
                  </span>
                  <textarea
                    className="w-full rounded-lg border border-slate-600 bg-card-dark px-4 py-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-500 resize-none"
                    placeholder="Street, Building, City, Region..."
                    rows={2}
                  />
                </label>
              </div>
            </div>

            {/* Section: Documents */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-border-dark pb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">
                    upload_file
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white">
                  Required Documents
                </h2>
              </div>

              {/* Upload Area 1 - Empty */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Medical License Document
                  </h3>
                  <span className="text-xs text-slate-500">
                    PDF, JPG up to 5MB
                  </span>
                </div>
                <div className="group relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-background-dark/50 px-6 py-8 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                  <div className="mb-3 rounded-full bg-surface-dark p-3 text-slate-400 group-hover:text-primary group-hover:bg-surface-dark transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-2xl">
                      cloud_upload
                    </span>
                  </div>
                  <p className="mb-1 text-sm font-medium text-slate-200">
                    <span className="text-primary hover:underline">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-slate-400">
                    Official Ministry of Health License
                  </p>
                  <input
                    className="absolute inset-0 cursor-pointer opacity-0"
                    type="file"
                  />
                </div>
              </div>

              {/* Upload Area 2 - With Progress */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Authorized Representative ID
                  </h3>
                  <span className="text-xs text-slate-500">
                    PDF, JPG up to 5MB
                  </span>
                </div>
                <div className="rounded-xl border border-slate-600 bg-background-dark/30 p-4 flex gap-4 items-center">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-red-100/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-red-500 text-2xl">
                      picture_as_pdf
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="font-medium text-slate-200 truncate">
                        representative_id_card_scan.pdf
                      </span>
                      <span className="text-slate-500">45%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-700 overflow-hidden">
                      <div className="h-full bg-primary w-[45%] rounded-full animate-pulse" />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>2.4 MB of 5.2 MB</span>
                      <span>Uploading...</span>
                    </div>
                  </div>
                  <button className="shrink-0 rounded-full hover:bg-slate-700 p-1 text-slate-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      close
                    </span>
                  </button>
                </div>
              </div>

              {/* Upload Area 3 - Empty */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Institution Registration Certificate
                  </h3>
                  <span className="text-xs text-slate-500">
                    PDF, JPG up to 5MB
                  </span>
                </div>
                <div className="group relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600 bg-background-dark/50 px-6 py-8 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                  <div className="mb-3 rounded-full bg-surface-dark p-3 text-slate-400 group-hover:text-primary transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-2xl">
                      cloud_upload
                    </span>
                  </div>
                  <p className="mb-1 text-sm font-medium text-slate-200">
                    <span className="text-primary hover:underline">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-slate-400">
                    Government-issued registration document
                  </p>
                  <input
                    className="absolute inset-0 cursor-pointer opacity-0"
                    type="file"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 pt-4">
            <Link
              href="/product"
              className="w-full sm:w-auto px-6 py-3 rounded-lg text-slate-400 font-semibold hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">
                arrow_back
              </span>
              Back
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-600 text-slate-200 font-semibold hover:bg-surface-dark transition-colors">
                Save as Draft
              </button>
              <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Continue
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Security Note */}
          <div className="flex items-center justify-center gap-2 text-slate-500 text-xs text-center pb-8">
            <span className="material-symbols-outlined text-sm">lock</span>
            <p>Your information is encrypted and securely processed.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
