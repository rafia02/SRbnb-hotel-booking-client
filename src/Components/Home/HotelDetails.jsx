import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsPeople, BsSignNoParking } from "react-icons/bs";
import { LiaBedSolid } from "react-icons/lia";
import { PiHouseLineBold, PiCoatHanger, PiTelevisionSimpleLight } from "react-icons/pi";
import { MdOutlineBathroom, MdAssuredWorkload, MdOutlineWaterDrop, MdSmokeFree } from "react-icons/md";
import { AiOutlineCar, AiOutlineWifi } from "react-icons/ai";
import { TbToolsKitchen2, TbAirConditioning } from "react-icons/tb";
import { LuCalendarDays } from "react-icons/lu";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { GiWashingMachine } from "react-icons/gi";
import { TfiSpray } from "react-icons/tfi";
import Speciality from './Speciality';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const HotelDetails = () => {
    const details = useLoaderData()
    // console.log(details)
    const { title, img1, img2, img3, img4, img5, reviews, room, price, description, pleace, distance } = details

    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);




    const handleCheckInDateChange = (date) => {
        setCheckInDate(date);
    };

    const handleCheckOutDateChange = (date) => {
        setCheckOutDate(date) 

    };


    const handleAdultsChange = (e) => {
        setAdults(parseInt(e.target.value, 10));
    };

    const handleChildrenChange = (e) => {
        setChildren(parseInt(e.target.value, 10));
    };



    const calculateDateDifference = () => {
        if (checkInDate && checkOutDate) {
            const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
            const differenceInDays = differenceInTime / (1000 * 3600 * 24);
            return differenceInDays;
        }
        return null;
    };


    const dif = calculateDateDifference()
    const amount = (Math.floor(price) * dif)
    console.log("a", 5/100)
    const cleaningFee = Math.floor(amount * (5 / 100))
    const srbnbFee = Math.floor(amount * (10 / 100))
    const totalBeforeTax =  amount + cleaningFee + srbnbFee

    
    
    const handleBookingSubmit = (e) => {
        e.preventDefault();

        if (checkInDate && checkOutDate) {
            // Handle the booking submission, e.g., make an API call, perform validation, etc.
            console.log('Check-in Date:', checkInDate);
            console.log('Check-out Date:', checkOutDate);

          
        }
    };




 


    return (
        <div className='mx-6 my-9'>

            <div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <div>
                    <div className='flex mt-3 font-semibold mb-10'>
                        <p className=' font-extrabold mr-1'>★ </p>
                        <span className='mr-5'>{reviews}</span>
                        <span>40 reviews</span>
                        <div className='ml-10'>
                            <span>{pleace.distric}, </span>
                            <span>{pleace.division}, </span>
                            <span>{pleace.country}, </span>
                        </div>
                    </div>


                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <div>
                            <img className='rounded-tl-xl rounded-bl-xl w-full h-[360px]' src={img1} alt="" />
                        </div>
                        <div className='w-full'>
                            <div className='grid grid-cols-2 gap-2 w-full'>
                                <img className='h-44 w-full ' src={img2} alt="" />
                                <img className='h-44 w-full rounded-tr-xl' src={img3} alt="" />
                                <img className='h-44 w-full' src={img4} alt="" />
                                <img className='h-44 w-full rounded-br-xl' src={img5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex  flex-col md:flex-row gap-3'>

                <div className='w-full md:w-8/12 gap-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>

                        <div className='flex items-center rounded-xl font-bold font-mono text-lg p-3 border'>
                            <BsPeople className='mr-4 text-2xl'></BsPeople>
                            <h5>{room.guest} Guests</h5>
                        </div>

                        <div className='flex items-center rounded-xl font-bold font-mono text-lg p-3 border'>
                            <PiHouseLineBold className='mr-4 text-2xl'></PiHouseLineBold>
                            <h5>{room.bedroom} Bedrooms</h5>
                        </div>

                        <div className='flex items-center rounded-xl font-bold font-mono text-lg p-3 border'>
                            <LiaBedSolid className='mr-4 text-2xl'></LiaBedSolid>
                            <h5>{room.bed} Beds</h5>
                        </div>

                        <div className='flex items-center rounded-xl font-bold font-mono text-lg p-3 border'>
                            <MdOutlineBathroom className='mr-4 text-2xl'></MdOutlineBathroom>
                            <h5>{room.bath} Baths</h5>
                        </div>

                    </div>


                    <div>
                        <hr className='mt-10 mr-6' />
                        <Speciality></Speciality>
                        <hr className='mt-10 mr-6' />
                    </div>


                    <div>
                        <p className='my-5 text-justify p-6 '>{description}</p>
                    </div>


                    <div className='p-6'>
                        <h3 className="text-2xl font-bold mb-5 ">What this place offers</h3>

                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div className='flex items-center gap-4 mb-5'>
                                <TbToolsKitchen2 className='text-2xl'></TbToolsKitchen2>
                                <p className='text-lg'>Kitchen</p>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <AiOutlineCar className='text-2xl'></AiOutlineCar>
                                <p className='text-lg'>Free parking on premises</p>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <AiOutlineWifi className='text-2xl'></AiOutlineWifi>
                                <p className='text-lg'>Wifi</p>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <TbAirConditioning className='text-2xl'></TbAirConditioning>
                                <p className='text-lg'>Air conditioning</p>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <CgSmartHomeRefrigerator className='text-2xl'></CgSmartHomeRefrigerator>
                                <p className='text-lg'>Refrigerator</p>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <TfiSpray className='text-2xl'></TfiSpray>
                                <p className='text-lg'>Shampoo</p>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <MdOutlineWaterDrop className='text-2xl'></MdOutlineWaterDrop>
                                <p className='text-lg'>Hot water</p>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <PiCoatHanger className='text-2xl'></PiCoatHanger>
                                <p className='text-lg'>Hangers</p>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <MdSmokeFree className='text-2xl'></MdSmokeFree>
                                <p className='text-lg'>Smoke alarm</p>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <GiWashingMachine className='text-2xl'></GiWashingMachine>
                                <p className='text-lg'>Washing machine</p>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <TfiSpray className='text-2xl'></TfiSpray>
                                <p className='text-lg'>Shampoo</p>
                            </div>
                            <div className='flex items-center gap-4 mb-5'>
                                <PiTelevisionSimpleLight className='text-2xl'></PiTelevisionSimpleLight>
                                <p className='text-lg'>Television</p>
                            </div>



                        </div>

                    </div>


                </div>






                <div className='w-full md:w-4/12 mt-10  md:ml-10 '>
                    <div className='shadow-2xl bg-gray-50 sticky py-10 top-48 bottom-52 px-5 rounded-lg'>
                        <div className='text-lg flex justify-between mb-5 w-full'>
                            <div>
                                <span className='font-bold text-xl'>${price}</span> <span>night</span>
                            </div>
                            <div>
                                <div className='flex'>
                                    <p className=' font-extrabold mr-1'>★</p>
                                    <span className='mr-2'>{reviews}</span>
                                    <span>40 reviews</span>
                                </div>
                            </div>

                        </div>




                        <div className="container mx-auto">
                            <div className="max-w-sm mx-auto">
                                <form onSubmit={handleBookingSubmit}>
                                    <div className='flex items-center' >
                                        <div>
                                            <label className="block mb-2  font-bold text-gray-700" htmlFor="checkInDate">
                                                Check-in Date
                                            </label>
                                            <DatePicker
                                                id="checkInDate"
                                                minDate={new Date()}
                                                selected={checkInDate}
                                                onChange={handleCheckInDateChange}
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-end  mb-2 font-bold text-gray-700" htmlFor="checkOutDate">
                                                Check-out Date
                                            </label>
                                            <DatePicker
                                                id="checkOutDate"
                                                minDate={checkInDate}
                                                selected={checkOutDate}
                                                onChange={handleCheckOutDateChange}
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>

                                    </div>

                                    <div className="flex justify-between w-full mt-3">
                                        <div>
                                            <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
                                                Adults
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-sm">

                                            
                                                <input
                                                    type="number"
                                                    name="adults"
                                                    id="adults"
                                                    min="1"
                                                    max={room.guest - children}
                                                    value={adults}
                                                    onChange={handleAdultsChange}
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="children" className="block text-sm font-medium text-gray-700">
                                                Children
                                            </label>
                                            <div className="mt-1 relative rounded-md shadow-sm">
                                                

                                            <input
                                                    type="number"
                                                    name="children"
                                                    id="children"
                                                    min="0"
                                                    max={room.guest - adults}
                                                    value={children}
                                                    onChange={handleChildrenChange}
                                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
                                                />
                                                
                                            </div>
                                        </div>
                                    </div>


                                    <Link to="/hotel/confirmed"
                                        type="submit"
                                        className="mt-4 px-4 py-2 w-full outline-none text-white font-bold bg-rose-600  rounded-md hover:bg-rose-700"
                                    >
                                        Book Now
                                    </Link>
                                </form>

                                <p className='text-center mt-4 mb-9'>You won't be charged yet</p>
                                <div>
                                    <div className='flex justify-between mb-3'>
                                        <p>${price} x {dif} night</p>
                                        <p>${amount}</p>
                                    </div>
                                    <div className='flex justify-between mb-3'>
                                        <p>Cleaning Free</p>
                                        <p>${cleaningFee}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>SRbnb service Free</p>
                                        <p>${srbnbFee}</p>
                                    </div>
                                    <hr className=' my-6 ' />
                                    <div className='flex font-semibold text-lg justify-between'>
                                        <p>Total before taxes</p>
                                        <p>${totalBeforeTax}</p>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>

        </div>
    );
};

export default HotelDetails;
