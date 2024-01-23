// Header.jsx

import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import ScrollMenu from './ScrollMenu';
const Header = () => {
  return (
    <div className="container sticky-top bg-light">
      <header className="bor der-bottom lh-1 py-3 home ">
        <div className="row flex-nowrap justify-content-between align-items-center">

          <div className="col-12 text-center">
            <a className="blog-header-logo text-body-emphasis text-decoration-none h2" href="#" style={{ color: 'white' }}>EVENTBLOGGER</a>
          </div>

        </div>
      </header>
      <ScrollMenu/>   
    </div>
  );
};

export default Header;
