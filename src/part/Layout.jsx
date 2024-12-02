import React from 'react'
import Menu from './Menu'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <>
    <div className="container-fluid">
        <div className='row'>
            <div className='col'>
                <Menu/>
            </div>
        </div>
        <div className='row'>
            <div className='col-3 border border-primay'>
                <Sidebar/>
            </div>
            <div className='col border border-primay vw-100 vh-100'>
                <Outlet/>
            </div>
        </div>
        <div className='row bg-info-subtle' style={{height:"30px"}}>
            <div className='col border border-primay text-center'>
                Footer
            </div>
        </div>
    </div>
    </>
  )
}

export default Layout