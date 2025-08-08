import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopeContext } from '../context/ShopeContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopeContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5));
    },[products])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
           <Title text1={'BEST'} text2={'SELLERS'}/>
           <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem deserunt voluptas, qui consequuntur praesentium quas quisquam tempora ut quia consectetur debitis molestias odit nisi maxime laborum et mollitia aut!</p>
      </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
    </div>
  )
}

export default BestSeller
