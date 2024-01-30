import React from "react";


import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import IPLRevealHeading from "../Components/Content/IPL/IPLRevealHeading";
import IPLReveal from "../Components/Content/IPL/IPLReveal";

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
