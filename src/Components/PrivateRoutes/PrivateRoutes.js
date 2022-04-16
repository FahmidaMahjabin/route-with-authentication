import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import app from '../../init';
const auth = getAuth(app);
const PrivateRoutes = ({children}) => {
    console.log("children in private route:", children)
    const [user] = useAuthState(auth)
    return (
         user? children: <Navigate to = "/login"></Navigate>
        
    )
};

export default PrivateRoutes;