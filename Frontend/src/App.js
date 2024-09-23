import augreduvent_Logo2 from './assets/augreduvent_Logo2.png'; // Ensure this path is correct and the file exists
import LoginPage from './pages/LoginPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AttendancePage from './pages/AttendancePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const current_time = new Date().toLocaleTimeString();
  console.log(current_time);
    const getTimeOfDay = () => {
      const hours = new Date().getHours();
      if (hours < 12) {
        return 'morning';
      } else if (hours < 18) {
        return 'afternoon';
      } else {
        return 'evening';
      }
    };

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    const timeOfDay = getTimeOfDay();

    return (
      <Router>
      <div className="App">
        <h1></h1>
        <header className="App-header">
        <img src={augreduvent_Logo2} className="App-logo" alt="logo" />
        <p>
          Good {timeOfDay}, welcome to the Au-gre-du-vent.
          <span>{currentTime}</span>
        </p>
        <LoginPage />{/* This is the login form */}
        <a
          className="Au-gre-du-vent"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        </header>
      </div>
      </Router>
    );
  }

export default App;
