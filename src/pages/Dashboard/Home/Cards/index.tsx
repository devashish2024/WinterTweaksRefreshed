import EnabledTweaksCard from "./EnabledTweaks";
import PerformanceScoreCard from "./PerformanceScore";
import SpaceSavedCard from "./SpaceSaved";
import SystemInfoCard from "./SystemInfo";

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <EnabledTweaksCard enabled={39} total={100} />
      <SpaceSavedCard storageSaved={141.28} />
      <PerformanceScoreCard score={99} />
      <SystemInfoCard
        user="ashish"
        ram="16GB DDR3"
        cpu="Intel i3-3110M"
        os="Windows 11 Pro"
      />
    </div>
  );
}
