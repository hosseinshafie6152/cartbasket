import React from 'react'
import ListItem from './ListItem'
import { HomePagePruducts } from '../../store/products'

function ListCard() {
  const {product} = HomePagePruducts((state)=>state);
  const {addBasketItem} = HomePagePruducts((item)=>item.actions)
  
  const phones = product?.map((item)=>{
    return(
      <ListItem key={item.id} name={item.title_en} price={item.default_variant.price.rrp_price}
       srcImg={item.images.main.url[0]}  addItem={()=> {addBasketItem(item)}}/>
    )
  })
  return (
    <div className='grid grid-cols-4 gap-5 m-4'>
      {phones}
    </div>
  )
}

export default ListCard