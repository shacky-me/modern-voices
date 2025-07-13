import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
