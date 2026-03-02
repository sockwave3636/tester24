import AstrologyPanel from "../components/AstrologyPanel";
import SectionScaffold from "../components/SectionScaffold";

export default function AstrologyPage() {
  return (
    <SectionScaffold
      title="Astrology"
      subtitle="Astrological wellness indicators and supportive guidance (dummy data)."
    >
      <AstrologyPanel />
    </SectionScaffold>
  );
}
