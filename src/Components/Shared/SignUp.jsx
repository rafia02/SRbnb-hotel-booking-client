import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white p-8 border rounded shadow-md max-w-md w-full">
                <h2 className="text-2xl text-center font-bold mb-6">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-1">Name</label>
                        <input type="text" id="name" className="border rounded py-2 px-3 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">Email</label>
                        <input type="email" id="email" className="border rounded py-2 px-3 w-full" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block font-medium mb-1">Password</label>
                        <input type="password" id="password" className="border rounded py-2 px-3 w-full" />
                    </div>
                    <div className='text-center w-full mb-3 bg-rose-600 rounded-lg  hover:bg-rose-700 duration-500'>
                        <button type="submit" className=" text-white font-bold px-4 py-2 ">Sign Up</button>
                    </div>
                </form>
                <p>Don't have an account? Please <Link to="/login" className='text-rose-700 font-bold '>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;