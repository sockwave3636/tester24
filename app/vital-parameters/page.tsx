import AllopathyPanel from "../components/AllopathyPanel";
import PatientDetailBanner from "../components/PatientDetailBanner";
import SectionScaffold from "../components/SectionScaffold";

export default function VitalParametersPage() {
  return (
    <SectionScaffold
      title="Vital Parameters"
      subtitle="Key physiological metrics with trends and clinical interpretation."
    >
      <div className="space-y-5">
        <PatientDetailBanner />
        <AllopathyPanel />
      </div>
    </SectionScaffold>
  );
}

