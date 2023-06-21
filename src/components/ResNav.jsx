import React from "react";
import "../styles/Navbar.css";
import { FaUserCircle } from "react-icons/fa";
import { setLogout } from "../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'

const ResNav = ({ removeResMenu, showMenu }) => {
  // const user = JSON.parse(localStorage.getItem("user"));
  const user = useSelector((state)=>({...state.auth}))

  const dispatch = useDispatch()

  const handleLogout= ()=>{
    dispatch(setLogout())
    removeResMenu()
  }
  return (
    <div className={`Resp_nav ${showMenu ? "show" : ""}`}>
      <ul className="Res_links">
        <li className="Res_link" onClick={() => removeResMenu()}>
          
          <Link className="Res_link" to="/">Home</Link>
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
        <Link className="Res_link" to="/about">About Us</Link>
          
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
        <Link className="Res_link" to="/services">Services</Link>
          
          
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
        <Link className="Res_link" to="/work">Our Work</Link>
          
          
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
        <Link className="Res_link" to="/pricing">Pricing</Link>
          
          
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
        <Link className="Res_link" to="/contact">Contact</Link>
          
         
        </li>
        <li className="Res_link" onClick={() => removeResMenu()}>
        <Link className="Res_link" to="/policy">Policy</Link>
          
          
        </li>
        {(user && user?.role==='admin') && (
          <>
          <li>
        <Link className="Res_link" to="/addblog">Add Blog</Link>
          </li>
          <li>
        <Link className="Res_link" to="/addadmin">Add Admin</Link>
          </li>
          </>
        ) }
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
