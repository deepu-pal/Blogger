// FeaturedBlogPost.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ramImage from '../img/ram3.jpg';


const FeaturedBlogPost = () => {
  return (
    <Container className="bg-secondary text-light rounded">
      <Row className="p-md-5 mb-4 mx-6 rounded text-body-emphasis">
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h1 className="display-4 fst-italic fw-bold text-light">
            Ram Mandir Ayodhya – A dream comes true
          </h1>
          <p className="lead my-3 text-light">
            अयोध्या धाम में श्री राम लला की प्राण-प्रतिष्ठा का अलौकिक क्षण हर किसी को भाव-विभोर करने वाला है।
            इस दिव्य कार्यक्रम का हिस्सा बनना मेरा परम सौभाग्य है। जय सियाराम!
          </p>
          {/* <p className="lead mb-0">
            <a href="#" className="text-body-emphasis fw-bold text-white">
              Continue reading...
            </a>
          </p> */}
        </Col>
        <Col xs={12} md={6}>
          <img src={ramImage} className="float-end rounded" alt="Loading img.." />
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturedBlogPost;
