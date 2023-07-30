import React from 'react';
import Lottie from "lottie-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ana from "../../images/analisys.json"


const Analysis = () => {


    const data = [
        { name: 'January', visitor: 12},
        { name: 'February', visitor: 19},
        { name: 'March', visitor: 20},
        { name: 'April', visitor: 10 },
        { name: 'May', visitor: 30},
        { name: 'June', visitor: 40},
    ];


    return (
        <div className='flex flex-col md:flex-row items-center gap-5'>
            <div className='w-full md:w-1/2'>
                <Lottie  animationData={ana}></Lottie>

            </div>
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-semibold ml-10 mb-7">Total visitors analysic records</h1>
                <BarChart width={400} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="visitor" fill="#60A5FA" />
                    
                </BarChart>
            </div>
        </div>
    );
};

export default Analysis;