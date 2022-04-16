import React from 'react';
import "./Register.css";
const Register = () => {
    return (
        <div className='formContainer'>
            <form>
                <h1>Please Register</h1>
                <input type= "text" placeholder='enter Name'></input>
                <br></br>
                <input type= "email" placeholder='enter email'></input>
                <br></br>
                <input type= "password" placeholder='enter password'></input>
            </form>
        </div>
    );
};

export default Register;