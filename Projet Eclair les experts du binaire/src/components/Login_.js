import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Sidebar from './Sidebar';

const Login = () => {

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const responseGoogle = (response) => {
    console.log(response);
    // Perform actions with the response data
  };

  //   const handleLogin = async (googleData) => {
  //     console.log("test", googleData)
  //     const res = await fetch('/api/google-login', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         token: googleData.tokenId,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     const data = await res.json();
  //     setLoginData(data);
  //     localStorage.setItem('loginData', JSON.stringify(data));
  //   };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };

  //   const handleFailure = (result) => {
  //     console.log("result", result)
  //     alert(result);
  //   };
  return (
    <div className="container">
      <Sidebar />

      <div className="loginContainer">
        <h1>React Google Login App</h1>
        {loginData ? (
          <div>
            <h3>You logged in as {loginData.email}</h3>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <GoogleLogin
            clientId={'1031813792165-usaq2hu1e7bpki5d8hs0sc8fknqfq9u1.apps.googleusercontent.com'}
            buttonText="Log in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
        )}
      </div>
    </div>
  )

}

export default Login;