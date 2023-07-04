import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';


export const context = createContext()


const AuthContex = ({ children }) => {
    const [hotel, setHotel] = useState([])

    // console.log(hotel)

   useEffect((id= "National parks")=>{
    fetch(`http://localhost:5000/hotels/${id}`)
    .then(res => res.json())
    .then(data => setHotel(data))
    .catch(e => console.error(e))
   }, [])



    const authInfo = {setHotel, hotel}

    return (
        <div>
            <context.Provider value={authInfo}>
                {children}
            </context.Provider>
        </div>
    );
};

export default AuthContex;