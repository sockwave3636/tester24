import AyurvedaDashboard from "../components/AyurvedaDashboard";
import SectionScaffold from "../components/SectionScaffold";

export default function AyurvedaPage() {
  return (
    <SectionScaffold
      title="Ayurveda"
      subtitle="Integrated Ayurvedic constitution, dhatu, agni, kriyakala and recommendation analysis."
    >
      <AyurvedaDashboard />
    </SectionScaffold>
  );
}
