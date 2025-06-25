import React, { useState } from 'react';
import Header from './Header';
import { Background_IMG } from '../utils/Constants';

const Login = () => {
  const [isSignInForm,setSignInForms]= useState(true);
  const ToggleSignInForm=() =>{
    setSignInForms(!isSignInForm);

  }
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
        <form className="w-80 p-8 bg-black bg-opacity-100 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">{isSignInForm?" Sign In": "sign up"}</h2>
     { !isSignInForm &&   <input
            type="text"
            placeholder="Name"
            className="w-full p-2  my-2 mb-4 bg-white text-black rounded"
          />}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-2  my-2 mb-4 bg-white text-black rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 my-2 mb-4 bg-white text-black rounded"
          />
          <button className="w-full p-2 my-2 bg-red-600 hover:bg-red-700 rounded">
         {isSignInForm ?" Sign In": "sign up"}
          </button>
          <p className='py-4 cursor-pointer' onClick={ToggleSignInForm}> {isSignInForm ?"New to CineSphere ? Sign Up Now": "Already registered ? Sign In"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
