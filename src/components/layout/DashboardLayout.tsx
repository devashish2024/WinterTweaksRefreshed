import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-16 w-full">
        <div className="bg-black/70 p-6 h-full min-h-[calc(100vh-2rem)]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
