import React, { useEffect, useRef, useState } from 'react';
import {  signInWithPopup, GoogleAuthProvider, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app, auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailRef.current?.value,
          passwordRef.current?.value
        );
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: nameRef.current?.value,
        });

        navigate("/");

      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailRef.current?.value,
          passwordRef.current?.value
        );
        navigate("/profile");
      }
    } catch (error) {
      console.log("Error:", error);
      setErrorMessage(error.message);
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/profile");
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate, auth]);

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      navigate("/profile");

    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      alert("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="flex flex-col  items-center min-h-screen bg-gray-100">
        <div>
            <img src="src/assets/investixlogo.png" alt="logo" className='w-40 border rounded-full border-gray-300 shadow-md my-4'  />
        </div>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>

        <form onSubmit={handleFormSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                ref={nameRef}
                placeholder="Enter name"
                className="w-full border px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter Email"
              className="w-full border px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter password"
              className="w-full border px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>

          {errorMessage && (
            <p className="text-red-500 text-center mt-2">{errorMessage}</p>
          )}

          <p
            className="text-center text-blue-600 mt-4 cursor-pointer hover:underline"
            onClick={toggleAuthMode}
          >
            {isSignUp ? "Already have an account? Sign In" : "Create an account"}
          </p>
        </form>

        <div className="text-center my-4 text-gray-500">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full border py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
