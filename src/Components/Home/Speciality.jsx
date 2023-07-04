import React from 'react';
import { BsPeople, BsSignNoParking } from "react-icons/bs";
import { LiaBedSolid } from "react-icons/lia";
import { PiHouseLineBold } from "react-icons/pi";
import { MdOutlineBathroom, MdAssuredWorkload } from "react-icons/md";
import { GiBed } from "react-icons/gi";
import { LuCalendarDays } from "react-icons/lu";
import { VscKey } from "react-icons/vsc";


const Speciality = () => {
    return (
        <div className='mt-5 p-5'>
            <div className='flex gap-7 mb-5 items-center'>
                <GiBed className='text-4xl'></GiBed>
                <div>
                    <h6 className='text-lg text-stone-600  font-semibold'>Room in a rental unit</h6>
                    <p>Your own room in a home, plus access to shared spaces.</p>
                </div>
            </div>
            <div className='flex gap-7 mb-5 items-center'>
                <MdAssuredWorkload className='text-3xl'></MdAssuredWorkload>
                <div>
                    <h6 className='text-lg text-stone-600  font-semibold'>Dedicated workspace</h6>
                    <p>A room with wifi that’s well-suited for working.</p>
                </div>
            </div>
            <div className='flex gap-7 mb-5 items-center'>
                <BsSignNoParking className='text-3xl'></BsSignNoParking>
                <div>
                    <h6 className='text-lg text-stone-600  font-semibold'>Park for free</h6>
                    <p>This is one of the few places in the area with free parking.</p>
                </div>
            </div>
            <div className='flex gap-7 mb-5 items-center'>
                <VscKey className='text-3xl'></VscKey>
                <div>
                    <h6 className='text-lg text-stone-600  font-semibold'>Great check-in experience</h6>
                    <p>95% of recent guests gave the check-in process a 5-star rating.</p>
                </div>
            </div>
            <div className='flex gap-7 items-center'>
                <LuCalendarDays className='text-3xl'></LuCalendarDays>
                <div>
                    <h6 className='text-lg text-stone-600  font-semibold'>Free cancellation before 1 day.</h6>
                </div>
            </div>
        </div>
    );
};

export default Speciality;