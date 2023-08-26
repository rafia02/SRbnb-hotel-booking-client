import React from 'react';
import {motion} from 'framer-motion'

const Facilities = () => {
    const datas = [
        {
            icon: "https://images.freeimages.com/fic/images/icons/2770/ios_7_icons/512/restaurant.png",
            title: "Restaurant",
            description: "We are very easy going friendly household and this is very much a family home. The dog and cats are very used to visitors"
        },
        {
            icon: "https://static.vecteezy.com/system/resources/previews/001/500/429/original/swimming-pool-icon-free-vector.jpg",
            title: "Swimming Pool",
            description: "We are very easy going friendly household and this is very much a family home. The dog and cats are very used to visitors"
        },
        {
            icon: "https://static.thenounproject.com/png/3190462-200.png",
            title: "Fitness Area",
            description: "We are very easy going friendly household and this is very much a family home. The dog and cats are very used to visitors"
        },
        {
            icon: "https://static.vecteezy.com/system/resources/thumbnails/009/537/794/small/mini-bar-icon-with-transparent-background-vector.jpg",
            title: "Mini Bar",
            description: "We are very easy going friendly household and this is very much a family home. The dog and cats are very used to visitors"
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/755/755757.png",
            title: "Meeting Room",
            description: "We are very easy going friendly household and this is very much a family home. The dog and cats are very used to visitors"
        },
        {
            icon: "data:image/png;base64,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",
            title: "Laundry Service",
            description: "We are very easy going friendly household and this is very much a family home. The dog and cats are very used to visitors"
        },
        {
            icon: "https://static.thenounproject.com/png/4620654-200.png",
            title: "Satelite TV",
            description: "We are very easy going friendly household and this is very much a family home. The dog and cats are very used to visitors"
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR53U31ISIpD-Hqyadvxt19uquBBZPNRmKwzDACgUHvGkgV6Z335uKtMM_z7MfczURFlWQ&usqp=CAU",
            title: "Safe Box",
            description: "We are very easy going friendly household and this is very much a family home. The dog and cats are very used to visitors"
        },
        {
            icon: "https://previews.123rf.com/images/vectorwin/vectorwin1912/vectorwin191202268/135803969-parking-space-icon-vector-a-thin-line-sign-isolated-contour-symbol-illustration.jpg",
            title: "Parking Area",
            description: "We are very easy going friendly household and this is very much a family home. The dog and cats are very used to visitors"
        },
    ]
    return (
        <div className='relative mt-20 mx-6 '>
            <h1 className='text-4xl font-bold text-center'>Hotel Facilities</h1>
            <hr  className='w-1/12 border-2 border-amber-600 mt-5 mb-10 mx-auto'/>
            <motion.div initial= {{opacity: 0, y: -200}} whileInView={{opacity: 1, y: 1}} transition={{duration: 0.9}}  className='grid top-0 gap-x-5 gap-y-16 grid-cols-1 md:grid-cols-3'>
                {
                    datas.map(d => <div className='mx-6'>
                        <div className='flex gap-7'>
                            <img className='w-32 bg-white h-20' src={d.icon} alt="" />
                            <div className='hover:text-amber-600 duration-1000'>
                                <h1 className='text-xl mb-2 font-semibold'>{d.title}</h1>
                                <p className='text-justify '>{d.description}</p>
                            </div>
                        </div>
                    </div>)
                }
            </motion.div>
        </div>
    );
};



export default Facilities;