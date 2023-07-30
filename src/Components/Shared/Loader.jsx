import React from 'react';
import Lottie from "lottie-react";
import spiner from '../../images/loading.json'

const Loader = () => {
    return (
        <div className=''>
            <Lottie animationData={spiner}></Lottie>
        </div>
    );
};

export default Loader;