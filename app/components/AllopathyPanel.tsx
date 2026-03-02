import Link from "next/link";
import { VITALS } from "../data/vitals";

export default function AllopathyPanel() {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        Vital Parameters
      </h3>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {VITALS.map((vital, index) => (
          <VitalParameterCard key={vital.slug} vital={vital} index={index} />
        ))}
      </div>
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
