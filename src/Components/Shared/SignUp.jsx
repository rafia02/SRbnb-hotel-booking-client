import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    // onSubmit={handleSubmit(onSubmit)
    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white p-8 border rounded shadow-md max-w-md w-full">
                <h2 className="text-2xl text-center font-bold mb-6">Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-1">Name</label>
                        {/* <input  {...register("firstName", { required: true })}
                            aria-invalid={errors.firstName ? "true" : "false"} type="text" id="name" className="border rounded py-2 px-3 w-full" />
                        {...register("firstName", { required: true })} */}
                        {/* {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>} */}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">Email</label>
                        <input {...register("gender")} type="email" id="email" className="border rounded py-2 px-3 w-full" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block font-medium mb-1">Password</label>
                        <input {...register("gender")} type="password" id="password" className="border rounded py-2 px-3 w-full" />
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