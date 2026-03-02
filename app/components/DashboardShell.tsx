 "use client";

import { useState } from "react";
import {
  Bell,
  Menu,
  Mail,
  Search,
  X,
} from "lucide-react";
import SectionSidebar from "./SectionSidebar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#e5e7eb] p-0">
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[290px] bg-transparent p-0 transition-transform duration-200 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-2 flex justify-end">
          <button
            type="button"
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-4 w-4 text-slate-700" />
          </button>
        </div>
        <SectionSidebar />
      </aside>

      <div className="w-full max-w-none rounded-none border-0 bg-[#f6f7f8] p-2 shadow-none md:p-3">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-[240px_1fr]">
          <div className="hidden lg:block">
            <SectionSidebar />
          </div>

          <section className="space-y-3">
            <header className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white p-3 md:px-4">
              <div className="flex min-w-[240px] flex-1 items-center gap-2">
                <button
                  type="button"
                  aria-label="Open menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Menu className="h-5 w-5 text-slate-700" />
                </button>

                <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <Search className="h-4 w-4 text-slate-400" />
                  <input
                    className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    placeholder="Search task"
                    readOnly
                    value=""
                  />
                  <span className="shrink-0 whitespace-nowrap rounded-md border border-slate-300 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-500">
                    Ctrl F
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <IconButton ariaLabel="messages">
                  <Mail className="h-4 w-4 text-slate-600" />
                </IconButton>
                <IconButton ariaLabel="notifications">
                  <Bell className="h-4 w-4 text-slate-600" />
                </IconButton>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                    TM
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Totok Michael</p>
                    <p className="text-xs text-slate-500">tmichael20@mail.com</p>
                  </div>
                </div>
              </div>
            </header>

            {children}
          </section>
        </div>
      </div>
    </main>
  );
}

function IconButton({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-slate-50"
    >
      {children}
    </button>
  );
}
