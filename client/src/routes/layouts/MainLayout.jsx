import LeftBar from "components/leftBar";
import TopBar from "components/TopBar";
import "./MainLayout.css";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className='app'>
      <LeftBar />
      <div className='content'>
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
