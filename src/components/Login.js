import React from 'react'

import FacebookLogin from 'react-facebook-login';


 const Login = ({ authenticate }) => {
    const responseFacebook = (response) => {
      //  console.log(response);
      }
    return (
        <div className='login'>
              <FacebookLogin
    appId="236870174265532"
    autoLoad={false}
    fields="name"
    callback={responseFacebook} />
        </div>
    )
}

export default Login
