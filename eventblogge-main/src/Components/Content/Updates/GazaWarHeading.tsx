import React from "react";

import { Col } from "react-bootstrap";
import Gaza from '../../../img/GazaHeading.jpg';
import { FeaturedBlogPost } from "../../Utils/Blog";

const GazaWarHeading = () => {
    return (
      <FeaturedBlogPost>
         
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h1 className="display-4 fst-italic fw-bold text-light">
            Live updates: What’s happening in the Israel-Hamas war
          </h1>
          <p className="lead my-3 text-light">
          Hundreds of foreign nationals and dozens of seriously injured Palestinians have been 
          allowed to leave Gaza
            
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img src={Gaza} className="float-end rounded" alt="Loading img.." />
        </Col>
        
      
      </FeaturedBlogPost>
    );
  };
  
  export default GazaWarHeading;