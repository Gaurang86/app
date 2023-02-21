import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../Container/Dashboard'
import Dsa from '../Container/DSA/Dsa'
import Login from '../Container/Login'
import Registration from '../Container/Registration'
import UserInfo from '../Container/UserInfo'
const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/userinfo" element={<UserInfo />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/dsa" element={<Dsa />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default routes
