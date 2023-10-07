import React from 'react';
import GoogleMap from '../../Shared/GoogleMap';
import Catagories from '../Catagories';
import Hotels from '../Hotels';

import vdo from "../../../images/3466927036.mp4"
import Inspiration from '../Inspiration';
import Subscribe from '../Subscribe';
import Offers from '../Offers';
import Extra from '../Extra';
import Facilities from '../Facilities';
import Gallery from '../Gallery';

import Reviews from '../Reviews';
import FilterModal from '../FilterModal';




const Home = () => {
    const center = { lat: 37.7749, lng: -122.4194 }; // Set the initial map center coordinates
    const zoom = 10; // Set the initial map zoom level


    return (
        <div className=' pt-5 md:pt-7'>


            <FilterModal></FilterModal>
            <Catagories></Catagories>
            <Hotels></Hotels>
            <Inspiration></Inspiration>

            <Gallery></Gallery>
            <Facilities></Facilities>
            {/* <Offers></Offers> */}
            <Extra></Extra>
            <Reviews></Reviews>

            <div className='relative mt-20'>
                <video autoPlay loop muted src={vdo}></video>

                <div className='text-center  flex flex-col justify-center items-center'>
                    <div className='absolute text-white top-1/3 text-center text-sm md:text-5xl font-bold font-serif italic'>
                        <h1>Explore Deffierent Country</h1>
                        <h1 className='my-1 md:my-4'> &</h1>
                        <h1> Enjoy Your holiday</h1>
                    </div>

                </div>
            </div>

            <Subscribe></Subscribe>




        </div>
    );
};

export default Home;