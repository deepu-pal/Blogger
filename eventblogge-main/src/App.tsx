
import { Route, Routes, useLocation } from "react-router-dom";
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useEffect } from "react";
import { WorldPage } from './Pages/WorldPage';
import { IPLPage } from './Pages/IPLPage';
import { Sports } from './Pages/Sports';
import { CRISPR_Case9 } from './Pages/ScienceCRISPR-Cas9Page';
import { Reveal } from './Pages/IPLRevealCaptain';
import { Aurora } from "./Pages/ScienceAuroraPage";
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
          <Route path="*" index element={<WorldPage />} />
            <Route path="/world" index element={<WorldPage />} />
            <Route path="/ipl" index element={<IPLPage />} />
            <Route path="/sports" index element={<Sports />} />
            <Route path="/iplcaptain" index element={<Reveal />} />
            <Route path="/science" index element={<CRISPR_Case9 />} />
            <Route path="/aurora" index element={<Aurora />} />
          </Routes>
        </div>
      <Footer/>
      
     </>
  )
}

export default App;