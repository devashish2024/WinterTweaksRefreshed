import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardHome = () => {
  return (
    <div>
      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="bg-white/10 mb-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="startup">Startup</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="text-white/80 space-y-4">
          <h2 className="text-xl font-semibold">Performance Tweaks</h2>
          <p>Optimize your system for better performance with these tweaks.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium">Visual Effects</h3>
              <p className="text-sm opacity-80 mt-1">
                Adjust visual effects for better performance
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium">System Response</h3>
              <p className="text-sm opacity-80 mt-1">
                Optimize system response times
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium">Memory Management</h3>
              <p className="text-sm opacity-80 mt-1">
                Improve memory allocation
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-medium">CPU Scheduling</h3>
              <p className="text-sm opacity-80 mt-1">Optimize CPU usage</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="startup" className="text-white/80 space-y-4">
          <h2 className="text-xl font-semibold">Startup Tweaks</h2>
          <p>Manage startup programs and services to improve boot time.</p>

          <div className="bg-white/10 p-4 rounded-lg mt-4">
            <p>Startup items will be displayed here.</p>
          </div>
        </TabsContent>

        <TabsContent value="privacy" className="text-white/80 space-y-4">
          <h2 className="text-xl font-semibold">Privacy Tweaks</h2>
          <p>Enhance privacy by adjusting tracking and telemetry settings.</p>

          <div className="bg-white/10 p-4 rounded-lg mt-4">
            <p>Privacy settings will be displayed here.</p>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="text-white/80 space-y-4">
          <h2 className="text-xl font-semibold">Advanced Tweaks</h2>
          <p>Advanced system configurations for expert users.</p>

          <div className="bg-white/10 p-4 rounded-lg mt-4">
            <p className="text-amber-300">
              Warning: These settings are for advanced users only.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardHome;
