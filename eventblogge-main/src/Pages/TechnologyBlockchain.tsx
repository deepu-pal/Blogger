import React from "react";
import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import Blockchain from "../Components/Content/Technology/Blockckaining";
import BlockchainingHeading from "../Components/Content/Technology/BlockchainingHeading";
export const Blockchains = () => {
  return (
    <React.Fragment>
        <BlockchainingHeading/>
        <BlogCarousel/>
        <MainBlog>
          <Blockchain/>
        </MainBlog>
        
    </React.Fragment>
    
  );
};
