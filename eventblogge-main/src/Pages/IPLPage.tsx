import React from "react";
import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import IPLTeamsCaptainVenue from "../Components/Content/IPLTeamsCaptainAndVenue";
import IPLTeamCaptainValueHeading from "../Components/Content/IPLTeamCaptainAndValueHeading";

export const IPLPage = () => {
  return (
    <React.Fragment>
        <IPLTeamCaptainValueHeading/>
        <BlogCarousel/>
        <MainBlog>
          <IPLTeamsCaptainVenue/>
        </MainBlog>
        
    </React.Fragment>
    
  );
};
