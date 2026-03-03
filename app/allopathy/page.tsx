import AllopathyPanel from "../components/AllopathyPanel";
import SectionScaffold from "../components/SectionScaffold";

export default function AllopathyPage() {
  return (
    <SectionScaffold
      title="Allopathy"
      subtitle="Swipe the vital cards in a row and click one to view full trend and clinical detail below."
    >
      <AllopathyPanel />
    </SectionScaffold>
  );
}
