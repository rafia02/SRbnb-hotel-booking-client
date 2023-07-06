import React from 'react';

const Login = () => {
    return (
        <div className="my-10">
            <div className="shadow-lg w-11/12 bg-gray-100  md:w-1/3  mx-auto bg-white p-8 shadow-md rounded-md">
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
                <div className='text-center my-5 w-full rounded-lg  hover:text-white outline bg-white hover:bg-rose-600 duration-500 '>
                    <button type="submit" className=" font-bold px-4 py-2 ">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;