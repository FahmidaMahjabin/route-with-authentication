// firebase theke user login kore load korbo 
import React, { useEffect, useState } from 'react';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../init';
const useFirebase = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        console.log("auth:", auth)
        console.log("google provider:",googleProvider )
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log("user:", user)
            setUser(result.user)
        } )
        .catch(error => console.error(error))
        

    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    }

    useEffect(() =>{
        onAuthStateChanged(auth, user => setUser(user))
    }, [])

    return (
        {user, 
        handleSignOut, 
        googleSignIn}
    );
};

export default useFirebase;
