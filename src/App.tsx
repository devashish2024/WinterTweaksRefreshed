import SnowfallBackground from "@/components/layout/SnowflakeBackground";
// import LoginForm from "./pages/Login";
import "@fontsource-variable/rubik/wght.css";
import DashboardLayout from "./components/layout/DashboardLayout";
import DashboardHome from "./pages/Dashboard/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main className="relative overflow-hidden dark">
      <SnowfallBackground />

      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="tweaks" element={"Tweaks"} />
            <Route path="disk-cleanup" element={"Disk Cleanup"} />
            <Route path="help" element={"Help"} />
            <Route path="settings" element={"Settings"} />
          </Route>
          <Route path="*" element={"Not Found"} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
