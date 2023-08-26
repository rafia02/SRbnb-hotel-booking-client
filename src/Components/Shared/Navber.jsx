import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { context } from '../../Context/AuthContex';
import logo from '../../images/logo2.png'

const Navber = () => {
    const { user, logout } = useContext(context)

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(e => console.error(e))
    }



    const manueBar = <>
        <Link to="/" className='px-1  mb-2 md:mb-0 mr-2 font-bold text-md'>HOME</Link>
        <Link to="/hotels" className='px-1  mr-2 mb-2 md:mb-0  font-bold text-md'>HOTELS</Link>
        <Link to="/analysis" className='px-1  mr-2 mb-2 md:mb-0  font-bold text-md'>FAQ</Link>
        <Link to="/explore" className='px-1  mr-2 mb-2 md:mb-0  font-bold text-md'>EXPLORE</Link>
        
    </>





    return (

        <div className="navbar bg-base-100 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 text-center shadow bg-base-100 w-52">
                        {manueBar}

                    </ul>
                </div>
                <div className='h-[70px] w-40'>
                    <img className='h-full w-full' src={logo} alt="" />
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
                        <button onClick={handleLogout} className='px-1 mr-2 font-bold text-md'>Log Out</button>
                        :

                        <Link to="/login" className='px-1 mr-2 font-bold text-md'>LOGIN</Link>


                }



            </div>
        </div>
    );
};

export default Navber;