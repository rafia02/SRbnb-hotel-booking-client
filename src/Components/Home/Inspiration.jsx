import React from 'react';
import {motion} from 'framer-motion'


const Inspiration = () => {
    return (


        <div className='mt-28  mx-6'> 
            <h1 className='text-2xl font-bold my-5'>Get Inspiration For Your Next Trip</h1>

            <motion.div initial= {{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 1}} transition={{duration: 1.5}} className='grid grid-cols-1 gap-4 md:grid-cols-2  overlay'>
                <div className="relative rounded-xl  overflow-hidden">
                    <img
                        src="https://www.travoh.com/wp-content/uploads/2021/11/001-InterContinental-Hayman-Island-Resort-Whitsunday-Islands-Australia.jpg"
                        alt="Image"
                        className=" w-full h-auto transition-transform duration-300 transform-gpu hover:scale-105   "
                    />

                    <div className='text-opacity-80 absolute bottom-5 p-3 text-white'>
                        <h2 className='font-semibold text-xl md:text-2xl'>6 unforgettable holiday homes in Australia</h2>
                        <p className=' mt-1'>From modern architectural marvels to classic Byron Bay beach homes.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                    <div>
                        <img className='rounded-xl transition-transform duration-300 transform-gpu hover:scale-105' src="https://cf.bstatic.com/xdata/images/xphoto/540x405/235954988.webp?k=862d44bdd997a201fc4faf07872a8b16348a6f959c74e060ce5a9ec957a34ddf&o=" alt="" />
                        <div>
                            <p className=' mt-3 font-bold'>The 5 best summer festivals in Japan</p>
                            <p className='text-sm mt-1 text-justify'>Summer in Japan is a great time to witness tradition, culture and community come together at one of the country's many festivals.</p>
                        </div>
                    </div>
                    <div>
                        <img className='rounded-xl transition-transform duration-300 transform-gpu hover:scale-105' src="https://cf.bstatic.com/xdata/images/xphoto/540x405/233966363.webp?k=94e5bab6c8c9d01f948dfff375ab012f67c81cdc238715dba96832edcd883ac8&o=" alt="" />
                        <div>
                            <p className=' mt-3 font-bold'>Seattle a city guide</p>
                            <p className='text-sm mt-1 text-justify'>Summer in Japan is a great time to witness tradition, culture and community come together at one of the country's many festivals.</p>
                        </div>
                    </div>

                </div>
            </motion.div>

        </div>




        // <div>
        //     <h1 className='text-2xl font-bold my-8'>Get inspiration for your next trip</h1>
        //     <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        //         <div className='relative overflow-hidden w-full'>
        //             <img  className="w-full h-auto transition-transform duration-300 transform-gpu hover:scale-105" src="https://perthisok.com/_next/image/?url=https%3A%2F%2Fcms.perthisok.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fberkley-river-lodge-01.jpg&w=1200&q=75" alt="" />
        //             <div className=" absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        //             <div className='absolute bottom-5 text-white'>
        //                 <h2 className='font-bold text-2xl'>6 unforgettable holiday homes in Australia</h2>
        //                 <p className='font-bold mt-1'>From modern architectural marvels to classic Byron Bay beach homes.</p>
        //             </div>
        //         </div>
        //         <div>

        //         </div>
        //     </div>
        // </div>
    );
};

export default Inspiration;