import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { app, auth } from "../utils/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="flex items-center">
      {!user && (
        <button 
          className="mx-4 font-semibold text-xl p-2 cursor-pointer hover:bg-gray-100 px-4 rounded-sm"
          onClick={handleLogin}
        >
          Log In
        </button>
      )}

      {user ? (
        <button 
          className="border p-2 px-4 font-semibold bg-blue-600 text-white rounded-sm hover:bg-blue-800 cursor-pointer"
          onClick={handleProfile}
        >
          My Account
        </button>
      ) : (
        <button 
          className="border p-2 px-4 font-semibold bg-blue-600 text-white rounded-sm hover:bg-blue-800 cursor-pointer my-2"
          onClick={handleLogin}
        >
          Sign Up
        </button>
      )}
    </div>
  );
};

export default Navbar;
