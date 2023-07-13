import React from 'react';
import {Link} from "react-router-dom"

const Extra = () => {
    return (
        <div className='my-10 relative'>
                <img src="https://demo.bravisthemes.com/seaside/wp-content/uploads/2023/05/about1.jpg" alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className='absolute top-40 gap-40 grid grid-cols-1 md:grid-cols-2  mx-6'>
                <div className='flex gap-8'>
                    <img className='w-60 h-96 mt-10 rounded' src="https://demo.bravisthemes.com/seaside/wp-content/uploads/2023/05/about2.jpg" alt="" />
                    <img className='w-60 h-96 rounded' src="https://demo.bravisthemes.com/seaside/wp-content/uploads/2023/05/about3.jpg" alt="" />
                </div>
                <div className='text-white'>
                    <h1 className='font-semibold text-4xl'>The Luxury Experience You’ll Remember</h1>
                    <hr className='w-1/5 mt-5 '/>
                    <p className='my-5 font-thin text-lg mb-10'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    <Link to="/hotels" className='border py-[6px] px-10  ease-in-out hover:bg-amber-600 duration-1000'>CHOOSE HOTElE</Link>
                </div>

            </div>
        </div>
    );
};

export default Extra;