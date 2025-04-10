import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PerformanceScoreCard({ score }: { score: number }) {
  const getBadgeVariant = (score: number) => {
    if (score >= 80) return "default";
    if (score >= 60) return "secondary";
    return "destructive";
  };

  const getBadgeText = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    return "Needs Improvement";
  };

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-lg font-medium">Performance Score</CardTitle>
        <BarChart3 className="h-5 w-5 text-purple-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">{score}%</div>
        <Progress value={score} className="h-2" />
      </CardContent>
      <CardFooter>
        <Badge variant={getBadgeVariant(score)}>{getBadgeText(score)}</Badge>
      </CardFooter>
    </Card>
  );
}
