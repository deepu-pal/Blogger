import React from "react";
import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import ScienceAurora from "../Components/Content/Science/ScienceAurora";
import ScienceAuroraHeading from "../Components/Content/Science/ScienceAuroraHeading";

export const Aurora = () => {
  return (
    <React.Fragment>
        <ScienceAuroraHeading/>
        <BlogCarousel/>
        <MainBlog>
        <ScienceAurora />
        </MainBlog>
        
    </React.Fragment>
    
  );
};
