import React, { useState } from 'react';
import jwt_decode from "jwt-decode";

const testUsers = {
  admin: {
    username: 'admin',
    password: 'ADMIN',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZDFiMzNjZTQ5MDAxODlmMzhiNyIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIiwiZGVsZXRlIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA3OTMxLCJleHAiOjE2NTg5MTE1MzF9.bqe-52if5K50rGn30P4fheuAa2qWuxse9tWiuH4cnUM',
  },
  editor: {
    username: 'editor',
    password: 'EDITOR',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZjk5MzNjZTQ5MDAxODlmMzhiYSIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4NTY5LCJleHAiOjE2NTg5MTIxNjl9.073ppQCHbplYN9befn8JElcP4zgFX6TEe_ARUQZc0KU',
  },
  user: {
    username: 'user',
    password: 'USER',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBmMGZjMzNjZTQ5MDAxODlmMzhjMCIsImNhcGFiaWxpdGllcyI6WyJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4OTI0LCJleHAiOjE2NTg5MTI1MjR9.t7c7k2LbaTxsdfYjx_WC3QiP4MycU8sZryVyXQqJQH',
  },

}

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  // create initial state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  };

  const _validateToken = (token) => {
    try{
      let validUser = jwt_decode(token);
      console.log('validUser', validUser);
      if (validUser){
        setUser(validUser);
        setIsLoggedIn(true);
        console.log('I am logged in!');
      }
    }catch(e){
      setError(e);
      console.log(e);
    }
  };

  const login = (username, password) => {
    let user = testUsers[username];
    if(user && user.password === password){
      try {
        _validateToken(user.token);
      } catch(e){
        setError(e);
        console.log(e);
      }
    }
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  };


  const values = {
    isLoggedIn,
    user,
    error,
    login,
    logout,
    can,
  }
// use component to "wrap" the children and provide context
return (
  <AuthContext.Provider value={values}>
    {children}
  </AuthContext.Provider>
)
};

export default AuthProvider;