import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { context } from '../../Context/AuthContex';
import SingleHotel from './SingleHotel';

const Hotels = () => {
const {hotel} = useContext(context)


    

    return (
        <div className='mx-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-14 my-16'>
            {
                hotel?.map(htl =><SingleHotel
                key={htl._id}
                htl={htl}
                ></SingleHotel>)
            }
        </div>
    );
};

export default Hotels;