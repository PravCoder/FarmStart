import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalenderPage from './pages/CalenderPage';

function App() {

  return (
    <Router>

      <div>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/calender" element={<CalenderPage />} />

          

        </Routes>
      </div>
    </Router>
  )
}

export default App;
