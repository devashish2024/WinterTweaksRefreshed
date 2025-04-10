import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HardDrive } from "lucide-react";

export default function SpaceSavedCard({
  storageSaved,
}: {
  storageSaved: number | null;
}) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-lg font-medium">Disk Space Saved</CardTitle>
        <HardDrive className="h-5 w-5 text-green-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{storageSaved ?? 0} GB</div>
        <p className="text-sm text-muted-foreground mt-2">
          From disk cleanup operations
        </p>
      </CardContent>
      <CardFooter>
        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
          Healthy
        </Badge>
      </CardFooter>
    </Card>
  );
}
