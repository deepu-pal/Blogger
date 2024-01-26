import React from 'react';

interface AdProps {
  imageUrl: string;
  link: string;
  altText?: string;
}

const Ad: React.FC<AdProps> = ({ imageUrl, link, altText = 'Advertisement' }) => {
  return (
    <div className="ad-container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={altText} className="ad-image" />
      </a>
    </div>
  );
};

export default Ad;


