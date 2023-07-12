import React from 'react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { context } from '../../Context/AuthContex';
import logo from '../../images/logo2.png'
import vdo from '../../images/3466927036.mp4'

const DublicateNavber = () => {
    const { user, logout } = useContext(context)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(e => console.error(e))
    }

    const manueBar = <>
        <Link to="/" className='px-5 md:px-1 text-white mb-1 mr-2 py-1 md:py-0 border-2 md:border-none font-extrabold text-md'>STAY</Link>
        <Link to="/hotels" className='px-5 md:px-1 text-white mb-1 mr-2 py-1 md:py-0 border-2 md:border-none font-extrabold text-md'>HOTELS</Link>
        <Link to="/" className='px-5 md:px-1 text-white mb-1 mr-2 py-1 md:py-0 border-2 md:border-none font-extrabold text-md'>GATHER</Link>
        <Link to="/" className='px-5 md:px-1 text-white mb-1 mr-2 py-1 md:py-0 border-2 md:border-none font-extrabold text-md'>EXPLORE</Link>
        <Link to="/" className='px-5 md:px-1 text-white mb-1 mr-2 py-1 md:py-0 border-2 md:border-none font-extrabold text-md'>CALENDAR</Link>
        <Link to="/" className='px-5 md:px-1 text-white mb-1 mr-2 py-1 md:py-0 border-2 md:border-none font-extrabold text-md'>SHOP</Link>
    </>


    return (
        <div className='relative'>

 
                <video className='' autoPlay loop muted src={vdo}></video>
    
            <div className="navbar absolute top-0 p-1 md:p-5  shadow-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn text-white love mr-2 btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-40">
                            {manueBar}

                        </ul>
                    </div>
                    <div className='h-[50px] w-32'>
                        <img className='h-full opacity-80 w-full' src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {manueBar}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user?.email ?
                            <button onClick={handleLogout} className='px-1 mr-2 text-white font-extrabold text-md'>Log Out</button>
                            :

                            <Link to="/login" className='px-1 mr-2 text-white font-extrabold text-md'>LOGIN</Link>


                    }



                </div>
            </div>
        </div>
    );
};

export default DublicateNavber;