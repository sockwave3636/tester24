"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CircleHelp,
  LayoutDashboard,
  LogOut,
  Settings,
  Stethoscope,
} from "lucide-react";

const sections = [
  { href: "/", label: "Home" },
];

export default function SectionSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm md:p-4">
      <div className="flex items-center gap-2 rounded-xl px-2 py-1.5 md:py-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <Stethoscope className="h-5 w-5" />
        </div>
        <p className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">DxAi</p>
      </div>

      <p className="mt-6 px-2 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
        Menu
      </p>
      <nav className="grid grid-cols-2 gap-1 md:grid-cols-1">
        {sections.map((section, idx) => {
          const active = pathname === section.href;
          const Icon = idx === 0 ? LayoutDashboard : Settings;
          return (
            <Link
              key={section.href}
              href={section.href}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition md:py-2.5 ${
                active
                  ? "bg-emerald-600 text-white shadow-[inset_3px_0_0_0_rgba(16,185,129,0.75)]"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon className={`h-4 w-4 ${active ? "text-white" : "text-slate-400"}`} />
              <span>{section.label}</span>
            </Link>
          );
        })}
      </nav>

      <p className="mt-6 hidden px-2 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 md:block">
        General
      </p>
      <div className="hidden space-y-1 md:block">
        <StaticRow icon={<Settings className="h-4 w-4 text-slate-400" />} label="Settings" />
        <StaticRow icon={<CircleHelp className="h-4 w-4 text-slate-400" />} label="Help" />
        <StaticRow icon={<LogOut className="h-4 w-4 text-slate-400" />} label="Logout" />
      </div>

      <div className="mt-auto hidden rounded-2xl bg-[radial-gradient(circle_at_top,_#0f172a,_#052e16_70%)] p-4 text-white lg:block">
        <p className="text-xl font-semibold leading-tight">Download our Mobile App</p>
        <p className="mt-2 text-xs text-emerald-100">Get easy access anywhere</p>
        <button
          type="button"
          className="mt-4 w-full rounded-full bg-emerald-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
        >
          Download
        </button>
      </div>
    </aside>
  );
}

function StaticRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
