import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from '../components/sidemenu/SideMenu'

const DashboardLayout = () => {

  return (

    <div>
      <SideMenu />

      <div className="dashboard-wrapper">
        {/* all children pages will be show here */}
        <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout
