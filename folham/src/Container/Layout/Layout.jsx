import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
