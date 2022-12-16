import React from 'react';
import Add from "../img/7224509.png";

const Register = () => {
    return (

        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Rupen's space</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder='display name'></input>
                    <input type="email" placeholder='email'></input>
                    <input type="password" placeholder='password'></input>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="img" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>You have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;