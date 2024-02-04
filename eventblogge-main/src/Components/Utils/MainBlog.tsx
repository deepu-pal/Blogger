import React, { ReactNode } from 'react';
import Ads from '../Ads';
import AdContainer from '../AdContainer';

type Props = {
    children: ReactNode;
  };
export const MainBlog = (props: Props) => {
    const { children } = props;
    return (
        
        <>
            <AdContainer />
        <div className="container">
            <div className="row g-5">
                <div className="col-md-8">
                    {children} 
                    

                    
                </div>
                 
                <Ads />
            </div>
        </div>
        </>
        
        
    );
};



