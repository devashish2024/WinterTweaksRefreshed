import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Network,
  Zap,
  Clock,
  Settings,
  Plus,
  Gauge,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import tweaks from "@/assets/tweaks.json";

type Tweak = {
  name: string;
  description: string;
  subcategory: string;
  category: string;
  enabled?: boolean;
};

const subcategoryIcons: Record<string, React.ReactNode> = {
  Optimisations: <BarChart3 className="h-5 w-5 mr-2" />,
  Extras: <Plus className="h-5 w-5 mr-2" />,
  "Network Optimization": <Network className="h-5 w-5 mr-2" />,
  "Advanced Tweaks": <Settings className="h-5 w-5 mr-2" />,
  "Power Plan Optimization": <Zap className="h-5 w-5 mr-2" />,
  "Advanced Power Settings": <Zap className="h-5 w-5 mr-2" />,
  "Latency & IO Tweaks": <Gauge className="h-5 w-5 mr-2" />,
};

export default function TweakCategories() {
  const subcategories = useMemo(() => {
    const uniqueSubcategories = Array.from(
      new Set(tweaks.map((tweak: Tweak) => tweak.subcategory))
    );

    return uniqueSubcategories.map((subcategory) => {
      const tweaksInSubcategory = tweaks.filter(
        (tweak: Tweak) => tweak.subcategory === subcategory
      );

      const count = tweaksInSubcategory.length;

      const parentCategory = tweaksInSubcategory[0]?.category || "";

      return {
        name: subcategory,
        category: parentCategory,
        icon: subcategoryIcons[subcategory] || (
          <Clock className="h-5 w-5 mr-2" />
        ),
        count,
      };
    });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Tweak Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {subcategories.map((subcategory, index) => (
          <Button
            key={index}
            variant="outline"
            className="flex flex-row items-center justify-between h-16 py-2 px-4"
          >
            <div className="flex items-center">
              {subcategory.icon}
              <div className="flex flex-col items-start">
                <span className="font-medium">{subcategory.name}</span>
                <span className="text-xs text-muted-foreground">
                  {subcategory.category}
                </span>
              </div>
            </div>
            <Badge variant="outline">{subcategory.count}</Badge>
          </Button>
        ))}
      </div>
    </div>
  );
}
