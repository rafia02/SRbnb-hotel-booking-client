import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { context } from '../../Context/AuthContex';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';





const ConfirmPay = () => {
    const { user } = useContext(context)
    const [phone, setPhone] = useState('');
    const [mgs, setMgs] = useState(false)
    const [phn, setPhn] = useState(false)
    const [id, setId] = useState("")
    const [totalPrice, setTotalPrice] = useState(null)
    const countries = ["Afghanistan", "Åland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Brazil", "Canada", "China", "Colombia", "Estonia", "Finland", "France", "Germany", "Hong Kong", "Iceland", "Indonesia", "Ireland", "Japan", "Kenya", "Malaysia", "Nepal", "Netherlands", "New Zealand", "Pakistan", "Philippines", "Singapore", "South Africa", "Thailand", "India"]






    const { data: reserveData = [], refetch } = useQuery({
        queryKey: ["reserve", user?.email],
        queryFn: async () => {
            const res = await fetch(`https://room-booking-server.vercel.app/reserve?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

   

    const handlePhoneChange = (value) => {
        setPhone(value);
        console.log(value);
    };





    const handleRequest =(e)=>{
        e.preventDefault();
        const form = e.target 
        const street = form.street.value
        const state = form.state.value
        const gip = form.gip.value
        const city = form.city.value
        const country = form.country.value
        const message = form.message.value
        
        const bookData ={
            street,
            state,
            gip,
            city,
            country,
            message,
            price: totalPrice,
            status: false,
            email: user.email, 
            id, 
        }


        fetch(`https://room-booking-server.vercel.app/booking`, {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(bookData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        toast.success("Successfully Booking")
         form.reset()
        })
        .catch(e => console.error(e))

    }





    return (
        <div className='grid grid-cols-2 m-6 gap-20'>
            <div className='grid grid-cols-1 gap-10'>
                <div>
                    {
                        reserveData.map(d => <div
                        key={d._id}
                        setId={d._id}
                         setTotalPrice={d.totalPrice} 
                         className=' mb-10 border rounded p-5'>
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
            </div>


            <div>
                <h1 className="text-2xl mb-3 text-center font-bold">REQUEST TO BOOK</h1>
                <div>
                    <h3 className='text-xl font-bold mb-3' >Pay with</h3>
                    <form onSubmit={handleRequest}>
                        <div>
                            <input required name="street" className="border-stone-800 border-2 w-full p-2 rounded-md mb-1" type="text" placeholder='Street address' />
                            <input required name="city" className="border-2 border-stone-800 w-full p-2 rounded-md" type="text" placeholder='City' />
                            <div className='flex gap-1 mt-1 mb-1'>
                                <input required name="state" className="border-stone-800 border-2 w-full p-2 rounded-md" type="text" placeholder='State' />
                                <input required name="gip" className="border-2  border-stone-800 w-full p-2 rounded-md" type="text" placeholder='Zip code' />
                            </div>


                            <select name="country" className="select border-2 border-stone-800  w-full ">
                                <option disabled selected>Select your country</option>
                                {
                                    countries.map(c => <option key={c}>{c}</option>)
                                }
                            </select>
                        </div>



                        <div className=''>
                            <h4 className="text-xl my-8 font-bold">Required for your trip</h4>



                            {
                                mgs == true ? <div>
                                    <h6 className='font-bold mb-1'>Message the Host</h6>
                                    <textarea name="message" className="textarea border-2 my-2 border-stone-800 w-full" placeholder="Bio"></textarea>
                                </div>
                                    :
                                    <div className='flex gap-4  items-start'>
                                        <div>
                                            <h6 className='font-bold mb-1'>Message the Host</h6>
                                            <p>Let the Host know why you're traveling and when you'll check in.</p>
                                        </div>
                                        <Link onClick={() => setMgs(true)} className='border-2  border-stone-800 px-4 rounded-md py-[2px]'>Add</Link>
                                    </div>
                            }




                            {
                                phn == true ?
                                    <div className='mt-5 mb-10'>
                                        <h6 className='font-bold mb-2'>Phone number</h6>

                                        <div>
                                            <PhoneInput
                                                country={'auto'}
                                                value={phone}
                                                onChange={handlePhoneChange}
                                            />
                                        </div>
                                    </div>

                                    :
                                    <div className='flex gap-4 items-start mt-5 mb-16'>
                                        <div className='w-5/6'>
                                            <h6 className='font-bold mb-1'>Phone number</h6>
                                            <p>Add and confirm your phone number to get trip updates.</p>
                                        </div>
                                        <div className='w-1/6 justify-end flex'>
                                            <Link onClick={() =>setPhn(true)} className='border-2  border-stone-800 px-4 rounded-md py-[2px]'>Add</Link>
                                        </div>
                                    </div>
                            }











                        </div>


                        <div>
                            <button type='submit' className="bg-rose-500 text-lg hover:bg-pink-500 text-white font-bold py-3 px-6 rounded">Request To Book</button>
                        </div>




                        

                    </form>




                </div>
            </div>


        </div>
    );
};

export default ConfirmPay;