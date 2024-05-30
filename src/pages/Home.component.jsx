import React from 'react'
import { Outlet } from 'react-router-dom';
import MenuComponent from '../components/MenuComponent';

function HomePage() {
  
  return (
    <>
    <div>
      <MenuComponent />
      <Outlet />
    </div>
    </>
  )
}

export default HomePage