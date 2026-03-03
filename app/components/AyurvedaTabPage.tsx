import AyurvedaDashboard, { AyurvedaTab } from "./AyurvedaDashboard";
import SectionScaffold from "./SectionScaffold";

export default function AyurvedaTabPage({
  title,
  subtitle,
  tab,
}: {
  title: string;
  subtitle: string;
  tab: AyurvedaTab;
}) {
  return (
    <SectionScaffold title={title} subtitle={subtitle}>
      <AyurvedaDashboard lockedTab={tab} />
    </SectionScaffold>
  );
}
