


import React from 'react'
import { Outlet } from 'react-router'
import SideBarr from './SideBarr'


const DashboardLayouts = () => {
  return (
 <div className='flex gap-4 flex-col md:flex-row'>
<SideBarr/>
   <Outlet/>
 </div>

  )
}

export default DashboardLayouts