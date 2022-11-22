import React from 'react'
import Navbar from './Navbar'
import LoginForm from './LoginForm'

function Login() {

  return (
    <>
        <Navbar />
        <div className="container-login">
            <LoginForm />
        </div>
    </>
  )
}

export default Login