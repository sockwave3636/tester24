import AyurvedaDashboard, { AyurvedaTab } from "./AyurvedaDashboard";
import PatientDetailBanner from "./PatientDetailBanner";
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
      <div className="space-y-5">
        <PatientDetailBanner />
        <AyurvedaDashboard lockedTab={tab} />
      </div>
    </SectionScaffold>
  );
}

