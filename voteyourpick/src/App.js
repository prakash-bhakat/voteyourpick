import React, { useState, useEffect } from 'react';
import Login from './View/login';
import Home from './View/home';
import CreateEvent from './View/Organiser/CreateEvent';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EventSuccess from './View/Organiser/EventSuccess';
import Event from './View/Contributor/Event';
// import  AuthRoute from './View/Auth/AuthRoute'

function App() {
  const isAuthenticated = checkAuthentication();
  return (
    <Router>
      <div className='pt-[100px]'></div>
    <Routes>
      <Route path="/login" element={<Login />} />
    <Route
          path="/create"
          element={isAuthenticated ?  <CreateEvent /> : <Navigate to="/login" />}     
        />
         <Route
          path="/success"
          element={isAuthenticated ?  <EventSuccess /> : <Navigate to="/login" />}     
        />
         <Route
          path="/event"
          element={isAuthenticated ?  <Event /> : <Navigate to="/login" />}     
        />
    </Routes>
    <div className='pb-[100px]'></div>

  </Router>
    
  );
}

function checkAuthentication() {
  // Replace this with your actual authentication logic
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return isAuthenticated; 
}


export default App;
