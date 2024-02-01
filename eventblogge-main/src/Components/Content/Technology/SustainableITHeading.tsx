import React from "react";

import { Col } from "react-bootstrap";
import SustanableITHeading from '../../../img/SustanableITHeading.jpg';
import { FeaturedBlogPost } from "../../Utils/Blog";

const SustainabileITHeading = () => {
    return (
      <FeaturedBlogPost>
         
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h1 className="display-4 fst-italic fw-bold text-light">
          Reducing the Environmental Footprint 
          </h1>
          <p className="lead my-3 text-light">
          In an era where technological advancements are transforming the way we live and work, the environmental impact of Information Technology (IT) has come under scrutiny.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img src={SustanableITHeading} className="float-end rounded" alt="Loading img.." />
        </Col>
        
      
      </FeaturedBlogPost>
    );
  };
  
  export default SustainabileITHeading;