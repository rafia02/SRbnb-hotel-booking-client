import React from 'react'

export const Question = () => {
    return (
        <div  className='grid bg-gray-50 p-10 grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-20'>

            <h2 className=" text-xl md:text-4xl text-center font-bold italic font-sans mt-5">All Your Questions and Answers About <span className='text-rose-500'>SRBNB</span> </h2>

            <div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    Is my place right for Airbnb?
                    </div>
                    <div className="collapse-content">
                        <p>Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, treehouses, and more. Even a spare room can be a great place to stay.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse my-5 collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    Do I have to host all the time?
                    </div>
                    <div className="collapse-content">
                        <p>Not at all—you control your calendar. You can host once a year, a few nights a month, or more often.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    How much should I interact with guests?
                    </div>
                    <div className="collapse-content">
                        <p>It’s up to you. Some Hosts prefer to message guests only at key moments—like sending a short note when they check in—while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse my-5 collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    Any tips on being a great Airbnb Host?
                    </div>
                    <div className="collapse-content">
                        <p>Getting the basics down goes a long way. Keep your place clean, respond to guests promptly, and provide necessary amenities, like fresh towels. Some Hosts like adding a personal touch, such as putting out fresh flowers or sharing a list of local places to explore—but it’s not required.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                    What are Airbnb’s fees?
                    </div>
                    <div className="collapse-content">
                        <p>Airbnb typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas, Airbnb collects and pays sales and tourism taxes automatically on your behalf as well.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

