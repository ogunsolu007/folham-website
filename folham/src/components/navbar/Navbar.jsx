import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/folham-logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";

const Menu = () => {
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };
  return (
    <>
      <Link className="links" to="/">
        Home
      </Link>
      <Link className="links" to="/about">
        About
      </Link>
      <Link className="links" to="/service">
        Services
      </Link>
      <Link
        className="links"
        to="/#"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Our location <IoMdArrowDropdown />
        {dropdown && <Dropdown />}
      </Link>
      <Link className="links" to="/contact">
        Contact
      </Link>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__list">
        <Menu />
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000066"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000066"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="navbar__menu-container scale-up-center">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
