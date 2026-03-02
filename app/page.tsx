"use client";

import Link from "next/link";
import { useState } from "react";
import { VITALS } from "./data/vitals";
import BodyMeasurements from "./components/BodyMeasurements";
import AyurvedaDashboard from "./components/AyurvedaDashboard";

export default function Home() {
  const patient = {
    name: "Ananya Sharma",
    age: 42,
    gender: "Female",
    height: "164 cm",
    weight: "68 kg",
    bmi: "25.3 kg/m2",
    waistCircumference: "86 cm",
    bodyFat: "31%",
    familyHistory: "Type 2 diabetes and hypertension",
    occupation: "School Teacher",
  };
  const tabs = ["ayurveda", "allopathy", "astrology"] as const;
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("allopathy");

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 md:p-8">
          <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-slate-100 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Health Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Patient Details (Dummy Data)
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              Unified snapshot of clinical profile, body measurements, and
              multi-system care tracks.
            </p>
          </div>

          <div className="relative mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.2fr_1fr]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <DetailCard label="Name" value={patient.name} />
              <DetailCard label="Age" value={`${patient.age} years`} />
              <DetailCard label="Gender" value={patient.gender} />
              <DetailCard label="Occupation" value={patient.occupation} />
              <DetailCard label="Height" value={patient.height} />
              <DetailCard label="Weight" value={patient.weight} />
              <DetailCard label="BMI" value={patient.bmi} />
              <DetailCard label="Body Fat" value={patient.bodyFat} />
              <DetailCard
                label="Waist Circumference"
                value={patient.waistCircumference}
              />
              <DetailCard
                label="Family History"
                value={patient.familyHistory}
                className="sm:col-span-2"
              />
            </div>

            <div className="rounded-2xl bg-slate-900 p-4 text-slate-100 shadow-lg shadow-slate-300/40 md:p-5">
              <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-300">Body Mass Index (BMI)</p>
                  <span className="rounded-full border border-emerald-300/30 bg-emerald-300/20 px-3 py-1 text-[11px] font-semibold text-emerald-100">
                    Healthy
                  </span>
                </div>
                <p className="mt-3 text-4xl font-semibold tracking-tight">
                  {patient.bmi.split(" ")[0]}
                </p>
                <div className="mt-4 h-3 rounded-full bg-gradient-to-r from-sky-300 via-emerald-300 to-amber-300" />
                <div className="mt-2 flex justify-between text-xs text-slate-300">
                  <span>15</span>
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>40</span>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-slate-700 bg-slate-800 p-4">
                <BodyMeasurements />
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-2">
          <div className="mx-auto w-fit rounded-full border border-slate-200 bg-white p-1 shadow-lg shadow-slate-200/70">
            <div className="flex flex-wrap items-center gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                    activeTab === tab
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/60">
            {activeTab === "ayurveda" && (
              <AyurvedaDashboard />
            )}

            {activeTab === "allopathy" && (
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Allopathy Details</h2>
                <h3 className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Vital Parameters
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {VITALS.map((vital, index) => (
                    <VitalParameterCard key={vital.slug} vital={vital} index={index} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "astrology" && (
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Astrology Details</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Health-support reading placeholder based on natal chart timing
                  and current transit sensitivity.
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                  <InfoPill label="Current Period" value="Moon-Mercury" />
                  <InfoPill label="Sensitive Area" value="Sleep / Stress" />
                  <InfoPill label="Suggested Remedy" value="Breath + Routine" />
                </div>
              </div>
            )}
          </article>
        </section>
      </div>
    </main>
  );
}

function DetailCard({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-4 shadow-sm ${className}`}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );
}

function VitalParameterCard({
  vital,
  index,
}: {
  vital: (typeof VITALS)[number];
  index: number;
}) {
  const visual = getVitalVisual(index);
  const iconLabel =
    vital.shortLabel.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "VP";

  return (
    <Link
      href={`/vitals/${vital.slug}`}
      className={`group overflow-hidden rounded-2xl border p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${visual.cardClass}`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-xs font-bold tracking-wide ${visual.iconClass}`}
        >
          {iconLabel}
        </div>
        <p className="text-base font-semibold leading-5 text-slate-900">{vital.title}</p>
      </div>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-semibold leading-none text-slate-900">
          {vital.value}
        </span>
        <span className="text-lg text-slate-500">{vital.unit || "-"}</span>
      </div>

      <span className={`mt-3 inline-flex rounded-md px-2 py-1 text-xs font-medium ${visual.badgeClass}`}>
        {vital.status}
      </span>

      <svg
        viewBox="0 0 240 72"
        className="mt-4 h-14 w-full"
        aria-label={`${vital.title} trend`}
      >
        <path d={visual.areaPath} fill={visual.areaFill} />
        <path
          d={visual.linePath}
          fill="none"
          stroke={visual.stroke}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
}

function getVitalVisual(index: number) {
  const styles = [
    {
      cardClass: "border-slate-200 bg-white",
      iconClass: "bg-amber-100 text-amber-700",
      badgeClass: "bg-amber-100 text-amber-700",
      stroke: "#d97706",
      areaFill: "rgba(217,119,6,0.12)",
      linePath: "M0 57 C24 38, 44 24, 72 40 C100 56, 126 10, 154 26 C182 40, 210 48, 240 32",
      areaPath:
        "M0 57 C24 38, 44 24, 72 40 C100 56, 126 10, 154 26 C182 40, 210 48, 240 32 L240 72 L0 72 Z",
    },
    {
      cardClass: "border-slate-200 bg-white",
      iconClass: "bg-rose-100 text-rose-700",
      badgeClass: "bg-rose-100 text-rose-700",
      stroke: "#e11d48",
      areaFill: "rgba(225,29,72,0.12)",
      linePath: "M0 40 C20 30, 40 28, 62 44 C86 64, 110 22, 134 20 C156 18, 178 30, 202 24 C220 20, 232 16, 240 12",
      areaPath:
        "M0 40 C20 30, 40 28, 62 44 C86 64, 110 22, 134 20 C156 18, 178 30, 202 24 C220 20, 232 16, 240 12 L240 72 L0 72 Z",
    },
    {
      cardClass: "border-slate-200 bg-white",
      iconClass: "bg-cyan-100 text-cyan-700",
      badgeClass: "bg-cyan-100 text-cyan-700",
      stroke: "#0891b2",
      areaFill: "rgba(8,145,178,0.13)",
      linePath: "M0 34 C18 52, 44 56, 66 28 C88 0, 112 20, 140 18 C168 16, 188 10, 210 16 C224 20, 234 32, 240 40",
      areaPath:
        "M0 34 C18 52, 44 56, 66 28 C88 0, 112 20, 140 18 C168 16, 188 10, 210 16 C224 20, 234 32, 240 40 L240 72 L0 72 Z",
    },
  ];

  return styles[index % styles.length];
}
