import React from "react";


import BlogCarousel from "../Components/Nextpost";
import WorldHeading from "../Components/Content/WorldHeading";
import { MainBlog } from "../Components/Utils/MainBlog";
import WorldArticle from "../Components/Content/World";
import WorldAdditionalArticle from "../Components/Content/WorldAdditionalArticle";



export const WorldPage = () => {
  return (
    <React.Fragment>
        <WorldHeading/>
        <BlogCarousel/>
        <MainBlog>
        <WorldArticle />
        <WorldAdditionalArticle />
        </MainBlog>
        
    </React.Fragment>
    
  );
};
