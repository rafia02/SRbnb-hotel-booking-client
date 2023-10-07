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
        <div className='pt-7'>

            {/* <div>
                <video className='relative mb-10 ' autoPlay loop muted src={vdo}></video>


                <div className='md:absolute  md:top-1/2 ml-5 md:ml-20'>
                    <div className='hidden md:block text-white text-center mb-10 text-4xl font-bold font-serif italic'>
                        <h1>Explore Deffierent Country</h1>
                        <h1 className='my-4'> &</h1>
                        <h1> Enjoy Your holiday</h1>
                    </div>
                 
                </div>
            </div> */}
            <FilterModal></FilterModal>
            <Catagories></Catagories>
            <Hotels></Hotels>
            <Inspiration></Inspiration>

            <Gallery></Gallery>
            <Facilities></Facilities>
            {/* <Offers></Offers> */}
            <Extra></Extra>
            <Reviews></Reviews>
            <Subscribe></Subscribe>





        </div>
    );
};

export default Home;