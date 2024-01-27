import React, { useState } from 'react';
import './ScrollMenu.css'; // Adjust the path based on your project structure
import { navItems } from './Const/indext';
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const ScrollMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    event.preventDefault();
    setActiveIndex((prevActiveIndex) => (prevActiveIndex === index ? null : index));
  };
  return (
    <div className=" container nav-scroller px-1 mb-3 border-top">
        <nav className="nav nav-underline justify-content-between navbar-expand scrollmenu">
        {navItems.map((item, index) => (
            
            <a
          key={index}
          onClick={(e) => handleLinkClick(e, index)}
          className={`nav-item nav-link link-body-emphasis${activeIndex === index ? ' active' : ''}`}
          href={item.link}
        >
          {item.title}
        </a>
            // <a className={({isActive}) => `nav-item nav-link link-body-emphasis ${isActive ? "text-orange-600 ":"text-gray-700"}` href={item.link}>{item.title}</a>
          ))}
          
          
        </nav>
      </div>
  );
}

export default ScrollMenu;



