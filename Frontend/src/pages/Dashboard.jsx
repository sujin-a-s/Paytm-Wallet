import React from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import Users from '../components/Users'

const Dashboard = () => {
  return (
    <div>
        <AppBar/>
        <Balance/>
        <Users/>
    </div>
  )
}

export default Dashboard