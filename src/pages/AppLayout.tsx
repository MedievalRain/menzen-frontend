import { Outlet } from "react-router-dom";
import Navbar from "../features/navbar/Navbar/Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
