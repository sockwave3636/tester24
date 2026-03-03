import { ArrowDown, ArrowUp } from "lucide-react";

export default function BodyMeasurements() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">Body Measurements</h3>
          <p className="mt-1 text-xs text-slate-300">Last checked 2 days ago</p>
        </div>
        <div className="self-start rounded-2xl bg-slate-700 px-4 py-2 sm:self-auto">
          <span className="text-xs font-medium text-slate-100">Front Body Shape</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <div className="flex w-full flex-1 flex-col gap-3">
          <MeasurementCard label="Chest (in)" value="44.5" trend="up" />
          <MeasurementCard label="Waist (in)" value="34" trend="down" />
          <MeasurementCard label="Hip (in)" value="42.5" trend="down" />
        </div>

        <div className="relative mx-auto h-[18rem] w-full max-w-40 shrink-0 md:mx-0 md:h-[22rem] md:w-44 md:max-w-none">
          <svg
            viewBox="0 0 220 420"
            className="h-full w-full"
            role="img"
            aria-label="Front body measurement silhouette"
          >
            {/* Background Card */}
            <rect x="0" y="0" width="220" height="420" rx="20" fill="#1f2937" />
            
            {/* Head & Face */}
            <ellipse cx="110" cy="48" rx="28" ry="32" fill="#f6cfad" />
            {/* Hair (Moved back slightly) */}
            <path
              d="M82 40c0-25 15-32 28-32s28 7 28 32c0 5-5 8-10 8l-5 5H97l-5-5c-5 0-10-3-10-8z"
              fill="#0f172a"
            />
            {/* Face details: Eyes, eyebrows, nose, mouth, ears */}
            <ellipse cx="91" cy="48" rx="3" ry="6" fill="#efc09b" />
            <ellipse cx="129" cy="48" rx="3" ry="6" fill="#efc09b" />
            <path d="M96 42 q5 -3 10 0" fill="none" stroke="#1f2937" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M114 42 q5 -3 10 0" fill="none" stroke="#1f2937" strokeWidth="1.4" strokeLinecap="round" />
            <circle cx="101" cy="48" r="2.6" fill="#0f172a" />
            <circle cx="119" cy="48" r="2.6" fill="#0f172a" />
            <path d="M110 50c-2 3-2 6 0 8" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M102 62 q8 6 16 0" fill="none" stroke="#9f1239" strokeWidth="2.2" strokeLinecap="round" />

            {/* Neck */}
            <rect x="102" y="76" width="16" height="12" rx="4" fill="#f6cfad" />

            {/* Torso & Tank Top */}
            <path
              d="M66 104c4-22 18-35 44-35s40 13 44 35l7 78H59l7-78z"
              fill="#f8fafc"
            />
            {/* Front Neckline Detail */}
            <path d="M85 103c5 10 25 10 30 0" fill="none" stroke="#e2e8f0" strokeWidth="2" />
            {/* Chest Definition */}
            <path d="M95 130 q15 8 30 0" fill="none" stroke="#cbd5e1" strokeWidth="1" opacity="0.5" />

            {/* Arms (Adjusted for front view) */}
            <path d="M48 110c8 10 15 25 18 45l5 80h-12c-4-30-10-60-14-90z" fill="#f6cfad" />
            <path d="M172 110c-8 10-15 25-18 45l-5 80h12c4-30 10-60 14-90z" fill="#f6cfad" />

            {/* Shorts */}
            <path d="M59 182h102l-6 100H65l-6-100z" fill="#111827" />

            {/* Legs & Knees */}
            <path d="M78 282h26l-8 88H74l4-88z" fill="#f6cfad" />
            <path d="M116 282h26l4 88h-22l-8-88z" fill="#f6cfad" />
            {/* Kneecap highlights */}
            <circle cx="88" cy="325" r="3" fill="#efc09b" opacity="0.5" />
            <circle cx="132" cy="325" r="3" fill="#efc09b" opacity="0.5" />

            {/* Feet (Facing forward) */}
            <path d="M68 370h28v10c0 4-4 8-8 8H66c-4 0-8-4-8-8z" fill="#0f172a" />
            <path d="M124 370h28v10c0 4-4 8-8 8h-18c-4 0-8-4-8-8z" fill="#0f172a" />

            {/* Measurement Indicators (Rings) */}
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
    <div className="flex w-full flex-col gap-1 rounded-2xl bg-white p-2.5 shadow-sm">
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
