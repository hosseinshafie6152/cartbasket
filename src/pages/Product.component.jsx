import { useState, useEffect } from 'react'
import ListCard from '../components/card/ListCard'

function ProductPage() {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://api.digikala.com/v1/search/?q=phone&page=1');
      const responce = await data.json();
      setPhones(responce.data.products)
    };
    fetchData()
  }, []);

  return (
    <div className='bg-slate-300 h-full'>
      <ListCard products={phones} />
    </div>
  )
}

export default ProductPage