import React, { useContext } from 'react'
import { ShopeContext } from '../context/ShopeContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {

    const {currrency} = useContext(ShopeContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img src={image[0]} alt="" className='hover:scale-110 transition-ease-in-out' />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text:sm font-medium'>{currrency} {price}</p>
    </Link>
  )
}

export default ProductItem
