import React, { useState, useEffect } from 'react';
import conf from './conf/conf';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from './components/index';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true); // Is the toy box sleepy?
  const dispatch = useDispatch(); // Get the magic wand

  useEffect(() => {
    authService.getCurrentUser() // Check for the key
    .then((userData) => {
      if (userData) {
        dispatch(login({ userData })); // Wake up the helpers
      } else {
        dispatch(logout()); // Let the helpers rest
      }
    })
    .finally(() => setLoading(false)); // The toy box is ready!
  }, [dispatch]);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header /> {/* Show the top toy */}
        <main>
          Hi bhai  <Outlet /> {/* Show the main toys */ }
        </main>
        <Footer /> {/* Show the bottom toy */}
      </div>
    </div>
  ) : null; // If still sleepy, show nothing yet
}

export default App;
