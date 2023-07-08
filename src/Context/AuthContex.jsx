import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.init';


export const context = createContext()
const auth = getAuth(app)


const AuthContex = ({ children }) => {
    const [hotel, setHotel] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoadign] = useState(true)


    useEffect((id = "National parks") => {
        fetch(`http://localhost:5000/hotels/${id}`)
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




    const authInfo = {user, logout, setHotel, hotel, signup, login, profileupdate  }

    return (
        <div>
            <context.Provider value={authInfo}>
                {children}
            </context.Provider>
        </div>
    );
};

export default AuthContex;