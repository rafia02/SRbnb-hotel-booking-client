import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { context } from '../../Context/AuthContex';
import logo from '../../images/logo2.png'
import { FiSearch } from "react-icons/fi";
import SearchBox from './SearchBox';


const Navber = () => {
    const { user, logout, show, setShow } = useContext(context)


    const navigete = useNavigate()

    const handleShow = () => {
        setShow(!show)
        // navigete("/")
    }

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(e => console.error(e))
    }



    const manueBar = <>
        <Link to="/" className='px-1 mb-2 md:mb-0 mr-2 font-semibold'>Home</Link>
        <Link to="/hotels" className='px-1  mr-2 mb-2 md:mb-0  font-semibold'>Hotels</Link>
        {/* <Link to="/analysis" className='px-1  mr-2 mb-2 md:mb-0  font-semibold'>Faq</Link> */}
        {/* <Link to="/explore" className='px-1  mr-2 mb-2 md:mb-0  font-semibold'>Explore</Link> */}

    </>


    const manueBar2 = <>
        <Link to="/analysis" className='px-1  mb-2 md:mb-0 mr-2  text-lg'>Faq</Link>
        <Link to="/explore" className='px-1   mb-2 md:mb-0   text-lg'>Explore</Link>


    </>


    return (

        <div className=' shadow-sm md:mx-3 md:py-2 '>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-80">

                            {manueBar2}

                        </ul>
                    </div>
                    <Link to="/" className=' h-[40px] md:h-[50px] w-20 md:w-[100px]'>
                        <img className='h-full w-full' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div >
                            {
                                show && manueBar2
                            }
                            <div  onClick={handleShow}>
                                {
                                    !show &&
                                    <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-300 border rounded-full ">
                                        <input
                                            type="search"
                                            placeholder=""
                                            className="py-2.5 w-[20rem] rounded-full outline-0"
                                        />
                                        <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
                                            <button className="w-full">Place</button>
                                            <button className="border-l border-x px-6">Time</button>
                                            <button className="w-full text-gray-600/60 pl-2">Add guest</button>
                                        </div>
                                        <div className="bg-[#FF385C] p-2 rounded-full mr-2">
                                            <FiSearch className="text-white w-full" />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        {/* {manueBar} */}
                    </ul>
                </div>
                <div className="navbar-end">


                    {manueBar}


                    {
                        user?.email ?
                            <button onClick={handleLogout} className='px-1  mr-2 mb-2 md:mb-0  font-semibold'>Logout</button>
                            :

                            <Link to="/login" className='px-1  mr-2 mb-2 md:mb-0  font-semibold'>Login</Link>



                    }



                </div>


            </div>

            {
                show && <SearchBox></SearchBox>
            }
        </div>
    );
};

export default Navber;