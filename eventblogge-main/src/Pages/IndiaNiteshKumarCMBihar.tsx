import React from "react";
import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";

import BiharCMHeading from "../Components/Content/Politics/BiharCMHeading";
import BiharCM from "../Components/Content/Politics/BiharCM";
export const NiteshKumar = () => {
  return (
    <React.Fragment>
        <BiharCMHeading/>
        <BlogCarousel/>
        <MainBlog>
          <BiharCM/>
        </MainBlog>
        
    </React.Fragment>
    
  );
};
