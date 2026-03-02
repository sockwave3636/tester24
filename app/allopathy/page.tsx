import AllopathyPanel from "../components/AllopathyPanel";
import SectionScaffold from "../components/SectionScaffold";

export default function AllopathyPage() {
  return (
    <SectionScaffold
      title="Allopathy"
      subtitle="Click any vital parameter card to open its dedicated detail page with trend and clinical notes."
    >
      <AllopathyPanel />
    </SectionScaffold>
  );
}
