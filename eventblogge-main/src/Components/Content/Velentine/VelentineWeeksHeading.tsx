import React from "react";
import { Col } from "react-bootstrap";
import { FeaturedBlogPost } from "../../Utils/Blog";
import valentines_weekH from '../../../img/Velentines_weekHeading.jpg'

const VelentineWeekHeading =()=>{
    return(
        <FeaturedBlogPost>

      <Col xs={12} md={6} className="mb-3 mb-md-0">
        <h1 className="display-4 fst-italic fw-bold text-light">
        Love Blossoms: Embracing the Joy of Valentine's Week 2024
        </h1>
        <p className="lead my-3 text-light">
        Velentine's is the perfect time to express and revel in the beauty of relationships. 
        </p>
      </Col>
      <Col xs={12} md={6}>
        <img src={valentines_weekH} className="float-end rounded" alt="Loading img.." />
      </Col>


    </FeaturedBlogPost>
    );
}
export  default VelentineWeekHeading; 