import React from "react";


import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import GazaWarHeading from "../Components/Content/Updates/GazaWarHeading";
import GazaWar from "../Components/Content/Updates/GazaWar";




export const GazaPage = () => {
  return (
    <React.Fragment>
        <GazaWarHeading/>
        <BlogCarousel/>
        <MainBlog>
        <GazaWar />
        
        </MainBlog>
        
    </React.Fragment>
    
  );
};
