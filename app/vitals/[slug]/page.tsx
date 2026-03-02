import Link from "next/link";
import { notFound } from "next/navigation";
import { getVitalBySlug } from "../../data/vitals";
import DashboardShell from "../../components/DashboardShell";

type VitalPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function VitalDetailPage({ params }: VitalPageProps) {
  const { slug } = await params;
  const vital = getVitalBySlug(slug);
  const trend = getTrendConfig(slug);
  const notes = getClinicalNotes(slug);

  if (!vital) {
    notFound();
  }

  return (
    <DashboardShell>
      <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Allopathy Vital Detail
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {vital.title}
              </h1>
              <p className="mt-1 text-sm text-slate-500">Clinical metric overview</p>
            </div>
            <span className="rounded-full border border-slate-300 bg-slate-100 px-4 py-1.5 text-xs font-bold tracking-wide text-slate-700">
              {vital.shortLabel}
            </span>
          </div>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Current Reading
            </p>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-5xl font-bold leading-none text-slate-900">
                {vital.value}
              </span>
              <span className="pb-1 text-lg font-medium text-slate-500">
                {vital.unit || "-"}
              </span>
            </div>
          </section>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <InfoBox label="Status" value={vital.status} />
            <InfoBox label="Normal Range" value={vital.normalRange} />
            <InfoBox label="Short Code" value={vital.shortLabel} />
          </div>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                7 Day Trend (Dummy)
              </h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                Last 7 Days
              </span>
            </div>
            <svg
              viewBox="0 0 480 170"
              className="mt-4 h-40 w-full rounded-xl border border-slate-100 bg-slate-50 p-2"
              aria-label={`${vital.title} trend graph`}
            >
              <path d={trend.areaPath} fill={trend.areaFill} />
              <path
                d={trend.linePath}
                fill="none"
                stroke={trend.stroke}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </section>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Description
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">
              {vital.description}
            </p>
          </section>

          <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Clinical Notes
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{notes.clinical}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Suggested Follow-Up
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{notes.followUp}</p>
            </div>
          </section>

          <div className="mt-7">
            <Link
              href="/allopathy"
              className="inline-flex rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
            >
              Back to Allopathy
            </Link>
          </div>
      </div>
    </DashboardShell>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function getTrendConfig(slug: string) {
  const configs: Record<
    string,
    { linePath: string; areaPath: string; stroke: string; areaFill: string }
  > = {
    hr: {
      linePath:
        "M10 120 C60 90, 110 100, 160 80 C210 60, 260 70, 310 50 C360 30, 410 45, 470 35",
      areaPath:
        "M10 120 C60 90, 110 100, 160 80 C210 60, 260 70, 310 50 C360 30, 410 45, 470 35 L470 165 L10 165 Z",
      stroke: "#e11d48",
      areaFill: "rgba(225,29,72,0.12)",
    },
    bp: {
      linePath:
        "M10 110 C60 115, 110 85, 160 95 C210 105, 260 75, 310 80 C360 85, 410 60, 470 70",
      areaPath:
        "M10 110 C60 115, 110 85, 160 95 C210 105, 260 75, 310 80 C360 85, 410 60, 470 70 L470 165 L10 165 Z",
      stroke: "#0284c7",
      areaFill: "rgba(2,132,199,0.12)",
    },
    rr: {
      linePath:
        "M10 120 C60 108, 110 112, 160 104 C210 96, 260 100, 310 90 C360 84, 410 88, 470 78",
      areaPath:
        "M10 120 C60 108, 110 112, 160 104 C210 96, 260 100, 310 90 C360 84, 410 88, 470 78 L470 165 L10 165 Z",
      stroke: "#0f766e",
      areaFill: "rgba(15,118,110,0.12)",
    },
    spo2: {
      linePath:
        "M10 72 C60 70, 110 68, 160 66 C210 64, 260 66, 310 63 C360 61, 410 62, 470 60",
      areaPath:
        "M10 72 C60 70, 110 68, 160 66 C210 64, 260 66, 310 63 C360 61, 410 62, 470 60 L470 165 L10 165 Z",
      stroke: "#0891b2",
      areaFill: "rgba(8,145,178,0.12)",
    },
    temperature: {
      linePath:
        "M10 92 C60 94, 110 88, 160 90 C210 92, 260 86, 310 88 C360 90, 410 85, 470 87",
      areaPath:
        "M10 92 C60 94, 110 88, 160 90 C210 92, 260 86, 310 88 C360 90, 410 85, 470 87 L470 165 L10 165 Z",
      stroke: "#ea580c",
      areaFill: "rgba(234,88,12,0.12)",
    },
    hrv: {
      linePath:
        "M10 130 C60 90, 110 120, 160 85 C210 115, 260 75, 310 105 C360 80, 410 98, 470 72",
      areaPath:
        "M10 130 C60 90, 110 120, 160 85 C210 115, 260 75, 310 105 C360 80, 410 98, 470 72 L470 165 L10 165 Z",
      stroke: "#7c3aed",
      areaFill: "rgba(124,58,237,0.12)",
    },
    "vo2-max": {
      linePath:
        "M10 140 C60 132, 110 126, 160 118 C210 110, 260 105, 310 96 C360 88, 410 82, 470 74",
      areaPath:
        "M10 140 C60 132, 110 126, 160 118 C210 110, 260 105, 310 96 C360 88, 410 82, 470 74 L470 165 L10 165 Z",
      stroke: "#16a34a",
      areaFill: "rgba(22,163,74,0.12)",
    },
    sleep: {
      linePath:
        "M10 132 C60 115, 110 140, 160 120 C210 102, 260 128, 310 108 C360 95, 410 104, 470 90",
      areaPath:
        "M10 132 C60 115, 110 140, 160 120 C210 102, 260 128, 310 108 C360 95, 410 104, 470 90 L470 165 L10 165 Z",
      stroke: "#4338ca",
      areaFill: "rgba(67,56,202,0.12)",
    },
    "ecg-rhythm": {
      linePath:
        "M10 100 L70 100 L85 80 L92 118 L102 62 L115 126 L130 100 L200 100 L215 82 L225 120 L240 72 L252 124 L268 100 L340 100 L355 82 L365 120 L380 72 L392 124 L410 100 L470 100",
      areaPath:
        "M10 100 L70 100 L85 80 L92 118 L102 62 L115 126 L130 100 L200 100 L215 82 L225 120 L240 72 L252 124 L268 100 L340 100 L355 82 L365 120 L380 72 L392 124 L410 100 L470 100 L470 165 L10 165 Z",
      stroke: "#dc2626",
      areaFill: "rgba(220,38,38,0.08)",
    },
  };

  return configs[slug] ?? configs.hr;
}

function getClinicalNotes(slug: string) {
  const notes: Record<string, { clinical: string; followUp: string }> = {
    hr: {
      clinical:
        "This heart rate pattern is within expected resting range and does not show abrupt spikes in the current dummy trend.",
      followUp:
        "Continue periodic resting measurements at the same time of day; review if persistent readings exceed baseline by 15-20 bpm.",
    },
    bp: {
      clinical:
        "Blood pressure trend appears stable with mild day-to-day variability, which is common with posture, stress, and hydration changes.",
      followUp:
        "Track morning and evening readings for one week; if average systolic stays above target, discuss medication/lifestyle adjustment.",
    },
    rr: {
      clinical:
        "Respiratory rate is in normal adult range and the trend does not indicate respiratory distress in this sample.",
      followUp:
        "Reassess with symptoms such as breathlessness, fever, or fatigue; correlate with SpO2 and temperature when symptomatic.",
    },
    spo2: {
      clinical:
        "Oxygen saturation remains high and consistent across the sample period, supporting adequate oxygenation.",
      followUp:
        "Recheck during exertion or respiratory symptoms; seek review if repeated values fall below usual baseline.",
    },
    temperature: {
      clinical:
        "Temperature is near expected baseline and the trend shows only minor physiological fluctuation.",
      followUp:
        "Monitor twice daily during suspected infection and interpret with symptoms and inflammatory markers if needed.",
    },
    hrv: {
      clinical:
        "HRV variation suggests changing recovery load; this metric is most useful in relation to personal baseline over time.",
      followUp:
        "Pair HRV with sleep quality, training load, and stress tracking for at least 2-4 weeks before making decisions.",
    },
    "vo2-max": {
      clinical:
        "VO2 max trend is gradually improving in this sample, indicating potential cardiorespiratory conditioning response.",
      followUp:
        "Retest with same protocol monthly; combine with resting HR and exercise tolerance for a complete fitness profile.",
    },
    sleep: {
      clinical:
        "Sleep duration trend is variable and below ideal target on multiple days in this sample.",
      followUp:
        "Aim for consistent sleep window, reduce late caffeine/screens, and reassess weekly trend alongside daytime energy.",
    },
    "ecg-rhythm": {
      clinical:
        "Rhythm sample demonstrates regular sinus-pattern intervals in this dummy display without obvious irregularity.",
      followUp:
        "If palpitations, syncope, or chest symptoms occur, correlate with formal ECG/ambulatory monitoring and clinician review.",
    },
  };

  return notes[slug] ?? notes.hr;
}
