import { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import React from 'react';
import Header from './Components/Header';


import BlogCarousel from './Components/Nextpost';
import Footer from './Components/Footer';
import { useEffect } from "react";
import { WorldPage } from './Pages/WorldPage';
import { IPLPage } from './Pages/IPLPage';
import { Sports } from './Pages/Sports';
import { Reveal } from './Pages/IPLRevealCaptain';
function App() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);  
  return (
    <>
      
      
      <Header/>
      <div key={location.pathname}>
          <Routes key={location.pathname} location={location}>
            <Route path="/*" index element={<WorldPage />} />
            <Route path="/ipl" index element={<IPLPage />} />
            <Route path="/sport" index element={<Sports />} />
            <Route path="/iplcaptain" index element={<Reveal />} />
          </Routes>
        </div>
      <Footer/>
      
     </>
  )
}

export default App;