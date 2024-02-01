import React from "react";


import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import JharkhandCMResign from "../Components/Content/India/JharkhandCMResigns";
import JharkhandCMResignHeading from "../Components/Content/India/JharkhandCMResignsHeading";
export const JHCMResign = () => {
  return (
    <React.Fragment>
        <JharkhandCMResignHeading/>
        <BlogCarousel/>
        <MainBlog>
        <JharkhandCMResign />
        </MainBlog>
        
    </React.Fragment>
    
  );
};
