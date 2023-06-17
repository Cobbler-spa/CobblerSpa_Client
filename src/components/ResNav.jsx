import React from "react";
import "../styles/Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { setLogout } from "../redux/features/authSlice";
import { useDispatch } from "react-redux";
const ResNav = ({ removeResMenu, showMenu }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch()

  const handleLogout= ()=>{
    dispatch(setLogout())
    removeResMenu()
  }
  return (
    <div className={`Resp_nav ${showMenu ? "show" : ""}`}>
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
              {
                user ? (<>
                  <FaUserCircle
                    style={{ marginRight: "8px", fontSize: "1.4rem" }}
                  />
                  <span>{user?.name}</span>
                  <p className="mt-4" onClick={handleLogout}>Log Out</p>
                  </>
                ):(<>
                <FaUserCircle
                  style={{ marginRight: "8px", fontSize: "1.4rem" }}
                />
                <span>Login</span>
                </>)
              }
            </li>
      </ul>
    </div>
  );
};

export default ResNav;
