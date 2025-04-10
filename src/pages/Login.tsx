import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Snowflake, RefreshCcw } from "lucide-react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDiscordLogin = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      window.location.href = "/dashboard";
    }, 4000);
  };

  return (
    <div className="centered relative z-10">
      <Card className="main w-full max-w-md border-blue-300/30 bg-gradient-to-b from-blue-900/90 to-blue-950/95 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <div className="flex justify-center mb-2">
            <div className="w-16 h-16 rounded-full bg-blue-700/70 flex items-center justify-center shadow-glow">
              <Snowflake className="text-blue-100 w-8 h-8" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center text-blue-100 tracking-tight">
            WinterTweaks
          </h1>
          <p className="text-blue-300 text-center text-sm mt-1">
            The ultimate gaming PC optimizer
          </p>
        </CardHeader>

        <CardContent className="pb-6">
          <Button
            onClick={handleDiscordLogin}
            disabled={isLoading}
            className="w-full py-5 bg-gradient-to-b from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium rounded-md transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isLoading ? (
              <span className="flex items-center">
                <RefreshCcw className="animate-spin w-4 h-4 mr-2" />
                Logging in...
              </span>
            ) : (
              <>
                <DiscordIcon className="w-5 h-5" />
                <span>Login with Discord</span>
              </>
            )}
          </Button>
          <div className="flex flex-col space-y-3 mt-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-sm text-blue-300 hover:text-blue-200 font-semibold transition">
                  Need help connecting?
                </TooltipTrigger>
                <TooltipContent>
                  Go to our Discord server for assistance with login issues!
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <div className="text-xs text-center text-blue-400/80">
              <p>WinterTweaks • &copy; 2025</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const DiscordIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 126.644 96"
    fill="currentColor"
    className={className}
  >
    <path d="M81.15,0c-1.2376,2.1973-2.3489,4.4704-3.3591,6.794-9.5975-1.4396-19.3718-1.4396-28.9945,0-.985-2.3236-2.1216-4.5967-3.3591-6.794-9.0166,1.5407-17.8059,4.2431-26.1405,8.0568C2.779,32.5304-1.6914,56.3725.5312,79.8863c9.6732,7.1476,20.5083,12.603,32.0505,16.0884,2.6014-3.4854,4.8998-7.1981,6.8698-11.0623-3.738-1.3891-7.3497-3.1318-10.8098-5.1523.9092-.6567,1.7932-1.3386,2.6519-1.9953,20.281,9.547,43.7696,9.547,64.0758,0,.8587.7072,1.7427,1.3891,2.6519,1.9953-3.4601,2.0457-7.0718,3.7632-10.835,5.1776,1.97,3.8642,4.2683,7.5769,6.8698,11.0623,11.5419-3.4854,22.3769-8.9156,32.0509-16.0631,2.626-27.2771-4.496-50.9172-18.817-71.8548C98.9811,4.2684,90.1918,1.5659,81.1752.0505l-.0252-.0505ZM42.2802,65.4144c-6.2383,0-11.4159-5.6575-11.4159-12.6535s4.9755-12.6788,11.3907-12.6788,11.5169,5.708,11.4159,12.6788c-.101,6.9708-5.026,12.6535-11.3907,12.6535ZM84.3576,65.4144c-6.2637,0-11.3907-5.6575-11.3907-12.6535s4.9755-12.6788,11.3907-12.6788,11.4917,5.708,11.3906,12.6788c-.101,6.9708-5.026,12.6535-11.3906,12.6535Z" />
  </svg>
);

export default LoginForm;
