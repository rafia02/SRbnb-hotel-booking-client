import React from 'react';

const Footer = () => {
    return (
        <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80">
            {manueBar}
            
          </ul>
        </div>
        <a className="btn btn-ghost normal-case font-serif border-4 px-6 border-black rounded-tr-full rounded-bl-full font-bold text-2xl italic">Suraf Resort</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
          {manueBar}
        </ul>
      </div>
      <div className="navbar-end">
      <h1 className='px-1 font-serif mr-2 font-bold text-md'>LOGIN</h1>
    
      </div>
    </div>
    );
};

export default Footer;