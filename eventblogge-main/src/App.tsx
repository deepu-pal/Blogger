import { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import React from 'react';
import Header from './Components/Header';
import FeaturedBlogPost from './Components/Blog';
import MainBlog from './Components/MainBlog';
import BlogCarousel from './Components/Nextpost';
import Footer from './Components/Footer';
import { useEffect } from "react";
import { WorldPage } from './Pages/WorldPage';
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
          </Routes>
        </div>
      <Footer/>
      
     </>
  )
}

export default App;