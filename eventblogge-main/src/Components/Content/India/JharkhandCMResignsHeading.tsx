import React from "react";
import { Col } from "react-bootstrap";
import { FeaturedBlogPost } from "../../Utils/Blog";
import hemant from '../../../img/hemant.jpg'

const JharkhandCMResignHeading =()=>{
    return(
        <FeaturedBlogPost>

      <Col xs={12} md={6} className="mb-3 mb-md-0">
        <h1 className="display-4 fst-italic fw-bold text-light">
          Jharkhand CM Hemant Soren 'Resigns'
        </h1>
        <p className="lead my-3 text-light">
        Jharkhand CM Hemant Soren resigns and he arrested by ED in land 'scam' case. 
        </p>
      </Col>
      <Col xs={12} md={6}>
        <img src={hemant} className="float-end rounded" alt="Loading img.." />
      </Col>


    </FeaturedBlogPost>
    );
}
export  default JharkhandCMResignHeading; 