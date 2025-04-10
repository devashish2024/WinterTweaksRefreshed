import { Button } from "@/components/ui/button";
import { BarChart3, Eye, Rocket, Shield, Cpu, Network } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function TweakCategories() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Tweak Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          {
            name: "Performance",
            icon: <BarChart3 className="h-5 w-5 mr-2" />,
            count: 28,
          },
          {
            name: "Privacy",
            icon: <Eye className="h-5 w-5 mr-2" />,
            count: 22,
          },
          {
            name: "Gaming",
            icon: <Rocket className="h-5 w-5 mr-2" />,
            count: 16,
          },
          {
            name: "Network",
            icon: <Network className="h-5 w-5 mr-2" />,
            count: 15,
          },
          {
            name: "Security",
            icon: <Shield className="h-5 w-5 mr-2" />,
            count: 19,
          },
          {
            name: "System",
            icon: <Cpu className="h-5 w-5 mr-2" />,
            count: 10,
          },
        ].map((category, index) => (
          <Button
            key={index}
            variant="outline"
            className="flex flex-row items-center justify-between h-16 py-2 px-4"
          >
            <div className="flex items-center">
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </div>
            <Badge variant="secondary">{category.count}</Badge>
          </Button>
        ))}
      </div>
    </div>
  );
}
