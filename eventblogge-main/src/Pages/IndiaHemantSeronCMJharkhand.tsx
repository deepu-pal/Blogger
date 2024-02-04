import React from "react";
import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import JharkhandCMHeading from "../Components/Content/Politics/JharkhandCMHeading";
import JharkhandCM from "../Components/Content/Politics/JharkhandCM";
export const HemantSeron = () => {
  return (
    <React.Fragment>
        <JharkhandCMHeading/>
        <BlogCarousel/>
        <MainBlog>
          <JharkhandCM/>
        </MainBlog>
        
    </React.Fragment>
    
  );
};
