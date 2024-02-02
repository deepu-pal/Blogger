import React from "react";

import { Col } from "react-bootstrap";
import Drugheading from '../../../img/DrugHeading.jpg';
import { FeaturedBlogPost } from "../../Utils/Blog";

const WorldHeading = () => {
    return (
      <FeaturedBlogPost>
         
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h1 className="display-4 fst-italic fw-bold text-light">
            Canada police seize over 400kg of drugs at border
          </h1>
          <p className="lead my-3 text-light">
            Canadian law enforcement has arrested an Indo-Canadian trucker for attempting 
            to allegedly smuggle drugs worth over CA$50 million into the country.
            
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img src={Drugheading} className="float-end rounded" alt="Loading img.." />
        </Col>
        
      
      </FeaturedBlogPost>
    );
  };
  
  export default WorldHeading;