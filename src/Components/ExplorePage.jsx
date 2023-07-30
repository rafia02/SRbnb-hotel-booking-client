import React from 'react';
import Lottie from 'lottie-react'
import coming from "../images/comingsoon.json"

const ExplorePage = () => {
    return (
        <div className='mt-10'>
            <div className='w-1/2 mx-auto'>
                <Lottie animationData={coming}></Lottie>
            </div>
        </div>
    );
};

export default ExplorePage;