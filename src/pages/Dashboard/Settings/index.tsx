import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { HelpCircle, Check, AlertTriangle, RefreshCcw } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Settings({
  discordInfo: { username, id, avatarUrl },
}: {
  discordInfo: {
    username: string;
    id: string;
    avatarUrl: string;
  };
}) {
  const handleFactoryReset = () => {
    console.log("Performing factory reset...");
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="bg-slate-800 border-slate-700">
          <TabsTrigger
            value="account"
            className="data-[state=active]:bg-blue-700 data-[state=active]:text-white mx-0.5 first:ml-0 last:mr-0"
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            value="advanced"
            className="data-[state=active]:bg-blue-700 data-[state=active]:text-white mx-0.5 first:ml-0 last:mr-0"
          >
            Advanced
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card className="bg-slate-800 border-slate-700 text-slate-100 shadow-blue-900/10 shadow-lg">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="flex items-center gap-2">
                Linked Discord Account
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <HelpCircle className="h-4 w-4 text-slate-400" />
                        <span className="sr-only">Info</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-slate-900 border-slate-700 text-slate-100">
                      <p>
                        To change your linked Discord account, please create a
                        ticket on our Discord server.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
              <CardDescription className="text-slate-400">
                Your WinterTweaks license will be tied to this account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden">
                  <img
                    src={avatarUrl}
                    alt={username}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-lg">{username}</h3>
                    <span className="bg-green-900/30 text-green-400 px-2 py-0.5 rounded-full text-xs flex items-center">
                      <Check className="h-3 w-3 mr-1" /> Linked
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">Discord ID: {id}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card className="bg-slate-800 border-slate-700 text-slate-100 shadow-blue-900/10 shadow-lg">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="text-red-400 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Danger Zone
              </CardTitle>
              <CardDescription className="text-slate-400">
                These actions are destructive and cannot be undone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-red-900/50 bg-red-900/10 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-red-100">
                        Factory Reset
                      </h3>
                      <p className="text-sm text-slate-400">
                        Reset the application to its default state. All settings
                        and preferences will be lost.
                      </p>
                    </div>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          className="bg-red-700 hover:bg-red-600 flex items-center gap-1"
                        >
                          <RefreshCcw className="h-4 w-4" />
                          Reset
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-slate-900 border-slate-700 text-slate-100">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription className="text-slate-400">
                            This will reset all settings and enabled tweaks.
                            This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-100 border-slate-700">
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction
                            onClick={handleFactoryReset}
                            className="bg-red-700 hover:bg-red-600 text-white"
                          >
                            Reset
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
