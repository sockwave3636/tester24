import { PATIENT_DETAILS } from "../data/patient";

export default function PatientDetailBanner() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        Patient Details
      </p>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <DetailItem label="Name" value={PATIENT_DETAILS.name} />
        <DetailItem label="Age / Gender" value={`${PATIENT_DETAILS.age} / ${PATIENT_DETAILS.gender}`} />
        <DetailItem label="Patient ID" value={PATIENT_DETAILS.patientId} />
        <DetailItem label="Occupation" value={PATIENT_DETAILS.occupation} />
        <DetailItem label="Family History" value={PATIENT_DETAILS.familyHistory} />
      </div>
    </section>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

