import React from 'react'
import { Header } from '../../Components/Form/index'
import Pic from '../../Images/img4.jpg'
import { DashboardStyle } from './style'
const Dashboard = () => {
  return (
    <DashboardStyle>
      <div className="dash">
        <Header />
        <img className="dash-img" src={Pic} alt="" />
      </div>
    </DashboardStyle>
  )
}

export default Dashboard
