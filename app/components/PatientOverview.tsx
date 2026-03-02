import BodyMeasurements from "./BodyMeasurements";

export default function PatientOverview() {
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
  const barCount = 34;
  const barWidth = 10;
  const startX = 70;
  const endX = 664;
  const maxSpan = endX - startX - barWidth * barCount;
  const barGap = maxSpan / (barCount - 1);
  const minHeight = 18;
  const maxHeight = 120;
  const timelineBars = Array.from({ length: barCount }, (_, index) => {
    const progress = index / (barCount - 1);
    const height = minHeight + (maxHeight - minHeight) * progress;
    const x = startX + index * (barWidth + barGap);
    const y = 170 - height;
    const color = progress < 0.34 ? "#22c55e" : progress < 0.67 ? "#f59e0b" : "#ef4444";

    return { x, y, height, color };
  });

  return (
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
            <p className="text-sm text-slate-300">
              Health Habits Timeline (Hand-Drawn Concept)
            </p>
            <div className="mt-3 overflow-hidden rounded-lg border border-slate-700 bg-white p-2">
              <svg
                viewBox="0 0 720 220"
                className="h-auto w-full"
                aria-label="Good health to bad health doodle timeline"
              >
                <rect x="0" y="0" width="720" height="220" fill="#ffffff" />

                <line
                  x1="40"
                  y1="170"
                  x2="680"
                  y2="170"
                  stroke="#1f2937"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                <text
                  x="65"
                  y="35"
                  fill="#0f172a"
                  fontSize="20"
                  fontFamily="Comic Sans MS, Segoe Print, cursive"
                >
                  Good Health
                </text>
                <text
                  x="560"
                  y="35"
                  fill="#0f172a"
                  fontSize="20"
                  fontFamily="Comic Sans MS, Segoe Print, cursive"
                >
                  Bad Health
                </text>

                {timelineBars.map((bar) => (
                  <rect
                    key={bar.x}
                    x={bar.x}
                    y={bar.y}
                    width={barWidth}
                    height={bar.height}
                    rx="3"
                    fill={bar.color}
                  />
                ))}

                <g stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none">
                  <circle cx="365" cy="98" r="12" />
                  <line x1="365" y1="110" x2="365" y2="145" />
                  <line x1="365" y1="122" x2="345" y2="135" />
                  <line x1="365" y1="122" x2="384" y2="128" />
                  <line x1="365" y1="145" x2="350" y2="170" />
                  <line x1="365" y1="145" x2="383" y2="170" />
                </g>

                {/* <g stroke="#ef4444" strokeWidth="10" strokeLinecap="round">
                  <line x1="500" y1="170" x2="500" y2="80" />
                  <line x1="530" y1="170" x2="530" y2="122" />
                  <line x1="560" y1="170" x2="560" y2="60" />
                  <line x1="590" y1="170" x2="590" y2="102" />
                  <line x1="620" y1="170" x2="620" y2="48" />
                </g> */}
              </svg>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-slate-700 bg-slate-800 p-4">
            <BodyMeasurements />
          </div>
        </div>
      </div>
    </section>
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
