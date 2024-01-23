import React, { useState } from 'react';
import './ScrollMenu.css'; // Adjust the path based on your project structure
import { navItems } from './Const/indext';
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
const ScrollMenu = () => {
    const [activeLink, setActiveLink] = useState<string | null>(null);
    const handleLinkClick = (link: string) => {
        
        setActiveLink(link);
      };
  return (
    <div className=" container nav-scroller px-1 mb-3 border-top">
        <nav className="nav nav-underline justify-content-between navbar-expand scrollmenu">
        {navItems.map((item, index) => (
            
            <a className="nav-item nav-link link-body-emphasis" href={item.link}>{item.title}</a>
          ))}
          
          
        </nav>
      </div>
  );
}

export default ScrollMenu;



