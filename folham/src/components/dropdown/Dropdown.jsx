import React, { useState } from "react";
import "./dropdown.css";
import { Link } from "react-router-dom";
import { dropDownLinks } from "../../constants/data.js";

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleToggle = () => setClick((prev) => !prev);

  return (
    <>
      <ul
        onClick={handleToggle}
        className={click ? "dropdown__menu clicked" : "dropdown__menu"}
      >
        {dropDownLinks.map((dropDown, index) => {
          return (
            <li key={index}>
              <Link
                className={dropDown.cName}
                to={dropDown.path}
                onClick={() => setClick(false)}
              >
                {dropDown.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
