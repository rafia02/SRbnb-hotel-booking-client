import React from 'react';

const Subscribe = () => {
    return (

        <div className='bg-sky-900 pb-16'>
            <svg className='  w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,256L0,240C130,224,320,192,480,197.3C600,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
            <div className='md:mt-0'>



                <div className='text-center  text-white '>
                    <h3 className='mb-1   text-3xl'>Save time, save money!</h3>
                    <p className='font-thin'>Sign up and we'll send the best deals to you</p>
                </div>
                <form className='text-center mt-5 '>
                    <input  className='p-3 w-80  rounded' placeholder='Your Email Address' type="text" />
                    <input className=' ml-2 font-bold duration-500 bg-amber-600 text-white  hover:bg-amber-700 p-3 px-14 rounded' value="Subscribe" type="submit" />
                </form>
            </div>

            
        </div>
    );
};

export default Subscribe;