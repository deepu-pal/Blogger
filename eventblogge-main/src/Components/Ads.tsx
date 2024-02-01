import React, { useState } from 'react';
import './ScrollMenu.css'; // Adjust the path based on your project structure
import Ad from '../Ads/SideAds';
import ads1 from '../img/sddefault.jpg';
import ads2 from '../img/Ads2.jpg';

const Ads = () => {
  
  return (
    <div className="col-md-4">
                    <div className="position-sticky" style={{ top: '2rem' }}>
                        <div className="p-4 mb-3 bg-body-tertiary rounded">
                            <h4 className="fst-italic">Welcome to Event Blogger!</h4>
                            <p className="mb-0">

Event Blogger is your hub for insightful content spanning current political news in India, science, technology, world affairs, and sports. Our approach is distinctive and concise. Join our community of readers seeking to stay informed, engaged, and inspired. Discover articles tailored to your interests in politics, science, technology, world news, or sports.</p>
                        </div>

                        <div>

                            <Ad imageUrl={ads1} link={'https://www.google.com/'} />

                        </div>
                        <div className='mt-2'>

                            <Ad imageUrl={ads2} link={'https://www.facebook.com/'} />

                        </div>
                    </div>
                </div>
    
  );
}

export default Ads;



