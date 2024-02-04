import React from "react";
import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import IPLTeamCaptainValueHeading from "../Components/Content/IPL/IPLTeamCaptainAndValueHeading";
import IPLTeamsCaptainVenue from "../Components/Content/IPL/IPLTeamsCaptainAndVenue";

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
