import React from "react";
import Add from "../img/7224509.png";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { storage, auth } from "../Firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
    const [err, setErr] = useState(false);
    const hadleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on(
                (error) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL:downloadURL,
                        })
                    });
                }
            );
        } catch (err) {
            setErr(true);
        }
    };
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Rupen's space</span>
                <span className="title">Register</span>
                <form onSubmit={hadleSubmit}>
                    <input type="text" placeholder="display name"></input>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="img" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>something went wrong</span>}
                </form>
                <p>You have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;
