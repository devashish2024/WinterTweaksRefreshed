import Sidebar from "./Sidebar";
import discordIcon from "../../assets/discord.svg";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <div className="bg-gray-800 shadow-lg border-b border-blue-400/20 py-4 px-6 flex items-center justify-between ml-16 z-0">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-white">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-blue-300 hover:text-blue-100 transition-colors">
              <a href="#" target="_blank">
                <img
                  src={discordIcon}
                  alt="Join our discord for giveaways and more!"
                  className="size-6 text-blue-500"
                />
              </a>
            </button>
            <div className="h-6 w-px bg-gray-600"></div>
            <div className="relative group">
              <a href="#">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocKJI8BL07cNuzTM3C-3wMRvlx866vPAR6h4OTkygRKlLE4ipd1r=s288-c-no"
                  alt=""
                  className="size-8 rounded-full"
                />
              </a>
            </div>
          </div>
        </div>

        <main className="flex-grow p-6 ml-16 overflow-auto text-gray-200">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
