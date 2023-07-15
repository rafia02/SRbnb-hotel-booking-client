import React, { useContext, useState } from 'react';
import vdo from "../../images/3466927036.mp4"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from 'react-router-dom';
import { context } from '../../Context/AuthContex';


const SearchBox = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const {setRate, setGuest,setCountry } = useContext(context)

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target
        const countryData = form.country.value
        const guest = form.guest.value
        const ratestn = form.rate.value
        const rate = Number(ratestn)



        const words = countryData.split(' ');
        const country = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        console.log(country, guest, rate)
        console.log(checkInDate)

        setGuest(guest)
        setRate(rate)
        setCountry(country)
        navigate("/search/hotel")


        // fetch(`https://room-booking-server.vercel.app/search?country=${country}&guest=${guest}&rate=${rate}`)
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(e => console.error(e))



        // fetch("https://room-booking-server.vercel.app/hotels")
        //     .then(res => res.json())
        //     .then(data => setData(data))
        //     .catch(e => console.error(e))


        // const filterData = data.filter(d => guest <= d.room.guest && country === d.pleace.country && rate <= d.price)

        // setFilterData(filterData)
        // console.log(filterData)
    }



    return (


        <div>
            <form onSubmit={handleSearch}>
                <input name="country" type="text" placeholder="Where are you going" className="md:w-48 lg:w-52 p-3 md:p-5 m-2 md:m-0 md:border-r-2 border-rose-500 outline-none" />
                <DatePicker
                    id="checkInDate"
                    placeholderText="Check In"
                    minDate={new Date()}
                    selected={checkInDate}
                    onChange={setCheckInDate}
                    className="md:w-32 lg:w-52 p-3 md:p-5 outline-none md:border-r-2 m-2 md:m-0  border-rose-500"
                />
                <input name="guest" type="text" placeholder="Guest" className="md:w-32 lg:w-52 p-3 md:p-5 outline-none md:border-r-2 m-2 md:m-0  border-rose-500" />
                <input name="rate" type="text" placeholder="Highest Range" className="md:w-32 lg:w-52 p-3 md:p-5 md:border-r-2 border-rose-500 outline-none" />

                <button type="submit" className=" bg-rose-600 text-center text-white font-bold px-10 py-3 m-2 md:m-0 md:p-5 outline-none md:px-10">
                        Book
        
                </button>

                {/* <input type="submit" value="Book" className=" bg-rose-600 text-white font-bold py-5 outline-none px-8" /> */}

            </form>
        </div>

    )
};

export default SearchBox;