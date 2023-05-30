import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiTireIronCross } from "react-icons/gi";
import ResNav from "./ResNav";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [showMenu, setShowMenu] = useState(false);
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const removeResMenu=()=>{
    setShowMenu(false)
  }
  return (
    <>
      <header className="navigationHead">
        <nav className="navDiv">
          <ul className="navLinks">
            <li
              className={activeTab === "tab1" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab1")}
            >
              Home
            </li>
            <li
              className={activeTab === "tab2" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab2")}
            >
              About Us
            </li>
            <li
              className={activeTab === "tab3" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab3")}
            >
              Services
            </li>
            <li
              className={activeTab === "tab4" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab4")}
            >
              Our Work
            </li>
            <li
              className={activeTab === "tab5" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab5")}
            >
              Pricing
            </li>
            <li
              className={activeTab === "tab6" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab6")}
            >
              Contact
            </li>
            <li
              className={activeTab === "tab7" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab7")}
            >
              Policy
            </li>
            <li className="navLink">
              <FaUserCircle
                style={{ marginRight: "8px", fontSize: "1.4rem" }}
              />
              Login
            </li>
            
          </ul>
          {showMenu ? (
          <GiTireIronCross
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="Burger"
          />
        ) : (
          <GiHamburgerMenu
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="Burger"
          />
        )}
      {showMenu && <ResNav removeResMenu={removeResMenu}/>}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
