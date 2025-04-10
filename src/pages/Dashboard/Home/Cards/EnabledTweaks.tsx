import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Rocket } from "lucide-react";

export default function EnabledTweaksCard({
  enabled,
  total,
}: {
  enabled: number;
  total: number;
}) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-lg font-medium">Enabled Tweaks</CardTitle>
        <Rocket className="h-5 w-5 text-blue-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">
          {enabled}{" "}
          <span className="text-sm text-muted-foreground font-normal">
            of {total}
          </span>
        </div>
        <Progress value={(enabled / total) * 100} className="h-2" />
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          {total - enabled} more tweaks available
        </p>
      </CardFooter>
    </Card>
  );
}
