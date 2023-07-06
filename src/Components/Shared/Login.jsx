import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white p-8 border rounded shadow-md max-w-md w-full">
                <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" />
                    </div>
                    <div className='text-center w-full bg-rose-600 rounded-lg  hover:bg-rose-700 duration-500'>
                        <button type="submit" className=" text-white font-bold px-4 py-2 ">Login</button>
                    </div>
                </form>
                <div className='text-center mt-5 mb-3 w-full rounded-lg  hover:text-white outline bg-white hover:bg-rose-600 duration-500 '>
                    <button type="submit" className=" font-bold px-4 py-2 ">Continue with google</button>
                </div>
                <p>Don't have an account? Please <Link to="/signup" className='text-rose-700 font-bold'>Sing up</Link></p>
            </div>
        </div>
    );
};

export default Login;

