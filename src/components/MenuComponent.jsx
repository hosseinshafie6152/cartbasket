import { NavLink } from 'react-router-dom'
import { HomePagePruducts } from '../store/products'
import { useEffect, useState } from 'react';


function MenuComponent() {
    const [totalItems , setTotalItems] = useState()
    const {product} = HomePagePruducts((item)=>item);
    const accumulatorItems = ((product)=> product.reduce((sum , item) => sum + item.quantity , 0));
    useEffect(()=>{
        return setTotalItems(accumulatorItems(product))
    },[product])
    
  return (
    <div className='flex justify-around'>
        <NavLink to='/' className={({isActive , isPending})=>
            isActive ? 'font-bold text-blue-700 ' : isPending? 'text-blue-400' : ' text-blue-400'
        }>
            Home
        </NavLink>
        <NavLink to='/basket' className={({isActive , isPending})=>
            isActive ? 'text-blue-700 font-bold' : isPending ? 'text-blue-400' : 'text-blue-400'
        }>
            Basket <span className=' font-black'>{totalItems}</span>
        </NavLink>
        
    </div>
  )
}

export default MenuComponent