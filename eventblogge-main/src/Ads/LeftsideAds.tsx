import React from 'react';

interface AdProps {
  imageUrl: string;
  link: string;
  altText?: string;
}

const LeftSideAd: React.FC<AdProps> = ({ imageUrl, link, altText = 'Advertisement' }) => {
  return (
    <div className="col-md-3">
      {/* Adjust the col-md-3 class based on your layout and responsiveness requirements */}
      <div className="ad-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={altText} className="ad-image img-fluid" />
        </a>
      </div>
    </div>
  );
};

export default LeftSideAd;
