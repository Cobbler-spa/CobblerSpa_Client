import React from "react";
import "../styles/Navbar.css";
import { FaUserCircle } from "react-icons/fa";
const ResNav = ({ removeResMenu }) => {
  const scrollToTOp = () => {
    window.scrollTo(0, 0);
    removeResMenu();
  };
  const scrollToSkills = () => {
    window.scrollTo(0, 800);
    removeResMenu();
  };
  const scrollToProjects = () => {
    window.scrollTo(0, 2300);
    removeResMenu();
  };
  const scrollToConatact = () => {
    window.scrollTo(0, 2870);
    removeResMenu();
  };
  return (
    <div className="Resp_nav">
      <ul className="Res_links">
        <li className="Res_link" onClick={() => removeResMenu()}>
          
          Home
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
          About Us
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
          
          Services
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
          
          Our Work
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
          
          Pricing
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
          
         Contact
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
          
          Policy
        </li>
        <li className="Res_link">
              <FaUserCircle
                style={{ marginRight: "8px", fontSize: "1.4rem" }}
              />
              Login
            </li>
      </ul>
    </div>
  );
};

export default ResNav;
