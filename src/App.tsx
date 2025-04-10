import SnowfallBackground from "@/components/layout/SnowflakeBackground";
import LoginForm from "./pages/Login";
import "@fontsource-variable/rubik/wght.css";

export default function App() {
  return (
    <main className="relative overflow-hidden dark">
      <SnowfallBackground />

      <LoginForm />
    </main>
  );
}
