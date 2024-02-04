import React from "react";


import BlogCarousel from "../Components/Nextpost";
import WorldHeading from "../Components/Content/World/WorldHeading";
import { MainBlog } from "../Components/Utils/MainBlog";
import WorldArticle from "../Components/Content/World/World";




export const WorldPage = () => {
  return (
    <React.Fragment>
        <WorldHeading/>
        <BlogCarousel/>
        <MainBlog>
        <WorldArticle />
        {/* <WorldAdditionalArticle /> */}
        </MainBlog>
        
    </React.Fragment>
    
  );
};
