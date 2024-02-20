import React, { useState, useEffect } from 'react';
import Login from './View/login';
import Home from './View/home';
import CreateEvent from './View/Organiser/CreateEvent';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate ,Outlet } from 'react-router-dom';
import EventSuccess from './View/Organiser/EventSuccess';
import Event from './View/Contributor/Event';
import { UserProvider } from './UserContext';
// import  AuthRoute from './View/Auth/AuthRoute'


function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const PrivateRoutes = () => {
    let auth = localStorage.getItem('isAuthenticated') === 'true';
    return (
      auth ? <Outlet/> : <Navigate to='/login'/>
    )
  }
  return (
    <UserProvider>
      <Router>
        <div className='pt-[100px]'></div>
        <Routes>
          <Route exact path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/event" /> : <Login />} /> 
            <Route element={<PrivateRoutes/>}>
              <Route
                path="/event"
                element= {<Event /> }     
              />
              <Route
                path="/create"
                element={<CreateEvent />}     
              />
              <Route
                path="/success"
                element={<EventSuccess />}     
              />
            </Route>
          </Routes>
        <div className='pb-[100px]'></div>

      </Router>
    </UserProvider>
    
  );
}




export default App;
