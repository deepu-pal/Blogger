import React from "react";

import { Col } from "react-bootstrap";
import Bihar_CM_Nitish_Kumar from '../../../img/Bihar_CM_Nitish_Kumar.jpg';
import { FeaturedBlogPost } from "../../Utils/Blog";

const BiharCMHeading = () => {
  return (
    <FeaturedBlogPost>

      <Col xs={12} md={6} className="mb-3 mb-md-0">
        <h2 className="display-4 fst-italic fw-bold text-light">
        Bihar chief minister, submitted his 'resignation'
        </h2>
        <p className="lead my-3 text-light">
        Bihar chief minister Nitish Kumar, on January 28, submitted his resignation after days of intense speculation about his Janata Dal (United) once again joining hands with the BJP.
        </p>
      </Col>
      <Col xs={12} md={6}>
        <img src={Bihar_CM_Nitish_Kumar} className="float-end rounded" alt="Loading img.." />
      </Col>


    </FeaturedBlogPost>
  );
};

export default BiharCMHeading;