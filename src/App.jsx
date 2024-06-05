import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from './pages/Home.component';
import ProductPage from './pages/Product.component';
import BasketPage from './pages/Basket.component';
import NotFound from './components/NotFound';

function App() {
  const routes = useRoutes([
    {path:'/',
      element:<HomePage />,
      children:[
        {
          index:true,
          element:<ProductPage/>
        },
        {
          path:'/basket',
          element:<BasketPage/>
        }
      ]
    },
    {path:'*',
      element:<NotFound/>
    }
  ])
  return (
    <>
    {routes}
    </>
  )
}

export default App