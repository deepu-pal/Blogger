import React from "react";
import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import SustainabileIT from "../Components/Content/Technology/SustainableIT";
import SustainabileITHeading from "../Components/Content/Technology/SustainableITHeading";
export const Sustainabile = () => {
  return (
    <React.Fragment>
        <SustainabileITHeading/>
        <BlogCarousel/>
        <MainBlog>
          <SustainabileIT/>
        </MainBlog>
        
    </React.Fragment>
    
  );
};
