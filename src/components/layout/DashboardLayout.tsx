import { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import discordIcon from "../../assets/discord.svg";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

const routeTitleMap: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/tweaks": "Tweaks",
  "/dashboard/disk-cleanup": "Disk Cleanup",
  "/dashboard/help": "Help",
  "/dashboard/settings": "Settings",
};

const DashboardLayout = () => {
  const { pathname } = useLocation();

  const pageTitle = useMemo(() => {
    if (routeTitleMap[pathname]) return routeTitleMap[pathname];

    return "Dashboard";
  }, [pathname]);

  return (
    <div className="flex h-screen bg-gray-900/80">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <main className="flex-grow p-6 mt-2 ml-16 overflow-auto text-gray-200">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight">{pageTitle}</h1>
              <div className="flex items-center space-x-4">
                <Link
                  to="#"
                  target="_blank"
                  className="text-blue-300 hover:text-blue-100 transition-colors"
                >
                  <img
                    src={discordIcon}
                    alt="Join our discord for giveaways and more!"
                    className="size-6"
                  />
                </Link>
                <div className="h-6 w-px bg-gray-600"></div>
                <Link to="/dashboard/settings">
                  <img
                    src="https://lh3.googleusercontent.com/a/ACg8ocKJI8BL07cNuzTM3C-3wMRvlx866vPAR6h4OTkygRKlLE4ipd1r=s288-c-no"
                    alt="User profile"
                    className="size-8 rounded-full"
                  />
                </Link>
                <Link to="/">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:!bg-red-600 cursor-pointer"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
