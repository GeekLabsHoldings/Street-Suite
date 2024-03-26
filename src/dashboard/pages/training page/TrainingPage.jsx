import React from 'react'

import { Outlet } from 'react-router-dom'

function TrainingPage() {




  return (
    <div className='w-full p-3 md:p-8 max-w-[1600px] mx-auto' >

      <div className="trading-wrapper">

        {/* all children pages will appear here */}
        <Outlet />

      </div>

    </div>
  )
}

export default TrainingPage