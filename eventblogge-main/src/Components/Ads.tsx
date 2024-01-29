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
                            <h4 className="fst-italic">About</h4>
                            <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers,
                                content, or something else entirely. Totally up to you.</p>
                        </div>

                        <div>

                            <Ad imageUrl={ads1} link={'https://www.google.com/'} />

                        </div>
                        <div className='mt-2'>

                            <Ad imageUrl={ads2} link={'https://www.google.com/'} />

                        </div>
                    </div>
                </div>
    
  );
}

export default Ads;



