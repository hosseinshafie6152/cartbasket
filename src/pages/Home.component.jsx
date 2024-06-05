import {useState , useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import MenuComponent from '../components/MenuComponent';
import ListCard from '../components/card/ListCard';

function HomePage() {
  
  return (
    <>
    <div>
      <MenuComponent />
      <Outlet/>
    </div>
    
    </>
  )
}

export default HomePage