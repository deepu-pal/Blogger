import React from "react";

import { Col } from "react-bootstrap";
import hemant from '../../../img/hemant.jpg';
import { FeaturedBlogPost } from "../../Utils/Blog";

const JharkhandCMHeading = () => {
  return (
    <FeaturedBlogPost>

      <Col xs={12} md={6} className="mb-3 mb-md-0">
        <h1 className="display-4 fst-italic fw-bold text-light">
          Missing Jharkhand CM 'Hemant Soren'
        </h1>
        <p className="lead my-3 text-light">
          All ruling alliance MLAs in Jharkhand asked to stay in Ranch .
        </p>
      </Col>
      <Col xs={12} md={6}>
        <img src={hemant} className="float-end rounded" alt="Loading img.." />
      </Col>


    </FeaturedBlogPost>
  );
};

export default JharkhandCMHeading;