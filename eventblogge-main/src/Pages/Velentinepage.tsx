import React from "react";


import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import VelentineWeek from "../Components/Content/Velentine/VelentineWeeks";
import VelentineWeekHeading from "../Components/Content/Velentine/VelentineWeeksHeading";
export const Event = () => {
  return (
    <React.Fragment>
        <VelentineWeekHeading/>
        <BlogCarousel/>
        <MainBlog>
        <VelentineWeek />
        </MainBlog>
        
    </React.Fragment>
    
  );
};
