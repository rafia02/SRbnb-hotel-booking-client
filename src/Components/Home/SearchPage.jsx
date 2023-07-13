import React, { useContext, useEffect, useState } from 'react';
import { context } from '../../Context/AuthContex';
import Loader from '../Shared/Loader';
import SingleHotel from './SingleHotel';

const SearchPage = () => {
    const [data, setData] = useState([])
    const [loading, setLoadign] = useState(true)

    const { rate, guest, country, setCountry } = useContext(context)
    console.log(rate, guest, country)


    useEffect(()=>{
        fetch("http://localhost:5000/hotels")
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoadign(false)
        })
        .catch(e => console.error(e))
    }, [])


        const filterData = data?.filter(d => d.room.guest >= guest && country === d.pleace.country && d.price <= rate)

        console.log(filterData)

        if(loading){
           return <Loader></Loader>
        }






    return (
        <div className='mx-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-14 my-16'>
            {
                filterData.map(htl => <SingleHotel
                    key={htl._id}
                    htl={htl}
                ></SingleHotel>)
            }
        </div>
    );
};

export default SearchPage;