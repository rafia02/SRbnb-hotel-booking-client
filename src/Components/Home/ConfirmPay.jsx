import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { context } from '../../Context/AuthContex';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ConfirmPay = () => {
    const { user } = useContext(context)
    const [phone, setPhone] = useState('');

    const { data: reserveData = [], refetch } = useQuery({
        queryKey: ["reserve", user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reserve?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    const handlePhoneChange = (value) => {
        setPhone(value);
        console.log(value); // Phone number with country code
    };


    console.log(reserveData)
    return (
        <div className='grid grid-cols-2 m-6 gap-20'>
            <div className='grid grid-cols-1 gap-10'>
                {
                    reserveData.map(d => <div className=' border rounded p-5'>
                        <div className='flex gap-6 items-center'>
                            <div className='w-2/5'>
                                <img className='w-full rounded-lg' src={d.img1} alt="" />
                            </div>
                            <div className=' w-3/5 '>
                                <h1 className='text-lg font-semibold mb-2'>{d.title}</h1>
                                <div className='flex justify-between text-sm '>
                                    <div className='border rounded  text-center px-3 p-1 '>
                                        <p className='font-bold'>Check In</p>
                                        <p>{d.dateIn}</p>
                                    </div>
                                    <div className='border text-sm rounded text-center px-3 p-1'>
                                        <p className='font-bold'>Check Out</p>
                                        <p>{d.dateOut}</p>
                                    </div>
                                </div>
                                <p className='my-2 font-semibold'>Guests : {d.totalGuest}</p>

                            </div>

                        </div>
                        <hr className=' my-6 ' />
                        <div>
                            <h3 className='text-2xl font-bold'>Price Details </h3>
                            <div>
                                <div className='flex justify-between mb-3'>
                                    <p>${d?.price} x {d.night} night</p>
                                    <p>${d.amount}</p>
                                </div>
                                <div className='flex justify-between mb-3'>
                                    <p>Cleaning Free</p>
                                    <p>${d.cleaningFee}</p>
                                </div>
                                <div className='flex justify-between mb-3'>
                                    <p>SRbnb service Free</p>
                                    <p>${d.srbnbFee}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Taxes</p>
                                    <p>${d.tax}</p>
                                </div>

                                <hr className=' my-6 ' />
                                <div className='flex font-semibold text-lg justify-between'>
                                    <p>Total Price</p>
                                    <p>${d.totalPrice}</p>
                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>


            <div>
                <h1 className="text-2xl mb-3 text-center font-bold">REQUEST TO BOOK</h1>
                <div>
                    <h3 className='text-xl font-bold mb-3' >Pay with</h3>
                    <div>
                        <input className="border-2 w-full p-3 rounded-md mb-1" type="text" placeholder='Street address' />
                        <input className="border-2 w-full p-3 rounded-md" type="text" placeholder='City' />
                        <div className='flex mt-1'>
                            <input className="border-2 w-full p-3 rounded-md" type="text" placeholder='State' />
                            <input className="border-2 w-full p-3 rounded-md" type="text" placeholder='Zip code' />
                        </div>
                        <div>
                            <PhoneInput
                                country={'auto'}
                                value={phone}
                                onChange={handlePhoneChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPay;