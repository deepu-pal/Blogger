import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import ramImage from '../../img/ram3.jpg';
import { FeaturedBlogPost } from "../Utils/Blog";

const WorldHeading = () => {
    return (
      <FeaturedBlogPost>
         
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h1 className="display-4 fst-italic fw-bold text-light">
            Ram Mandir Ayodhya – A dream comes true
          </h1>
          <p className="lead my-3 text-light">
            अयोध्या धाम में श्री राम लला की प्राण-प्रतिष्ठा का अलौकिक क्षण हर किसी को भाव-विभोर करने वाला है।
            इस दिव्य कार्यक्रम का हिस्सा बनना मेरा परम सौभाग्य है। जय सियाराम!
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img src={ramImage} className="float-end rounded" alt="Loading img.." />
        </Col>
        
      
      </FeaturedBlogPost>
    );
  };
  
  export default WorldHeading;