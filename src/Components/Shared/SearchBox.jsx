import React, {  useContext, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BiMinus, BiSearch } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { context } from '../../Context/AuthContex';
import { useNavigate } from 'react-router-dom';


const SearchBox = () => {

    const {showOut, country, show, setShow, setCountry, setShowOut, adults, total, setTotal, setAdults, showIn, setShowIn, childrens, setChildren} = useContext(context)
    const [isShowGuest, setIsShowGuest] = useState(false);
    const [isShowOut, setIsShowOut] = useState(false);
    const [isShowIn, setIsShowIn] = useState(false);
    const [selectedDateIn, setSelectedDateIn] = useState(new Date());
    const [selectedDateOut, setSelectedDateOut] = useState(new Date());
    const navigate = useNavigate()
    // const [showOut, setShowOut] = useState("")
    // const [showIn, setShowIn] = useState("")

    // const [adults, setAdults] = useState(0)
    // const [children, setChildren] = useState(0)


    const checkIn = `${selectedDateIn.getDate()} - ${selectedDateIn.getMonth()} - ${selectedDateIn.getFullYear()}`
    const checkOut = `${selectedDateOut.getDate()} - ${selectedDateOut.getMonth()} - ${selectedDateOut.getFullYear()}`
    // console.log(checkOut)

    // Function to handle date selection
    const handleDateChangeOut = (date) => {
        setSelectedDateOut(date);
        setShowOut(checkOut)
        setIsShowOut(false)
    };
    const handleDateChangeIn = (date) => {
        setSelectedDateIn(date);
        setShowIn(checkIn)
        setIsShowIn(false)
    };


    let adltsum = 0
    const handleAdultsPlus = () => {
        adltsum = adults + 1
        setAdults(adltsum)
    }

    const handleAdultsMinus = () => {

        if (adults > 0) {
            adltsum = adults - 1
            setAdults(adltsum)
        }
    }


    let childrensum = 0
    const handleChildrenPlus = () => {
        childrensum = childrens + 1
        setChildren(childrensum)
    }

    const handleChildrenMinus = () => {

        if (childrens > 0) {
            childrensum = childrens - 1
            setChildren(childrensum)
        }
    }

const totalGuest = adults + childrens

    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.place.value
      const upper = text.charAt(0).toUpperCase() + text.slice(1);
        setTotal(totalGuest)
        setCountry(upper)
        setShow(false)
        navigate("/search/hotel")
        
    }




  return (
    <div>
            <div className='flex relative justify-center pb-5'>
                <form onSubmit={handleSearch} className='flex flex-col md:flex-row '>
                    <div  className='flex flex-col px-7 py-3 border-l border-gray-400 border-y border-r md:border-r-0 rounded-md  md:rounded-l-full w-full  md:w-80  '>
                        <label>Where</label>
                        <input type="text"  name='place' className='outline-none' placeholder='Search destinations' />

                    </div>
                    <div className='border h-10 my-auto'></div>

                    <div onClick={() => setIsShowIn(!isShowIn)} className='flex border-gray-400 border-y  flex-col px-7 py-3    w-40 '>
                        <label>Check In</label>
                        <input type="text" className='outline-none cursor-pointer' value={showIn} placeholder='Add date' />
                    </div>
                    <div className='border h-10 my-auto'></div>


                    <div onClick={() => setIsShowOut(!isShowOut)} className='flex border-gray-400 border-y  flex-col px-7 py-3    w-40 '>
                        <label>Check Out</label>
                        <input type="text" className='outline-none cursor-pointer' value={showOut} placeholder='Add date' />

                    </div>
                    <div className='border h-10 my-auto'></div>


                    <div className='w-auto  shadow-sm border-r  border-gray-400 border-y  rounded-r-full'>
                        <div className='flex  items-center'>
                            <div onClick={() => setIsShowGuest(!isShowGuest)} className='flex flex-col pl-7 py-3 rounded-l-full   '>
                                <label>Guest</label>
                                <input type="text" value={totalGuest} className='outline-none cursor-pointer' placeholder='Add guest' />
                            </div>

                            <button type='submit' className='pr-3'>
                                <BiSearch className="text-white  w-10 h-10 rounded-full p-2 font-extrabold text-center   bg-[#FF385C] text-5xl "></BiSearch>
                            </button>
                            


                        </div>
                    </div>


                </form>







            </div>


            <div>


                <div className=' z-50 absolute '>
                    {
                        isShowOut &&
                        <Calendar className="w-1/2 mx-auto "
                            onChange={handleDateChangeOut}

                            showDoubleView={true}
                            minDate={new Date()}
                            value={selectedDateOut} />
                    }


                    {
                        isShowIn &&
                        <Calendar className="w-1/2 mx-auto"
                            onChange={handleDateChangeIn}

                            showDoubleView={true}
                            minDate={new Date()}
                            value={selectedDateIn} />
                    }
                </div>


                <div className=''>
                    {
                        isShowGuest &&
                        <div className=' w-[450px] z-50 bg-white rounded-3xl absolute right-60 border  shadow-xl px-8 py-5'>
                            <div className='flex justify-between border-b pb-5 items-center'>
                                <div>
                                    <h3 className='text-lg font-semibold'>Adults</h3>
                                    <p>Ages 13 or above</p>

                                </div>

                                <div className='flex items-center gap-5'>
                                    <div onClick={handleAdultsMinus}>
                                        <BiMinus className='text-4xl cursor-pointer p-[5px] border-gray-400 rounded-full font-semibold border'></BiMinus>
                                    </div>
                                    <div className='text-lg font-semibold'>{adults}</div>
                                    <div onClick={handleAdultsPlus}>
                                        <BsPlus className='text-4xl cursor-pointer p-[5px] border-gray-400 rounded-full font-semibold border'></BsPlus>
                                    </div>
                                </div>
                            </div>

                            <div className='flex py-5  justify-between items-center'>
                                <div>
                                    <h3 className='text-lg font-semibold'>Children</h3>
                                    <p>Ages 2–12</p>
                                </div>

                                <div className='flex items-center gap-5'>
                                    <div onClick={handleChildrenMinus}>
                                        <BiMinus className='text-4xl cursor-pointer p-[5px] border-gray-400 rounded-full font-semibold border'></BiMinus>
                                    </div>
                                    <div className='text-lg font-semibold'>{childrens}</div>
                                    <div onClick={handleChildrenPlus}>
                                        <BsPlus className='text-4xl p-[5px] cursor-pointer border-gray-400 rounded-full font-semibold border'></BsPlus>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }

                </div>

            </div>
        </div>
  )
}

export default SearchBox