import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { app } from "../utils/firebase";  

const Profile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth(app);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setCurrentUser(user);
    } else {
      navigate("/login");
    }
  }, [auth, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error during sign-out:", error.message);
    }
  };

  if (!currentUser) {
    return <div className="text-center text-2xl font-semibold my-16">Loading user data...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        {currentUser.photoURL ? (
          <img
            src={currentUser.photoURL}
            alt="User Profile"
            className="rounded-full w-24 h-24 mx-auto mb-4"
          />
        ) : (
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-2xl font-semibold text-gray-600">👤</span>
          </div>
        )}

        <h1 className="text-2xl font-bold">{currentUser.displayName || "User"}</h1>
        <p className="text-gray-600 text-lg mt-2">{currentUser.email || "No Email"}</p>

        <button
          className="w-full bg-red-600 text-white py-2 rounded-md font-semibold mt-6 hover:bg-red-500 transition duration-300"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
