import React from 'react';
import NewsletterForm from './Newsletter';
import { FaInstagram, FaTwitter, FaFacebook,FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="Container bg-dark text-light py-5 mt-2 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center mb-4">
            <h2>Connect with Us:</h2>
            <div className="social-media-icons mt-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaInstagram size={30} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaTwitter size={30} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaFacebook size={30} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='mx-2'>
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <h3 className='text-light'>Quick Links:</h3>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#reviews">Sports</a></li>
              <li><a href="#interviews">Politics</a></li>
              <li><a href="#guides">Views</a></li>
            </ul>
          </div>

          <div className="col-md-4">
           <NewsletterForm/>
          </div>


        </div>

        <div className="row mt-4">
          <div className="col-md-12 text-center text-primary">
            <p className="text-light">Copyright © 2024 EVENTBLOGGER. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
