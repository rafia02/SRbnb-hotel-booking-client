import React, { useContext, useState } from 'react'
import MultiRangeSlider from "multi-range-slider-react";
import { Link } from 'react-router-dom';

import house from "../../images/house.png"
import apartment from "../../images/apartment.png"
import guest from "../../images/guest.png"
import { context } from '../../Context/AuthContex';


const FilterModal = () => {
    const { minValue, setMinValue, maxValue, setMaxValue, beds, setBeds, rooms, setRooms, baths, setBaths } = useContext(context)
    const [range, setRange] = useState("");

    const [type, setType] = useState([
        { id: 1, selected: false, title: "Any Type" },
        { id: 2, selected: false, title: "Room" },
        { id: 3, selected: false, title: "Entire home" }
    ])

    const [boxes, setBoxes] = useState([
        { id: 1, selected: false, title: "House", img: house, },
        { id: 2, selected: false, title: "Apartment", img: apartment },
        { id: 3, selected: false, title: "Guesthouse", img: guest }
    ])


    const [bath, setBath] = useState([
        { id: 1, option: "1", selected: false },
        { id: 2, option: "2", selected: false },
        { id: 3, option: "3", selected: false },
        { id: 4, option: "4", selected: false },
        { id: 5, option: "5", selected: false },
        { id: 6, option: "6", selected: false },
    ])
    const [room, setRoom] = useState([
        { id: 1, option: "1", selected: false },
        { id: 2, option: "2", selected: false },
        { id: 3, option: "3", selected: false },
        { id: 4, option: "4", selected: false },
        { id: 5, option: "5", selected: false },
        { id: 6, option: "6", selected: false },
    ])
    const [bed, setBed] = useState([
        { id: 1, option: "1", selected: false },
        { id: 2, option: "2", selected: false },
        { id: 3, option: "3", selected: false },
        { id: 4, option: "4", selected: false },
        { id: 5, option: "5", selected: false },
        { id: 6, option: "6", selected: false },
    ])



    const handleRangeChange = (newRange) => {
        setRange(newRange);
        setMaxValue(range.maxValue)
        setMinValue(range.minValue)
    }

    const def = maxValue - minValue

    const toggleBoxSelection = (id) => {
        console.log(id)
        setBoxes((prevBoxes) =>
            prevBoxes.map((box) =>
                box.id === id ? { ...box, selected: !box.selected } : box
            )
        )
    }


    const togglehangle = (id, set) => {
        set((prevBoxes) =>
            prevBoxes.map((val) =>
                val.id === id ? { ...val, selected: !val.selected } : { ...val, selected: false }
            )
        )
    }


  return (
     <div>

            <dialog id="my_modal_2" className="modal ">
                <div className="modal-box  text-gray-700">
                    <form method="dialog" className="text-end text-xl  font-bold  hover:text-red-600">
                        <button className='hover:bg-gray-200 duration-300 px-2 p-[1px] rounded-full'>X</button>
                    </form>
                    <div>
                        <h3 className="font-bold text-2xl">Type of place</h3>
                        <p className="pt-1 text-sm">A room in a home, plus access to shared spaces.</p>
                    </div>
                    <div className='mt-8 mb-12'>
                        <div className='flex gap-3 mt-5'>
                            {
                                type.map(b =>
                                    <div
                                        className={` py-2 px-5 rounded-2xl border-gray-500  border hover:border-gray-500 duration-500 cursor-pointer ${b.selected ? 'bg-black' : 'bg-white'}`}
                                        onClick={() => togglehangle(b.id, setType)}

                                    >
                                        <p className={`${b.selected ? 'text-white ' : 'text-black'}`}>{b.title} </p>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl">Price range</h3>
                        <p className="pt-1 text-sm">Total prices for 5 nights before taxes</p>
                    </div>

                    <div className='my-10'>
                        <MultiRangeSlider
                            min={0}
                            max={500}
                            step={1}
                            ruler={false}
                            label={false}
                            range={range}
                            onChange={handleRangeChange}
                        />
                    </div>

                    <div className='grid grid-cols-2 gap-5'>
                        <div className='border-2 flex flex-col hover:border-black duration-500 border-gray-400 py-2 px-4 md:px-5 rounded-lg'>
                            <label className='text-sm' htmlFor="">Minimum</label>
                            <input className='outline-none ' value={`$ ${minValue}`} type="text" />
                        </div>
                        <div className='border-2 flex flex-col hover:border-black duration-500 border-gray-400 py-2 px-4 md:px-5 rounded-lg'>
                            <label className='text-sm' htmlFor="">Maximum</label>
                            <input className='outline-none' value={`$ ${maxValue}`} type="text" />
                        </div>
                    </div>

                    <div className='mt-14'>
                        <h3 className="font-bold text-2xl">Rooms and beds</h3>
                        <div>
                            <p className="pt-8 text-lg font-semibold">Bedrooms</p>
                            <div className='grid grid-cols-4 mt-5 text-center md:grid-cols-7 gap-2'>
                                {
                                    room.map(b =>
                                        <div
                                            className={` py-2 px-4 rounded-2xl border-gray-500  border hover:border-gray-500 duration-500 cursor-pointer ${b.selected ? 'bg-black' : 'bg-white'}`}
                                            onClick={() => togglehangle(b.id, setRoom, setRooms(b.option))}

                                        >
                                            <p className={`${b.selected ? 'text-white ' : 'text-black'}`}>{b.option} </p>
                                        </div>)
                                }
                            </div>
                        </div>


                        <div>
                            <p className="pt-8 text-lg font-semibold">Beds</p>
                            <div className='grid grid-cols-4 mt-5 text-center md:grid-cols-7 gap-2'>
                                {
                                    bed.map(b =>
                                        <div
                                            className={` py-2 px-4 rounded-2xl border-gray-500  border hover:border-gray-500 duration-500 cursor-pointer ${b.selected ? 'bg-black' : 'bg-white'}`}
                                            onClick={() => togglehangle(b.id, setBed, setBeds(b.option))}

                                        >
                                            <p className={`${b.selected ? 'text-white ' : 'text-black'}`}>{b.option} </p>
                                        </div>)
                                }
                            </div>
                        </div>

                        <div>
                            <p className="pt-8 text-lg font-semibold">Bathrooms</p>
                            <div className='grid grid-cols-4 mt-5 text-center md:grid-cols-7 gap-2'>
                                {
                                    bath.map(b =>
                                        <div
                                            className={` py-2 px-4 rounded-2xl border-gray-500  border hover:border-gray-500 duration-500 cursor-pointer ${b.selected ? 'bg-black' : 'bg-white'}`}
                                            onClick={() => togglehangle(b.id, setBath, setBaths(b.option))}

                                        >
                                            <p className={`${b.selected ? 'text-white ' : 'text-black'}`}>{b.option} </p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>


                    <div>
                        <h3 className="font-bold mt-16 mb-8 text-2xl">Property type</h3>
                        <div className="grid gap-2 md:gap-5 grid-cols-3">
                            {boxes.map((box) => <div
                                className={`px-3 md:px-5 py-3  border-2 border-gray-200 hover:border-gray-500 duration-500 rounded-lg cursor-pointer ${box.selected ? 'bg-gray-100 border-2 border-gray-500' : 'bg-white'
                                    }`}
                                onClick={() => toggleBoxSelection(box.id)}

                            >
                                <div className='text-center'>
                                    <img className='h-7 mb-3 w-7 mx-auto mt-3' src={box.img} alt="" />
                                    <p className='font-semibold text-sm md:text-md'>{box.title}</p>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>

                    <div className='text-end mt-14 '>
                        <Link to="/filter/hotel" className='px-12 py-3 text-xl bg-black text-white font-bold rounded-xl hover:bg-gray-600  duration-500'>Search</Link>
                    </div>

                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
  )
}

export default FilterModal