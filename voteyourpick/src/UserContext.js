import React, { createContext, useState, useEffect } from 'react';

// Create a new context
export const UserContext = createContext();

// Create a provider for the context
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const loadData = () => {
    console.log('================')
    if(localStorage.getItem('userData')){
      let data = JSON.parse(localStorage.getItem('userData'))
      setUserData(data)
      return data
    } else {
      return {}
    }
  }

  const login = (user) => {
    setUserData(user);
  };

  const logout = () => {
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ loadData, userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
