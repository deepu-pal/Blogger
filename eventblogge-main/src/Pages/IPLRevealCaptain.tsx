import React from "react";


import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import IPLRevealHeading from "../Components/Content/IPLRevealHeading";
import IPLReveal from "../Components/Content/IPLReveal";

export const Reveal = () => {
  return (
    <React.Fragment>
        <IPLRevealHeading/>
        <BlogCarousel/>
        <MainBlog>
        <IPLReveal />
        </MainBlog>
        
    </React.Fragment>
    
  );
};
