import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BG_URL, USER_AVATAR } from "../utils/Constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // FIX 1: was calling undefined `checkValidData` — now correctly calls imported `checkValidation`
    // FIX 2: was `ge = checkValidData(...)` (broken assignment) — now properly declared with `const message`
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    setIsLoading(true);

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => setErrorMessage(error.message));
        })
        .catch((error) =>
          setErrorMessage(error.code + " - " + error.message)
        )
        .finally(() => setIsLoading(false));
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(() => {})
        .catch((error) =>
          setErrorMessage(error.code + " - " + error.message)
        )
        .finally(() => setIsLoading(false));
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Header />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover opacity-50" src={BG_URL} alt="background" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      </div>

      {/* Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl px-10 py-12 shadow-2xl border border-white/10">

            <h1 className="text-white text-4xl font-extrabold mb-2 tracking-tight">
              {isSignInForm ? "Welcome Back" : "Join CineSphere"}
            </h1>
            <p className="text-gray-400 text-sm mb-8">
              {isSignInForm
                ? "Sign in to continue your cinematic journey"
                : "Create your account and start exploring"}
            </p>

            {!isSignInForm && (
              <div className="mb-4">
                <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Full Name</label>
                <input
                  ref={name}
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:bg-white/15 transition-all duration-200"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Email Address</label>
              <input
                ref={email}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:bg-white/15 transition-all duration-200"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Password</label>
              <input
                ref={password}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:bg-white/15 transition-all duration-200"
              />
            </div>

            {errorMessage && (
              <div className="mb-4 px-4 py-3 rounded-lg bg-red-900/40 border border-red-500/50">
                <p className="text-red-400 text-sm font-medium">⚠ {errorMessage}</p>
              </div>
            )}

            <button
              onClick={handleButtonClick}
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-red-900/40"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  <span>Please wait...</span>
                </>
              ) : isSignInForm ? "Sign In" : "Create Account"}
            </button>

            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="mx-3 text-gray-500 text-xs">OR</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <p className="text-center text-gray-400 text-sm">
              {isSignInForm ? "New to CineSphere?" : "Already have an account?"}
              <button
                onClick={toggleSignInForm}
                className="ml-2 text-white font-semibold hover:text-red-400 transition-colors duration-200 underline underline-offset-2"
              >
                {isSignInForm ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>

          <p className="text-center text-gray-600 text-xs mt-6">
            By continuing, you agree to our Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;