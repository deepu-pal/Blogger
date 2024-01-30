import React from "react";

import { Col} from "react-bootstrap";
import iplteam from '../../img/iplteam.jpg';
import { FeaturedBlogPost } from "../Utils/Blog";

const IPLTeamCaptainValueHeading = () => {
    return (
      <FeaturedBlogPost>
         
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <h1 className="display-4 fst-italic fw-bold text-light">
          List of IPL Teams, Captains and Match Venue.
          </h1>
          <p className="lead my-3 text-light">
          The Indian Premier League (IPL) is back in 2024; promising cricket fans are waiting to watch this T20 cricket.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <img src={iplteam} className="float-end rounded" alt="Loading img.." />
        </Col>
        
      
      </FeaturedBlogPost>
    );
  };
  
  export default IPLTeamCaptainValueHeading;