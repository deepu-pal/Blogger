import React, { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ramImage from '../img/ram3.jpg';

type Props = {
  children: ReactNode;
};
export const AdditionalArtical = (props: Props) => {
  const { children } = props;
  return (
    <article className="blog-post">
      
        {children} 
      
    </article>
  );
};