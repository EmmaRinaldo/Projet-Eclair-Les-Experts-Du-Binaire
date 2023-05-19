import React, { useState } from 'react'
// import "../styles/main.css"
// import webPimage from "../assets/webpackLogo.png"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );
  var navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };
  return (
    <div className='container'>


      <div className="loginContainer">
        <h1>React Google Login App</h1>
        {loginData ? (
          <div>
            <h3>You logged in as {loginData}</h3>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) :
          // For normal outlined button
          <GoogleOAuthProvider clientId="401289267989-9mb2gnrnml6ru7gfjbjq9ete1j5h0ukm.apps.googleusercontent.com">

            <GoogleLogin
              onSuccess={credentialResponse => {
                const details = jwt_decode(credentialResponse.credential);
                console.log("details", details)
                localStorage.setItem('loginData', JSON.stringify(details.email));
                setLoginData(details.email);
                navigate("/accueil")
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>
        }

        {/* <GoogleOAuthProvider clientId="401289267989-9mb2gnrnml6ru7gfjbjq9ete1j5h0ukm.apps.googleusercontent.com">
// For filled blude button
        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwt_decode(credentialResponse.credential);
            console.log(details)
            console.log(credentialResponse);
          }}
          theme='filled_blue'
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider> */}

        {/* <GoogleOAuthProvider clientId="34112538852-kjf9ver32qgqm6a196tab486lcsjin3a.apps.googleusercontent.com">
// For filled black curved button.
        <GoogleLogin
          onSuccess={credentialResponse => {
            const details = jwt_decode(credentialResponse.credential);
            console.log(details)
            console.log(credentialResponse);
          }}
          theme='filled_black'
          shape='pill'
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider> */}
      </div>
    </div>
  )
}

export default Login;