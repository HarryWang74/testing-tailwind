import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <div className="relative h-screen pl-[400px]">
      <div className="w-[400px] absolute top-0 left-0 overflow-y-auto h-screen">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
};
export default Layout;
