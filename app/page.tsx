import DashboardShell from "./components/DashboardShell";
import PatientOverview from "./components/PatientOverview";
import { PATIENT_DETAILS } from "./data/patient";

const MODULES = [
  {
    href: "/prakriti-dosha",
    title: "Prakriti & Dosha",
    description: "Constitution and tridosha balance profile.",
  },
  {
    href: "/blood-ayurveda",
    title: "Blood + Ayurveda",
    description: "Blood findings mapped to Ayurvedic interpretation.",
  },
  {
    href: "/dhatu-mala",
    title: "Dhatu & Mala",
    description: "Dhatu strength and mala status overview.",
  },
  {
    href: "/agni-ama",
    title: "Agni Ama koshta",
    description: "Digestive fire and ama burden assessment.",
  },
  {
    href: "/kriyakala",
    title: "Kriyakala",
    description: "Disease progression stages and clinical timing.",
  },
  {
    href: "/srotas-srotodushti",
    title: "Srotas and Srotodushti",
    description: "Channel pathology mapping and correction plan.",
  },
  {
    href: "/recommendations",
    title: "Recommendations",
    description: "Priority guidance for diet, lifestyle, and support.",
  },
  {
    href: "/vital-parameters",
    title: "Vital Parameters",
    description: "Clinical vitals with trend and interpretation.",
  },
  {
    href: "/astrology",
    title: "Astrology",
    description: "Astrological wellness indicators and suggestions.",
  },
];

export default function Home() {
  return (
    <DashboardShell>
      <section className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        <PatientOverview
          headerActions={
            <div className="flex flex-wrap gap-2">
              <InfoChip label="Name" value={PATIENT_DETAILS.name} />
              <InfoChip label="Age" value={`${PATIENT_DETAILS.age}`} />
              <InfoChip label="Gender" value={PATIENT_DETAILS.gender} />
              <InfoChip label="ID" value={PATIENT_DETAILS.patientId} />
              <InfoChip label="Occupation" value={PATIENT_DETAILS.occupation} />
            </div>
          }
          moduleLinks={MODULES}
        />
      </section>
    </DashboardShell>
  );
}

function InfoChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
      {label}: {value}
    </div>
  );
}
