import React from 'react';
import GoogleMap from '../../Shared/GoogleMap';
import Catagories from '../Catagories';
import Hotels from '../Hotels';
import SearchBox from '../SearchBox';
import vdo from "../../../images/3466927036.mp4"



const Home = () => {
    const center = { lat: 37.7749, lng: -122.4194 }; // Set the initial map center coordinates
    const zoom = 10; // Set the initial map zoom level


    return (
        <div className=''>
    
                <video className='relative mb-5 ' autoPlay loop muted src={vdo}></video>


            <div className='absolute top-24 md:top-1/2 ml-5 md:ml-20'>
                <div className='hidden md:block text-white text-center mb-10 text-4xl font-bold font-serif italic'>
                    <h1>Explore Deffierent Country</h1>
                    <h1  className='my-4'> &</h1>
                    <h1> Enjoy Your holiday</h1>
                </div>
                <SearchBox></SearchBox>
            </div>
            <Catagories></Catagories>
            <Hotels></Hotels>



        </div>
    );
};

export default Home;