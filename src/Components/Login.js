import React, { useState, useRef } from 'react';
import Header from './Header';
import { Background_IMG, PROFILE_ICON_IMG } from '../utils/Constants';
import { checkValidation } from '../utils/Validate';
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
const Login = () => {
  const [isSignInForm, setSignInForms] = useState(true);
  const name = useRef(null);           // 🔧 added
  const email = useRef(null);
  const password = useRef(null);
 
  const [errormessage, setErrorMessage] = useState(null);
  const dispatch=useDispatch();

  const ToggleSignInForm = () => {
    setSignInForms(!isSignInForm);
  };

  const HandleButtonClick = () => {
    const message = checkValidation(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // Sign Up Logic
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PROFILE_ICON_IMG
          }).then(() => {
             const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
         
          }).catch((error) => {
            setErrorMessage("Profile update failed: " + error.message);
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={Background_IMG}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <Header />

      {/* Centered Form */}
      <div className="flex justify-center items-center h-full z-10">
        <form onSubmit={(e) => e.preventDefault()} className="w-80 p-8 bg-black bg-opacity-100 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Name"
              ref={name}                      //  ref added
              className="w-full p-2 my-2 mb-4 bg-white text-black rounded"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-2 my-2 mb-4 bg-white text-black rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-2 my-2 mb-4 bg-white text-black rounded"
          />

          <p className="p-3 text-red-600">{errormessage}</p>

          <button
            className="w-full p-2 my-2 bg-red-600 hover:bg-red-700 rounded"
            onClick={HandleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4 cursor-pointer" onClick={ToggleSignInForm}>
            {isSignInForm
              ? "New to CineSphere? Sign Up Now"
              : "Already registered? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
