import AllopathyPanel from "../components/AllopathyPanel";
import SectionScaffold from "../components/SectionScaffold";

export default function VitalParametersPage() {
  return (
    <SectionScaffold
      title="Vital Parameters"
      subtitle="Key physiological metrics with trends and clinical interpretation."
    >
      <AllopathyPanel />
    </SectionScaffold>
  );
}
