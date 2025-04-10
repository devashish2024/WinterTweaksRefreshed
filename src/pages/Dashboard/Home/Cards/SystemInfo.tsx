import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Cpu } from "lucide-react";

export default function SystemInfoCard({
  os,
  cpu,
  ram,
  user,
}: {
  os: string;
  cpu: string;
  ram: string;
  user: string;
}) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-lg font-medium">System Info</CardTitle>
        <Cpu className="h-5 w-5 text-amber-500" />
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">
            Windows Version:
          </span>
          <span className="text-sm font-medium">{os}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">CPU:</span>
          <span className="text-sm font-medium">{cpu}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">RAM:</span>
          <span className="text-sm font-medium">{ram}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">User:</span>
          <span className="text-sm font-medium">{user}</span>
        </div>
      </CardContent>
    </Card>
  );
}
