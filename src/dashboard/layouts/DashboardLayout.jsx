import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from '../components/sidemenu/SideMenu'
import { Helmet } from 'react-helmet-async'

const DashboardLayout = () => {

  return (

    <div>
      <Helmet>
        <title>Dashboard | Street Suite</title>
        <meta
          name="description"
          content="Join Street Suite – a trading tool which will provide you with daily trading alerts and insights you can trust, with all the information to back it up."
        />
      </Helmet>
      <SideMenu />

      <div className="dashboard-wrapper">
        {/* all children pages will be show here */}
        <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout
