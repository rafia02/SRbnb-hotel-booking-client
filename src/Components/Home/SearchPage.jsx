import React, { useContext, useEffect, useState } from 'react';
import Loader from '../Shared/Loader';
import SingleHotel from './SingleHotel';
import { context } from '../../Context/AuthContex';
import { useLoaderData } from 'react-router-dom';

const SearchPage = () => {
    const data = useLoaderData()
    const { total, country } = useContext(context)

    console.log(total, country)

    if (!total && !country) {
        <Loader></Loader>
    }


    const filterData = data?.filter(d => d.room.guest >= total && country === d.pleace.country)




    return (

        <div className=''>

            {
                filterData.length ?
                    <div className='mx-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-14 my-16'>
                        {
                            filterData.map(htl => <SingleHotel
                                key={htl._id}
                                htl={htl}
                            ></SingleHotel>)
                        }
                    </div>
                    :
                    <div className='h-40 md:h-60'>
                        <h4 className='text-2xl  md:text-3xl text-center mt-16 md:mt-40 font-bold '>No Found Any Hotel In This Place</h4>
                    </div>
            }

        </div>
    );
};

export default SearchPage;