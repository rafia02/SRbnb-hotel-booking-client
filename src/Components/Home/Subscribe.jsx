import React from 'react';
import toast from 'react-hot-toast';

const Subscribe = () => {

    const handleSubscrib = (e) => {
        e.preventDefault();
        
        const email = e.target.email.value
        const data = {
            email
        }


        fetch(`https://room-booking-server.vercel.app/subscrib`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Successfuly subscribed")
                e.target.reset()
            })
            .catch(e => console.error(e))
    }
    return (

        <div className='mt-20 mb-10'>
            {/* <svg className='  w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,256L0,240C130,224,320,192,480,197.3C600,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg> */}
            <div className='shadow-xl w-full md:w-4/5 bg-gray-200 p-20 mx-auto'>



                <div className='text-center '>
                    <h3 className='mb-1 font-bold text-2xl md:text-3xl'>Save time, save money !</h3>
                    <p className=''>Sign up and we'll send the best deals to you</p>
                </div>
                <form onSubmit={handleSubscrib} className='text-center mt-5 '>
                    <input name='email' className='p-3 w-56  md:w-80 md:mb-0 mb-5  rounded' placeholder='Your Email Address' type="email" required />
                    <input className=' ml-2 font-bold duration-500 bg-amber-600 text-white  hover:bg-amber-700 py-1 md:p-3 px-6 md:px-14 rounded' value="Subscribe" type="submit" />
                </form>
            </div>


        </div>
    );
};

export default Subscribe;