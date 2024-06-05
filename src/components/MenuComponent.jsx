import { NavLink } from 'react-router-dom'
import { HomePagePruducts } from '../store/products'

function MenuComponent() {
    const { product } = HomePagePruducts((item) => item);
    const accumulatorItems = ((product) => product.reduce((sum, item) => sum + item.quantity, 0));

    const totalItems = accumulatorItems(product)

    return (
        <div className='flex justify-around'>
            <NavLink to='/' className={({ isActive, isPending }) =>
                isActive ? 'font-bold text-blue-700 ' : isPending ? 'text-blue-400' : ' text-blue-400'
            }>
                Home
            </NavLink>
            <NavLink to='/basket' className={({ isActive, isPending }) =>
                isActive ? 'text-blue-700 font-bold' : isPending ? 'text-blue-400' : 'text-blue-400'
            }>
                Basket <span className=' font-black'>{totalItems}</span>
            </NavLink>

        </div>
    )
}

export default MenuComponent