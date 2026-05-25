"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background-dark/60">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex h-20 md:h-24 lg:h-28 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group transition-transform hover:scale-[1.02] active:scale-95 duration-300">
            <img src="/logo.png" alt="NABD Logo" className="h-[60px] md:h-[72px] lg:h-[84px] w-auto object-contain drop-shadow-lg brightness-110 group-hover:drop-shadow-[0_0_15px_rgba(93,127,177,0.6)] transition-all origin-left" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Product
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Technology
            </Link>
            <Link
              href="/#clinical-data"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Clinical Data
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden sm:flex text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/product"
              className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-secondary px-6 text-sm font-bold text-white transition-colors hover:bg-secondary/90"
            >
              Order Now
            </Link>
            <button
              className="md:hidden p-2 text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border-dark py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/product"
              className="flex h-10 items-center justify-center rounded-lg bg-secondary px-6 text-sm font-bold text-white transition-colors hover:bg-secondary/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
