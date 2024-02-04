import React from 'react';

interface AdProps {
  imageUrl: string;
  link: string;
  altText?: string;
}

const LeftSideAd: React.FC<AdProps> = ({ imageUrl, link, altText = 'Advertisement' }) => {
  return (
      
      <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${imageUrl})`,
        }}
      />
    </a>
    // </div>
  );
};

export default LeftSideAd;
