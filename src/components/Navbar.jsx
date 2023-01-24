import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="navbar">
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{ currentUser.displayName }</span>
                <button onClick={()=> signOut(auth)}>logout</button>
            </div>
            <span className="logo">Panchat</span>
        </div>
    );
};

export default Navbar;
