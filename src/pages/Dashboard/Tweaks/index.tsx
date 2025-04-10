import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, X } from "lucide-react";

import tweaks from "@/assets/tweaks.json";

type Tweak = {
  name: string;
  description: string;
  subcategory: string;
  category: string;
  enabled?: boolean;
};

const Tweaks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showEnabled, setShowEnabled] = useState(true);
  const [showDisabled, setShowDisabled] = useState(true);
  const [enabledTweaks, setEnabledTweaks] = useState<Record<string, boolean>>(
    {}
  );

  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      tweaks.map((tweak: Tweak) => tweak.category)
    );
    return ["All", ...Array.from(uniqueCategories)];
  }, []);

  const filteredTweaks = useMemo(() => {
    return tweaks.filter((tweak: Tweak) => {
      const matchesSearch =
        tweak.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tweak.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tweak.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || tweak.category === activeCategory;

      const isEnabled = !!enabledTweaks[tweak.name];

      const bothCheckedOrUnchecked =
        (showEnabled && showDisabled) || (!showEnabled && !showDisabled);

      const matchesEnabledFilter =
        bothCheckedOrUnchecked ||
        (isEnabled && showEnabled) ||
        (!isEnabled && showDisabled);

      return matchesSearch && matchesCategory && matchesEnabledFilter;
    });
  }, [searchQuery, activeCategory, enabledTweaks, showEnabled, showDisabled]);

  const tweaksBySubcategory = useMemo(() => {
    const grouped: Record<string, Tweak[]> = {};

    filteredTweaks.forEach((tweak: Tweak) => {
      if (!grouped[tweak.subcategory]) {
        grouped[tweak.subcategory] = [];
      }
      grouped[tweak.subcategory].push(tweak);
    });

    return grouped;
  }, [filteredTweaks]);

  const handleToggleTweak = (tweakName: string) => {
    setEnabledTweaks((prev) => ({
      ...prev,
      [tweakName]: !prev[tweakName],
    }));
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="space-y-6 dark">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search tweaks..."
            className="pl-9 pr-9 bg-slate-800 border-slate-700 text-slate-100"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-slate-100"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="flex items-center gap-4 sm:whitespace-nowrap">
          <div className="flex items-center gap-2">
            <Checkbox
              id="show-enabled"
              checked={showEnabled}
              onCheckedChange={() => setShowEnabled(!showEnabled)}
              className="bg-slate-800 border-slate-600 text-blue-600"
            />
            <Label htmlFor="show-enabled" className="text-slate-100">
              Enabled
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="show-disabled"
              checked={showDisabled}
              onCheckedChange={() => setShowDisabled(!showDisabled)}
              className="bg-slate-800 border-slate-600 text-blue-600"
            />
            <Label htmlFor="show-disabled" className="text-slate-100">
              Disabled
            </Label>
          </div>
        </div>
      </div>

      <Tabs
        defaultValue="All"
        value={activeCategory}
        onValueChange={setActiveCategory}
      >
        <TabsList className="bg-slate-800 border-slate-700">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-blue-700 data-[state=active]:text-white mx-0.5 first:ml-0 last:mr-0"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="text-sm text-slate-400">
        {filteredTweaks.length} tweak{filteredTweaks.length !== 1 ? "s" : ""}{" "}
        found
        {searchQuery && <span> for "{searchQuery}"</span>}
        {activeCategory !== "All" && <span> in {activeCategory} category</span>}
      </div>

      <div className="space-y-6">
        {Object.keys(tweaksBySubcategory).length > 0 ? (
          Object.entries(tweaksBySubcategory).map(([subcategory, tweaks]) => (
            <Card
              key={subcategory}
              className="bg-slate-800 border-slate-700 text-slate-100 shadow-blue-900/10 shadow-lg"
            >
              <CardHeader className="border-b border-slate-700">
                <CardTitle className="text-blue-400">{subcategory}</CardTitle>
                <CardDescription className="text-slate-400">
                  {tweaks.length} tweak{tweaks.length !== 1 ? "s" : ""}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  {tweaks.map((tweak: Tweak) => (
                    <div
                      key={tweak.name}
                      className="flex items-center justify-between border-b border-slate-700 pb-3 last:border-0 last:pb-0"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{tweak.name}</h4>
                          <Badge className="bg-blue-900/30 text-blue-300 hover:bg-blue-800 border-blue-800">
                            {tweak.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-400">
                          {tweak.description}
                        </p>
                      </div>
                      <div className="flex items-center ml-4">
                        <Switch
                          id={`tweak-${tweak.name}`}
                          checked={!!enabledTweaks[tweak.name]}
                          onCheckedChange={() => handleToggleTweak(tweak.name)}
                          className="data-[state=checked]:bg-blue-600"
                        />
                        <Label
                          className="sr-only"
                          htmlFor={`tweak-${tweak.name}`}
                        >
                          Toggle {tweak.name}
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="bg-slate-800 border-slate-700 text-slate-100 shadow-blue-900/10">
            <CardContent className="flex flex-col items-center justify-center py-10">
              <p className="text-slate-400 mb-4">
                No tweaks found matching your filters.
              </p>
              <div className="flex gap-3">
                <button
                  className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                    setShowEnabled(true);
                    setShowDisabled(true);
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Tweaks;
