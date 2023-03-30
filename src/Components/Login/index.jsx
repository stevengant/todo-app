import { Button } from '@mantine/core';
import React, { useContext, useState } from 'react';
import {When} from 'react-if';

import { AuthContext } from '../../Context/Auth';

const Login = (props) => {
  const { loggedIn, logout, login } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    login(username, password);
  };
  
    return (
      <>
        <When condition={loggedIn}>
          <button onClick={logout}>Log Out</button>
        </When>

        <When condition={!loggedIn}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Login</ Button>
          </form>
        </When>
      </>
    );
  
}

export default Login;