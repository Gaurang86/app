/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Header } from '../../Components/Form/index'
import logo from '../../Images/img4.jpg'
import { UserStyle } from './style'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const UserInfo = () => {
  const singupData = useSelector((data) => data.singReducer.user)
  const loginInfo = useSelector((data) => data.loginReducer.userlogin)
  console.log(singupData)
  console.log(loginInfo)
  // const firstItem = singupData.slice(-1)
  // console.log(firstItem)
  const navigate = useNavigate()
  useEffect(() => {
    if (loginInfo[0]?.email && loginInfo[0]?.password) {
      navigate('/userinfo')
    } else {
      navigate('/')
    }
  }, [])
  return (
    <UserStyle>
      <div className="user-page">
        <Header />
        <img className="user-img" src={logo} alt="" />
        <div className="card">
          <h3>UserInfo</h3>
          <hr />
          {singupData.map((a, i) => (
            <div key={i}>
              <h2>Name: {a?.name}</h2>
              <h2>Email: {a?.email}</h2>
              <h2>Date: {a?.date}</h2>
              <h2>Mobile: {a?.mobile} </h2> <hr />
            </div>
          ))}
        </div>
      </div>
    </UserStyle>
  )
}

export default UserInfo
