import React, { useState } from "react";
import "../styles/Navbar.css";
import {Link} from 'react-router-dom'
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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header className="navigationHead">
        <nav className="navDiv">
          <ul className="navLinks">
            <li
              className={activeTab === "tab1" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab1")}
            >
              <Link to='/' style={{color:"white", textDecoration:"none"}}>Home</Link>
            </li>
            
            <li
              className={activeTab === "tab3" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab3")}
            >
               <Link to='/services' style={{color:"white", textDecoration:"none"}}>Services</Link>
            </li>
            <li
              className={activeTab === "tab4" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab4")}
            >
            <Link to='/work' style={{color:"white", textDecoration:"none"}}>Our Work</Link>
            </li>
            <li
              className={activeTab === "tab5" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab5")}
            >
               <Link to='/pricing' style={{color:"white", textDecoration:"none"}}>Pricing</Link>
            </li>
            <li
              className={activeTab === "tab2" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab2")}
            >
              <Link to='/about' style={{color:"white", textDecoration:"none"}}>About Us</Link>
            </li>
            <li
              className={activeTab === "tab6" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab6")}
            >
            <span
                onClick={() => scrollToSection("contact")}
                style={{ cursor: "pointer", color: "white", textDecoration: "none" }}
              >
                Contact
              </span>
            </li>
            <li
              className={activeTab === "tab7" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab7")}
            >
              <Link to='/blog' style={{color:"white", textDecoration:"none"}}>Blogs</Link>
            </li>
            <li className="navLink">
              <FaUserCircle
                style={{ marginRight: "8px", fontSize: "1.4rem" , color:"white"}}
              />
               <Link to='/login' style={{color:"white", textDecoration:"none"}}>login</Link>
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
