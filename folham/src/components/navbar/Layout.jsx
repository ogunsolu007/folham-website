import { useState } from "react";
import "./layout.css";
import logo from "../../assets/folham-logo.png";
import Footer from "../footer/Footer";
import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from "../dropdown/Dropdown";


const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleToggle = () => setToggle((prev) => !prev);

  const closeMobileMenu = () => setToggle(false);

  return (
    <div>
      <nav>
        <div className="nav__container container">
          <img src={logo} alt=" logo" className="nav__logo" />
          <div className="menu__icon " onClick={handleToggle}>
            {toggle ? <GiCrossedBones /> : <GiHamburgerMenu />}
          </div>{" "}
          <ul className={toggle ? "nav__menu active" : "nav__menu "}>
            <li className="nav__item">
              <Link className="links" to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link className="links" to="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link className="links" to="/service" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link className="links" to="/location" onClick={closeMobileMenu}>
                Our location <IoMdArrowDropdown />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav__item">
              <Link className="links" to="/contact" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            {/* <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li> */}
          </ul>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
