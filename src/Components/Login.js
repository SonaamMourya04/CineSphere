import React, { useState ,useRef} from 'react';
import Header from './Header';
import { Background_IMG } from '../utils/Constants';
import { checkValidation } from '../utils/Validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
const Login = () => {
  const [isSignInForm,setSignInForms]= useState(true);
  const email=useRef(null);
  const password=useRef(null);
  const[ errormessage,setErrorMessage]=useState(null);
  const ToggleSignInForm=() =>{
    setSignInForms(!isSignInForm);
  }
  const HandleButtonClick=()=>{
      //validate the form data
      checkValidation(email.current.value,password.current.value)
      console.log(email.current.value);
      console.log(password.current.value);
      const message=checkValidation(email.current.value,password.current.value);
      console.log(message);
      setErrorMessage(message);
      if(message) return ;
      // Sign In Sign Up Logic

      if(!isSignInForm){
        //Sign Up Logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +" -"+errorMessage)
  });

      }else{
        //Sign In Logic
        signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" +errorMessage)
  });

      }

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
        <form 
        onSubmit={(e)=>e.preventDefault()}
        className="w-80 p-8 bg-black bg-opacity-100 rounded-lg shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">{isSignInForm?" Sign In": "sign up"}</h2>
     { !isSignInForm &&   <input
            type="text"
            placeholder="Name"
            className="w-full p-2  my-2 mb-4 bg-white text-black rounded"
          />}
          <input
          ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-2  my-2 mb-4 bg-white text-black rounded"
          />
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-2 my-2 mb-4 bg-white text-black rounded"
          />
          <p className='p-3 text-red-600'>{errormessage}</p>
          <button className="w-full p-2 my-2 bg-red-600 hover:bg-red-700 rounded"
          onClick={HandleButtonClick}
           
          >
         {isSignInForm ?" Sign In": "sign up"}
          </button>
          <p className='py-4 cursor-pointer' onClick={ToggleSignInForm}> {isSignInForm ?"New to CineSphere ? Sign Up Now": "Already registered ? Sign In"}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
