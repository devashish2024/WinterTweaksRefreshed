import DashboardCards from "./Cards";
import TweakCategories from "./TweakCategories";

const Home = () => {
  return (
    <div className="space-y-6">
      <DashboardCards />

      <TweakCategories />
    </div>
  );
};

export default Home;
