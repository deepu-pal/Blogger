import React from "react";

import { Col } from "react-bootstrap";
import blockchain from '../../../img/blockchain.jpg';
import { FeaturedBlogPost } from "../../Utils/Blog";

const BlockchainingHeading = () => {
    return (
      <FeaturedBlogPost>
         
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h1 className="display-4 fst-italic fw-bold text-light">
          Blockchain Technology: Beyond Cryptocurrencies 
          </h1>
          <p className="lead my-3 text-light">
          In the realm of technological innovation, few concepts have captured the world's imagination as profoundly as blockchain technology.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img src={blockchain} className="float-end rounded" alt="Loading img.." />
        </Col>
        
      
      </FeaturedBlogPost>
    );
  };
  
  export default BlockchainingHeading;