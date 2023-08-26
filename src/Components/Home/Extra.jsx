import React from 'react';
import { Link } from "react-router-dom"
import {motion} from "framer-motion"

const Extra = () => {
    return (
        <div className='mt-20 relative'>
            <div className='h-[900px] md:h-full'>
                <img className='w-full h-full' src="https://demo.bravisthemes.com/seaside/wp-content/uploads/2023/05/about1.jpg" alt="" />
            </div>
            <div className="absolute inset-0 bg-stone-700 opacity-50"></div>
            <div className='absolute top-[70px] md:top-40 mx-6'>
                <div className='gap-10 md:gap-40 grid grid-cols-1 md:grid-cols-2 '>
                    <motion.div initial= {{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 1}} transition={{duration: 1.5}} className='flex gap-3 md:gap-8'>
                        <img className='w-1/2 h-96   mt-10 rounded' src="https://demo.bravisthemes.com/seaside/wp-content/uploads/2023/05/about2.jpg" alt="" />
                        <img className='w-1/2 h-96 rounded' src="https://demo.bravisthemes.com/seaside/wp-content/uploads/2023/05/about3.jpg" alt="" />
                    </motion.div>
                    <div className='text-white'>
                        <h1 className='font-semibold text-2xl md:text-4xl'>The Luxury Experience You’ll Remember</h1>
                        <hr className='w-1/5 mt-5 ' />
                        <p className='my-5 font-thin text-lg mb-10'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <Link to="/hotels" className='border py-[6px] px-10  ease-in-out hover:bg-amber-600 duration-1000'>CHOOSE HOTElE</Link>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Extra;