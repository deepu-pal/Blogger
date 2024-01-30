import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import football from '../../../img/football.jpg';
import { FeaturedBlogPost } from "../../Utils/Blog";

const FootballinfoDataHeading = () => {
    return (
      <FeaturedBlogPost>
         
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h1 className="display-4 fst-italic fw-bold text-light">
          A Dive into the World of Football
          </h1>
          <p className="lead my-3 text-light">
          Welcome to the thrilling world of football, where passion, skill, and unbridled excitement collide on the green pitch.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img src={football} className="float-end rounded" alt="Loading img.." />
        </Col>
        
      
      </FeaturedBlogPost>
    );
  };
  
  export default FootballinfoDataHeading;