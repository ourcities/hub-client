import React from 'react'
import Helmet from 'react-helmet'
import Login from '../../components/login.connected'

const LoginPage = () => (
  <div>
    <Helmet title='Login' />
    <Login />
  </div>
)

export default LoginPage
