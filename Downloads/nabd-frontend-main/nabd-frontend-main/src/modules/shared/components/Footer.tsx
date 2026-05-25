import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-slate-800 py-12 text-sm">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-white mb-4">
              <span className="material-symbols-outlined text-primary">
                medical_services
              </span>
              <span className="font-bold text-lg">NABD</span>
            </div>
            <p className="text-slate-400 max-w-xs mb-6">
              Pioneering the future of neurological diagnostics through wearable
              technology and artificial intelligence.
            </p>
            <div className="flex gap-4">
              <a className="text-slate-400 hover:text-white" href="#">
                <span className="sr-only">Twitter</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a className="text-slate-400 hover:text-white" href="#">
                <span className="sr-only">LinkedIn</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-white mb-2">Product</h3>
            <Link
              href="/product"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Neuro Glove
            </Link>
            <Link
              href="/dashboard"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Software Platform
            </Link>
            <Link
              href="/product"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Request Demo
            </a>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-white mb-2">Resources</h3>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Clinical Research
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              White Papers
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Support Center
            </a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-white mb-2">Company</h3>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              News
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
          <p>© 2026 NABD Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
