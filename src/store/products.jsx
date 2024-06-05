import { create } from 'zustand';
import { persist } from 'zustand/middleware'

export const HomePagePruducts = create(
    persist((set, get) => ({
        product: [],
        invoice: {
            totalPrice: 0,
        },
        actions: {
            addBasketItem: ((item) => {
                const alreadyExist = get().product.some((_item) => _item.id === item.id)
                if (alreadyExist) {
                    return set((oldBasket) => ({
                        invoice: {
                            totalPrice: oldBasket.invoice.totalPrice + item.default_variant.price.rrp_price
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
                        totalPrice: oldBasket.invoice.totalPrice + item.default_variant.price.rrp_price
                    },
                    product: [...oldBasket.product, { ...item, quantity: 1 }]

                }))

            }),
            removeBasketItem: ((item) => {
                const sholdRemove = item.quantity === 1;
                if (sholdRemove) {
                    return set((oldBasket) => ({
                        invoice: {
                            totalPrice: oldBasket.invoice.totalPrice - item.default_variant.price.rrp_price
                        },
                        product: oldBasket.product.filter((_item) => _item.id !== item.id)
                    }))
                }
                set((oldBasket) => ({
                    invoice: {
                        totalPrice: oldBasket.invoice.totalPrice - item.default_variant.price.rrp_price
                    },
                    product: oldBasket.product.map((_item) => {
                        if (_item.id === item.id) {
                            return (
                                {
                                    ...item,
                                    quantity: _item.quantity - 1
                                }
                            )
                        }
                        return _item
                    })
                }))
            })
        }
    }
    ),

        {
            name: 'basket_item',
            partialize: (state) =>
                Object.fromEntries(
                    Object.entries(state).filter(([key]) => !['actions'].includes(key)),
                ),
        }
    ));
