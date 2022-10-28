import { useState } from "react";
import "./layout.css";
import logo from "../../assets/folham-logo.png";
import Footer from "../footer/Footer";
import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";

const Layout = () => {
  const [toogle, setToggle] = useState(false);
  return (
    <div>
      <nav>
        <div className="nav__container container">
          <img src={logo} alt=" logo" className="nav__logo" />
          <ul className="nav__links">
            <li>
              <Link className="links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="links" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="links" to="/service">
                Services
              </Link>
            </li>
            <li>
              <Link className="links" to="/location">
                Our location
              </Link>
            </li>
            <li>
              <Link className="links" to="/contact">
                Contact
              </Link>
            </li>
            {/* <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li> */}
          </ul>
          <div
            className="mobile__nav "
            onClick={() => setToggle((prev) => !prev)}
          >
            {toogle ? <GiCrossedBones /> : <GiHamburgerMenu />}
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
