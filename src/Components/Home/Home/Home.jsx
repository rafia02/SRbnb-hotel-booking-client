import React from 'react';
import GoogleMap from '../../Shared/GoogleMap';
import Catagories from '../Catagories';
import Hotels from '../Hotels';



const Home = () => {
    const center = { lat: 37.7749, lng: -122.4194 }; // Set the initial map center coordinates
    const zoom = 10; // Set the initial map zoom level


    return (
        <div className='mx-6 mt-10'>
            <Catagories></Catagories>
            <Hotels></Hotels>
            


        </div>
    );
};

export default Home;