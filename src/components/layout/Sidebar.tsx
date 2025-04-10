import {
  Snowflake,
  Home,
  Settings2,
  HelpCircle,
  Settings,
  HardDrive,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";

type SidebarLinkProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  isLogo?: boolean;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({
  to,
  icon,
  label,
  isActive = false,
  isLogo = false,
}) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            to={to}
            className={`
              w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200
              ${
                isLogo
                  ? "text-[#33C3F0] mb-4 hover:text-white filter drop-shadow-[0_0_4px_rgba(51,195,240,0.4)] hover:drop-shadow-[0_0_8px_rgba(51,195,240,0.8)]"
                  : isActive
                  ? "text-white bg-[#33C3F0]/15 shadow-sm hover:drop-shadow-[0_0_6px_rgba(51,195,240,0.5)]"
                  : "text-gray-400 hover:text-white hover:bg-white/10 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
              }
              ${
                isLogo
                  ? "text-2xl"
                  : "text-lg focus:outline-none focus:ring-1 focus:ring-[#33C3F0]/40"
              }
              group relative
            `}
          >
            <span
              className={`${
                isActive ? "transform scale-105" : ""
              } transition-all duration-200 group-hover:transform group-hover:scale-110`}
            >
              {icon}
            </span>
            {isActive && !isLogo && (
              <span className="absolute -bottom-1 w-5 h-1 bg-[#33C3F0] rounded-full shadow-[0_0_4px_rgba(51,195,240,0.6)]"></span>
            )}
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={10} className="dark">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Sidebar = () => {
  // Main navigation links
  const mainLinks = [
    {
      to: "/dashboard/",
      icon: <Home />,
      label: "Home",
    },
    {
      to: "/dashboard/tweaks",
      icon: <Settings2 />,
      label: "Tweaks",
    },
    {
      to: "/dashboard/disk-cleanup",
      icon: <HardDrive />,
      label: "Disk Cleanup",
    },
  ];

  // Bottom navigation links
  const bottomLinks = [
    {
      to: "/dashboard/help",
      icon: <HelpCircle />,
      label: "Help",
    },
    {
      to: "/dashboard/settings",
      icon: <Settings />,
      label: "Settings",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-16 bg-[#1A1F2C]/90 backdrop-blur-md flex flex-col items-center py-6 border-r border-white/10 shadow-lg z-30">
      <SidebarLink
        to="/"
        icon={
          <Snowflake className="h-8 w-8 text-[#33C3F0] filter drop-shadow-[0_0_8px_rgba(51,195,240,0.8)]" />
        }
        label="WinterTweaks"
        isLogo
      />

      <div className="flex flex-col items-center space-y-3 w-full">
        {mainLinks.map((link) => (
          <SidebarLink
            key={link.to}
            to={link.to}
            icon={link.icon}
            label={link.label}
            isActive={link.to === "/"}
          />
        ))}
      </div>

      <div className="mt-auto flex flex-col items-center space-y-3 w-full">
        {bottomLinks.map((link) => (
          <SidebarLink
            key={link.to}
            to={link.to}
            icon={link.icon}
            label={link.label}
            isActive={link.to === "/"}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
