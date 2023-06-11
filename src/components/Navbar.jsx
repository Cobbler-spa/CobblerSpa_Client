import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiTireIronCross } from "react-icons/gi";
import Dropdown from "react-bootstrap/Dropdown";
import { GiExitDoor } from "react-icons/gi";
import { BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setUser } from "../redux/features/authSlice";
import ResNav from "./ResNav";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setUser(user));
  }, [user, dispatch]);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const removeResMenu = () => {
    setShowMenu(false);
  };

  const isLinkActive = (paths) => {
    return paths.includes(location.pathname);
  };

  // navbar will have different color when scroll
  const [navStyle, setNavStyle] = useState(false);

  const changeNavStyle = () => {
    if (window.matchMedia("(min-width: 800px)").matches) {
      if (window.scrollY >= 70) {
        setNavStyle(true);
      } else {
        setNavStyle(false);
      }
    } else {
      setNavStyle(false); // Set navStyle as false in mobile view
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavStyle);
    return () => {
      window.removeEventListener("scroll", changeNavStyle);
    };
  }, []);

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <>
      <header className={navStyle ? "navigationHead Navbar-bg" : "navigationHead"}>
        <nav className="navDiv">
          <ul className="navLinks">
            <li
              className={activeTab === "tab1" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab1")}
            >
              <Link
                to="/"
                style={{
                  color: isLinkActive(["/services", "/blog", "/policy"])
                    ? "black"
                    : "white",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
            </li>

            <li
              className={activeTab === "tab3" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab3")}
            >
              <Link
                to="/services"
                style={{
                  color: isLinkActive(["/services", "/blog", "/policy"])
                    ? "black"
                    : "white",
                  textDecoration: "none",
                }}
              >
                Services
              </Link>
            </li>
            <li
              className={activeTab === "tab4" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab4")}
            >
              <Link
                to="/work"
                style={{
                  color: isLinkActive(["/services", "/blog", "/policy"])
                    ? "black"
                    : "white",
                  textDecoration: "none",
                }}
              >
                Our Work
              </Link>
            </li>
            <li
              className={activeTab === "tab5" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab5")}
            >
              <Link
                to="/pricing"
                style={{
                  color: isLinkActive(["/services", "/blog", "/policy"])
                    ? "black"
                    : "white",
                  textDecoration: "none",
                }}
              >
                Pricing
              </Link>
            </li>
            <li
              className={activeTab === "tab2" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab2")}
            >
              <Link
                to="/about"
                style={{
                  color: isLinkActive(["/services", "/blog", "/policy"])
                    ? "black"
                    : "white",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>
            </li>
            <li
              className={activeTab === "tab6" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab6")}
            >
              <Link
                to="/contact"
                style={{
                  color: isLinkActive(["/services", "/blog", "/policy"])
                    ? "black"
                    : "white",
                  textDecoration: "none",
                }}
              >
                Contact
              </Link>
            </li>
            <li
              className={activeTab === "tab7" ? "navLink active" : "navLink"}
              onClick={() => changeTab("tab7")}
            >
              <Link
                to="/blog"
                style={{
                  color: isLinkActive(["/services", "/blog", "/policy"])
                    ? "black"
                    : "white",
                  textDecoration: "none",
                }}
              >
                Blogs
              </Link>
            </li>

            {user ? (
              <button
                className="userProfile d-md-block d-none"
                style={{
                  border: "none",
                  borderRadius: "30px",
                  outline: "none",
                  outlineOffset: "none",
                }}
              >
                <Dropdown
                  onMouseLeave={() => setShowDropdown(false)}
                  onMouseOver={() => setShowDropdown(true)}
                >
                  <Dropdown.Toggle
                    variant=""
                    id="dropdown-basic"
                    style={{
                      padding: "3px 6px",
                      borderRadius: "10px",
                      backgroundColor: "transparent",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "22px",
                        fontWeight: "500",
                        color: "black",
                      }}
                    >
                      <BsPerson />
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    show={showDropdown}
                    style={{
                      backgroundColor: "white",
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Dropdown.Item
                      href="#"
                      style={{ color: "black" }}
                      className="DropdownItem"
                    >
                      <span
                        style={{
                          fontSize: "22px",
                          fontWeight: "600",
                          marginRight: "4px",
                          color: "black",
                        }}
                      >
                        <BsPerson />
                      </span>
                      {user?.name}{" "}
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="4"
                      href="#"
                      onClick={handleLogout}
                      className="DropdownItem"
                    >
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "500",
                          marginRight: "4px",
                          color: "black",
                        }}
                      >
                        <GiExitDoor />
                      </span>
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </button>
            ) : (
              <li className="navLink">
                <FaUserCircle
                  style={{ marginRight: "8px", fontSize: "1.4rem", color: isLinkActive(["/services", "/blog", "/policy"])
                  ? "black"
                  : "white" }}
                />
                <Link
                  to="/login"
                  style={{
                    color: isLinkActive(["/services", "/blog", "/policy"])
                      ? "black"
                      : "white",
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
              </li>
            )}
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
          {showMenu && <ResNav removeResMenu={removeResMenu} showMenu={showMenu} />}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
