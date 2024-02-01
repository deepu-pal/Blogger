import React from "react";

import { Col } from "react-bootstrap";
import ScienceAurora from '../../../img/ScienceAuroraHeading.jpg';
import { FeaturedBlogPost } from "../../Utils/Blog";

const ScienceAuroraHeading = () => {
    return (
      <FeaturedBlogPost>
         
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h1 className="display-4 fst-italic fw-bold text-light">
          The Mesmerizing Aurora Phenomenon 
          </h1>
          <p className="lead my-3 text-light">
          The night sky has long been a canvas for celestial wonders, but perhaps none are as enchanting and awe-inspiring as the aurora phenomenon.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img src={ScienceAurora} className="float-end rounded" alt="Loading img.." />
        </Col>
        
      
      </FeaturedBlogPost>
    );
  };
  
  export default ScienceAuroraHeading;