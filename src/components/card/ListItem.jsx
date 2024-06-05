import React from 'react'

function ListItem({name , price , srcImg , addItem , titleBtn}) {
  
  return (
    <>
    <div className='flex flex-col bg-white rounded-lg p-4'>
        <div id='srcImg'>
          <img src={srcImg} alt={name}  />
        </div>
        <div id='name'>
          <p className=' text-gray-700 text-lg'>name of product:</p>
          <h2 className=' font-semibold'>{name}</h2>
        </div>
        <div id='price' className='flex justify-evenly'>
          <p className='text-gray-700'>price:</p>
          <p className=' font-bold'>{Math.floor(price / 60000)} $</p>
        </div>
        <div id='btn' className=' self-center'>
          <button className='bg-red-400 text-white rounded-lg hover:bg-red-700 w-28 text-center' onClick={addItem}>{titleBtn}</button>
        </div>
      </div>
    </>
  )
}

export default ListItem