import React from 'react';
import {motion} from "framer-motion"

const Gallery = () => {
    const galleryData = [
        {
            img: "https://demo.bravisthemes.com/seaside/wp-content/uploads/2023/05/blog6-800x800.jpg",
            title: "Swimming Pool"
        },
        {
            img: "https://demo.bravisthemes.com/seaside/wp-content/uploads/2023/05/blog5-800x800.jpg",
            title: "Bedrooms"
        },
        {
            img: "https://demo.bravisthemes.com/seaside/wp-content/uploads/2023/05/blog3-800x800.jpg",
            title: "Soft & Clean Beds"
        },
        {
            img: "https://demo.bravisthemes.com/seaside/wp-content/uploads/2023/05/bg-gallery.jpg",
            title: "Amazin View"
        },
    ]
    return (
        <div className='my-20 mx-6'>
            <h1 className='text-4xl mb-7 font-bold text-center'>Gallery</h1>
            <motion.div initial= {{opacity: 0, x: -200}} whileInView={{opacity: 1, x: 1}} transition={{duration: 1.5}} className='flex flex-col md:flex-row gap-5 md:gap-7'>
                <div className='w-full md:w-8/12'>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                        {
                            galleryData.map(g => <div className='relative'>
                                <div>
                                    <div className='relative overflow-hidden h-60 w-full '>
                                        <img className='h-full w-full transition-transform duration-300 transform-gpu hover:scale-105 ' src={g.img} alt="" />
                                    </div>

                                </div>
                                <div className='right-1/3  absolute bottom-28 text-white font-bold text-xl'>
                                    <h2>{g.title}</h2>
                                </div>
                            </div>)
                        }

                    </div>
                </div>

                <div className='w-full overflow-hidden md:w-4/12'>
                    <img className='h-full transition-transform duration-300 transform-gpu hover:scale-105 ' src="https://demo.bravisthemes.com/seaside/wp-content/uploads/2023/05/blog4-800x800.jpg" alt="" />
                </div>
            </motion.div>
        </div>
    );
};

export default Gallery;