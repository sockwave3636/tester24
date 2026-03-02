export default function AstrologyPanel() {
  return (
    <div>
      <p className="text-sm leading-6 text-slate-600">
        Health-support reading placeholder based on natal chart timing and
        current transit sensitivity.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
        <InfoPill label="Current Period" value="Moon-Mercury" />
        <InfoPill label="Sensitive Area" value="Sleep / Stress" />
        <InfoPill label="Suggested Remedy" value="Breath + Routine" />
      </div>
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
