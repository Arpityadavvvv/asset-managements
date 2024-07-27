//import logo from './logo.svg';
import './App.css';
import React from 'react';
import SignupForm from './components/SignUp';
import Login from './components/Login';

function App() {
  
  return (
    <div className="App">
      <SignupForm/>
      <Login/>
    </div>
  );
}

export default App;
