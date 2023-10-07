import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.init';


export const context = createContext()
const auth = getAuth(app)


const AuthContex = ({ children }) => {
    // const [hotel, setHotel] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoadign] = useState(true)

    // const [country, setCountry] = useState("")
    const [guest, setGuest] = useState(null)
    const [rate, setRate] = useState(null)



    const [hotel, setHotel] = useState([])
    const [showOut, setShowOut] = useState("")
    const [showIn, setShowIn] = useState("")
    const [adults, setAdults] = useState(0)
    const [childrens, setChildren] = useState(0)
    const [total, setTotal] = useState(0)
    const [country, setCountry] = useState("")
    const [show, setShow] = useState(false)

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(500);
    const [beds, setBeds] = useState("");
    const [rooms, setRooms] = useState("");
    const [baths, setBaths] = useState("");


  


    useEffect((id = "National parks") => {
        fetch(`https://room-booking-server.vercel.app/hotels/${id}`)
            .then(res => res.json())
            .then(data => setHotel(data))
            .catch(e => console.error(e))
    }, [])


    const signup = (email, password) => {
        setLoadign(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoadign(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    const profileupdate =(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }


    const logout =()=>{
        signOut(auth)
    }

    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoadign(false)

        })
        return () => unsubscrib()
    }, [])




    const authInfo = { rate, minValue, setMinValue, maxValue, setMaxValue, beds, setBeds, rooms, setRooms, baths, setBaths,  show, setShow, setHotel, country, setCountry, showOut, total, setTotal, childrens, setChildren, setShowOut, showIn, setShowIn, adults, setAdults, setRate, guest, setGuest, country, setCountry, user, logout, setHotel, hotel, signup, login, profileupdate  }

    return (
        <div>
            <context.Provider value={authInfo}>
                {children}
            </context.Provider>
        </div>
    );
};

export default AuthContex;