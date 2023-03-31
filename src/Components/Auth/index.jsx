import React, { useContext } from 'react';
// import { When } from 'react-if';

import { AuthContext } from '../../Context/Auth';

const Auth = ({ capability, children }) => {

  const { isLoggedIn, can } = useContext(
    AuthContext);

  // const isLoggedIn = loggedIn;
  // const canDo = capability ? can(capability) : true;
  // const authorizedRender = isLoggedIn && canDo;

  return (
    <>
    {
      (isLoggedIn && can(capability)) ? <>{ children }</> : ''
    } 
    {/* <When condition={authorizedRender}>
      {children}
    </When> */}
    </>
  );

}

export default Auth;
