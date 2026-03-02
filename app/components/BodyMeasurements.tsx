import { ArrowDown, ArrowUp } from "lucide-react";

export default function BodyMeasurements() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-semibold text-white">Body Measurements</h3>
        <p className="mt-1 text-xs text-slate-300">Last checked 2 days ago</p>
      </div>

      <div className="self-start rounded-2xl bg-slate-700 px-4 py-2">
        <span className="text-xs font-medium text-slate-100">Front Body Shape</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex flex-1 flex-col gap-3">
          <MeasurementCard label="Chest (in)" value="44.5" trend="up" />
          <MeasurementCard label="Waist (in)" value="34" trend="down" />
          <MeasurementCard label="Hip (in)" value="42.5" trend="down" />
        </div>

        <div className="relative h-[22rem] w-44 shrink-0">
          <svg
            viewBox="0 0 220 420"
            className="h-full w-full"
            role="img"
            aria-label="Front body measurement silhouette"
          >
            <rect x="0" y="0" width="220" height="420" rx="20" fill="#1f2937" />
            <ellipse cx="110" cy="58" rx="28" ry="32" fill="#f6cfad" />
            <path
              d="M82 50c0-25 15-32 28-32s28 7 28 32c0 5-5 8-10 8l-5 5H97l-5-5c-5 0-10-3-10-8z"
              fill="#0f172a"
            />
            <rect x="102" y="86" width="16" height="12" rx="4" fill="#f6cfad" />
            <path
              d="M66 104c4-22 18-35 44-35s40 13 44 35l7 78H59l7-78z"
              fill="#f8fafc"
            />
            <path d="M59 182h102l-6 100H65l-6-100z" fill="#111827" />
            <path d="M78 282h26l-8 88H74l4-88z" fill="#f6cfad" />
            <path d="M116 282h26l4 88h-22l-8-88z" fill="#f6cfad" />

            <ellipse
              cx="110"
              cy="146"
              rx="92"
              ry="13"
              fill="none"
              stroke="#f87171"
              strokeWidth="2.5"
              opacity="0.95"
            />
            <ellipse
              cx="110"
              cy="213"
              rx="77"
              ry="11"
              fill="none"
              stroke="#f87171"
              strokeWidth="2.5"
              opacity="0.95"
            />
            <ellipse
              cx="110"
              cy="279"
              rx="88"
              ry="12"
              fill="none"
              stroke="#f87171"
              strokeWidth="2.5"
              opacity="0.95"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MeasurementCard({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: "up" | "down";
}) {
  return (
    <div className="flex w-full flex-col gap-1 rounded-2xl bg-white p-4 shadow-sm">
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
        {label}
      </span>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-slate-900">{value}</span>
        {trend === "up" ? (
          <ArrowUp size={16} className="text-rose-500" />
        ) : (
          <ArrowDown size={16} className="text-emerald-500" />
        )}
      </div>
    </div>
  );
}
