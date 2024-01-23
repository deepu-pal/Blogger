import React from "react";
import MainBlog from "../Components/MainBlog";
import FeaturedBlogPost from "../Components/Blog";
import BlogCarousel from "../Components/Nextpost";



export const WorldPage = () => {
  return (
    <React.Fragment>
        <FeaturedBlogPost/>
        <BlogCarousel/>
        <MainBlog/>
    </React.Fragment>
    
  );
};
