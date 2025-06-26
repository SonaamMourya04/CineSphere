import React,{useEffect} from 'react';
import { PlayCircle } from 'lucide-react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PROFILE_ICON_IMG } from '../utils/Constants';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';

const Header = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
        navigate('/error');
      });
  };
  useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const {uid,email,displayName,photoURL} = user;
     dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
     navigate("/browse")
    
    } else {
      // User is signed out
     dispatch(removeUser());
     navigate("/");
    
    }
  }); //unsubsribre when  the component is unmounts
  return ()=> unsubscribe();
      },[])

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black text-white px-6 py-4 flex justify-between items-center z-10">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 text-red-600 font-extrabold text-2xl sm:text-3xl tracking-wide">
        <PlayCircle className="w-8 h-8 text-red-600" />
        <span>Cine<span className="text-white">Sphere</span></span>
      </div>

      {/* Right Side */}
      <div className='flex items-center'>
        {user && (
          <>
            <img
  src={user?.photoURL || PROFILE_ICON_IMG}
  className="w-10 h-10 rounded-full mr-4"
  alt="profile icon"
/>
            <button onClick={handleSignOut} className="font-bold text-white">
              Sign out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
