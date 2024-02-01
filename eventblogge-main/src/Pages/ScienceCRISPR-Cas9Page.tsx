import React from "react";


import BlogCarousel from "../Components/Nextpost";
import { MainBlog } from "../Components/Utils/MainBlog";
import CRISPR_Cas9 from "../Components/Content/Science/ScienceCRISPR-Cas9";
import CRISPR_Cas9Heading from "../Components/Content/Science/ScienceCRISPR-Cas9Heading";
export const CRISPR_Case9 = () => {
  return (
    <React.Fragment>
        <CRISPR_Cas9Heading/>
        <BlogCarousel/>
        <MainBlog>
        <CRISPR_Cas9 />
        </MainBlog>
        
    </React.Fragment>
    
  );
};
