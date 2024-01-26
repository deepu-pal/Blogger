import React, { ReactNode } from 'react';
import Ads from '../Ads';

type Props = {
    children: ReactNode;
  };
export const MainBlog = (props: Props) => {
    const { children } = props;
    return (
        <div className="container">
            <div className="row g-5">
                <div className="col-md-8">
                    {children} 
                    

                    
                </div>
                 
                <Ads />
            </div>
        </div>
    );
};



