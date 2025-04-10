import SnowfallBackground from "@/components/layout/SnowflakeBackground";
// import LoginForm from "./pages/Login";
import "@fontsource-variable/rubik/wght.css";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardHome from "./pages/Dashboard";

export default function App() {
  return (
    <main className="relative overflow-hidden dark">
      <SnowfallBackground />

      {/* <LoginForm /> */}
      <DashboardLayout>
        <DashboardHome />
      </DashboardLayout>
    </main>
  );
}
