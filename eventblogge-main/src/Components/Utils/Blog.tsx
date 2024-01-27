// FeaturedBlogPost.jsx

import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ramImage from '../img/ram3.jpg';

type Props = {
  children: ReactNode;
};
export const FeaturedBlogPost = (props: Props) => {
  const { children } = props;
  return (
    <Container className="bg-secondary text-light rounded">
      <Row className="p-md-5 mb-4 mx-6 rounded text-body-emphasis">
        {children} 
      </Row>
    </Container>
  );
};


