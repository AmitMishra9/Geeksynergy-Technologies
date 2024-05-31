// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './component/Auth/Signup';
import Login from './component/Auth/Login';
import Main from './component/Main/Main';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Signup/>} />  
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;