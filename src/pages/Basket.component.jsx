import React from 'react'
import { HomePagePruducts } from '../store/products'
import ListItem from '../components/card/ListItem';

function BasketPage() {
  const {product , invoice} = HomePagePruducts((item)=>item);
  const {removeBasketItem} = HomePagePruducts((item)=>item.actions);

  return (
    <>
    {
      product.map((item)=>{
        return <ListItem {...item} key={item.id} removeItem={()=>{removeBasketItem(item)}}/>
      })
    }
    </>
  )
}

export default BasketPage