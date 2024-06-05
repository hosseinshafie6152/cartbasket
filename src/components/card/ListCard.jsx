import React from 'react'
import ListItem from './ListItem'
import { HomePagePruducts } from '../../store/products'

function ListCard({products}) {
  const {addBasketItem} = HomePagePruducts((item)=>item.actions)
  
  const phones = products?.map((item)=>{
    return(
      <ListItem key={item.id} name={item.title_en} price={item.default_variant.price.rrp_price}
       srcImg={item.images.main.url[0]} titleBtn={'add item'}  addItem={()=> {addBasketItem(item)}}/>
    )
  })
  return (
    <div className='grid grid-cols-1 gap-3 lg:grid-cols-4 sm:grid-cols-2'>
      {phones}
    </div>
  )
}

export default ListCard