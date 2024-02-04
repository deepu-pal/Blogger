import React from "react";


import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import Football from "../Components/Content/Sports/Footballinfodata";
import FootballinfoDataHeading from "../Components/Content/Sports/FootballInfoDataHeading";

export const Sports = () => {
  return (
    <React.Fragment>
        <FootballinfoDataHeading/>
        <BlogCarousel/>
        <MainBlog>
        <Football />
        </MainBlog>
        
    </React.Fragment>
    
  );
};
