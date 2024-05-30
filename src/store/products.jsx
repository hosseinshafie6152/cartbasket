import { useEffect , useState } from 'react';
import { create } from 'zustand';

export function Products() {
    const [phones , setPhones] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetch('https://api.digikala.com/v1/search/?q=phone&page=1');
            const responce = await data.json();
            setPhones(responce.data.products)
        };
        fetchData()
    } , []);
    HomePagePruducts.setState({
        product : phones
    })
}

export const HomePagePruducts = create((set , get)=>({
    product : [],
    invoice : {
        totalPrice : 0,
    },
    actions:{
        addBasketItem: ((item) => {
            const alreadyExist = get().product.some((_item) => _item.id === item.id)
            if (alreadyExist) {
                return set((oldBasket) => ({
                    invoice: {
                        totalPrice: oldBasket.invoice.totalPrice + item.price
                    },
                    product: oldBasket.product.map((_item) => {
                        if (_item.id === item.id) {
                            return {
                                ...item,
                                quantity: _item.quantity + 1
                            }
                        }
                        return _item
                    })

                }))
            }

            set((oldBasket) => ({
                invoice: {
                    totalPrice: oldBasket.invoice.totalPrice + item.price
                },
                product: [...oldBasket.product , { ...item, quantity: 1 }]

            }))

        }),
        removeBasketItem : ((item)=>{
            const sholdRemove = item.quantity ===1;
            if (sholdRemove) {
                return set((oldBasket)=>({
                    invoice : {
                        totalPrice : oldBasket.invoice.totalPrice - item.price
                    },
                    product : oldBasket.product.filter((_item)=>_item.id !== item.id)
                }))
            }
            set((oldBasket)=>({
                invoice : {
                    totalPrice : oldBasket.invoice.totalPrice - item.price
                },
                product : oldBasket.product.map((_item)=>{
                    if(_item.id === item.id){
                        return (
                            {
                                ...item,
                                quantity : _item.quantity-1
                            }
                        )
                    }
                    return _item
                })
            }))
        })
    }
}
));
