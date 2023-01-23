// import React from "react";
// import Add from "../img/7224509.png";
// import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
// import { storage, db,auth } from "../Firebase";
// import { useState } from "react";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
// import { Link, useNavigate } from "react-router-dom";

// const Register = () => {
//     const [err, setErr] = useState(false);
//     const navigate = useNavigate();

//     const hadleSubmit = async (e) => {
//         e.preventDefault();
//         const displayName = e.target[0].value;
//         const email = e.target[1].value;
//         const password = e.target[2].value;
//         const file = e.target[3].files[0];

//         try {
//             const res = await createUserWithEmailAndPassword(auth, email, password);

//             const storageRef = ref(storage, displayName);

//             const uploadTask = uploadBytesResumable(storageRef, file);
//             uploadTask.on(
//                 (error) => {
//                     setErr(true);
//                 },
//                 () => {
//                     getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
//                         await updateProfile(res.user, {
//                             displayName,
//                             photoURL: downloadURL,
//                         });
//                         await setDoc(doc(db, "users", res.user.uid), {
//                             uid: res.user.uid,
//                             displayName,
//                             email,
//                             photoURL: downloadURL,
//                         });

//                         await setDoc(doc(db, "userChats", res.user.uid), {})
//                         navigate("/");
//                     });
//                 }
//             );

//         } catch (err) {
//             setErr(true);
//         }
//     };
//     return (
//         <div className="formContainer">
//             <div className="formWrapper">
//                 <span className="logo">Rupen's space</span>
//                 <span className="title">Register</span>
//                 <form onSubmit={hadleSubmit}>
//                     <input type="text" placeholder="display name"></input>
//                     <input type="email" placeholder="email"></input>
//                     <input type="password" placeholder="password"></input>
//                     <input style={{ display: "none" }} type="file" id="file" />
//                     <label htmlFor="file">
//                         <img src={Add} alt="img" />
//                         <span>Add an avatar</span>
//                     </label>
//                     <button>Sign Up</button>
//                     {err && <span>something went wrong</span>}
//                 </form>
//                 <p>You have an account? <Link to="/login">Login</Link></p>
//             </div>
//         </div>
//     );
// };

// export default Register;

import React, { useState } from "react";
import Add from "../img/7224509.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
// import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);
                         
            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log("File available at", downloadURL);
                    });
                }
            );
        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Panchat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="display name" />
                    <input required type="email" placeholder="email" />
                    <input required type="password" placeholder="password" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button disabled={loading}>Sign up</button>
                    {loading && "Uploading and compressing the image please wait..."}
                    {err && <span>Something went wrong</span>}
                </form>
                <p>
                    You do have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
