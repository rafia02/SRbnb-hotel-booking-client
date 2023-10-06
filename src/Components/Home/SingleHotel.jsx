import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHeartFill } from "react-icons/bs";
import "../../App.css"


const SingleHotel = ({ htl }) => {
    const { img1, _id, price, pleace, distance, reviews, catagory } = htl

    return (
        <Link to={`/hotel/${_id}`}>
            <div>
                <div className='relative'>
                    <div className='h-56 w-full hover:scale-105 duration-700'>
                        <img className='h-full w-full rounded-lg' src={img1} alt="" />
                    </div>

                    {/* <p className='  text-black love absolute top-4 right-4 text-2xl [-webkit-text-stroke: 2px white;] '>❤</p> */}

                    <BsFillHeartFill className=' text-slate-500 stroke-1  stroke-white absolute top-4 right-4 text-xl '></BsFillHeartFill>

                </div>

                <div>
                    <div className='flex items-center justify-between mt-3'>
                        <div className='flex '>
                            <h4 className="font-bold">{pleace.distric},</h4>
                            <h4 className="font-bold">{pleace.country}</h4>
                        </div>
                        <div className='flex text-lg'>
                            <p className=' font-bold mr-1'>★ </p>
                            <span className=''>{reviews}</span>
                        </div>
                    </div>
                    <p className='my-1'>{distance}</p>
                    <p className='text-sm'>{catagory}</p>
                    <p><span className='font-bold'>${price}</span> night</p>
                </div>
            </div>

        </Link>
    );
};

export default SingleHotel;