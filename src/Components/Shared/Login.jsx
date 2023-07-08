import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { context } from '../../Context/AuthContex';
import toast from 'react-hot-toast';


const Login = () => {
    const {login } = useContext(context)
    const [err, setErr] = useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleLogin = (data)=>{
      login(data.email, data.password)
      .then(res => {
        console.log(res.user)
        setErr("")
        toast.success('Sucessfuly log in')
      })
      .catch(e =>{
        setErr(e.message)
        console.error(e)})
    }

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white p-8 border rounded shadow-md max-w-md w-full">
                <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="text"
                         {...register("email",
                          { required: "Email Address is required" })}
                          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>


                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                         <input type="password" 
                         {...register("password")} 
                         className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full" />
                    {err && <p className='text-red-600' role="alert">{err}</p>}
                    </div>


                    <input type="submit" value="Log in" className=' text-white font-bold px-4 py-2 text-center w-full mb-3 bg-rose-600 rounded-lg  hover:bg-rose-700 duration-500'/>

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





