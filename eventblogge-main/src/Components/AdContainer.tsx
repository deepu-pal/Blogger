import React from 'react';
import Box from '@mui/material/Box';
import LeftSideAd from '../Ads/CenterAds';
import ads from '../img/mcdonalds-banner-example.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/system';
const AdContainer: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="container">
    <Box  
       height={isSmallScreen ? 200 : 300}  
    >
      {/* Your content goes here */}
      <LeftSideAd imageUrl={ads} link={'https://www.google.com/'} />
      
    </Box>
    <br/>
    </div>
  );
};

export default AdContainer;
