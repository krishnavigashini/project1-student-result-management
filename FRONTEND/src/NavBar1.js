import { Link } from 'react-router-dom';
import './navbar.css';

import { SidebarData } from './SideBarData1';
import React, { useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
 import "./sidebar.css";
 
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <IconContext.Provider value={{ color: "black", size: "25px" }}>

        <div className="navbar1">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            
          </ul>
          
        </nav>

      </IconContext.Provider>

      <div>

        <nav className="navbar">
          <div className="logo-container">



          </div>
          <ul className="navbar-nav">
           
            <li className="nav-item">
              <Link to="/UserHome" className="nav-link">

                HOME</Link>
            </li>
            
            
            <li className="nav-item">
              <Link to="/AdminContact" className="nav-link">

                CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                LOGOUT</Link>

            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;



