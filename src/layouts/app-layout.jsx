import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AppLayout;
