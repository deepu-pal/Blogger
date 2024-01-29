import React from "react";


import BlogCarousel from "../Components/Nextpost";
import WorldHeading from "../Components/Content/WorldHeading";
import { MainBlog } from "../Components/Utils/MainBlog";
import WorldArticle from "../Components/Content/World";
import WorldAdditionalArticle from "../Components/Content/WorldAdditionalArticle";
import Reveal from "../Components/Content/IPLReveal";
import Football from "../Components/Content/Footballinfodata";
import IplData2 from "../Components/Content/IPLTeamsCaptainAndVenue";
import IPLRevealHeading from "../Components/Content/IPLRevealHeading";

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
