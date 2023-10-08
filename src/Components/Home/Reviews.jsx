import React, { useEffect } from 'react';
import ScrollCarousel from 'scroll-carousel';
import 'scroll-carousel/dist/scroll.carousel.min.css';
import { datas } from './Datas';
import { BsStarFill } from "react-icons/bs";


const Reviews = () => {

    useEffect(() => {
        new ScrollCarousel(".my-carousel", {
            autoplay: true
        });

    }, [])


    return (
        <div className='mt-28'>
            <h1 className="text-3xl md:text-4xl  my-16 text-center textStyle font-thin"> Top Client Reviews</h1>
            <div class="my-carousel  relative">
                {
                    datas.map(d => <div className=' bg-gray-100 rounded mr-16 h-72 w-80 border  '>
                        <div className='w-20  ml-28  mt-2 h-20'>
                            <img className='text-center h-full w-full rounded-full' src={d.img} alt="" />
                        </div>

                        <div className='px-5'>
                            <div className='flex my-2 items-center justify-between'>
                                <h2 className=" textStyle text-[18px]">{d.name}</h2>
                                <div className='flex text-xs text-amber-500'>
                                    <BsStarFill></BsStarFill>
                                    <BsStarFill></BsStarFill>
                                    <BsStarFill></BsStarFill>
                                    <BsStarFill></BsStarFill>
                                    <BsStarFill></BsStarFill>
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <h1 className='text-4xl mt-2 font-bold'>**</h1>
                                <hr className='border-2 w-1/2 border-black' />
                            </div>
                            <p className='italic text-[13px]'>{d.review}</p>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;