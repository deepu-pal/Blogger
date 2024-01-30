import React from "react";

import { Col } from "react-bootstrap";
import Sciencegene from '../../../img/Sciencegene1.jpg';
import { FeaturedBlogPost } from "../../Utils/Blog";

const CRISPR_Cas9Heading = () => {
    return (
      <FeaturedBlogPost>
         
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h1 className="display-4 fst-italic fw-bold text-light">
          CRISPR-Cas9 gene editing technology 
          </h1>
          <p className="lead my-3 text-light">
          Unlocking the Code of Life: CRISPR-Cas9 and the Genetic Revolution
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img src={Sciencegene} className="float-end rounded" alt="Loading img.." />
        </Col>
        
      
      </FeaturedBlogPost>
    );
  };
  
  export default CRISPR_Cas9Heading;