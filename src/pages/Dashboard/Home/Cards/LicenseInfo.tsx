import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, ShieldCheck } from "lucide-react";

type LicenseType = "lite" | "premium";

export default function LicenseInfoCard({ license }: { license: LicenseType }) {
  const isPremium = license === "premium";

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-lg font-medium">License</CardTitle>
        {isPremium ? (
          <Sparkles className="h-5 w-5 text-amber-500" />
        ) : (
          <ShieldCheck className="h-5 w-5 text-blue-500" />
        )}
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">
            {isPremium ? "Premium" : "Lite"}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          {isPremium
            ? "All optimizations and features"
            : "Basic optimizations and general tweaks"}
        </p>
      </CardContent>
    </Card>
  );
}
