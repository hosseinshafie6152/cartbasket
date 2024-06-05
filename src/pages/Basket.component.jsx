import React from 'react'
import { HomePagePruducts } from '../store/products'
import ListItem from '../components/card/ListItem';

function BasketPage() {
  const {product , invoice} = HomePagePruducts((item)=>item);
  const {removeBasketItem} = HomePagePruducts((item)=>item.actions);
  const productOfBasket = product.map((item)=>{
    return <ListItem name={item.title_en} srcImg={item.images.main.url[0]} price={item.default_variant.price.rrp_price} key={item.id} titleBtn={'remove item'} addItem={()=>{removeBasketItem(item)}}/>
  })
  return (
    <div>
    <div className='w-[250px]'>
      {productOfBasket}
    </div>
    <div className='flex'>
      <p>total price:   </p>
      {invoice.totalPrice}
    </div>
    </div>
  )
}

export default BasketPage