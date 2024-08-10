import React, { useState, useEffect } from 'react';
import { auth, provider } from '../components/FirebaseConfig'; // Adjust path as necessary
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Optionally process result.user or additional info here
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4'>
      <div className="left">
        <div className="logo font-bold text-2xl text-white text-center">
          <img className='w-44' src="/Codemate.png" alt="Logo" />
        </div>
      </div>
      <div className="right">
        {user ? (
          <div className="flex items-center">
            <span className="text-white mr-4">Welcome, {user.displayName}</span>
            <button 
              onClick={handleSignOut} 
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button 
            onClick={handleSignIn} 
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
