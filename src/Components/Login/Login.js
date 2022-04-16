
import { faFaceGrin, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import app from '../../init';
import  './Login.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth(app);
    const {googleSignIn} = useFirebase();
    const getEmail = (event) => {
        setEmail(event.target.value);
        
    }
    const getPassword = (event) => {
        setPassword(event.target.value);
        
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword (auth);
    // const location = useLocation();
    // console.log("location:", location)
    const navigate = useNavigate();
    console.log("navigate:", navigate)
    // const [user] = useAuthState(auth);
    return (
        <div className = "formContainer">
            <h1>log in page</h1>
            <form>
                <input onBlur={getEmail} type= "email" placeholder='enter email'></input>
                
                <input onBlur={getPassword} type= "password" placeholder='enter password'></input>
                <button onClick={() =>{createUserWithEmailAndPassword(email, password)}} className='btn' type = "button">Log In</button>
            </form>
            <hr></hr>
            <h3>Log In using third party</h3>
            <div>
                <button className='btn' type = "button" onClick={googleSignIn}>
                    <FontAwesomeIcon icon={faGlobe} />
                </button>
                <button className='btn' type = "button">
                    <FontAwesomeIcon icon={faFaceGrin} />
                </button>
            </div>
        </div>
    );
};

export default Login;