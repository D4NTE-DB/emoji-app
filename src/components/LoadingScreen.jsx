import React from 'react';
import icoMid from "./unnamed.ico"

const LoadingScreen = () => {
    return (
        <div className='load-screen'>
            <img src={icoMid} alt="" />
            <h3>Loading...</h3>
        </div>
    );
};

export default LoadingScreen;