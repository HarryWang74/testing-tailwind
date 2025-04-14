import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <div className="flex flex-row h-screen ">
      <div className="basis-[400px] border-r border-color">
        <Navbar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
};
export default Layout;
