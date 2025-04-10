import SnowfallBackground from "@/components/layout/SnowflakeBackground";
// import LoginForm from "./pages/Login";
import "@fontsource-variable/rubik/wght.css";
import DashboardLayout from "./components/layout/DashboardLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardHome from "./pages/Dashboard/Home/index";
import DashboardTweaks from "./pages/Dashboard/Tweaks/index";
import LoginForm from "./pages/Login";
import Settings from "./pages/Dashboard/Settings";

export default function App() {
  return (
    <main className="relative overflow-hidden dark">
      <SnowfallBackground />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />

          <Route path="/dashboard/" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="tweaks" element={<DashboardTweaks />} />
            <Route
              path="settings"
              element={
                <Settings
                  discordInfo={{
                    username: "v0rtexdev.",
                    id: "1153023901203447940",
                    avatarUrl:
                      "https://lh3.googleusercontent.com/a/ACg8ocKJI8BL07cNuzTM3C-3wMRvlx866vPAR6h4OTkygRKlLE4ipd1r=s288-c-no",
                  }}
                />
              }
            />
          </Route>
          <Route path="*" element={"Not Found"} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
