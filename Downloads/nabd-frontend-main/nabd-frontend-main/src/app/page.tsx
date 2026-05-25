import Link from "next/link";
import Navbar from "@/modules/shared/components/Navbar";
import Footer from "@/modules/shared/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-medical-blue/30 to-background-dark pt-16 pb-24 lg:pt-32">
          <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm w-fit">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                    New FDA Breakthrough Designation
                  </div>
                  <h1 className="text-4xl font-black tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Precise Parkinson&apos;s Diagnostics
                  </h1>
                  <p className="max-w-[600px] text-lg text-slate-400 md:text-xl leading-relaxed">
                    The NABD Neuro Glove combines advanced sensor fusion with AI
                    to deliver clinical-grade movement analysis, revolutionizing
                    how we diagnose and monitor neurological conditions.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link
                    href="/product"
                    className="h-12 flex items-center justify-center rounded-lg bg-secondary px-8 text-base font-bold text-white transition-colors hover:bg-secondary/90"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/#clinical-data"
                    className="h-12 flex items-center justify-center rounded-lg border border-slate-700 bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-slate-800"
                  >
                    View Clinical Study
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full border-2 border-background-dark bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                      JM
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-background-dark bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                      DR
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-background-dark bg-slate-600 flex items-center justify-center text-xs font-bold text-white">
                      +2k
                    </div>
                  </div>
                  <p>Used by 2,000+ clinicians worldwide</p>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative mx-auto aspect-square w-full max-w-[500px] lg:max-w-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px]" />
                <div
                  className="relative h-full w-full rounded-2xl border border-slate-800 bg-slate-950/50 backdrop-blur-sm overflow-hidden flex items-center justify-center"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, rgba(93, 127, 177, 0.15) 0%, rgba(21, 24, 29, 0) 70%)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB572LsYcir67Ya5w-QYc3NOXYydaKVJ2z5mbXDGcBJTNj1Yh_nJTIQ_EL47o2GpQljRTlcmGOZ0MlmCLCu3pTgHNFhBm2FddJb0Wml67rPj8BRW1eXbWZdYAo2Q8Q97l8GxfhumAoAtzwXfETlAlcTCN94f4PNs-Zlue3i-ZK7TrCey4Nhfs1H5MeJvJNxUjRb30qgeB_A7xLWsn_NEeJ7dLr_bLX9CI1gGozRVmZbT6pbcF1cE2heGgoFyjs0wVyMW3haLEACR60"
                    alt="3D render of the NABD Neuro Glove with glowing sensors"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="bg-[#1c2128] py-24">
          <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="mb-16 md:text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                The Challenge in Diagnosis
              </h2>
              <p className="text-lg text-slate-400">
                Traditional Parkinson&apos;s assessments rely on subjective
                observation and infrequent clinic visits. NABD brings objective
                data to the forefront.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: "visibility_off",
                  title: "Subjectivity",
                  description:
                    "Standard rating scales like UPDRS vary significantly by clinician interpretation and experience level.",
                  color: "red",
                },
                {
                  icon: "schedule",
                  title: "Late Detection",
                  description:
                    "Motor symptoms often appear years after onset, losing valuable time for early intervention therapies.",
                  color: "orange",
                },
                {
                  icon: "event_busy",
                  title: "Infrequent Monitoring",
                  description:
                    "Clinic visits every 6 months only capture a snapshot in time, missing daily symptom fluctuations.",
                  color: "blue",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-xl border border-slate-800 bg-card-dark p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-${card.color}-900/20 text-${card.color}-400`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="text-slate-400">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-background-dark relative">
          <div className="absolute inset-0 bg-[radial-gradient(#2e343d_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
          <div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative z-10">
            <div className="mb-16 md:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                How It Works
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                From wearable to clinical insight in five simple steps.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-800 md:hidden" />
              <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-slate-800 lg:mx-12" />
              <div className="grid gap-12 md:grid-cols-5 md:gap-4 relative">
                {[
                  { icon: "front_hand", title: "Wear", desc: "Patient puts on the comfortable, lightweight Neuro Glove." },
                  { icon: "fitness_center", title: "Perform", desc: "Simple guided exercises (tapping, supination) are performed." },
                  { icon: "sensors", title: "Capture", desc: "High-fidelity sensors capture micro-movements in real-time." },
                  { icon: "psychology", title: "Analyze", desc: "AI algorithms process data to detect tremor and bradykinesia." },
                  { icon: "clinical_notes", title: "Report", desc: "Clinician receives an objective, quantified report instantly." },
                ].map((step) => (
                  <div
                    key={step.title}
                    className="flex flex-row md:flex-col items-start md:items-center gap-6 group"
                  >
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-slate-700 bg-card-dark text-slate-400 transition-colors group-hover:border-primary group-hover:text-primary z-10">
                      <span className="material-symbols-outlined">
                        {step.icon}
                      </span>
                    </div>
                    <div className="md:text-center pt-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits & Clinical Validation */}
        <section
          id="clinical-data"
          className="py-24 bg-gradient-to-b from-slate-900 to-background-dark border-t border-slate-800"
        >
          <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Key Benefits */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Clinical Advantages
                  </h2>
                  <p className="text-slate-400 mb-8">
                    Why leading neurologists are switching to NABD.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "speed", title: "Rapid Assessment", desc: "Complete a full motor assessment in under 5 minutes." },
                    { icon: "home_health", title: "Remote Monitoring", desc: "Patients can perform tests at home, reducing clinic burden." },
                    { icon: "precision_manufacturing", title: "Objective Scoring", desc: "Eliminate inter-rater variability with AI-driven scoring." },
                    { icon: "dataset", title: "Longitudinal Data", desc: "Track disease progression with precision over years." },
                  ].map((benefit) => (
                    <div
                      key={benefit.title}
                      className="bg-card-dark p-6 rounded-xl border border-slate-800 hover:border-accent-teal/50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent-teal/10 flex items-center justify-center mb-4 group-hover:bg-accent-teal/20 transition-colors">
                        <span className="material-symbols-outlined text-accent-teal">
                          {benefit.icon}
                        </span>
                      </div>
                      <h3 className="text-white font-bold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-400">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Validation */}
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Proven Accuracy
                  </h2>
                  <p className="text-slate-400 mb-8">
                    Validated against gold-standard MDS-UPDRS clinical ratings.
                  </p>
                </div>
                <div className="relative bg-card-dark rounded-2xl border border-slate-800 p-8 overflow-hidden">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2 py-8">
                    <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-teal">
                      94.2%
                    </span>
                    <span className="text-xl font-medium text-white">
                      Diagnostic Accuracy
                    </span>
                    <p className="text-sm text-slate-500 max-w-sm mx-auto mt-4">
                      In a multi-center study involving 500 patients, NABD
                      demonstrated superior sensitivity compared to standard
                      clinical observation.
                    </p>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">
                        p &lt; 0.001
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">
                        Statistical Significance
                      </div>
                    </div>
                    <div className="text-center border-l border-slate-800">
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">
                        Clinical Subjects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="container mx-auto max-w-[800px] px-4 text-center relative z-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to upgrade your practice?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Join the network of forward-thinking neurologists using NABD to
              provide better care for Parkinson&apos;s patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/product"
                className="h-12 flex items-center justify-center rounded-lg bg-white px-8 text-base font-bold text-primary transition-colors hover:bg-slate-100 shadow-lg"
              >
                Order Neuro Glove
              </Link>
              <Link
                href="/register"
                className="h-12 flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-8 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
