import React from "react";

import { Col } from "react-bootstrap";
import iplteam from '../../../img/IPLMainblogcaptainimg.jpg';
import { FeaturedBlogPost } from "../../Utils/Blog";

const IPLRevealHeading = () => {
    return (
      <FeaturedBlogPost>
         
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h1 className="display-4 fst-italic fw-bold text-light">
          IPL 2024 Information
          </h1>
          <p className="lead my-3 text-light">
          The wait is finally over! IPL 2024 has been officially announced, and cricket enthusiasts around the globe are gearing up for another season of thrilling matches, spectacular performances, and unforgettable moments. The 2024 edition promises to be more
           electrifying than ever before, with new teams, talented players, and intense rivalries.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img src={iplteam} className="float-end rounded" alt="Loading img.." />
        </Col>
        
      
      </FeaturedBlogPost>
    );
  };
  
  export default IPLRevealHeading;