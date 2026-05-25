"use client";

import Navbar from "@/modules/shared/components/Navbar";
import Footer from "@/modules/shared/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { ProductGallery } from "./components/ProductGallery";
import { toast } from "sonner";

const productImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzS6UQ9BzVkaOP4-lYGJ3E3eC-b-nv1sEs_O0E-cV7xyrBOOPYfdMxgV4fyUR6N_j71gwEyCvJGOe1yQ9bjSG80RZqCoiN_Mtvorzy5xICLA2bdX32rH1ZfixW6pF5I4w0eK1thn0Da6p4i-3n9mxobFmC-_sm_xJkuZJKST7enQTc-UzgB_bF8s29apNH4yX33pGk_mfLL8TN-6EM9iovlvfEqcAf3Uk3-_QeAdKwpvxdOhqM9-OUdU6d68pXVhhHezN1pwqGz18",
    alt: "Futuristic medical glove close up on dark background",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDl4ZHULbbuXTpw34TQAn29fz0U_elfx1JNqf1FrbmCVfRh_EeLzoErIHvnxKiIW0CGwqz3PMLFJwZGxdIFwpyOBzb0BTvRH1qVQ9ryCosqqTB2t0eewo3GbCX4TWFiH8dlge2Zp6VJ4U8D0lPdQ2RM10z8vJB_vZARQWMTpvheq9nHNk3KrMusyEG6ZVGMvDocf2pxD6CORCXrvt6ZJOXoBb_yx0NSMHNOqfb5GLwFswAgYtNEm1zE4X4WJdra2IwUFUkVjLNBxIM",
    alt: "Medical doctor holding advanced device",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByUqxaW82oa_J2uWlFCthpCTseztbV6C6e3z-LIpc8nbpuQtHgPMRRSA3xAANHbuCxbMVVVivLJNPfxMQt9IVz-cdvHhWj48jqXWuyRYTtahQWpAxN24DpKxn8AQCOpUmsODXtZeBcVzENaTCA1WBPLVWQ545Lz1oax-xaz0zvj6AmFHxyAbIiLfipwXHauXDwZ21YKk2spNAmu8Fws51zCVxRiIF9-JebV_LL3uWUZx4QYAuKlOumsTLO-Y4Wc8rX9lDwgLs7ncE",
    alt: "Clean medical lab setting with equipment",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSuquzgc31er6Z6XuQxno5kaClYCfmpmd68ocbKffLWz7KCmuucrwCeRYXMmLtshs2zyAsj7SOXeSpTGweMcTXS2LBDxixB-kU8XoZ8zT0g8z1g15BVHcwJTmKvJQPDMePjHxZombJm_tH-GbRe5_vqTDnRWgGi_D9TiFJXHfZeATrpoWwngLq2k4ATtrFogG8zgV_1quZiZvnv3HcVbfH_J-fJUC7Y6cfwXqqWGGzA3GBxNqTA3CmhtjlU1UamT6K4bW_LUQEUes",
    alt: "Data visualization on tablet screen",
  },
];

const specs = [
  { icon: "sensors", label: "Sensor", value: "9-axis IMU" },
  { icon: "battery_charging_full", label: "Battery", value: "48 Hours Active" },
  { icon: "bluetooth", label: "Connect", value: "BLE 5.0" },
  { icon: "scale", label: "Weight", value: "45g Ultra-light" },
];

const reviews = [
  {
    initials: "DS",
    name: "Dr. Sarah Jenkins",
    role: "Neurologist, Mercy Hospital",
    title: "Game changer for diagnosis",
    review:
      '"The sensitivity of the sensors is remarkable. We\'ve been able to detect early-onset tremors that were invisible to standard observation. Highly recommended."',
    color: "primary",
  },
  {
    initials: "MK",
    name: "Dr. Michael K.",
    role: "Clinical Researcher",
    title: "Excellent data export",
    review:
      '"Integrating the raw data into our hospital\'s research database was seamless. The BLE connectivity is stable and reliable even in busy interference environments."',
    color: "indigo",
  },
];

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState<string>("Overview");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col items-center">
        <div className="w-full max-w-[1200px] px-4 md:px-8 py-6">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 py-4 mb-4">
            <Link
              href="/"
              className="text-text-secondary hover:text-primary transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <span className="text-text-secondary text-sm font-medium">/</span>
            <span className="text-white text-sm font-medium">Neuro Glove</span>
          </div>

          {/* Product Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <ProductGallery />
            </div>

            {/* Product Details */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                    Medical Device Class II
                  </span>
                  <span className="flex items-center text-yellow-400 text-sm gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      star
                    </span>
                    <span className="text-white font-medium">4.9</span>
                    <span className="text-text-secondary">
                      (128 Clinical Reviews)
                    </span>
                  </span>
                </div>
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
                  Neuro Glove
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Advanced Parkinson&apos;s diagnostic wearable. Precise tremor
                  analysis and motor symptom tracking for clinical assessment
                  using high-fidelity IMU sensors.
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-surface-dark p-4 rounded-lg border border-border-dark"
                  >
                    <div className="flex items-center gap-2 mb-1 text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        {spec.icon}
                      </span>
                      <span className="text-xs font-bold uppercase">
                        {spec.label}
                      </span>
                    </div>
                    <p className="text-white font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto bg-surface-dark rounded-xl p-6 border border-border-dark shadow-lg">
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-border-dark pb-4">
                    <span className="text-text-secondary">Unit Price</span>
                    <span className="text-2xl font-bold text-white">
                      EGP 5,000
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href="/register"
                      className="flex-1 h-12 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(93,127,177,0.3)]"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        shopping_cart
                      </span>
                      Order Now
                    </Link>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        toast.success("Link copied to clipboard!");
                      }}
                      className="h-12 w-12 flex items-center justify-center bg-border-dark hover:bg-white/10 text-white rounded-lg transition-colors border border-transparent hover:border-white/20 active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        share
                      </span>
                    </button>
                  </div>
                  <p className="text-xs text-center text-text-secondary">
                    *Professional medical license required for purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border-dark mb-8">
            <div className="flex gap-8 overflow-x-auto">
              {["Overview", "Technical Specs", "Clinical Validation", "User Guide"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 border-b-2 font-bold text-sm tracking-wide transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? "border-primary text-white"
                      : "border-transparent text-text-secondary hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "Overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center animate-in fade-in duration-500">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Precision Diagnostics at Your Fingertips
              </h3>
              <p className="text-text-secondary leading-relaxed">
                The Neuro Glove utilizes a proprietary array of 9-axis inertial
                measurement units (IMUs) strategically placed to capture
                micro-tremors often missed by the naked eye. Our algorithms
                process movement data in real-time, providing clinicians with a
                quantifiable UPDRS score estimation.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Real-time Tremor Analysis",
                    desc: "Detects frequency and amplitude with 99.8% accuracy.",
                  },
                  {
                    title: "Longitudinal Tracking",
                    desc: "Compare patient data over months to track disease progression.",
                  },
                  {
                    title: "Ergonomic Design",
                    desc: "Breathable, hypoallergenic fabric designed for extended wear.",
                  },
                ].map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">
                      check_circle
                    </span>
                    <div>
                      <h4 className="text-white font-semibold">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {feature.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border-dark bg-surface-dark">
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChP4ZzqbNqKErX00q5VprN_5FohqmTi-XRlacgol0vVt-8SPD_64OWull4iborS_0nVFGcVRhZYY62xu4rIV79XN9AsZ-9rSPFLoxeiY8ab_2OCgxpMjiPA75raU5wtr5ICvLPy4OlvTZoGCfS7lX6OkiLGUBRz4nh7cSJLW0Sz42urDGSTkZee4XLb91VYe_DsopVGAEqSjE5p4VYsg_8gJjNGkAuXsDkm3w3PItOYMODwdLcSqSYBkUuf6YlPW8jr3-NSmxLf7k"
                alt="Data analysis dashboard on a tablet"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="text-white font-bold text-lg">
                  Integrated Dashboard
                </div>
                <div className="text-text-secondary text-sm">
                  Seamlessly syncs with NABD Cloud
                </div>
              </div>
            </div>
            </div>
          )}

          {activeTab === "Technical Specs" && (
            <div className="flex flex-col items-center justify-center py-20 bg-surface-dark rounded-2xl border border-border-dark mb-20 text-text-secondary animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="material-symbols-outlined text-6xl mb-4 text-primary">engineering</span>
              <h3 className="text-xl font-bold text-white mb-2">Technical Specifications</h3>
              <p>Detailed technical documentation will be available soon.</p>
            </div>
          )}

          {activeTab === "Clinical Validation" && (
            <div className="flex flex-col items-center justify-center py-20 bg-surface-dark rounded-2xl border border-border-dark mb-20 text-text-secondary animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="material-symbols-outlined text-6xl mb-4 text-primary">science</span>
              <h3 className="text-xl font-bold text-white mb-2">Clinical Validation</h3>
              <p>Clinical study results and methodology.</p>
            </div>
          )}

          {activeTab === "User Guide" && (
            <div className="flex flex-col items-center justify-center py-20 bg-surface-dark rounded-2xl border border-border-dark mb-20 text-text-secondary animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="material-symbols-outlined text-6xl mb-4 text-primary">menu_book</span>
              <h3 className="text-xl font-bold text-white mb-2">User Guide</h3>
              <p>Instructions for operational use and maintenance.</p>
            </div>
          )}

          {/* Reviews Section */}
          <div className="bg-surface-dark rounded-2xl p-8 md:p-12 border border-border-dark mb-12">
            <h3 className="text-2xl font-bold text-white mb-8">
              Clinical Reviews
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Rating Summary */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="flex items-end gap-4">
                  <span className="text-6xl font-black text-white">4.9</span>
                  <div className="flex flex-col mb-2">
                    <div className="flex text-yellow-400">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined"
                          >
                            {i < 4 ? "star" : "star_half"}
                          </span>
                        ))}
                    </div>
                    <span className="text-text-secondary text-sm">
                      Based on 128 verified reviews
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  {[85, 12, 2, 1, 0].map((pct, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-white text-xs font-bold w-3">
                        {5 - i}
                      </span>
                      <div className="flex-1 h-2 bg-background-dark rounded-full overflow-hidden">
                        <div
                          className="bg-primary h-full rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full py-3 border border-border-dark text-white rounded-lg hover:bg-background-dark transition-colors font-medium">
                  Write a Review
                </button>
              </div>

              {/* Review Cards */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                  <div
                    key={review.name}
                    className="bg-background-dark p-6 rounded-xl border border-border-dark"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`size-10 rounded-full bg-${review.color}/20 flex items-center justify-center text-${review.color} font-bold`}
                        >
                          {review.initials}
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">
                            {review.name}
                          </div>
                          <div className="text-text-secondary text-xs">
                            {review.role}
                          </div>
                        </div>
                      </div>
                      <span className="flex text-yellow-400 text-[16px]">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <span key={i} className="material-symbols-outlined">
                              star
                            </span>
                          ))}
                      </span>
                    </div>
                    <h5 className="text-white font-semibold mb-2 text-sm">
                      {review.title}
                    </h5>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {review.review}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-primary font-medium">
                      <span className="material-symbols-outlined text-[16px]">
                        verified
                      </span>
                      Verified Purchase
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
