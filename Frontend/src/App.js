import logo from './logo.svg';
import LoginPage from './pages/LoginPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AttendancePage from './pages/AttendancePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <Router>
    <div className="App">
      <h1>Au-gr-du-vent</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Good morning, welcome to the Au-gr-du-vent.
        </p>
        <LoginPage />{/* This is the login form */}
        <a
          className="Admin"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Router>
  );
}

export default App;
