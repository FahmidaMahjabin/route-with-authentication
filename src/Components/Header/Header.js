import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';
const Header = () => {
    const { user, handleSignOut } = useFirebase();
    console.log("user in header:", user)
    
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to="/orders">Orders</Link>

                <Link to="/register">Register</Link>
                {user?.email ? <div style = {{display:'flex'}}>
                    <button type="button" onClick={handleSignOut}>Sign Out</button>
                    <img id="proPic" src={user?.photoURL} alt="profile"></img>
                </div> :
                    <Link to="/login">Login</Link>}



            </nav>


        </div>
    );
};

export default Header;