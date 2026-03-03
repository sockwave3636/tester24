const PLANETARY_STRENGTH = [
  { planet: "Sun", value: "72%", note: "Stable vitality signature" },
  { planet: "Moon", value: "64%", note: "Emotional sensitivity elevated" },
  { planet: "Mars", value: "58%", note: "Energy moderate with stress spikes" },
  { planet: "Mercury", value: "69%", note: "Good cognitive processing" },
  { planet: "Jupiter", value: "76%", note: "Supportive growth phase" },
  { planet: "Saturn", value: "62%", note: "Discipline strong, recovery slower" },
];

const HOUSE_ANALYSIS = [
  { house: "1st House", theme: "Body Constitution", summary: "Balanced constitution with periodic stress load." },
  { house: "4th House", theme: "Rest & Emotional Core", summary: "Sleep and emotional grounding need routine support." },
  { house: "6th House", theme: "Disease & Recovery", summary: "Mild susceptibility to lifestyle-driven imbalances." },
  { house: "8th House", theme: "Chronicity Markers", summary: "Transformation phase; prevent long-term buildup." },
  { house: "12th House", theme: "Recovery & Sleep", summary: "Recovery improves with breathwork and fixed sleep timing." },
];

const DASHA_TRANSIT = [
  { label: "Current Dasha", value: "Moon - Mercury", insight: "Mind-body sensitivity, focus on rhythm and rest." },
  { label: "Transit Trigger", value: "Saturn aspect to 6th", insight: "Higher workload may amplify fatigue patterns." },
  { label: "Support Window", value: "Next 8-10 weeks", insight: "Good period for disciplined habit correction." },
];

export default function AstrologyPanel() {
  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          Core Birth Parameters
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <InfoPill label="Date of Birth" value="14 Aug 1991" />
          <InfoPill label="Time of Birth" value="07:42 AM" />
          <InfoPill label="Place of Birth" value="Jaipur, India" />
          <InfoPill label="Ascendant" value="Libra (Tula)" />
          <InfoPill label="Moon Sign" value="Cancer (Karka)" />
          <InfoPill label="Sun Sign" value="Leo (Simha)" />
          <InfoPill label="Nakshatra" value="Pushya" />
          <InfoPill label="Element Dominance" value="Water + Air" />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          Planetary Strength Indicators
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          {PLANETARY_STRENGTH.map((item) => (
            <div key={item.planet} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-900">{item.planet}</p>
                <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                  {item.value}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4">
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          House Analysis
        </h3>
        <div className="mt-3 space-y-2">
          {HOUSE_ANALYSIS.map((item) => (
            <div key={item.house} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-sm font-semibold text-slate-900">
                {item.house} <span className="text-slate-500">- {item.theme}</span>
              </p>
              <p className="mt-1 text-sm text-slate-600">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          Dasha and Transit Indicators
        </h3>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          {DASHA_TRANSIT.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.insight}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );
}

