import React from 'react';
import Lottie from "lottie-react";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import ana from "../../images/analisys.json"
import { Question } from './Question';


const Analysis = () => {


    const data = [
        { name: 'January', visitor: 12 },
        { name: 'February', visitor: 19 },
        { name: 'March', visitor: 20 },
        { name: 'April', visitor: 10 },
        { name: 'May', visitor: 30 },
        { name: 'June', visitor: 40 },
        { name: 'July', visitor: 30 },
        { name: 'August', visitor: 50 },
        { name: 'September', visitor: 70 },
    ];


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly items-center md:gap-5'>
                <div className='w-full'>
                    <Lottie animationData={ana}></Lottie>

                </div>
                <div className="w-full">
                    <h1 className="text-2xl font-semibold ml-7 mb-7">Total visitors analysic records</h1>


                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="visitor" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>
            <div>
                <Question></Question>
            </div>
        </div>
    );
};

export default Analysis;